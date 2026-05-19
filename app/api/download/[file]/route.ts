import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ file: string }> }
) {
  // Await the params – required in Next.js 15+
  const { file: filename } = await params

  // Basic security: prevent path traversal
  if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
    return new NextResponse('Invalid filename', { status: 400 })
  }

  const filePath = join(process.cwd(), 'public', 'downloads', filename)

  if (!existsSync(filePath)) {
    return new NextResponse('File not found', { status: 404 })
  }

  try {
    const fileBuffer = await readFile(filePath)

    // Optional: set proper Content-Type based on extension
    let contentType = 'application/octet-stream'
    if (filename.endsWith('.exe')) contentType = 'application/vnd.microsoft.portable-executable'
    else if (filename.endsWith('.deb')) contentType = 'application/vnd.debian.binary-package'
    else if (filename.endsWith('.dmg')) contentType = 'application/x-apple-diskimage'

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Type': contentType,
      },
    })
  } catch (error) {
    console.error(error)
    return new NextResponse('Internal server error', { status: 500 })
  }
}
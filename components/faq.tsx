"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is WorkBook free?",
    answer: "Yes, WorkBook offers a free version with all core features including task management, priority sorting, and offline support. Premium features may be available in the future.",
  },
  {
    question: "Do I need an account?",
    answer: "No. WorkBook works offline without an account. You can use all local features immediately. An account is only needed if you want to sync your tasks across multiple devices.",
  },
  {
    question: "How does priority sorting work?",
    answer: "Select a task priority using the clean dropdown menu. Choose from Urgent (red), Important (amber), or Normal (gray) priorities. WorkBook automatically reorganizes your tasks, placing urgent items at the top, followed by important, then normal tasks.",
  },
  {
    question: "Can I use WorkBook offline?",
    answer: "Yes. WorkBook is built offline-first, meaning all features work without an internet connection. Your tasks are stored locally and sync automatically when you reconnect.",
  },
  {
    question: "How does sync work?",
    answer: "Sign in with your Google account or email, and your tasks sync automatically across all your devices in real-time. Changes made on one device appear instantly on others.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-card">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about WorkBook
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

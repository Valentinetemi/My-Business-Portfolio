import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects take 7-10 days from discovery to launch, depending on complexity. I understand Nigerian business timelines and can accommodate urgent projects with adjusted schedules.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I specialize in Next.js, React, TypeScript, Tailwind CSS, and various AI/automation tools. All websites are optimized for Nigerian internet speeds and mobile-first browsing.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes! I provide 30 days of free post-launch support, and offer monthly maintenance packages for ongoing updates and optimization.",
  },
  {
    question: "Can you integrate with Nigerian payment systems?",
    answer:
      "I have extensive experience integrating Paystack, and other Nigerian payment gateways. I also work with local CRMs and business tools.",
  },
  {
    question: "Will my website work during power outages?",
    answer:
      "Yes! Your website is hosted on reliable cloud servers that are always online. Customers can access your site 24/7, even during NEPA outages. I also optimize for mobile data to reduce loading costs.",
  },
 
  {
    question: "Can I see my website before paying the full amount?",
    answer:
      "Yes! After the 50% deposit, I'll share a preview link where you can see and test your website. The final 50% is due only when you're completely satisfied.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-secondary text-pretty">Everything you need to know before we start building</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors hover:glow-effect"
            >
              <AccordionTrigger className="font-heading font-semibold text-left hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-secondary leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

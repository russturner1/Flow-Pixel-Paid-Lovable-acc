import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long will my website take?',
    answer: "Most websites are completed within 1-3 weeks depending on the package and complexity. We'll give you a clear timeline at the start of your project.",
  },
  {
    question: 'Do I need to update the site myself?',
    answer: "No! Flowpixel is a fully managed service. We handle all content updates, security patches, and maintenance for you. With our managed service plan, you get up to 2 small content updates per month included.",
  },
  {
    question: "What's included in the managed service?",
    answer: "Our £75/month managed service includes hosting, technical support, security updates and monitoring, automated backups, content updates, on-page SEO upkeep, conversion path checks, and ongoing performance monitoring. You focus on your business, we handle the tech.",
  },
  {
    question: 'Do you help with content?',
    answer: 'While we focus on design and development, we can provide guidance on content structure. For professional copywriting, we can recommend partners.',
  },
  {
    question: 'Can I add more pages later?',
    answer: 'Yes! Your website can grow with your business. We can add new pages, features, or functionality whenever you need them.',
  },
  {
    question: 'What happens after my website is built?',
    answer: "Once your site is live, you can choose our managed service plan for ongoing care. We'll handle hosting, security, backups, and updates so you can focus on running your business.",
  },
];

export const FAQSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle relative">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            FAQs
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Questions?{' '}
            <span className="text-gradient">We've Got Answers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working with Flowpixel.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass rounded-xl px-6 border-none data-[state=open]:glow-primary transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

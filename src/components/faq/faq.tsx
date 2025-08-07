import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'

const faqData = [
  {
    question: "What is OsonDo'kon?",
    answer: "OsonDo'kon is a no-code eCommerce builder that helps you create a full online store in just 15 minutes."
  },
  {
    question: "Do I need any coding skills?",
    answer: "Not at all. OsonDo'kon is made for business owners without any technical knowledge."
  },
  {
    question: "Can I customize my store?",
    answer: "Yes, you can easily customize design, products, and more with our user-friendly dashboard."
  },
  {
    question: "Is it mobile-friendly?",
    answer: "Absolutely! All templates are responsive and optimized for mobile devices."
  },
  {
    question: "How much does it cost?",
    answer: "We offer free and premium plans. You can start for free and upgrade anytime."
  }
]

const Faq = () => {
  return (
    <section className='py-20 bg-muted/50 dark:bg-background'>
      <div className='container max-w-4xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>Frequently Asked Questions</h2>
          <p className='text-muted-foreground mt-2 text-lg'>Here are some common questions and answers to help you get started.</p>
        </motion.div>

        <Accordion type='single' collapsible className='w-full space-y-4'>
          {faqData.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className='border rounded-lg'>
              <AccordionTrigger className='px-4 py-3 text-lg font-medium hover:no-underline'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className='px-4 pb-4 text-muted-foreground text-base'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Faq

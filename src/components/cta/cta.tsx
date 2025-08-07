import { motion } from 'framer-motion'
import { LiquidButton } from '@/components/animate-ui/buttons/liquid'
import { Rocket } from 'lucide-react'

const CTA = () => {
  return (
    <section className='py-20 bg-gray-100 dark:bg-background dark:text-white'>
      <div className='container mx-auto text-center px-6'>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-4xl md:text-5xl font-extrabold tracking-tight mb-6'
        >
          Build your dream store in minutes.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className='text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10'
        >
          Launch your eCommerce website without code, complex setups or delays.
          Get started today — it only takes 15 minutes!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className='flex flex-col sm:flex-row gap-4 justify-center'
        >
          <LiquidButton
            className='px-6 py-5 text-lg font-semibold border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
            variant='default'
          >
            <Rocket size={20} />
            Get Started
          </LiquidButton>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

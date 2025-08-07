import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, User } from 'lucide-react'

const Contact = () => {
  return (
    <section className='py-20 bg-gray-50 dark:bg-gray-900' id='contact'>
      <div className='container max-w-3xl mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl md:text-4xl font-bold text-center mb-6'
        >
          Let’s Talk
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='text-center text-gray-600 dark:text-gray-300 mb-10'
        >
          Have a question, suggestion or just want to say hello? Fill the form below and we’ll get back to you.
        </motion.p>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className='grid grid-cols-1 gap-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md'
        >
          <div className='relative'>
            <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
            <Input placeholder='Your Name' className='pl-10' />
          </div>

          <div className='relative'>
            <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
            <Input type='email' placeholder='you@example.com' className='pl-10' />
          </div>

          <div className='relative'>
            <MessageSquare className='absolute left-3 top-4 text-gray-400' size={20} />
            <Textarea placeholder='Your Message' className='pl-10 pt-3' rows={5} />
          </div>

          <Button type='submit' className='w-full mt-2 text-md font-medium cursor-pointer'>
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

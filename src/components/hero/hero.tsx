import { LiquidButton } from '@/components/animate-ui/buttons/liquid'
import { motion } from 'framer-motion'
import { Rocket, Sparkles, PlayCircle } from 'lucide-react'
import { WritingText } from '@/components/animate-ui/text/writing'
import { HexagonBackground } from '@/components/animate-ui/backgrounds/hexagon'

const Hero = () => {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-10'
    >
      {/* Background: hole effect */}
      <HexagonBackground className="absolute inset-0 z-0" />

      {/* Foreground content */}
      <div className='max-w-4xl text-center space-y-8 z-10'>
        {/* Animated title */}
        <WritingText
          className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
          text="Build your online store in just 15 minutes"
          spacing={9}
          transition={{
            duration: 1.5,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
            type: 'spring',
            bounce: 0.4
          }}
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className='text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mt-5 mx-auto'
        >
          Designed for doers. Create your eCommerce store in minutes, not days.
        </motion.p>


        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-4'
        >
          <LiquidButton
            variant='default'
            className='px-8 py-3 text-md font-semibold'
          >
            <Rocket size={20} />
            Start Free
          </LiquidButton>

          <LiquidButton
            variant='default'
            className='px-8 py-3 text-md font-semibold flex items-center gap-2'
          >
            <PlayCircle size={20} />
            Book a Demo
          </LiquidButton>
        </motion.div>

        {/* Sparkle text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <LiquidButton
            className='text-blue-600 dark:text-blue-400 mt-6 text-sm bg-transparent hover:bg-transparent border-none flex mx-auto items-center gap-2'
          >
            <Sparkles size={18} />
            No credit card required – 100% free trial
          </LiquidButton>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

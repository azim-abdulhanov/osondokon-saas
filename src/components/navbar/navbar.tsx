import { FlipButton } from '@/components/animate-ui/buttons/flip'
import { LiquidButton } from '@/components/animate-ui/buttons/liquid'
import { ModeToggle } from '@/components/mode-toggle/mode-toggle'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Store, X } from 'lucide-react'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

const navLinks = [
  { name: 'Features', to: 'features' },
  { name: 'Testimonials', to: 'testimonials' },
  { name: 'Pricing', to: 'pricing' },
  { name: 'Contact', to: 'contact' }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 flex justify-between items-center'>
        {/* Logo */}
        <a
          href='/'
          className='flex items-center gap-2 text-blue-600 dark:text-blue-400'
        >
          <Store />
          <span className='text-xl font-bold'>OsonDo'kon</span>
        </a>

        {/* Desktop Nav */}
        <nav className='hidden md:flex gap-6 items-center'>
          {navLinks.map(link => (
            <ScrollLink
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass='text-blue-600 dark:text-blue-400'
              className='cursor-pointer text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors'
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Right CTA */}
        <div className='hidden md:flex items-center gap-4'>
          <ModeToggle />
          <FlipButton frontText='Login' backText='Sign Up' />
          <LiquidButton variant='default'>Start Free</LiquidButton>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className='md:hidden text-gray-800 dark:text-gray-100 focus:outline-none'
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key='mobile-menu'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-6 space-y-4 overflow-hidden'
          >
            {navLinks.map(link => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMenuOpen(false)}
                activeClass='text-blue-600 dark:text-blue-400'
                className='block cursor-pointer text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium'
              >
                {link.name}
              </ScrollLink>
            ))}

            <div className='pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col items-start gap-3'>
              <FlipButton frontText='Login' backText='Sign Up' />
              <LiquidButton variant='default'>Start Free</LiquidButton>
              <ModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

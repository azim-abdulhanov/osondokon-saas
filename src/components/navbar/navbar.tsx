import { Store } from 'lucide-react'
import { LiquidButton } from '@/components/animate-ui/buttons/liquid'
import { FlipButton } from '@/components/animate-ui/buttons/flip'
import { ModeToggle } from '@/components/mode-toggle/mode-toggle'

const Navbar = () => {
  return (
    <header className='backdrop-blur-lg py-4 px-5 text-white sticky top-0 w-full z-10 border-gray-200 border-b'>
      <div className='container mx-auto flex items-center justify-between'>
        <a className='flex items-center gap-1 text-blue-600' href='/'>
          <Store />
          <span className='text-xl font-bold'>OsonDo'kon</span>
        </a>

        <nav>
          <ul className='flex items-center gap-8'>
            <li>
              <a
                className='text-gray-800 dark:text-gray-50 hover:text-blue-700 dark:hover:text-blue-500 transition-colors font-semibold'
                href='/'
              >
                Home
              </a>
            </li>
            <li>
              <a
                className='text-gray-800 dark:text-gray-50 hover:text-blue-700 dark:hover:text-blue-500 transition-colors font-semibold'
                href='/products'
              >
                Products
              </a>
            </li>
            <li>
              <a
                className='text-gray-800 dark:text-gray-50 hover:text-blue-700 dark:hover:text-blue-500 transition-colors font-semibold'
                href='/about'
              >
                About
              </a>
            </li>
          </ul>
        </nav>

        <div className='flex items-center gap-3'>
          <ModeToggle />
          <FlipButton frontText="Login" backText="Register" />
          <LiquidButton variant='default'>Start free</LiquidButton>
        </div>
      </div>
    </header>
  )
}

export default Navbar

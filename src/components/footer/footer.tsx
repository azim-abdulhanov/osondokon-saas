import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Store,
  Twitter
} from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

const navLinks = [
  { name: 'Features', to: 'features' },
  { name: 'Testimonials', to: 'testimonials' },
  { name: 'Pricing', to: 'pricing' },
  { name: 'Contact', to: 'contact' }
]

const Footer = () => {
  return (
    <footer className='bg-gray-100 dark:bg-gray-900 text-gray-200 py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
          {/* Company Info */}
          <div>
            <a
              href='/'
              className='flex items-center gap-2 text-blue-600 dark:text-blue-400'
            >
              <Store />
              <span className='text-xl font-bold'>OsonDo'kon</span>
            </a>
            <p className='text-sm text-gray-400 mt-5'>
            Create your e-commerce website in 15 minutes. Simple, fast and reliable!
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className='text-xl text-gray-900 dark:text-white font-semibold mb-4'>Links</h3>
            <ul className='flex flex-col items-start space-y-2'>
              {navLinks.map(link => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass='text-blue-600 dark:text-blue-400'
                  className='cursor-pointer text-gray-400 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block'
                >
                  {link.name}
                </ScrollLink>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-xl text-gray-900 dark:text-white font-semibold mb-4'>Contact</h3>
            <ul className='space-y-3 text-gray-400'>
              <li className='flex items-center gap-2'>
                <MapPin size={16} /> Tashkent, Uzbekistan
              </li>
              <li className='flex items-center gap-2'>
                <Phone size={16} />
                <a className='hover:underline' href="tel:+998901234567">+998 90 123 45 67</a>
              </li>
              <li className='flex items-center gap-2'>
                <Mail size={16} />
                <a className='hover:underline' href="mailto:support@osondokon.uz">support@osondokon.uz</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='text-xl text-gray-900 dark:text-white font-semibold mb-4'>Follow us</h3>
            <div className='flex gap-4'>
              <a href='#' className='text-gray-500 hover:text-blue-600 transition-colors'>
                <Facebook size={20} />
              </a>
              <a href='#' className='text-gray-500 hover:text-blue-400 transition-colors'>
                <Twitter size={20} />
              </a>
              <a href='#' className='text-gray-500 hover:text-red-500 transition-colors'>
                <Instagram size={20} />
              </a>
              <a href='#' className='text-gray-500 hover:text-blue-600 transition-colors'>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500'>
          © {new Date().getFullYear()} OsonDo'kon. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

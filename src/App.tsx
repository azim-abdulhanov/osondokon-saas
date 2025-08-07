import Contact from '@/components/contact/contact'
import CTA from '@/components/cta/cta'
import Faq from '@/components/faq/faq'
import Features from '@/components/features/features'
import Hero from '@/components/hero/hero'
import Navbar from '@/components/navbar/navbar'
import Pricing from '@/components/pricing/pricing'
import Testimonials from '@/components/testimonials/testimonials'
import { ThemeProvider } from '@/components/theme-provider/theme-provider'
import Footer from '@/components/footer/footer'

const App = () => {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <>
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <Pricing />
          <Faq />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App

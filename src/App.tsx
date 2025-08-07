import Navbar from '@/components/navbar/navbar'
import { ThemeProvider } from '@/components/theme-provider/theme-provider'
import Hero from '@/components/hero/hero'
import Features from '@/components/features/features'
import Testimonials from '@/components/testimonials/testimonials'
import Pricing from '@/components/pricing/pricing'

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
        </main>
      </>
    </ThemeProvider>
  )
}

export default App

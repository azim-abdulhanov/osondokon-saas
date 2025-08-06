import Navbar from '@/components/navbar/navbar'
import { ThemeProvider } from '@/components/theme-provider/theme-provider'
import Hero from '@/components/hero/hero'
import Features from '@/components/features/features'

const App = () => {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <>
        <Navbar />
        <main>
          <Hero />
          <Features />
        </main>
      </>
    </ThemeProvider>
  )
}

export default App

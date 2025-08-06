import Navbar from '@/components/navbar/navbar'
import { ThemeProvider } from '@/components/theme-provider/theme-provider'
import Hero from '@/components/hero/hero'

const App = () => {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <>
        <Navbar />
        <main>
          <Hero />
        </main>
      </>
    </ThemeProvider>
  )
}

export default App

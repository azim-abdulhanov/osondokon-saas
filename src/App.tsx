import Navbar from '@/components/navbar/navbar'
import { ThemeProvider } from '@/components/theme-provider/theme-provider'

const App = () => {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <>
        <Navbar />
        <main></main>
      </>
    </ThemeProvider>
  )
}

export default App

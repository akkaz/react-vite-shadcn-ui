import { ThemeProvider } from '@/components/theme-provider'
import { ExamplePage } from '@/components/ExamplePage'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ExamplePage />
    </ThemeProvider>
  )
}

export default App
import { ThemeProvider } from '@emotion/react'

import theme from '@theme'
import Layout from '@layout'
import '@public/styles/index.css'
import AppProvider from '@contexts'

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  </ThemeProvider>
)

export default App

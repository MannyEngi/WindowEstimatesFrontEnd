import { useState } from 'react'

import Header from './header'
import Footer from './footer'
import { SignIn, Registration, ForgotPassword } from '@components'

const Layout = ({ children }) => {
  const [signInVisibility, setSignInVisibility] = useState(false)
  const [registerVisibility, setRegisterVisibility] = useState(false)
  const [forgotPasswordVisibility, setForgotPasswordVisibility] = useState(false)

  return (
    <>
      <Header onSignInClick={() => setSignInVisibility(true)} />
      <main>{children}</main>
      <Footer />
      {/* forgot password */}
      <ForgotPassword
        visible={forgotPasswordVisibility}
        onBacktoSignInClick={() => {
          setSignInVisibility(true)
          setForgotPasswordVisibility(false)
        }}
        onCancel={() => setForgotPasswordVisibility(false)}
        onSendEmailClick={() => setForgotPasswordVisibility(false)}
      />
      {/* signin */}
      <SignIn
        visible={signInVisibility}
        onForgotPasswordClick={() => {
          setSignInVisibility(false)
          setForgotPasswordVisibility(true)
        }}
        onCreateAccountClick={() => {
          setSignInVisibility(false)
          setRegisterVisibility(true)
        }}
        onCancel={() => setSignInVisibility(false)}
        onSignInClick={() => setSignInVisibility(false)}
      />
      {/* signup / register */}
      <Registration
        visible={registerVisibility}
        onSignInClick={() => {
          setSignInVisibility(true)
          setRegisterVisibility(false)
        }}
        onCancel={() => setRegisterVisibility(false)}
        onRegisterClick={() => setRegisterVisibility(false)}
      />
    </>
  )
}

export default Layout

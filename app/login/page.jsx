import LoginUI from '@/components/UI/LoginUI'
import React from 'react'

export const metadata = {
  title: "Se connecter",
  description: "connecter-vous a votre compte DreamKeeper.",
  author: "Rayan Ereteo"
}

function Login() {
  return (
    <div>
      <LoginUI></LoginUI>
    </div>
  )
}

export default Login
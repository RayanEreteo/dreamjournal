import { Inter } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Dream Keeper | Acceuil",
  description: "Apprenez à vous souvenir de vos rêves grâce au journal des rêves.",
  author: "Rayan Ereteo"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-[url("/pattern.png")] bg-no-repeat bg-cover bg-fixed h-[100vh]'>
      <Suspense fallback={<Loading />}>
        <body className={inter.className}>{children}</body>
      </Suspense>
    </html>
  )
}

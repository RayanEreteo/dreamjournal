import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dream Keeper',
  description: 'écriver vos rêves et améliorer votre rappel onirique',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-blue-500'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

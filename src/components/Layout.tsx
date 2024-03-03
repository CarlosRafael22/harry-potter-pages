import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <Navbar />
      <main className='grow'>{children}</main>
      <Footer />
    </div>
  )
}
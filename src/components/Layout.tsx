import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-slate-800 flex flex-col min-h-[100vh]'>
      <Navbar />
      <main className='grow'>{children}</main>
      <Footer />
    </div>
  )
}
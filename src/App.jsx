import Header from "./inc/Header"
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Home from "./pages/Home"
import BlogSection from "./components/BlogSection"
import Footer from "./inc/Footer"




function App() {
  return (
    <>
      <Header />
      <Home />
      <BlogSection />
      <Footer />


    </>
  )
}

export default App
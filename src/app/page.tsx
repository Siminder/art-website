"use client"
import Navbar from "./componets/Navbar"
import Work from "./componets/Gallery"
import Footer from "./componets/Footer"
import { ThemeProvider } from "next-themes"
import './globals.css'




export default function Home() {
  return (
   <>
      <ThemeProvider attribute="class">
     <Navbar/>
     <Work/>
     <Footer/>
     </ThemeProvider>
   </>
  )
}
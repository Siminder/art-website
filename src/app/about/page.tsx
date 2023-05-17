import { FC } from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <>
    <Navbar/>
    <Footer/>
    </>
    )
}

export default page
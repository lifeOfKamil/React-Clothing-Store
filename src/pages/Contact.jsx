import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import InfoCards from '../components/InfoCards'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <InfoCards />
      <Footer />
    </div>
  )
}

export default Contact
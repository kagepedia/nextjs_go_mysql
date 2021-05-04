import React from 'react'
import { NextPage } from 'next'
import Head from '../../components/head'
import Header from '../../components/header'

const ContactForm: NextPage = () => {

  return (
      <>
          <Head title="contact-form" description="contact-form" keywords="contact-form" />
          <Header />
          <div className="page__contact">
              <h1>Contact Form Page</h1>
          </div>
    </>
  )
}

export default ContactForm
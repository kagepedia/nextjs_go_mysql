import React from 'react'
import { NextPage } from 'next'
import Head from '../../components/head'
import Header from '../../components/header'

const ContactThanks: NextPage = () => {

  return (
      <>
          <Head title="contact-thanks" description="contact-thanks" keywords="contact-thanks" />
          <Header />
          <div className="page__contact__thanks">
              <h1>Contact Thanks Page</h1>
          </div>
    </>
  )
}

export default ContactThanks
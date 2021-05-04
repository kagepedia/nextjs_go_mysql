import React from 'react'
import { NextPage } from 'next'
import Head from '../../components/head'
import Header from '../../components/header'

const ContactConfirm: NextPage = () => {

  return (
      <>
          <Head title="contact-confirm" description="contact-confirm" keywords="contact-confirm" />
          <Header />
          <div className="page__contact__confirm">
              <h1>Contact Confirm Page</h1>
          </div>
    </>
  )
}

export default ContactConfirm
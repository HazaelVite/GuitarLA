import React from 'react'
import Head from 'next/head'
import { Header } from './Header'
import Footer from './Footer'

export const Layout = ({children, pagina }) => {
  return (
    <div>
      <Head>
        <title>{pagina} - GuitarLA</title>
        <meta name="description" content="Venta de guitarras online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {children}

      <Footer />
    </div>
  )
}

import React from 'react'
import { Header } from './Header'

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
    </div>
  )
}

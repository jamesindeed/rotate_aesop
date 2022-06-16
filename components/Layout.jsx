import React from 'react'
import Head from 'next/head'
import { Nav, InfoBar } from '../components'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>ROTATE AESOP</title>
      </Head>
      <InfoBar />
      <Nav />
      {children}
    </>
  )
}

export default Layout

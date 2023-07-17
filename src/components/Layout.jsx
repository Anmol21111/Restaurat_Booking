import React, { Children } from 'react'
import Header from './Layout/Header'

const Layout = ({Children}) => {
  return (
    <>
    <Header />
    <div>{Children}</div>
    </>
  )
}

export default Layout
import React from 'react'
import Footer from '../Footer/Footer'

const FooterContain = (props) => {
  return (
    <>
    <div>{props.children}</div>
      <Footer />
    </>
  )
}

export default FooterContain;

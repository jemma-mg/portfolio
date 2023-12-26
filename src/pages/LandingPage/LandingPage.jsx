import React from 'react'
import { Navbar, Landing } from '../../components'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
        <Navbar />
        {/* <h1>Landing Page</h1> */}
        <Landing />
    </div>
  )
}

export default LandingPage
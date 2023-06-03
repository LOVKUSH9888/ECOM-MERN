import React from 'react'
import logo from '../assest/logo.png'

const Header = () => {
  return (
    <header>
    {/*Desktop*/}
    <div className=''>
      <div className=''>
        <img src={logo} alt/>
      </div>
    </div>
    </header>
  )
}

export default Header

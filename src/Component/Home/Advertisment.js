import React from 'react'
import logo from "../../assets/images/Logo.png"

const Advertisment = () => {
  return (
    <div className="Advertisment mt-5 mb-5">
        <marquee>Do it because they said you couldn’t <img src={logo} alt="logo" className='img-fluid' />
        Push harder today if you want a different tomorrow <img src={logo} alt="logo" className='img-fluid' />
        Don’t be a Brat burn that Fat <img src={logo} alt="logo" className='img-fluid' />
        Everything you want is outside of your comfort zone <img src={logo} alt="logo" className='img-fluid' />
        Exercise until the body obeys <img src={logo} alt="logo" className='img-fluid' />
        The only bad workout is no workout <img src={logo} alt="logo" className='img-fluid' />
        Get a jump on your day! <img src={logo} alt="logo" className='img-fluid' />
        Hustle to gain more muscle 
        </marquee>
    </div>
  )
}

export default Advertisment;
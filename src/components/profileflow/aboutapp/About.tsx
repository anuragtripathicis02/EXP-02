'use client'
import Image from "next/image";
import Link from 'next/link'
import React from 'react'
import LogoApp from '../../../../public/images/about-ex-logo.svg'


const About = () => {
  return (
    <div className='sec-about-main bg-img position-relative'>
        <div className='container'>
            <div className='about-exp text-center'>
              <Image src={LogoApp} alt=""/>
              <h3>From Dream to Direction</h3>
              <p>App version</p>
              <h4>V1.0.0-beta</h4>
            </div>
        </div>
    </div>
  )
}

export default About

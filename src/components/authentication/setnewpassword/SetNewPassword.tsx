'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";
import NewPass from "../../../../public/images/set-new-password.png";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import EyeClose from "../../../../public/images/eye-slash.png";
import EyeOpen from "../../../../public/images/eye.png";

const SetNewPassword = () => {
  return (
    <div className='sec-forgot p-50 bg-img position-relative'>
            <div className='container position-relative z-1'>
                <div className='mx-540 text-center'>
                    
                    <div className='figure-box-img mb-40'>
                        <Image src={NewPass} alt='' />
                    </div>
                    <div className='text-start'>
                        <h2>Set a new password</h2>
                        <p className='mb-24'>Enter and confirm your new password below to secure your account.</p>


                    <FloatingLabel controlId="floatingPassword" label="Enter Password" className="mb-4">
                        <Form.Control type="password" placeholder="Enter your password" />
                        <span className='pass-container'>
                            <Image src={EyeClose} alt="" className='eye-close' />
                            {/* <Image src={EyeOpen} alt="" className='eye-open' /> */}
                        </span>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Confirm Password" className="mb-4">
                        <Form.Control type="password" placeholder="Confirm Password" />
                        <span className='pass-container'>
                            <Image src={EyeClose} alt="" className='eye-close' />
                            {/* <Image src={EyeOpen} alt="" className='eye-open' /> */}
                        </span>
                    </FloatingLabel>

                    <button className='btn-theme btn-yellow w-100'>Set Password</button>

                    </div>
                   
                </div>
            </div>
        </div>
  )
}

export default SetNewPassword

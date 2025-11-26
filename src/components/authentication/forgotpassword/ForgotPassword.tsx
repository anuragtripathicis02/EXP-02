'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";
import ForgotImg from "../../../../public/images/forgot-pass-img.png";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const ForgotPassword = () => {
    return (
        <div className='sec-forgot p-50 bg-img position-relative'>
            <div className='container position-relative z-1'>
                <div className='mx-540 text-center'>
                    
                    <div className='figure-box-img mb-40'>
                        <Image src={ForgotImg} alt='' />
                    </div>
                    <div className='text-start'>
                        <h2>Forgot your password?</h2>
                        <p className='mb-24'>Enter your registered email and we’ll send you a reset link.</p>

                        <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-40"

                    >
                        <Form.Control type="email" placeholder="Johnsmith1001@gmail.com" />
                    </FloatingLabel>
                    <Link href="/authentication/verifyemail">
                        <button className='btn-theme btn-yellow w-100'>Send Email</button>
                    </Link>

                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword

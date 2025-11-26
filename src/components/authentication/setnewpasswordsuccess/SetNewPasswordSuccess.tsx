'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";
import SetpassImg from "../../../../public/images/new-password-done.png";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const SetNewPasswordSuccess = () => {
  return (
    <div className='sec-forgot p-50 bg-img position-relative'>
            <div className='container position-relative z-1'>
                <div className='mx-540 text-center'>
                    
                    <div className='figure-box-img mb-40'>
                        <Image src={SetpassImg} alt='' />
                    </div>
                    <div className='text-start'>
                        <h2>Well Done!</h2>
                        <p className='mb-24'>Your password has been successfully changed. Please your new password to loing!</p>

                    <button className='btn-theme btn-yellow w-100'>Sign in</button>

                    </div>
                   
                </div>
            </div>
        </div>
  )
}

export default SetNewPasswordSuccess

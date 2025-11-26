'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { DatePicker } from 'rsuite';
import LanguageSwitcherCountryName from '@/components/LanguageSwitcherCountryName';
import '../../flags.css';
import UserImg from '../../../../public/images/profil-01.png'


const EditProfileStudent = () => {
  return (
    <div className='sec-edit-profile py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='upload-picture d-flex flex-column align-items-center'>
              <div className='profile-picture'>
                <Image src={UserImg} alt='' />
                <label htmlFor="fileInput" className="upload-btn">
                  Change Profile Picture
                </label>
                <input type="file" id="fileInput" accept="image/*"></input>
              </div>
              <Link href="" className='btn-view-profile'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M23.1853 11.6962C23.1525 11.6222 22.3584 9.86062 20.5931 8.09531C18.2409 5.74312 15.27 4.5 12 4.5C8.72999 4.5 5.75905 5.74312 3.40687 8.09531C1.64155 9.86062 0.843741 11.625 0.814679 11.6962C0.772035 11.7922 0.75 11.896 0.75 12.0009C0.75 12.1059 0.772035 12.2097 0.814679 12.3056C0.847491 12.3797 1.64155 14.1403 3.40687 15.9056C5.75905 18.2569 8.72999 19.5 12 19.5C15.27 19.5 18.2409 18.2569 20.5931 15.9056C22.3584 14.1403 23.1525 12.3797 23.1853 12.3056C23.2279 12.2097 23.25 12.1059 23.25 12.0009C23.25 11.896 23.2279 11.7922 23.1853 11.6962ZM12 18C9.11437 18 6.59343 16.9509 4.50655 14.8828C3.65028 14.0313 2.92179 13.0603 2.34374 12C2.92164 10.9396 3.65014 9.9686 4.50655 9.11719C6.59343 7.04906 9.11437 6 12 6C14.8856 6 17.4066 7.04906 19.4934 9.11719C20.3514 9.9684 21.0815 10.9394 21.6609 12C20.985 13.2619 18.0403 18 12 18ZM12 7.5C11.11 7.5 10.2399 7.76392 9.49993 8.25839C8.7599 8.75285 8.18313 9.45566 7.84253 10.2779C7.50194 11.1002 7.41282 12.005 7.58646 12.8779C7.76009 13.7508 8.18867 14.5526 8.81801 15.182C9.44735 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.4988 10.8069 16.0242 9.66303 15.1806 8.81939C14.337 7.97575 13.1931 7.50124 12 7.5ZM12 15C11.4066 15 10.8266 14.8241 10.3333 14.4944C9.83993 14.1648 9.45542 13.6962 9.22835 13.1481C9.00129 12.5999 8.94188 11.9967 9.05764 11.4147C9.17339 10.8328 9.45911 10.2982 9.87867 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.148 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.824 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15Z" fill="currentColor" />
                </svg> Preview Public Profile

              </Link>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='form-edit-profile'>
              <div className='row gx-2 gx-md-4'>
                <div className='col-6'>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="First Name"
                    className="mb-4"
                  >
                    <Form.Control type="email" placeholder="John" />
                  </FloatingLabel>
                </div>
                <div className='col-6'>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Last Name"
                    className="mb-4"
                  >
                    <Form.Control type="email" placeholder="John" />
                  </FloatingLabel>
                </div>
                <div className='col-md-6'>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email Address"
                    className="mb-4"
                  >
                    <Form.Control type="email" placeholder="Johnsmith1001@gmail.com" />
                  </FloatingLabel>
                </div>
                <div className='col-md-6'>
                  <div className='mb-4 card-language-selector mobile-filed position-relative'>
                    <label className='form-labl'>Mobile </label>
                    <LanguageSwitcherCountryName />
                  </div>
                </div>
                <div className='col-6'>
                  <div className='mb-4'>
                    <DatePicker placeholder="Date of Birth" oneTap />
                  </div>
                </div>
                <div className='col-6'>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Gender"
                    className="mb-4"
                  >
                    <Form.Select aria-label="Floating label select example">
                      <option>Male</option>
                      <option value="1">Female</option>
                    </Form.Select>
                  </FloatingLabel>
                </div>
                <div className='col-6'>
                  <div className='mb-4 card-language-selector country-filed position-relative'>
                    <label className='form-labl'>Country</label>
                    <LanguageSwitcherCountryName />
                    <div className='dropdown-arrow'>
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M20.0306 9.53104L12.5306 17.031C12.4609 17.1008 12.3782 17.1561 12.2871 17.1938C12.1961 17.2316 12.0985 17.251 11.9999 17.251C11.9014 17.251 11.8038 17.2316 11.7127 17.1938C11.6217 17.1561 11.539 17.1008 11.4693 17.031L3.9693 9.53104C3.82857 9.39031 3.74951 9.19944 3.74951 9.00042C3.74951 8.80139 3.82857 8.61052 3.9693 8.46979C4.11003 8.32906 4.30091 8.25 4.49993 8.25C4.69895 8.25 4.88982 8.32906 5.03055 8.46979L11.9999 15.4401L18.9693 8.46979C19.039 8.40011 19.1217 8.34483 19.2128 8.30712C19.3038 8.26941 19.4014 8.25 19.4999 8.25C19.5985 8.25 19.6961 8.26941 19.7871 8.30712C19.8781 8.34483 19.9609 8.40011 20.0306 8.46979C20.1002 8.53947 20.1555 8.6222 20.1932 8.71324C20.2309 8.80429 20.2503 8.90187 20.2503 9.00042C20.2503 9.09896 20.2309 9.19654 20.1932 9.28759C20.1555 9.37863 20.1002 9.46136 20.0306 9.53104Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="City"
                    className="mb-4"
                  >
                    <Form.Select aria-label="Floating label select example">
                      <option>New York</option>
                      <option value="1">New York</option>
                    </Form.Select>
                  </FloatingLabel>
                </div>
                <div className='col-md-6'>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Industry"
                    className="mb-4"
                  >
                    <Form.Select aria-label="Floating label select example">
                      <option>Healthcare</option>
                      <option value="1">Healthcare</option>
                    </Form.Select>
                  </FloatingLabel>
                </div>
                <div className='col-md-6'>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Headline"
                    className="mb-4"
                  >
                    <Form.Control type="email" placeholder="John" />
                  </FloatingLabel>
                </div>

                <div className='col-md-12'>
                  <FloatingLabel controlId="floatingTextarea2" label="Bio" className="mb-4">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                    />
                  </FloatingLabel>
                </div>

                <div className='col-12'>
                  <div className='position-relative'>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Hourly Rate"
                  >
                    <Form.Control type="email" placeholder="John" />
                  </FloatingLabel>
                  <span className='coins-text'>Coins /Hr</span>
                  </div>
                  <div className='info-text'>
                    An hourly charge of 5 EXP Coins will be deducted from each booking. We recommend setting your hourly rate 5 Coins higher than your desired earning to cover this deduction.
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfileStudent

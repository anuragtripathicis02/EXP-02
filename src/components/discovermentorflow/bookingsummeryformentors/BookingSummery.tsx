'use client'
import Link from 'next/link'
import Image from "next/image";
import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


import UserImg from '../../../../public/images/discover-users-img-1.png'
import Coin from '../../../../public/images/icon-coin.svg'
import ConfirmBeforeSessionBooking from '@/components/modalcomponents/ConfirmBeforeSessionBooking';


const BookingSummery = () => {

    const [showFilterProfile, setShowFilterProfile] = useState(false);
    const handleFilterProfile = () => {
        setShowFilterProfile(true);
    };
    const handleCloseAll = () => {
        setShowFilterProfile(false);
    };

    return (
        <div className='sec-book-your-session py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7'>
                        <div className='card-session'>
                            <h3 className='card-ttl'>Session Titles</h3>
                            <div className="mentor">
                                <Image src={UserImg} alt='' />
                                <div className='flex-grow-1 flex-column flex-md-row d-md-flex align-items-center'>
                                    <div className='me-auto'>
                                        <h3>Dr. Alex Chen</h3>
                                        <p>Data Scientist at Innovate Inc.</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className='card-ttl'>Schedule Session</h3>

                            <div className='card-boardred m-0'>
                                <div className="summery-details">
                                    <ul className='session-list'>
                                        <li className='d-flex align-items-center justify-content-between'>
                                            <span className='text-start'>Session Topic</span>
                                        </li>

                                        <li className='d-flex align-items-center justify-content-between'>
                                            <h3>Session on understanding DSA</h3>
                                        </li>


                                        <li className='d-flex align-items-center justify-content-between'>
                                            <span className='text-start'>Schedule For</span> <span className='text-end'><b>Dec5, 2025</b></span>
                                        </li>
                                        <li className='d-flex align-items-center justify-content-between'>
                                            <span className='text-start'>Timeslot</span> <span className='text-end'><b>10:00 AM - 11:00 AM</b></span>
                                        </li>
                                        <li className='d-flex align-items-center justify-content-between'>
                                            <span className='text-start'>Duration</span> <span className='text-end'><b>2 hrs</b></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <div className='ps-lg-4'>
                            <h3 className='card-ttl'>Payment Summery</h3>
                            <div className='summery-box mb-32'>
                                <div className="summery-details">
                                    <ul>
                                        <li className='d-flex align-items-center justify-content-between'>
                                            <span className='text-start'>Booking Date</span> <span className='text-end'><b>Dec 5, 2025</b></span>
                                        </li>
                                        <li className='d-flex align-items-center justify-content-between'>
                                            <span className='text-start'>Booking Time</span> <span className='text-end'><b>11:00 AM</b></span>
                                        </li>
                                    </ul>

                                </div>

                                <div className="fee">
                                    <ul className='mb-0'>
                                        <li className='d-flex align-items-center justify-content-between'>
                                            <span className='text-start'>
                                                <h2 className='mb-0'>Earning</h2>
                                            </span>
                                            <span className='text-end'>
                                                <Image src={Coin} alt='' /> 95
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className='d-flex justify-content-center'>
                                <Link href="" className='btn-view-detail'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M23.1853 11.6962C23.1525 11.6222 22.3584 9.86062 20.5931 8.09531C18.2409 5.74312 15.27 4.5 12 4.5C8.72999 4.5 5.75905 5.74312 3.40687 8.09531C1.64155 9.86062 0.843741 11.625 0.814679 11.6962C0.772035 11.7922 0.75 11.896 0.75 12.0009C0.75 12.1059 0.772035 12.2097 0.814679 12.3056C0.847491 12.3797 1.64155 14.1403 3.40687 15.9056C5.75905 18.2569 8.72999 19.5 12 19.5C15.27 19.5 18.2409 18.2569 20.5931 15.9056C22.3584 14.1403 23.1525 12.3797 23.1853 12.3056C23.2279 12.2097 23.25 12.1059 23.25 12.0009C23.25 11.896 23.2279 11.7922 23.1853 11.6962ZM12 18C9.11437 18 6.59343 16.9509 4.50655 14.8828C3.65028 14.0313 2.92179 13.0603 2.34374 12C2.92164 10.9396 3.65014 9.9686 4.50655 9.11719C6.59343 7.04906 9.11437 6 12 6C14.8856 6 17.4066 7.04906 19.4934 9.11719C20.3514 9.9684 21.0815 10.9394 21.6609 12C20.985 13.2619 18.0403 18 12 18ZM12 7.5C11.11 7.5 10.2399 7.76392 9.49993 8.25839C8.7599 8.75285 8.18313 9.45566 7.84253 10.2779C7.50194 11.1002 7.41282 12.005 7.58646 12.8779C7.76009 13.7508 8.18867 14.5526 8.81801 15.182C9.44735 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.4988 10.8069 16.0242 9.66303 15.1806 8.81939C14.337 7.97575 13.1931 7.50124 12 7.5ZM12 15C11.4066 15 10.8266 14.8241 10.3333 14.4944C9.83993 14.1648 9.45542 13.6962 9.22835 13.1481C9.00129 12.5999 8.94188 11.9967 9.05764 11.4147C9.17339 10.8328 9.45911 10.2982 9.87867 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.148 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.824 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15Z" fill="currentColor" />
                                    </svg>

                                    View Transection Details
                                </Link>
                            </div>

                            <div className='summeru-foot'>
                                <ul className='d-flex'>
                                    <li className='flex-grow-1 w-50'>
                                        <button className='btn-theme btn-yellow-border w-100 font-14'><svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M13.6471 6.18101L10.833 8.6093L11.6904 12.2408C11.7377 12.4379 11.7255 12.6447 11.6553 12.8349C11.5852 13.0251 11.4603 13.1903 11.2963 13.3095C11.1324 13.4288 10.9368 13.4967 10.7342 13.5049C10.5316 13.513 10.3312 13.4609 10.1582 13.3552L7.00013 11.4116L3.84016 13.3552C3.6672 13.4603 3.46701 13.5119 3.26479 13.5035C3.06257 13.495 2.86736 13.427 2.70375 13.3078C2.54014 13.1887 2.41544 13.0238 2.34536 12.8339C2.27527 12.644 2.26294 12.4377 2.3099 12.2408L3.1704 8.6093L0.356262 6.18101C0.203234 6.04875 0.0925617 5.87434 0.038066 5.67956C-0.0164297 5.48478 -0.0123335 5.27826 0.0498432 5.08579C0.11202 4.89332 0.229521 4.72344 0.387673 4.59735C0.545825 4.47127 0.737619 4.39457 0.939101 4.37683L4.62875 4.07916L6.05207 0.634657C6.12912 0.446934 6.26024 0.28636 6.42877 0.17335C6.59731 0.0603406 6.79564 0 6.99856 0C7.20148 0 7.39981 0.0603406 7.56835 0.17335C7.73688 0.28636 7.86801 0.446934 7.94505 0.634657L9.36775 4.07916L13.0574 4.37683C13.2593 4.39391 13.4516 4.47018 13.6104 4.59609C13.7691 4.722 13.8871 4.89195 13.9497 5.08466C14.0123 5.27736 14.0166 5.48424 13.9621 5.67937C13.9076 5.87451 13.7967 6.04923 13.6434 6.18163L13.6471 6.18101Z" fill="currentColor" />
                                        </svg>
                                            Rate your mentor</button>
                                    </li>
                                    <li className='flex-grow-1 w-50'><button className='btn-theme btn-yellow w-100 font-14' onClick={handleFilterProfile}>Message</button> </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <ConfirmBeforeSessionBooking show={showFilterProfile} handleClose={handleCloseAll}/>
        </div>
    )
}

export default BookingSummery

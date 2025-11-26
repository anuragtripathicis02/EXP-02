"use client";
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Modal, Button, Form, Dropdown } from 'react-bootstrap';
import Image from 'next/image';

// import UserImg from '../../../../public/images/discover-users-img-2.png'

import UserImg from '../../../public/images/discover-users-img-2.png'
import Coin from '../../../public/images/icon-coin.svg'


const BookingSummary = ({ show, handleClose }: any) => {
    return (
        <Modal size="sm" show={show} onHide={handleClose} centered className="common-modal">

            <Modal.Body className="common-modal-body modal-booking bg-yellow">
                <Button variant="link" className="btn-close-btn" onClick={handleClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                    </svg>
                </Button>
                <div className="modal-top text-center position-relative z-1">
                    <div className="check-icon">
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                            <rect width="72" height="72" rx="36" fill="white" />
                            <path d="M58.8581 25.6071L30.8581 53.6071C30.6142 53.8518 30.3244 54.046 30.0053 54.1785C29.6863 54.311 29.3442 54.3792 28.9987 54.3792C28.6532 54.3792 28.3111 54.311 27.992 54.1785C27.673 54.046 27.3832 53.8518 27.1393 53.6071L14.8893 41.3571C14.6451 41.1129 14.4515 40.8231 14.3193 40.504C14.1872 40.185 14.1191 39.8431 14.1191 39.4977C14.1191 39.1524 14.1872 38.8105 14.3193 38.4914C14.4515 38.1724 14.6451 37.8825 14.8893 37.6384C15.1335 37.3942 15.4234 37.2005 15.7424 37.0683C16.0614 36.9362 16.4034 36.8682 16.7487 36.8682C17.094 36.8682 17.4359 36.9362 17.755 37.0683C18.074 37.2005 18.3639 37.3942 18.6081 37.6384L29.0009 48.0312L55.1437 21.8927C55.6368 21.3996 56.3057 21.1226 57.0031 21.1226C57.7005 21.1226 58.3693 21.3996 58.8624 21.8927C59.3556 22.3859 59.6326 23.0547 59.6326 23.7521C59.6326 24.4495 59.3556 25.1184 58.8624 25.6115L58.8581 25.6071Z" fill="currentColor" />
                        </svg>
                    </div>
                    <h2>Booking Confirmed!</h2>
                    <p>Great! Your session is booked. We've sent a confirmation and receipt to your email.</p>
                </div>
                <div className='modal-card position-relative z-1'>
                    <div className='modal-white-card'>
                        <div className="modal-section">
                            <h4>Session Title</h4>
                            <h3>Basics of Mental Health and Psychiatry</h3>
                        </div>
                        <div className="section-mentor-info">
                            <h4>Mentor</h4>
                            <div className="mentor-box">
                                <Image src={UserImg} alt='' />
                                <div className='modal-content-right'>
                                    <h5>Jessia M. Sanor</h5>
                                    <p>Data Scientist at innovate Inc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-details">
                            <ul>
                                <li>
                                    <span className='cont-left'>Booking ID</span>
                                    <span className='cont-right'>#125569987</span>
                                </li>
                                <li>
                                    <span className='cont-left'>Date</span>
                                    <span className='cont-right black'>Dec5, 2025</span>
                                </li>
                                <li>
                                    <span className='cont-left'>Time</span>
                                    <span className='cont-right black'>10:00 AM - 11:00 AM</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='modal-white-card dash-border'>
                        <span className='box-circle circle-left'></span>
                        <span className='box-circle circle-right'></span>
                        <div className="total-paid">
                            <span className='text-total'>Total Paid</span>
                            <span className="coin-box">
                                <Image src={Coin} alt='' />
                                100
                            </span>
                        </div>
                    </div>
                </div>

                <div className='modal-button position-relative z-1'>
                    <Link href="/discovermentorflow/discover" className="w-100">
                        <button className="btn-theme btn-yellow w-100" >Back to Home</button>
                    </Link>
                    <Link href="/discovermentorflow/bookingsummeryformentors" className='w-100'>
                        <button className="btn-theme btn-black w-100">View My Bookings</button>
                    </Link>
                </div>

            </Modal.Body>
        </Modal>
    )
}

export default BookingSummary

"use client";
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Modal, Button, Form, Dropdown } from 'react-bootstrap';
import Image from 'next/image';

import WalletCoin from '../../../public/images/wallet-coin.svg'
import CardImg from '../../../public/images/mastercard.png'
import Coin from '../../../public/images/icon-coin.svg'
import UserImg from '../../../public/images/discover-users-img-1.png'

const TransectionHistoryReceivedforASession = ({ show, handleClose }: any) => {
  return (
   <Modal size="sm" show={show} onHide={handleClose} centered className="common-modal">

            <Modal.Body className="common-modal-body modal-booking bg-green">
                <Button variant="link" className="btn-close-btn" onClick={handleClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                    </svg>
                </Button>
                <div className="modal-top text-center text-white position-relative z-1">
                    <div className="check-icon">
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                            <rect width="72" height="72" rx="36" fill="white" />
                            <path d="M58.8571 25.6076L30.8571 53.6076C30.6132 53.8523 30.3234 54.0465 30.0044 54.179C29.6853 54.3115 29.3432 54.3797 28.9977 54.3797C28.6522 54.3797 28.3101 54.3115 27.9911 54.179C27.672 54.0465 27.3822 53.8523 27.1383 53.6076L14.8883 41.3576C14.6442 41.1134 14.4505 40.8235 14.3183 40.5045C14.1862 40.1855 14.1182 39.8435 14.1182 39.4982C14.1182 39.1529 14.1862 38.811 14.3183 38.4919C14.4505 38.1729 14.6442 37.883 14.8883 37.6389C15.1325 37.3947 15.4224 37.201 15.7414 37.0688C16.0605 36.9367 16.4024 36.8687 16.7477 36.8687C17.093 36.8687 17.435 36.9367 17.754 37.0688C18.073 37.201 18.3629 37.3947 18.6071 37.6389L28.9999 48.0317L55.1427 21.8932C55.6358 21.4001 56.3047 21.123 57.0021 21.123C57.6995 21.123 58.3683 21.4001 58.8615 21.8932C59.3546 22.3864 59.6316 23.0552 59.6316 23.7526C59.6316 24.45 59.3546 25.1188 58.8615 25.612L58.8571 25.6076Z" fill="currentColor" />
                        </svg>


                    </div>
                    <h2 className='text-white'>Transection Completed</h2>
                    <p className='text-white'>For Scheduling a Session</p>
                </div>
                <div className='modal-card position-relative z-1'>
                    <div className='modal-white-card'>
                        <div className="modal-details">
                            <ul>
                                <li>
                                    <span className='cont-left'>Transection ID</span>
                                    <span className='cont-right'>#125569987 </span>
                                </li>
                                <li>
                                    <span className='cont-left'>Date</span>
                                    <span className='cont-right black'>Dec5, 2025</span>
                                </li>
                                <li>
                                    <span className='cont-left'>Time</span>
                                    <span className='cont-right black'>10:00 AM</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='modal-white-card dash-border'>
                        <span className='box-circle circle-left'></span>
                        <span className='box-circle circle-right'></span>

                        <div className='modal-details'>
                            <ul>
                                <li>
                                    <span className='cont-left'>Session Earning</span>
                                    <span className='cont-right'><Image src={Coin} alt='' /> 100</span>
                                </li>
                                <li>
                                    <span className='cont-left'>Platform Fee 20%</span>
                                    <span className='cont-right'><Image src={Coin} alt='' /> 5</span>
                                </li>
                            </ul>
                        </div>

                        <div className="total-paid mt-2">
                            <span className='text-total'>Your Earning</span>
                            <span className="coin-box">
                                <Image src={Coin} alt='' />
                                95
                            </span>
                        </div>
                    </div>
                </div>

                <p className='session-summery-title'>Session Summery</p>
                <div className='session-summery position-relative z-1'>
                    <div className="section-mentor-info">
                        <h4>Scheduled by</h4>
                        <div className="mentor-box">
                            <Image src={UserImg} alt='' />
                            <div className='modal-content-right'>
                                <h5>Dr. Alex Chen</h5>
                                <p>Data Scientist at innovate Inc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-details">
                        <ul>
                            <li>
                                <span className='cont-left'>Withdrawal Date</span>
                                <span className='cont-right'>Dec 29, 2025</span>
                            </li>
                            <li>
                                <span className='cont-left'>Withdrawal Time</span>
                                <span className='cont-right'>10:00 AM - 11:00 AM</span>
                            </li>
                            <li>
                                <span className='cont-left'>Withdrawal Amount</span>
                                <span className='cont-right'>$1568</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='text-center'>
                    <button className='btn-download-invoice'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5 12.75V18.75C22.5 19.1478 22.342 19.5294 22.0607 19.8107C21.7794 20.092 21.3978 20.25 21 20.25H3C2.60218 20.25 2.22064 20.092 1.93934 19.8107C1.65804 19.5294 1.5 19.1478 1.5 18.75V12.75C1.5 12.3522 1.65804 11.9706 1.93934 11.6893C2.22064 11.408 2.60218 11.25 3 11.25H6.75C6.94891 11.25 7.13968 11.329 7.28033 11.4697C7.42098 11.6103 7.5 11.8011 7.5 12C7.5 12.1989 7.42098 12.3897 7.28033 12.5303C7.13968 12.671 6.94891 12.75 6.75 12.75H3V18.75H21V12.75H17.25C17.0511 12.75 16.8603 12.671 16.7197 12.5303C16.579 12.3897 16.5 12.1989 16.5 12C16.5 11.8011 16.579 11.6103 16.7197 11.4697C16.8603 11.329 17.0511 11.25 17.25 11.25H21C21.3978 11.25 21.7794 11.408 22.0607 11.6893C22.342 11.9706 22.5 12.3522 22.5 12.75ZM11.4694 12.5306C11.539 12.6004 11.6217 12.6557 11.7128 12.6934C11.8038 12.7312 11.9014 12.7506 12 12.7506C12.0986 12.7506 12.1962 12.7312 12.2872 12.6934C12.3783 12.6557 12.461 12.6004 12.5306 12.5306L17.0306 8.03063C17.1714 7.88989 17.2504 7.69902 17.2504 7.5C17.2504 7.30098 17.1714 7.11011 17.0306 6.96937C16.8899 6.82864 16.699 6.74958 16.5 6.74958C16.301 6.74958 16.1101 6.82864 15.9694 6.96937L12.75 10.1897V2.25C12.75 2.05109 12.671 1.86032 12.5303 1.71967C12.3897 1.57902 12.1989 1.5 12 1.5C11.8011 1.5 11.6103 1.57902 11.4697 1.71967C11.329 1.86032 11.25 2.05109 11.25 2.25V10.1897L8.03063 6.96937C7.88989 6.82864 7.69902 6.74958 7.5 6.74958C7.30098 6.74958 7.11011 6.82864 6.96938 6.96938C6.82864 7.11011 6.74958 7.30098 6.74958 7.5C6.74958 7.69902 6.82864 7.88989 6.96937 8.03063L11.4694 12.5306ZM18.75 15.75C18.75 15.5275 18.684 15.31 18.5604 15.125C18.4368 14.94 18.2611 14.7958 18.0555 14.7106C17.85 14.6255 17.6238 14.6032 17.4055 14.6466C17.1873 14.69 16.9868 14.7972 16.8295 14.9545C16.6722 15.1118 16.565 15.3123 16.5216 15.5305C16.4782 15.7488 16.5005 15.975 16.5856 16.1805C16.6708 16.3861 16.815 16.5618 17 16.6854C17.185 16.809 17.4025 16.875 17.625 16.875C17.9234 16.875 18.2095 16.7565 18.4205 16.5455C18.6315 16.3345 18.75 16.0484 18.75 15.75Z" fill="currentColor" />
                        </svg>
                        Download invoice</button>
                </div>

            </Modal.Body>
        </Modal>
  )
}

export default TransectionHistoryReceivedforASession

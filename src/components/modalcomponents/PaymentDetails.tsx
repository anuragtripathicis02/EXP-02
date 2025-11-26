"use client";
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Modal, Button, Form, Dropdown } from 'react-bootstrap';
import Image from 'next/image';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { DatePicker } from 'rsuite';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const PaymentDetails = ({ show, handleClose }: any) => {
    return (
        <Modal size="sm" show={show} onHide={handleClose} centered className="common-modal">
            <Button variant="link" className="btn-close-btn" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                </svg>
            </Button>
            <Modal.Header>
                <Modal.Title>Payment Details</Modal.Title>
            </Modal.Header>
            <Modal.Body className="common-modal-body">
                <div className='row'>
                    <div className='col-12'>
                        <div className='position-relative'>
                            <FloatingLabel
                            controlId="floatingInput"
                            label="Card Number"
                            className="mb-4"
                        >
                            <Form.Control type="email" placeholder="John" />
                        </FloatingLabel>
                            <div className='icon-card'>
                                <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_251_3786)">
                                        <path d="M9.856 0C7.23632 0.00857399 4.72708 1.06814 2.87918 2.94606C1.03128 4.82399 -0.00422602 7.36677 1.29635e-05 10.0161C0.00425195 12.6655 1.04789 15.2049 2.90179 17.0767C4.75568 18.9486 7.26831 19.9999 9.888 19.9999C12.5077 19.9999 15.0203 18.9486 16.8742 17.0767C18.7281 15.2049 19.7717 12.6655 19.776 10.0161C19.7802 7.36677 18.7447 4.82399 16.8968 2.94606C15.0489 1.06814 12.5397 0.00857399 9.92 0L9.856 0Z" fill="#EB001B" />
                                        <path d="M22.0796 0C19.46 0.00857399 16.9507 1.06814 15.1028 2.94606C13.2549 4.82399 12.2194 7.36677 12.2236 10.0161C12.2279 12.6655 13.2715 15.2049 15.1254 17.0767C16.9793 18.9486 19.4919 19.9999 22.1116 19.9999C24.7313 19.9999 27.2439 18.9486 29.0978 17.0767C30.9517 15.2049 31.9954 12.6655 31.9996 10.0161C32.0039 7.36677 30.9684 4.82399 29.1205 2.94606C27.2726 1.06814 24.7633 0.00857399 22.1436 0L22.0796 0Z" fill="#F79E1B" />
                                        <path d="M15.9998 2.13592C14.822 3.0716 13.8697 4.26566 13.2148 5.62797C12.56 6.99029 12.2197 8.48525 12.2197 10C12.2197 11.5148 12.56 13.0097 13.2148 14.372C13.8697 15.7343 14.822 16.9284 15.9998 17.8641C17.1777 16.9284 18.13 15.7343 18.7848 14.372C19.4397 13.0097 19.7799 11.5148 19.7799 10C19.7799 8.48525 19.4397 6.99029 18.7848 5.62797C18.13 4.26566 17.1777 3.0716 15.9998 2.13592Z" fill="#FF5F00" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_251_3786">
                                            <rect width="32" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='mb-4'>
                            <FloatingLabel
                            controlId="floatingInput"
                            label="Valid Through"
                            className="mb-4"
                        >
                            <Form.Control type="email" placeholder="MM / YY" />
                        </FloatingLabel>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='position-relative'>
                            <FloatingLabel
                            controlId="floatingInput"
                            label="CVV Code"
                            className="mb-4"
                        >
                            <Form.Control type="email" placeholder="John" />
                        </FloatingLabel>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='position-relative'>
                            <FloatingLabel
                            controlId="floatingInput"
                            label="Card Holder"
                        >
                            <Form.Control type="email" placeholder="John" />
                        </FloatingLabel>
                        </div>
                    </div>
                </div>

            </Modal.Body>

            <Modal.Footer>
                <button className='btn-theme btn-yellow flex-grow-1' onClick={handleClose}>
                    Save Details
                </button>
            </Modal.Footer>

        </Modal>
    )
}

export default PaymentDetails

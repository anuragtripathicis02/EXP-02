"use client";
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Modal, Button, Form, Dropdown } from 'react-bootstrap';
import Image from 'next/image';

import WalletCoin from '../../../public/images/wallet-coin.svg'
import CardImg from '../../../public/images/mastercard.png'

type Props = {
    show: boolean;
    handleClose: () => void;
    openNext?: () => void; // optional, safer
};


const AddMoney = ({ show, handleClose, openNext = () => { } }: Props) => {
    return (
        <Modal size="sm" show={show} onHide={handleClose} centered className="common-modal">
            <Button variant="link" className="btn-close-btn" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                </svg>
            </Button>
            <Modal.Header>
                <Modal.Title>Buy EXP Coin</Modal.Title>
            </Modal.Header>
            <Modal.Body className="common-modal-body pb-0">
                <p className='font-20 mb-24'>Please enter how many EXP Coins you want to buy, they will be add up to your wallet.</p>

                <div className='box-withdrawal position-relative'>
                    <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="1586" />
                    </Form.Group>
                    <div className='coin-modny'>
                        <Image src={WalletCoin} alt='' />
                    </div>
                </div>
                <small className='smll-text d-block mb-32'>(1 EXPcoin = 1$ USD)</small>

                <div className='Withdraw-option'>
                    <h4>Withdrawing to</h4>
                    <div className='d-flex align-items-center Withdraw-option-list'>
                        <div className='icon'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M1.875 8.12461H3.75V13.1246H2.5C2.33424 13.1246 2.17527 13.1905 2.05806 13.3077C1.94085 13.4249 1.875 13.5839 1.875 13.7496C1.875 13.9154 1.94085 14.0743 2.05806 14.1916C2.17527 14.3088 2.33424 14.3746 2.5 14.3746H17.5C17.6658 14.3746 17.8247 14.3088 17.9419 14.1916C18.0592 14.0743 18.125 13.9154 18.125 13.7496C18.125 13.5839 18.0592 13.4249 17.9419 13.3077C17.8247 13.1905 17.6658 13.1246 17.5 13.1246H16.25V8.12461H18.125C18.261 8.12447 18.3932 8.07999 18.5016 7.9979C18.6101 7.91582 18.6887 7.80061 18.7258 7.66976C18.7628 7.5389 18.7561 7.39955 18.7068 7.27283C18.6574 7.14611 18.5681 7.03894 18.4523 6.96758L10.3273 1.96758C10.2289 1.90705 10.1156 1.875 10 1.875C9.88442 1.875 9.77111 1.90705 9.67266 1.96758L1.54766 6.96758C1.4319 7.03894 1.34257 7.14611 1.29323 7.27283C1.24388 7.39955 1.23722 7.5389 1.27424 7.66976C1.31126 7.80061 1.38994 7.91582 1.49836 7.9979C1.60678 8.07999 1.73901 8.12447 1.875 8.12461ZM5 8.12461H7.5V13.1246H5V8.12461ZM11.25 8.12461V13.1246H8.75V8.12461H11.25ZM15 13.1246H12.5V8.12461H15V13.1246ZM10 3.2332L15.9172 6.87461H4.08281L10 3.2332ZM19.375 16.2496C19.375 16.4154 19.3092 16.5743 19.1919 16.6916C19.0747 16.8088 18.9158 16.8746 18.75 16.8746H1.25C1.08424 16.8746 0.925268 16.8088 0.808058 16.6916C0.690848 16.5743 0.625 16.4154 0.625 16.2496C0.625 16.0839 0.690848 15.9249 0.808058 15.8077C0.925268 15.6905 1.08424 15.6246 1.25 15.6246H18.75C18.9158 15.6246 19.0747 15.6905 19.1919 15.8077C19.3092 15.9249 19.375 16.0839 19.375 16.2496Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className='flex-xl-grow-1'>
                            <h3>********2345 <span>(12/35)</span></h3>
                            <p>Commonwealth Bank(CBA)</p>
                        </div>
                    </div>
                </div>

                <div className='Withdrawing-bg text-center'>
                    <p className='m-0'>Withdrawing <b>$1586</b> to your selected bank account</p>
                </div>

            </Modal.Body>

            <Modal.Footer className='flex-nowrap'>

                <button
                    className='btn-theme btn-yellow flex-grow-1'
                    onClick={openNext}   // ← Yeh add karo!!!
                >
                    Proceed to Payments
                </button>
            </Modal.Footer>

        </Modal>
    )
}

export default AddMoney

"use client";
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Modal, Button, Form, Dropdown } from 'react-bootstrap';
import Image from 'next/image';


const PuplishedPostSuccess = ({ show, handleClose }: any) => {
    return (
        <Modal size="sm" show={show} onHide={handleClose} centered className="common-modal">
            <Button variant="link" className="btn-close-btn" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                </svg>
            </Button>
            <Modal.Header>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>

            <Modal.Body className="common-modal-body text-center">
                <div className='icon mb-3'>
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                        <rect width="72" height="72" rx="36" fill="#EAAD20" />
                        <path d="M52.3569 27.9007L31.7624 48.4952C31.6428 48.6149 31.5009 48.7098 31.3446 48.7746C31.1883 48.8394 31.0208 48.8727 30.8517 48.8727C30.6825 48.8727 30.515 48.8394 30.3588 48.7746C30.2025 48.7098 30.0606 48.6149 29.941 48.4952L20.9309 39.4851C20.6894 39.2436 20.5537 38.916 20.5537 38.5744C20.5537 38.2329 20.6894 37.9053 20.9309 37.6638C21.1724 37.4223 21.5 37.2866 21.8416 37.2866C22.1832 37.2866 22.5107 37.4223 22.7522 37.6638L30.8517 45.7648L50.5356 26.0794C50.7771 25.8378 51.1047 25.7021 51.4462 25.7021C51.7878 25.7021 52.1154 25.8378 52.3569 26.0794C52.5984 26.3209 52.7341 26.6485 52.7341 26.99C52.7341 27.3316 52.5984 27.6592 52.3569 27.9007Z" fill="white" />
                    </svg>
                </div>
                <h3 className='font-20 mb-2'>Success!</h3>
                <p className='m-0'>Your post has been published successfully and is now live for everyone to see.</p>

            </Modal.Body>

            <Modal.Footer className='flex-nowrap'>
                <button className='btn-theme btn-white'>
                    View My Post
                </button>
                <Link href="/createPosts/createPostData"
                    className='btn-theme btn-yellow flex-grow-1'>
                    Back to Feed
                </Link>
            </Modal.Footer>

        </Modal>
    )
}

export default PuplishedPostSuccess

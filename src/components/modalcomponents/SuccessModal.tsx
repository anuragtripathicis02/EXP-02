"use client";
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Modal, Button, Form, Dropdown } from 'react-bootstrap';
import Image from 'next/image';

const SuccessModal = ({ show, handleClose }: any) => {
    return (
        <Modal size="sm" show={show} onHide={handleClose} centered className="common-modal">
            <Modal.Body className="common-modal-body p-0 modal-success">

                <div className='modal-success-content'>
                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                        <rect width="150" height="150" rx="75" fill="white" />
                        <path d="M120.916 50.6957L120.889 50.6646L111.589 41.5203C110.135 40.0666 108.164 39.2483 106.108 39.2446C104.051 39.241 102.078 40.0523 100.618 41.5009L65.6423 76.0222L52.4836 63.2559C51.0231 61.8113 49.05 61.0035 46.9957 61.0094C44.9414 61.0152 42.9729 61.8341 41.5206 63.287L32.1937 72.614C30.7389 74.0712 29.9219 76.0461 29.9219 78.1052C29.9219 80.1643 30.7389 82.1392 32.1937 83.5964L60.0268 111.577C60.7485 112.299 61.6055 112.872 62.5487 113.263C63.4919 113.654 64.5028 113.855 65.5238 113.855C66.5448 113.855 67.5557 113.654 68.4989 113.263C69.4421 112.872 70.2991 112.299 71.0209 111.577L120.916 61.6859C122.373 60.2284 123.192 58.2518 123.192 56.1908C123.192 54.1298 122.373 52.1532 120.916 50.6957ZM65.5219 103.886L39.8845 78.1091L47.0196 70.9623L62.4284 85.8815C63.3039 86.7295 64.4765 87.2011 65.6953 87.1953C66.9141 87.1894 68.0822 86.7067 68.9495 85.8504L106.09 49.1995L113.21 56.1947L65.5219 103.886Z" fill="#EAAD20" />
                    </svg>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default SuccessModal

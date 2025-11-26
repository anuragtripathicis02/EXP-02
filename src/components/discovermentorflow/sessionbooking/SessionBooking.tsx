'use client'
import Link from 'next/link'
import Image from "next/image";
import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "rsuite/dist/rsuite.min.css";
import { DatePicker, TimePicker } from "rsuite";

import UserImg from '../../../../public/images/discover-users-img-1.png'
import Coin from '../../../../public/images/icon-coin.svg'

import ConfirmSchedule from '@/components/modalcomponents/ConfirmSchedule';
import SuccessModal from '@/components/modalcomponents/SuccessModal';
import BookingSummary from '@/components/modalcomponents/BookingSummary';


const SessionBooking = () => {

    // STATES
    const [showConfirmShedule, setShowConfirmShedule] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showBookingSummary, setShowBookingSummary] = useState(false);


    // OPEN first modal
    const handleConfirmShedule = () => {
        setShowConfirmShedule(true);
    };

    // CLOSE first modal
    const handleCloseAll = () => {
        setShowConfirmShedule(false);
    };

    // OPEN second modal + auto close
    const showSuccess = () => {
        setShowConfirmShedule(false);  // close ConfirmSchedule
        setShowSuccessModal(true);     // open SuccessModal

        setTimeout(() => {
            setShowSuccessModal(false);   // close success modal
            setShowBookingSummary(true);  // open booking summary modal
        }, 2000);
    };

    return (
        <div className='sec-book-your-session py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='card-session'>
                            <h3 className='card-ttl'>Session Titles</h3>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Write Session title"
                                className="mb-40"

                            >
                                <Form.Control type="email" placeholder="Johnsmith1001@gmail.com" />
                            </FloatingLabel>

                            <h3 className='card-ttl'>Schedule Session</h3>
                            <div className='bg-booking-session'>
                                <div className='card-boardred'>
                                    <div className='time-box mb-4'>
                                        <label className="time-label">Session Date</label>
                                        <div className='date-box'>
                                            <DatePicker oneTap placeholder="Select date" />
                                        </div>
                                    </div>
                                    <div className='row gx-2'>
                                        <div className="col-6 mb-3">
                                            <div className="time-box">
                                                <label className="time-label">From Hour</label>
                                                <TimePicker
                                                    format="hh:mm aa"
                                                    appearance="subtle"
                                                    placeholder="Select"
                                                    style={{ width: "100%" }}
                                                    {...({ hideSeconds: true, showMeridian: true } as any)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <div className="time-box">
                                                <label className="time-label">To Hour</label>
                                                <TimePicker
                                                    format="hh:mm aa"
                                                    appearance="subtle"
                                                    placeholder="Select"
                                                    style={{ width: "100%" }}
                                                    {...({ hideSeconds: true, showMeridian: true } as any)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='foot-booking text-center'>
                                    Booking Session for : <b>30Min</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='ps-md-4'>
                            <h3 className='card-ttl'>Booking Summary</h3>
                            <div className='summery-box mb-32'>
                                <h4>Your Mentor</h4>
                                <div className="mentor">
                                    <Image src={UserImg} alt='' />
                                    <div className='flex-grow-1'>
                                        <h3>Dr. Alex Chen</h3>
                                        <p>Data Scientist at Innovate Inc.</p>
                                        <span className="coin">
                                            <span className='d-flex align-items-center'><Image src={Coin} alt='' /> 100/hr EXP Coin </span>
                                        </span>
                                    </div>
                                </div>

                                <div className="summery-details">
                                    <ul>
                                        <li className='d-flex align-items-center justify-content-between'>
                                            <span className='text-start'>Session Date:</span> <span className='text-end'><b>Dec 5, 2025</b></span>
                                        </li>
                                        <li className='d-flex align-items-center justify-content-between'>
                                            <span className='text-start'>Session Time</span> <span className='text-end'><b>10:00 AM - 11:00 AM</b></span>
                                        </li>
                                        <li className='d-flex align-items-center justify-content-between'>
                                            <span className='text-start'>Session Duration</span> <span className='text-end'><b>2 hrs</b></span>
                                        </li>
                                    </ul>

                                </div>

                                <div className="fee">
                                    <ul className='mb-0'>
                                        <li className='d-flex align-items-center justify-content-between'>
                                            <span className='text-start'>
                                                <h2 className='mb-0'>Total fee</h2>
                                            </span>
                                            <span className='text-end'>
                                                <Image src={Coin} alt='' /> 200
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <button className='btn-theme btn-yellow w-100' onClick={handleConfirmShedule}>
                                Confirm Booking
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <ConfirmSchedule
                show={showConfirmShedule}
                handleClose={handleCloseAll}
                openNext={showSuccess}
            />

            <SuccessModal
                show={showSuccessModal}
                handleClose={() => setShowSuccessModal(false)}
            />

            <BookingSummary
                show={showBookingSummary}
                handleClose={() => setShowBookingSummary(false)}
            />

        </div>
    )
}

export default SessionBooking

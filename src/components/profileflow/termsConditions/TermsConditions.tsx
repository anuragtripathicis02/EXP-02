import React from 'react'

const TermsConditions = () => {
  return (
    <div className='default-sec py-4'>
        <div className='container'>
            <div className='text-box mb-4'>
                <h2>1. Eligibility & Registration</h2>
                <p className='p-0 m-0'>You must be at least 16 years old to register.A valid government-issued ID is required for identity verification. All information provided must be accurate and up to date.</p>
            </div>
            <div className='text-box mb-4'>
                <h2>2. Account Use & Responsibilities</h2>
                <p className='p-0 m-0'>You are responsible for maintaining the confidentiality of your login credentials. You may not impersonate others or create multiple accounts for fraudulent purposes .Misuse of the platform may result in suspension or termination.</p>
            </div>
            <div className='text-box mb-4'>
                <h2>3. Mentor Discovery & Booking</h2>
                <p className='p-0 m-0'>You can search, filter, and view mentor profiles based on expertise, ratings, and availability. Bookings are made using the platform’s virtual currency (“Cookies”).Booking confirmation is subject to mentor availability and platform approval.</p>
            </div>
            <div className='text-box mb-4'>
                <h2>4. Payments & Refunds</h2>
                <p className='p-0 m-0'>“EXP Coin” are purchased via secure payment gateways (e.g., Stripe).All transactions are in USD. Refunds are not provided for unused EXP Coin unless required by law.You are responsible for ensuring sufficient balance before booking.</p>
            </div>
        </div>
    </div>
  )
}

export default TermsConditions
import React from 'react'

const PrivacyPolicies = () => {
  return (
    <div className='default-sec py-4'>
        <div className='container'>
            <div className='text-box mb-4'>
                <h2>1. Data We Collect</h2>
                <p className='p-0 m-0'>We collect the following personal information during registration and usage:</p>
                <ul>
                    <li>Full name, email, phone number</li>
                    <li>Government-issued ID (for verification)</li>
                    <li>Profile details (interests, education, goals)</li>
                    <li>Session history, messages, and booking records</li>
                    <li>Payment data (via Stripe, not stored by us)</li>
                </ul>
            </div>
            <div className='text-box mb-4'>
                <h2>2. How We Use Your Data</h2>
                <ul>
                    <li>Your data is used to: Verify your identity and protect platform integrity</li>
                    <li>Match you with relevant mentors</li>
                    <li>Facilitate bookings and payments</li>
                    <li>Improve platform features and user experience</li>
                    <li>Send notifications (session updates, verification status)</li>
                </ul>
            </div>
            <div className='text-box mb-4'>
                <h2>3. Data Storage & Security</h2>
                <ul>
                    <li>All sensitive data is encrypted at rest and in transit.</li>
                    <li>Identity documents are stored in a private, access-controlled AWS S3 bucket.</li>
                    <li>Our infrastructure complies with SOC 2, ISO 27001, and GDPR standards</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PrivacyPolicies
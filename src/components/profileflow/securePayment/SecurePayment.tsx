import React from 'react'

const SecurePayment = () => {
  return (
    <div className='default-sec py-4'>
        <div className='container'>
            <div className='text-box mb-4'>
                <h2>1. How Payments Work</h2>
                <ul>
                    <li>You purchase EXP Coins, the platform’s virtual currency, to book mentorship sessions.</li>
                    <li>Payments are processed via Stripe Connect, a globally trusted payment gateway.</li>
                    <li>All transactions are in USD, securely encrypted and verified.</li>
                </ul>
            </div>
            <div className='text-box mb-4'>
                <h2>2. What We Never Store</h2>
                <ul>
                    <li>We do not store your card details, CVV, or banking credentials.</li>
                    <li>All sensitive payment data is handled directly by Stripe using PCI-DSS compliant infrastructure.</li>
                </ul>
            </div>
            <div className='text-box mb-4'>
                <h2>3. Encryption & Protection</h2>
                <ul>
                    <li>Payment data is encrypted using TLS 1.3 during transmission.</li>
                    <li>Stripe uses AES-256 encryption for data at rest.</li>
                    <li>Your EXP Coin balance and transaction history are stored securely in our backend, protected by SOC 2 and ISO 27001 certified systems.</li>
                </ul>
            </div>
            <div className='text-box mb-4'>
                <h2>4. Fraud Prevention & Monitoring</h2>
                <ul>
                    <li>Stripe’s fraud detection tools monitor every transaction in real time.</li>
                    <li>Suspicious activity is flagged and blocked automatically.</li>
                    <li>You’ll receive alerts for any failed or unusual payment attempts.</li>
                </ul>
            </div>
            <div className='text-box mb-4'>
                <h2>5. Refunds & Disputes</h2>
                <ul>
                    <li>Refunds for unused EXP Coins are not provided unless required by law.</li>
                    <li>If a session is canceled or not delivered, you may request a review via the Help section.</li>
                    <li>Disputes are handled transparently by our support team in coordination with Stripe.</li>
                </ul>
            </div>
            <div className='text-box mb-4'>
                <h2>6. Payouts to Mentors</h2>
                <ul>
                    <li>Mentor earnings are processed post-session, minus platform commission.</li>
                    <li>Payouts are handled via Stripe Connect and may include options like PayPal or bank transfer (coming soon).</li>
                    <li>You will never be asked to send money directly to a mentor.</li>
                </ul>
            </div>
            <div className='text-box mb-4'>
                <h2>7.  Your Rights & Controls</h2>
                <ul>
                    <li>You can view your full transaction history in the Wallet section.</li>
                    <li>You may remove saved payment methods at any time.</li>
                    <li>All payment actions require secure login and session validation.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SecurePayment
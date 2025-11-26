"use client";

const Encryption = () => {
  return (
    <>
    <div className='default-sec py-4'>
        <div className='container'>
            <div className='text-box mb-4'>
                <h2>1. Why Encryption Matters</h2>
                <p>We use encryption to protect your personal information—like your ID documents, messages, and payment history—from unauthorized access. It ensures your data stays private and secure, even if intercepted.</p>
            </div>
            <div className='text-box mb-4'>
                <h2>2. How Your Data Is Encrypted</h2>
                <ul>
                    <li>At Rest: All sensitive data (e.g., ID uploads, session logs) is encrypted using AES-256 before being stored in our private AWS S3 buckets.</li>
                    <li>In Transit: Data moving between your device and our servers is protected using TLS 1.3 (HTTPS), preventing eavesdropping or tampering.</li>
                    <li>Authentication Tokens: Your login sessions are secured using encrypted JWTs (JSON Web Tokens) issued via AWS Cognito.</li>
                </ul>
            </div>
            <div className='text-box mb-4'>
                <h2>3. Where Your Data Lives</h2>
                <ul>
                    <li>Your data is stored in secure, access-controlled environments hosted on AWS (Amazon Web Services).</li>
                    <li>Identity documents are stored in a private, non-public S3 bucket with strict access policies.</li>
                    <li>Only authorized admin roles can access encrypted data, and all access is logged and audited.</li>
                </ul>
            </div>
            <div className='text-box mb-4'>
                <h2>4. Who Can See What</h2>
                <ul>
                    <li>Mentors cannot see your ID or personal documents.</li>
                    <li>Admins can only access encrypted data for verification purposes.</li>
                    <li>Third parties (e.g., Stripe) only receive the minimum data needed to process payments—never your ID or session data.</li>
                </ul>
            </div>
            <div className='text-box mb-4'>
                <h2>5. How Long We Keep It</h2>
                <ul>
                    <li>Encrypted ID documents are deleted within 30 days of account closure.</li>
                    <li>Session and booking data is retained for 12 months, then purged.</li>
                    <li>You can request deletion of your data at any time via the Privacy Settings.</li>
                </ul>
            </div>
            <div className='text-box mb-4'>
                <h2>6. Our Certifications & Compliance</h2>
                <p>Our infrastructure complies with:</p>
                <ul>
                    <li>SOC 2 Type II</li>
                    <li>ISO 27001</li>
                    <li>GDPR and CCPA data protection laws</li>
                </ul>
                <p className='p-0 m-0'>We regularly audit our encryption and access controls to maintain compliance.</p>
            </div>
        </div>
    </div>


    

    </>
  )
}

export default Encryption
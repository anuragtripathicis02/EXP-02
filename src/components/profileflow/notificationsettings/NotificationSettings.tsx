import React from 'react'

const NotificationSettings = () => {
  return (
    <div className='sec-notification py-4'>
      <div className='container'>
          <div className='setting-card'>
                <div className='setting-card-bg'>
                    <div className='setting-item d-flex align-items-center'>
                        <div className='me-auto'>
                            <h5>New Message Alert</h5>
                            <p className='m-0'>Get notified instantly when a new message arrives.</p>
                        </div>
                        <div className='ml-auto'>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='setting-item d-flex align-items-center'>
                        <div className='me-auto'>
                            <h5>Payment Alerts</h5>
                            <p className='m-0'>Receive updates for every successful or failed transaction.</p>
                        </div>
                        <div className='ml-auto'>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='setting-item d-flex align-items-center'>
                        <div className='me-auto'>
                            <h5>Push Notifications</h5>
                            <p className='m-0'>Stay informed about app updates, reminders, and alerts.</p>
                        </div>
                        <div className='ml-auto'>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='setting-item d-flex align-items-center'>
                        <div className='me-auto'>
                            <h5>Promotional Alerts</h5>
                            <p className='m-0'>Get exclusive offers, deals, and discounts directly from the app.</p>
                        </div>
                        <div className='ml-auto'>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default NotificationSettings

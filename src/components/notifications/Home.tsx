import React from 'react'
import HeaderTop from './HeaderTop'
import Link from 'next/link'
import NotificationsList from './NotificationsList'

const Home = () => {
  return (
    <div className='notification tabs-box-chat'>
      <HeaderTop />
        <div className='chat-list-sec'>
          <div className='head-chat-box'>
              <div className='container'>
                <div className='d-flex align-items-center justify-content-between gap-2 flex-wrap'>
                    <ul className='p-0 m-0 list-unstyled d-flex align-items-center gap-2'>
                        <li>
                            <Link href="" className='btn btn-white active'>All</Link>
                        </li>
                        <li>
                            <Link href="" className='btn btn-white'>Read</Link>
                        </li>
                        <li>
                            <Link href="" className='btn btn-white'>Unread</Link>
                        </li>
                    </ul>
                    <div className='right-box'>
                      <Link href="" className='link-text'>Mark all as read</Link>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div className='list-notification-sec pt-4 pb-4'>
          <div className='container'>
            <NotificationsList />
          </div>
        </div>
    </div>
  )
}

export default Home

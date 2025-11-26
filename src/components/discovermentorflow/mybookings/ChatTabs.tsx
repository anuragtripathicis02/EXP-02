'use client'
import React, { useRef, useState } from 'react'
import Image from "next/image";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Upcoming from './Upcoming';
import Past from './Past';

const ChatTabs = () => {
  return (
    <div className='chat-box-tab-sec pb-4'>
      
        <div className='tabs-box-chat booking-tabs'>
            <Tabs defaultActiveKey="Chat" id="Chat-tabs" className="container grey-bg-tabs d-flex align-items-center">
                <Tab eventKey="Chat" title="Upcoming">
                    <Upcoming/>
                </Tab>
                <Tab eventKey="Invitations" title="Past">
                  <Past/>
                </Tab>
            </Tabs>
        </div>
      </div>
  )
}

export default ChatTabs
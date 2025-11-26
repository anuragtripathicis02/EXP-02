'use client'
import React, { useRef, useState } from 'react'
import Image from "next/image";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Chat from './Chat';
import Invitations from './Invitations';
import Blocked from './Blocked';

const ChatTabs = () => {
  return (
    <div className='chat-box-tab-sec pb-4'>
        <div className='tabs-box-chat'>
            <Tabs defaultActiveKey="Chat" id="Chat-tabs" className="container grey-bg-tabs d-flex align-items-center">
                <Tab eventKey="Chat" title="Chat">
                    <Chat />
                </Tab>
                <Tab eventKey="Invitations" title="Invitations 10">
                    <Invitations />
                </Tab>
                <Tab eventKey="Blocked" title="Blocked">
                    <Blocked />
                </Tab>
            </Tabs>
        </div>
      </div>
  )
}

export default ChatTabs
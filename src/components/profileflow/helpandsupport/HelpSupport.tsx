'use client'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link'

const HelpSupport = () => {
  return (
    <div className='sec-help-and-support py-4'>
      <div className='container'>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>How to find an expert?</Accordion.Header>
              <Accordion.Body>
                <p className='mb-0'>Lorem ipsum dolor sit amet consectetur. Suscipit dignissim in id elementum amet. Ullamcorper vulputate consequat vel vestibulum. Pellentesque aenean nulla fringilla egestas tempus ac. Duis rutrum convallis metus ut quisque non. Tempus eu faucibus sit non diam. Molestie sed mollis augue sagittis vel integer mauris. Vitae nulla lorem aliquet sed tincidunt et neque. Ante nec tincidunt vitae condimentum. Nisl sit volutpat nisl neque odio dictum dictumst. Laoreet diam purus feugiat sit nec mollis vestibulum auctor bibendum. Facilisi lorem dolor luctus mauris enim. Mauris felis mi amet pretium. Tempus neque phasellus in suspendisse.
                  Purus iaculis natoque odio volutpat leo tortor. Viverra placerat turpis at odio tristique dignissim eget eu. Habitasse erat tincidunt enim mattis. Turpis ullamcorper morbi enim quis fames nullam. Neque blandit volutpat ac at quis in ultrices ullamcorper auctor. Aliquam a mauris bibendum elit purus nisl. Pharetra dignissim malesuada lectus senectus in id ullamcorper arcu congue. Ultrices integer vitae elementum eget sit pretium amet. Purus massa amet maecenas scelerisque neque. Id egestas id ultrices cras vulputate justo egestas.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How to find an expert?</Accordion.Header>
              <Accordion.Body>
                <p className='mb-0'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How to find an expert?</Accordion.Header>
              <Accordion.Body>
                <p className='mb-0'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
      </div>
    </div>
  )
}

export default HelpSupport

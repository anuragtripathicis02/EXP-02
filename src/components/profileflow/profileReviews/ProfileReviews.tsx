"use client";
import React from "react";
import Image from "next/image";
import ReviewProfile from "../../../../public/images/review-profile.png";
import Link from "next/link";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MyPost from "./MyPost";
import Reviews from "./Reviews";

const ProfileReviews = () => {
  return (
    <div className="sec-profile-post py-4">
      <div className="container">
        <div className="profile-header">
          <Image src={ReviewProfile} alt="" />
          <div className="flex-grow-1">
            <h3>Dr. Alex Chen</h3>
            <Link href="mailto:alex.chen@gmail.com" className="email">
              alex.chen@gmail.com
            </Link>
          </div>
          <button className="edit-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M17.7586 5.73206L14.268 2.24065C14.1519 2.12455 14.0141 2.03245 13.8624 1.96961C13.7107 1.90678 13.5482 1.87444 13.384 1.87444C13.2198 1.87444 13.0572 1.90678 12.9056 1.96961C12.7539 2.03245 12.6161 2.12455 12.5 2.24065L2.86641 11.875C2.74983 11.9907 2.65741 12.1284 2.59451 12.28C2.5316 12.4317 2.49948 12.5944 2.50001 12.7586V16.25C2.50001 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41849 17.5 3.75001 17.5H7.24141C7.40563 17.5006 7.56831 17.4684 7.71999 17.4055C7.87168 17.3426 8.00935 17.2502 8.12501 17.1336L17.7586 7.50003C17.8747 7.38395 17.9668 7.24614 18.0296 7.09446C18.0925 6.94279 18.1248 6.78022 18.1248 6.61604C18.1248 6.45187 18.0925 6.2893 18.0296 6.13762C17.9668 5.98595 17.8747 5.84814 17.7586 5.73206ZM7.24141 16.25H3.75001V12.7586L10.625 5.88362L14.1164 9.37503L7.24141 16.25ZM15 8.49065L11.5086 5.00003L13.3836 3.12503L16.875 6.61565L15 8.49065Z"
                fill="currentColor"/>
            </svg>
            Edit
          </button>
        </div>
        <div className="profile-tabs-sec">
            <Tabs defaultActiveKey="MyPost" id="uncontrolled-tab-example" className="tabs-head">
                <Tab eventKey="MyPost" title={<div className="flex items-center gap-2"><span className="name-box">My Post </span><span className="review-box">(240)</span></div>}>
                    <MyPost />
                </Tab>
                <Tab eventKey="Review" title={<div className="flex items-center gap-2"><span className="name-box">Reviews </span><span className="review-box">(300)</span></div>}>
                 <Reviews />   
                </Tab>
            </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfileReviews;

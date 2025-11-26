'use client'
import Image from "next/image";
import Link from 'next/link'
import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

import WalletCoin from '../../../../public/images/wallet-coin.svg'
import ProfleImg from '../../../../public/images/profil-01.png'

import Coin from '../../../../public/images/Coin.svg'
import TransitionImg from '../../../../public/images/transition-img.png'

import AddMoney from "@/components/modalcomponents/AddMoney";
import ConfirmationBeforePayment from "@/components/modalcomponents/ConfirmationBeforePayment";
import SuccessModal from "@/components/modalcomponents/SuccessModal";
import CoinsAddedSuccessfully from "@/components/modalcomponents/CoinsAddedSuccessfully";

const MyTransections = () => {

 const [showAddMony, setShowAddMony] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCoinsSuccess, setShowCoinsSuccess] = useState(false);


  // 1st
  const handleAddMony = () => setShowAddMony(true);

  // 2nd
  const handleOpenConfirm = () => {
    setShowAddMony(false);
    setShowConfirm(true);
  };

  // 3rd
  const handleSuccess = () => {
    setShowConfirm(false);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false)
      setShowCoinsSuccess(true)
    }, 2000);
  };


  const handleCloseAll = () => {
    setShowAddMony(false);
    setShowConfirm(false);
    setShowSuccess(false);
    setShowCoinsSuccess(false);
  }

  return (
    <div className='sec-account my-transection py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className="wallet-card">
              <h3 className="wallet-title">MY BALANCE</h3>
              <div className="d-flex">
                <Image src={WalletCoin} alt="" />
                <div className="wallet-text-right">
                  <h4>12,500</h4>
                  <p className="wallet-sub"><strong>EXP Coins</strong>  (1EXP = 1$USD)</p>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center wallet-group-btn">
              <Link href="javascript:void(0)" className="btn-theme w-100 wallet-btn left-btn" onClick={handleAddMony}>Buy EXP Coin
              </Link>
              <Link href="" className="btn-theme w-100 wallet-btn right-btn">Convert Coins
              </Link>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='transections-sec'>
            <div className='head-transections d-flex align-items-center gap-2 justify-content-between'>
                <h2>Transections</h2>
                <div className='filter-box'>
                    <Dropdown>
                        <Dropdown.Toggle className="ic-box d-flex align-items-center gap-2 justify-content-center btn-grey">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6197 4.64346C21.5043 4.37675 21.313 4.14986 21.0696 3.99101C20.8263 3.83216 20.5416 3.74836 20.251 3.75002H3.75095C3.46064 3.7506 3.17673 3.8354 2.93366 3.99416C2.6906 4.15291 2.49883 4.37879 2.38161 4.64438C2.26439 4.90998 2.22677 5.20389 2.2733 5.49045C2.31984 5.77701 2.44853 6.04391 2.64376 6.25877L2.65126 6.26721L9.00095 13.0472V20.25C9.00089 20.5215 9.0745 20.7879 9.21395 21.0208C9.35339 21.2538 9.55344 21.4445 9.79275 21.5727C10.0321 21.7008 10.3017 21.7617 10.5729 21.7486C10.844 21.7356 11.1066 21.6493 11.3325 21.4988L14.3325 19.4981C14.5382 19.3612 14.7068 19.1755 14.8234 18.9576C14.94 18.7398 15.001 18.4965 15.001 18.2494V13.0472L21.3516 6.26721L21.3591 6.25877C21.5564 6.04489 21.6863 5.77764 21.7327 5.49037C21.779 5.2031 21.7397 4.90854 21.6197 4.64346ZM13.7053 12.2419C13.5756 12.3795 13.5026 12.5609 13.501 12.75V18.2494L10.501 20.25V12.75C10.501 12.5596 10.4286 12.3762 10.2985 12.2372L3.75095 5.25002H20.251L13.7053 12.2419Z" fill="currentColor"/></svg>
                            <span>Filters</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align={'end'}>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className='transections-bottom'>
                <div className='transections-card yellow-card d-flex align-items-center gap-2 justify-content-between'>
                    <div className='left-transections d-flex align-items-center gap-2'>
                        <div className='icons-box'>
                            <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 4.03437V1.25C11.25 0.918479 11.1183 0.600537 10.8839 0.366116C10.6495 0.131696 10.3315 0 10 0H1.25C0.918479 0 0.600537 0.131696 0.366116 0.366116C0.131696 0.600537 0 0.918479 0 1.25V4.0625C0.000422258 4.25648 0.045789 4.44773 0.13254 4.62123C0.219292 4.79473 0.345068 4.94577 0.5 5.0625L4.58359 8.125L0.5 11.1875C0.345068 11.3042 0.219292 11.4553 0.13254 11.6288C0.045789 11.8023 0.000422258 11.9935 0 12.1875V15C0 15.3315 0.131696 15.6495 0.366116 15.8839C0.600537 16.1183 0.918479 16.25 1.25 16.25H10C10.3315 16.25 10.6495 16.1183 10.8839 15.8839C11.1183 15.6495 11.25 15.3315 11.25 15V12.2156C11.2496 12.0224 11.2046 11.8319 11.1185 11.6588C11.0325 11.4858 10.9077 11.3349 10.7539 11.218L6.66172 8.125L10.7539 5.03125C10.9078 4.91452 11.0326 4.76382 11.1187 4.5909C11.2047 4.41798 11.2497 4.22752 11.25 4.03437ZM1.25 1.25H10V4.03437L9.54922 4.375H1.66641L1.25 4.0625V1.25ZM5.625 7.34375L3.33359 5.625H7.89609L5.625 7.34375ZM10 15H1.25V12.1875L5 9.375V11.25C5 11.4158 5.06585 11.5747 5.18306 11.6919C5.30027 11.8092 5.45924 11.875 5.625 11.875C5.79076 11.875 5.94973 11.8092 6.06694 11.6919C6.18415 11.5747 6.25 11.4158 6.25 11.25V9.38125L10 12.2156V15Z" fill="#D59D1D"/></svg>
                        </div>
                        <div className='text-box'>
                            <h5>Withdrawal to Bank</h5>
                            <p className='m-0 p-0'>19th Mar, 5:40 pm</p>
                        </div>
                    </div>
                    <div className='right-transections text-end'>
                        <div className='transections-text d-flex align-items-center justify-content-end gap-1'>
                            <Image src={Coin} alt=''></Image>
                            <span>950</span>
                        </div>
                        <span className='text-bottom '>In Progress</span>
                    </div>
                </div>
                <div className='transections-card green-card d-flex align-items-center gap-2 justify-content-between'>
                    <div className='left-transections d-flex align-items-center gap-2'>
                        <div className='icons-box'>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6922 5.80781C11.7503 5.86586 11.7964 5.93479 11.8279 6.01066C11.8593 6.08654 11.8755 6.16787 11.8755 6.25C11.8755 6.33213 11.8593 6.41346 11.8279 6.48934C11.7964 6.56521 11.7503 6.63414 11.6922 6.69219L7.31719 11.0672C7.25915 11.1253 7.19022 11.1714 7.11434 11.2029C7.03847 11.2343 6.95714 11.2505 6.875 11.2505C6.79287 11.2505 6.71154 11.2343 6.63567 11.2029C6.55979 11.1714 6.49086 11.1253 6.43282 11.0672L4.55782 9.19219C4.44054 9.07491 4.37466 8.91585 4.37466 8.75C4.37466 8.58415 4.44054 8.42509 4.55782 8.30781C4.67509 8.19054 4.83415 8.12465 5 8.12465C5.16586 8.12465 5.32492 8.19054 5.44219 8.30781L6.875 9.74141L10.8078 5.80781C10.8659 5.7497 10.9348 5.7036 11.0107 5.67215C11.0865 5.6407 11.1679 5.62451 11.25 5.62451C11.3321 5.62451 11.4135 5.6407 11.4893 5.67215C11.5652 5.7036 11.6341 5.7497 11.6922 5.80781ZM16.25 8.125C16.25 9.73197 15.7735 11.3029 14.8807 12.639C13.9879 13.9752 12.719 15.0166 11.2343 15.6315C9.74966 16.2465 8.11599 16.4074 6.53989 16.0939C4.9638 15.7804 3.51606 15.0065 2.37976 13.8702C1.24346 12.7339 0.469628 11.2862 0.156123 9.71011C-0.157382 8.13401 0.00352044 6.50035 0.618482 5.0157C1.23344 3.53105 2.27485 2.2621 3.611 1.36931C4.94714 0.476523 6.51803 0 8.125 0C10.2792 0.00227486 12.3445 0.85903 13.8677 2.38227C15.391 3.90551 16.2477 5.97081 16.25 8.125ZM15 8.125C15 6.76525 14.5968 5.43604 13.8414 4.30545C13.0859 3.17487 12.0122 2.29368 10.756 1.77333C9.49971 1.25298 8.11738 1.11683 6.78376 1.3821C5.45014 1.64737 4.22513 2.30215 3.26364 3.26364C2.30216 4.22513 1.64738 5.45013 1.3821 6.78375C1.11683 8.11737 1.25298 9.49971 1.77333 10.7559C2.29368 12.0122 3.17487 13.0859 4.30546 13.8414C5.43605 14.5968 6.76526 15 8.125 15C9.94773 14.9979 11.6952 14.2729 12.9841 12.9841C14.2729 11.6952 14.9979 9.94773 15 8.125Z" fill="#3EA924"/></svg>
                        </div>
                        <div className='text-box'>
                            <h5>Withdrawal to Bank</h5>
                            <p className='m-0 p-0'>19th Mar, 5:40 pm</p>
                        </div>
                    </div>
                    <div className='right-transections text-end'>
                        <div className='transections-text d-flex align-items-center justify-content-end gap-1'>
                            <Image src={Coin} alt=''></Image>
                            <span>950</span>
                        </div>
                        <span className='text-bottom '>Completed</span>
                    </div>
                </div>
                <div className='transections-card red-card d-flex align-items-center gap-2 justify-content-between'>
                    <div className='left-transections d-flex align-items-center gap-2'>
                        <div className='icons-box'>
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2508 12.8196L10.4188 0.954739C10.2481 0.664055 10.0044 0.423035 9.71178 0.255567C9.41921 0.0880999 9.08795 0 8.75084 0C8.41373 0 8.08247 0.0880999 7.78989 0.255567C7.49732 0.423035 7.25359 0.664055 7.08287 0.954739L0.250838 12.8196C0.0865693 13.1007 0 13.4205 0 13.7461C0 14.0718 0.0865693 14.3915 0.250838 14.6727C0.419377 14.9651 0.66269 15.2075 0.955808 15.3748C1.24893 15.5422 1.58129 15.6286 1.91881 15.6251H15.5829C15.9201 15.6283 16.2522 15.5418 16.545 15.3744C16.8378 15.2071 17.0809 14.9649 17.2493 14.6727C17.4138 14.3917 17.5006 14.072 17.5009 13.7464C17.5012 13.4207 17.4149 13.1009 17.2508 12.8196ZM16.1672 14.0469C16.1077 14.1485 16.0222 14.2325 15.9195 14.2901C15.8168 14.3478 15.7006 14.3771 15.5829 14.3751H1.91881C1.80105 14.3771 1.68488 14.3478 1.58219 14.2901C1.4795 14.2325 1.39399 14.1485 1.33443 14.0469C1.28048 13.9556 1.25202 13.8514 1.25202 13.7454C1.25202 13.6393 1.28048 13.5351 1.33443 13.4438L8.16646 1.57896C8.22723 1.47784 8.31312 1.39417 8.4158 1.33608C8.51847 1.278 8.63443 1.24747 8.7524 1.24747C8.87037 1.24747 8.98633 1.278 9.089 1.33608C9.19168 1.39417 9.27758 1.47784 9.33834 1.57896L16.1704 13.4438C16.2238 13.5354 16.2518 13.6397 16.2512 13.7458C16.2507 13.8519 16.2217 13.9559 16.1672 14.0469ZM8.12584 9.37505V6.25005C8.12584 6.08429 8.19169 5.92532 8.3089 5.80811C8.42611 5.6909 8.58508 5.62505 8.75084 5.62505C8.9166 5.62505 9.07557 5.6909 9.19278 5.80811C9.30999 5.92532 9.37584 6.08429 9.37584 6.25005V9.37505C9.37584 9.54081 9.30999 9.69978 9.19278 9.81699C9.07557 9.9342 8.9166 10.0001 8.75084 10.0001C8.58508 10.0001 8.42611 9.9342 8.3089 9.81699C8.19169 9.69978 8.12584 9.54081 8.12584 9.37505ZM9.68834 12.1876C9.68834 12.373 9.63335 12.5542 9.53034 12.7084C9.42733 12.8626 9.28091 12.9827 9.1096 13.0537C8.9383 13.1246 8.7498 13.1432 8.56794 13.107C8.38608 13.0709 8.21904 12.9816 8.08793 12.8505C7.95681 12.7194 7.86753 12.5523 7.83135 12.3704C7.79518 12.1886 7.81374 12.0001 7.8847 11.8288C7.95566 11.6575 8.07582 11.5111 8.22999 11.408C8.38416 11.305 8.56542 11.2501 8.75084 11.2501C8.99948 11.2501 9.23793 11.3488 9.41375 11.5246C9.58957 11.7005 9.68834 11.9389 9.68834 12.1876Z" fill="#DF1738"/></svg>
                        </div>
                        <div className='text-box'>
                            <h5>Withdrawal to Bank</h5>
                            <p className='m-0 p-0'>19th Mar, 5:40 pm</p>
                        </div>
                    </div>
                    <div className='right-transections text-end'>
                        <div className='transections-text d-flex align-items-center justify-content-end gap-1'>
                            <Image src={Coin} alt=''></Image>
                            <span>200</span>
                        </div>
                        <span className='text-bottom '>Failed</span>
                    </div>
                </div>
                <div className='transections-card green-card d-flex align-items-center gap-2 justify-content-between'>
                    <div className='left-transections d-flex align-items-center gap-2'>
                        <div className='icons-box'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.33296 12.0004L0.666295 12.0004C0.489484 12.0004 0.319914 11.9301 0.194889 11.8051C0.0698652 11.6801 -0.000372158 11.5105 -0.00037215 11.3337L-0.000371771 2.66704C-0.000371764 2.49023 0.0698656 2.32066 0.19489 2.19563C0.319914 2.07061 0.489484 2.00037 0.666295 2.00037C0.843106 2.00037 1.01268 2.07061 1.1377 2.19563C1.26272 2.32066 1.33296 2.49023 1.33296 2.66704L1.33296 9.72454L10.8613 0.195371C10.9864 0.0702769 11.1561 -3.82082e-08 11.333 -2.91571e-08C11.5099 -2.01061e-08 11.6795 0.0702769 11.8046 0.195371C11.9297 0.320464 12 0.490128 12 0.667037C12 0.843947 11.9297 1.01361 11.8046 1.1387L2.27546 10.667L9.33296 10.667C9.50977 10.667 9.67934 10.7373 9.80437 10.8623C9.92939 10.9873 9.99963 11.1569 9.99963 11.3337C9.99963 11.5105 9.92939 11.6801 9.80437 11.8051C9.67934 11.9301 9.50977 12.0004 9.33296 12.0004Z" fill="#3EA924"/></svg>
                        </div>
                        <div className='text-box'>
                            <h5>Received from Session</h5>
                            <div className='text-transections d-flex align-items-center gap-1'>
                                <p className='m-0 p-0'>19th Mar, 5:40 pm </p>
                                <p className='d-flex align-items-center m-0 p-0 gap-1'><i>From </i> <span className='img'><Image src={TransitionImg} alt=''></Image></span> <i>Ashley</i></p>
                            </div>
                        </div>
                    </div>
                    <div className='right-transections text-end'>
                        <div className='transections-text d-flex align-items-center justify-content-end gap-1'>
                            <Image src={Coin} alt=''></Image>
                            <span>200</span>
                        </div>
                        <span className='text-bottom '>Credited</span>
                    </div>
                </div>
                <div className='transections-card green-card d-flex align-items-center gap-2 justify-content-between'>
                    <div className='left-transections d-flex align-items-center gap-2'>
                        <div className='icons-box'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.33296 12.0004L0.666295 12.0004C0.489484 12.0004 0.319914 11.9301 0.194889 11.8051C0.0698652 11.6801 -0.000372158 11.5105 -0.00037215 11.3337L-0.000371771 2.66704C-0.000371764 2.49023 0.0698656 2.32066 0.19489 2.19563C0.319914 2.07061 0.489484 2.00037 0.666295 2.00037C0.843106 2.00037 1.01268 2.07061 1.1377 2.19563C1.26272 2.32066 1.33296 2.49023 1.33296 2.66704L1.33296 9.72454L10.8613 0.195371C10.9864 0.0702769 11.1561 -3.82082e-08 11.333 -2.91571e-08C11.5099 -2.01061e-08 11.6795 0.0702769 11.8046 0.195371C11.9297 0.320464 12 0.490128 12 0.667037C12 0.843947 11.9297 1.01361 11.8046 1.1387L2.27546 10.667L9.33296 10.667C9.50977 10.667 9.67934 10.7373 9.80437 10.8623C9.92939 10.9873 9.99963 11.1569 9.99963 11.3337C9.99963 11.5105 9.92939 11.6801 9.80437 11.8051C9.67934 11.9301 9.50977 12.0004 9.33296 12.0004Z" fill="#3EA924"/></svg>
                        </div>
                        <div className='text-box'>
                            <h5>Received from Session</h5>
                            <div className='text-transections d-flex align-items-center gap-1'>
                                <p className='m-0 p-0'>19th Mar, 5:40 pm </p>
                                <p className='d-flex align-items-center m-0 p-0 gap-1'><i>From </i> <span className='img'><Image src={TransitionImg} alt=''></Image></span> <i>Ashley</i></p>
                            </div>
                        </div>
                    </div>
                    <div className='right-transections text-end'>
                        <div className='transections-text d-flex align-items-center justify-content-end gap-1'>
                            <Image src={Coin} alt=''></Image>
                            <span>600</span>
                        </div>
                        <span className='text-bottom '>Credited</span>
                    </div>
                </div>
            </div>
        </div>
          </div>
        </div>
      </div>

      <AddMoney 
        show={showAddMony} 
        handleClose={handleCloseAll}
        openNext={handleOpenConfirm}
      />

      <ConfirmationBeforePayment
        show={showConfirm}
        handleClose={handleCloseAll}
        openNext={handleSuccess}
      />

      <SuccessModal
        show={showSuccess}
        handleClose={handleCloseAll}
      />

      <CoinsAddedSuccessfully
        show={showCoinsSuccess}
        handleClose={handleCloseAll}
      />


    </div>
  )
}

export default MyTransections

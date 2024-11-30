'use client'
import React, { useState } from 'react';
import shareIcon from "@/app/images/shareicon.png"
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
} from 'react-share';
import Image from 'next/image';

const ShareButton = ({ title, customUrl }) => {
    const [isActive, setIsActive] = useState(false);    

    const currentUrl = customUrl || window?.location?.href;
    
    const toggleShare = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`float-right `}>
            <div className={`size-[35px] ${isActive ? 'rotate-[-90deg] duration-200' : 'rotate-0 duration-100'}`}>
                <button
                    aria-label="share"
                    className={` ${isActive ? 'active' : ''}`}
                    onClick={toggleShare}
                >
                    <Image src={shareIcon} fill alt="share" />
                </button>
            </div>
            <ul className={`social mt-4 list-none p-0 m-0  duration-100 ${isActive ? 'opacity-100 visible block transform-none' : 'hidden opacity-0 invisible translate-x-[150%] translate-y-[3rem]'}`}>
                <li className="mb-4">
                    <FacebookShareButton url={currentUrl} quote={title}>
                        <FacebookIcon size={40} round />
                    </FacebookShareButton>
                </li>
                <li className="mb-4">
                    <TwitterShareButton url={currentUrl} title={title}>
                        <TwitterIcon size={40} round />
                    </TwitterShareButton>
                </li>
                <li className="mb-4">
                    <LinkedinShareButton url={currentUrl} title={title}>
                        <LinkedinIcon size={40} round />
                    </LinkedinShareButton>
                </li>
                <li className="mb-4">
                    <WhatsappShareButton url={currentUrl} title={title}>
                        <WhatsappIcon size={40} round />
                    </WhatsappShareButton>
                </li>
            </ul>
        </div>
    );
};

export default ShareButton;

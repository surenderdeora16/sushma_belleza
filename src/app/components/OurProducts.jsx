'use client'
import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable';
import Heading from '@/app/components/common/Heading'
import { motion } from 'framer-motion';
import Image from 'next/image'
import BuildIcn from '@/app/images/our-product-build-icon.svg'
import BuildMobileIcn from '@/app/images/ourprodunctsmobile-build-icn.svg'
import RupeeIcn from '@/app/images/our-product-rupee-icon.svg'
import RupeeMobileIcn from '@/app/images/ourprodunctsmobile-rupees-icn.svg'
import keyIcn from '@/app/images/our-product-keyicon.svg'
import keyMobileIcn from '@/app/images/ourprodunctsmobile-key-icn.svg'

import Marquee from 'react-fast-marquee';
import dynamic from 'next/dynamic';
const ShareButton = dynamic(() => import('@/app/components/common/ShareButton'), { ssr: false });
const ModalEnquiryForm = dynamic(() => import('@/app/components/common/ModalEnquiryForm'), { ssr: false });


import { toast } from 'react-toastify';
import { useActivetab } from '@/app/context/ActiveTabContext';

const data = {
    '3BHK': {
        image: '/images/ourproducts-bgimg.webp',
        type: 'Semi Furnished',
        heading: <>low <br className='hidden lg:block' /> Rise luxury Apartments</>,
        size: '2300',
        groundStorey: 'Ground + 4 Storey',
        handover: 'December 2027',
        flatStatus: 'Selling Fast',
        descHead: '',
        description: "Discover luxury living at Sushma Belleza Apartments and Villa Floors in Zirakpur, offering premium residences with modern amenities and elegant designs for an unparalleled lifestyle experience.",
        price: 'On Request',
        offer: 'Ask us for the best offers',
    },
    '3BHK+S': {
        image: '/images/ourproducts-bgimg2.webp',
        type: 'SEMI FURNISHED',
        heading: <>High <br className='hidden lg:block' /> Rise luxury Apartments</>,
        size: '2800',
        groundStorey: 'Ground + 19 Storey',
        handover: 'December 2027',
        flatStatus: 'Selling Fast',
        descHead: '',
        description: "Discover luxury living at Sushma Belleza Apartments and Villa Floors in Zirakpur, offering premium residences with modern amenities and elegant designs for an unparalleled lifestyle experience.",
        price: 'on Request',
        offer: 'Ask us for the best offers ',
    },
    '4BHK+S': {
        image: '/images/ourproducts-bgimg3.webp',
        type: 'SEMI FURNISHED',
        heading: <>High <br className='hidden lg:block' /> Rise luxury Apartments</>,
        size: '3400',
        groundStorey: 'Ground + 19 Storey',
        handover: 'December 2027',
        flatStatus: 'Selling Fast',
        descHead: '',
        description: "Discover luxury living at Sushma Belleza Apartments and Villa Floors in Zirakpur, offering premium residences with modern amenities and elegant designs for an unparalleled lifestyle experience.",
        price: 'on Request',
        offer: 'Ask us for the best offers ',
    },
};

const OurProducts = () => {
    const { activeSectionTab } = useActivetab()
    const [selectedOption, setSelectedOption] = useState('3BHK');
    const [visible, setVisible] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [event, setEvent] = useState('Our Products')
    const [FormHeading, setFormHeading] = useState('We Are Excited To Meet You')
    const [funcRunStatus, setFuncRunStatus] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset'; // Enable scrolling
    };

    const handleDownloadBrochure = () => {
        const link = document.createElement('a');
        link.href = `${process.env.basePath}/download/BROCHURE.pdf`; // Link to your PDF
        link.download = 'thesushmabelleza-Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success('PDF downloaded successfully!');
    };


    const options = Object.keys(data);

    const handleNext = () => {
        const currentIndex = options.indexOf(selectedOption);
        const nextIndex = (currentIndex + 1) % options.length;
        console.log(options[nextIndex])
        setSelectedOption(options[nextIndex]);
    };

    const handlePrev = () => {
        const currentIndex = options.indexOf(selectedOption);
        const prevIndex = (currentIndex - 1 + options.length) % options.length;
        setSelectedOption(options[prevIndex]);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Share This Content',
                    text: 'Check out this amazing content!',
                    url: window?.location.href, // Share current page URL
                });
                console.log('Content shared successfully');
            } catch (error) {
                console.error('Error sharing content:', error);
            }
        } else {
            console.log('Web Share API not supported');
        }
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = '9988010405';
        const message = 'Hi I am interested in *Sushma Belleza*. Please send more detail';

        const encodedMessage = encodeURIComponent(message);

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        if (typeof window !== 'undefined') {
            window.location.href = whatsappUrl;
        }
    };

    useEffect(() => {
        console.log('activeSectionTab', activeSectionTab)
        if (activeSectionTab) {
            if (activeSectionTab == '3BHK') {
                setSelectedOption('3BHK');
            } else if (activeSectionTab == '3BHK+S') {
                setSelectedOption('3BHK+S');
            }
            else if (activeSectionTab == '4BHK+S') {
                setSelectedOption('4BHK+S');
            }
        }
    }, [activeSectionTab]);

    return (
        <section id="products" className='section-gap scroll-mt-20'>
            {isModalOpen && <ModalEnquiryForm heading={FormHeading} formType={'enquiry'} isOpen={isModalOpen} onClose={handleCloseModal} onFormSubmit={funcRunStatus ? handleDownloadBrochure : ''} eventSource={event} />}

            <div>
                <div>
                    <Heading heading={'Our ProductS'}
                        subHeading={'Sushma Belleza offers luxury 3+1 BHK & 4+1 BHK apartments in Zirakpur '}
                        headingColor={'#474536'}
                        subHeadingColor={'#5A5454'}
                        subHeadingClass={'font-supera600'}
                    />
                </div>
                <div className='w-[95%] sm:w-[92%] mx-auto'>
                    <div className='w-full md:w-auto flex justify-between md:border-b md:border-[#D0CBCB] mb-5'>
                        <div className='w-full md:w-auto'>
                            <ul className='flex gap-1 sm:gap-0 w-full max-w-full lg:max-w-[600px] xl:max-w-[700px] md:mr-6 relative '>
                                {Object?.keys(data)?.map((option) => (
                                    <li
                                        key={option}
                                        onClick={() => { setSelectedOption(option) }}
                                        className={`whitespace-nowrap w-1/3 xs:px-3 sm:px-4 md:px-6 duration-300 bg-right ${selectedOption === option ? `bg-[#A27D27] md:bg-transparent text-[#fff] md:text-[#A27D27] py-1.5 bxxs:py-2 md:py-0 rounded-md md:rounded-none` : 'bg-[#5A5454] md:bg-transparent text-[#fff]  md:text-[#787878] border-[1px] border-[#BDBDBD] md:border-transparent md:border-0 py-1.5 bxxs:py-2 md:py-0 rounded-md md:rounded-none'} cursor-pointer flex items-center justify-center uppercase font-supera700 sm:font-supera600 md:font-supera700 tracking-wider text-[16px] cxs:text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-center cxs:mx-1 md:mx-0`}> {option}</li>
                                ))}
                                <li className={` hidden md:block w-1/3 px-4 h-[5.54px] rounded-full bg-[#A27D27] absolute z-30 top-[138%] lg:top-[125%] xl:top-[115%] ${selectedOption === '3BHK' ? 'left-[0%] duration-300' : selectedOption === '3BHK+S' ? 'left-[50%] translate-x-[-50%] duration-300' : 'left-[100%] translate-x-[-100%] duration-300'}  `}></li>
                            </ul>
                        </div>
                        <div className='hidden md:block font-supera700 text-[28px] text-[#474536] pr-0.5'>
                            0{`${Object?.keys(data)?.indexOf(selectedOption) + 1}/0${Object?.keys(data)?.length}`}
                        </div>
                    </div>
                </div>

                <div style={{ backgroundImage: `url('${process.env.basePath}${data[selectedOption]?.image}')` }} className='hidden lg:block duration-1000 w-full h-[90vh]  bg-cover bg-bottom bg-no-repeat'>
                    <div className='w-full h-full bg-[#00000033] flex relative'>
                        <div onClick={() => handlePrev()} className='cursor-pointer absolute z-40 left-6 top-[50%] translate-y-[-50%]'>
                            <svg width="16" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.62295 1.66121L8.19177 0.231384L0.396508 8.02395C0.270852 8.14882 0.17113 8.2973 0.103081 8.46085C0.0350318 8.62441 -7.80402e-07 8.7998 -7.64915e-07 8.97695C-7.49429e-07 9.15409 0.0350319 9.32949 0.103081 9.49304C0.17113 9.6566 0.270852 9.80508 0.396508 9.92994L8.19178 17.7266L9.62161 16.2967L2.3052 8.97897L9.62295 1.66121Z" fill="white" />
                            </svg>
                        </div>
                        <div onClick={() => handleNext()} className='cursor-pointer absolute right-6 top-[50%] translate-y-[-50%]'>
                            <svg width="16" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.377047 1.66121L1.80823 0.231384L9.60349 8.02395C9.72915 8.14882 9.82887 8.2973 9.89692 8.46085C9.96497 8.62441 10 8.7998 10 8.97695C10 9.15409 9.96497 9.32949 9.89692 9.49304C9.82887 9.6566 9.72915 9.80508 9.60349 9.92994L1.80822 17.7266L0.378394 16.2967L7.6948 8.97897L0.377047 1.66121Z" fill="white" />
                            </svg>
                        </div>
                        <div className='w-[65%] 2xl:w-[68%] h-full relative '>
                            <div className='absolute top-4 left-0 w-[192px] h-[40px]'>
                                <motion.div
                                    className='relative'
                                    animate={{
                                        x: visible ? 0 : '-150%',  // Move further to simulate stretch
                                        rotate: visible ? [0, 5, -10, 0] : [0, -15, 10, -5],  // Sharper whip rotations
                                        scaleX: visible ? [4, 3, 3, 1] : [1, 3, 0.5, 1],  // Stretch horizontally
                                        scaleY: visible ? [1, 1.95, 1.05, 1] : [1, 1.05, 1.2, 1],  // Add slight vertical stretch
                                        opacity: visible ? 1 : 0  // Fade slightly when it hides
                                    }}
                                    initial={{ x: '-200%', scaleX: 0.6, scaleY: 0.6, rotate: -15, opacity: 0.5 }} // Start with tighter, smaller scale and more rotation
                                    transition={{
                                        duration: 1,  // Slow it down slightly for more dramatic effect
                                        ease: [0.25, 0.1, 0.25, 1],  // Ease-in-out for more flexibility in transition
                                        times: [0, 0.2, 0.8, 1],  // Control timing of the phases for smooth rotation
                                        type: "spring",  // Add spring-like behavior
                                        stiffness: 50,  // Lower stiffness for more flexibility
                                        damping: 10,  // Control bounce for realistic flexibility
                                        mass: 0.5,  // Lower mass for a lighter feel
                                    }}
                                    onAnimationComplete={() => setTimeout(() => setVisible(!visible), visible ? 2500 : 1000)}  // Time between cycles
                                >
                                    <svg className='w-full h-full' viewBox="0 0 114 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M113.588 0.547974H-2.6283C-3.29415 0.547974 -3.83393 1.08775 -3.83393 1.7536V29.0341C-3.83393 29.7 -3.29415 30.2398 -2.6283 30.2398H113.588L105.538 14.8033L113.588 0.547974Z" fill="white" />
                                    </svg>
                                    <span className='whitespace-nowrap absolute top-[50%] translate-y-[-50%] left-[45%] translate-x-[-50%] text-[#131313] font-supera700 text-[20px] capitalize tracking-wide'>{data[selectedOption]?.flatStatus}</span>
                                </motion.div>
                            </div>

                            <div className='pb-[33px] px-5 capitalize w-full h-full tracking-wide flex flex-col justify-end items-start max-w-[850px] mx-auto text-left font-supera500 text-[15px] text-[#fff]'>
                                <div className='flex items-center'>
                                    <div className='border-b border-white pb-0.5 font-supera600 text-[20px] tracking-wide'>{data[selectedOption]?.descHead}</div>
                                    {/* <strong className='uppercase font-supera600 text-[20px] tracking-wide'>&nbsp;-&nbsp;the medallion mohali</strong> */}
                                </div>
                                <span className='pt-1 text-[14px] xl:text-[15px] font-supera400 tracking-wide'>
                                    {data[selectedOption]?.description}
                                </span>
                            </div>
                        </div>
                        <div className='w-[35%] 2xl:w-[28%] h-full relative'>
                            <div className=" absolute top-8 right-[110%]  size-[80px] lg:size-[110px] xl:size-[125px] 3xl:size-[144px]">
                                <div className='w-full h-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='max-w-[22px] sm:max-w-[25px] lg:max-w-[35px] 3xl:max-w-[40px] absolute z-30 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' viewBox="0 0 16 16"><path fill="currentColor" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
                                    <div style={{ animation: 'spin 16s linear infinite' }} className='animate-spin animate-duration-[5000s] w-full h-full bg-[#FFFFFF80] rounded-full relative z-10'>
                                        <span><svg
                                            className='fill-[#ffffff00] w-[100%] h-[100%] p-1.5 xl:p-3'
                                            viewBox="0 0 100 100"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                id="circlePath"
                                                d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0"
                                            />
                                            <text className='fill-[#000] text-[10px] font-supera700 uppercase'>
                                                <textPath href="#circlePath">
                                                    Best  Price  Deals,  100%  Guarantee,  Best  Value !
                                                </textPath>
                                            </text>
                                        </svg></span>
                                    </div>
                                </div>
                            </div>
                            <div className="cursor-pointer absolute top-1.5  lg:top-5 right-[105%] lg:right-1.5 xl:-right-1 z-40 font-supera700 ">
                                <div className='size-[35px] relative'>
                                    <ShareButton title={`${selectedOption} Apartments`} />
                                </div>
                            </div>
                            <div className=' bg-[#1c1c1c] w-[300px] 2xl:w-[342px] 3xl:w-[360px] h-full'>
                                <div style={{ backgroundImage: `url('${process.env.basePath}/images/productsbgimg.png')` }} className='w-full h-full pt-[20px] 3xl:pt-[30px] bg-no-repeat bg-cover 3xl:bg-cover relative z-30 '>
                                    <div className='w-[calc(100%+26px)] 2xl:w-[calc(100%+29px)] h-[53px] relative right-[4.50%] 2xl:right-[4%] mx-auto bg-[#fff] shadow-[0px_6px_4px_0px_#00000040]'>
                                        <div className="absolute z-20 bottom-[100%] w-0 h-0 border-r-[15.68px] border-t-[10.2px] border-r-black border-t-transparent"></div>
                                        <div className="absolute z-20 bottom-[100%] right-0 w-0 h-0 border-l-[14px] border-t-[10.2px] border-l-black border-t-transparent"></div>
                                        <div className="absolute z-20 top-[100%] right-0 w-0 h-0 border-l-[14px] border-b-[10.2px] border-l-black border-b-transparent"></div>
                                        <div className="absolute z-20 top-[100%] w-0 h-0 border-r-[15.68px] border-b-[10.2px] border-r-black border-b-transparent"></div>
                                        <div className='w-full h-full flex justify-center items-center px-1'>
                                            <Marquee behavior="scroll" direction="left" className="flex justify-center items-center py-1 px-2 ">
                                                <div className='font-supera700 text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-[3%] text-[#131313] ml-5 capitalize whitespace-nowrap'>{data[selectedOption]?.offer}</div>
                                                <div className='font-supera700 text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-[3%] text-[#131313] ml-5 capitalize whitespace-nowrap'>{data[selectedOption]?.offer}</div>
                                                <div className='font-supera700 text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-[3%] text-[#131313] ml-5 capitalize whitespace-nowrap'>{data[selectedOption]?.offer}</div>
                                                <div className='font-supera700 text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-[3%] text-[#131313] ml-5 capitalize whitespace-nowrap'>{data[selectedOption]?.offer}</div>
                                                <div className='font-supera700 text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-[3%] text-[#131313] ml-5 capitalize whitespace-nowrap'>{data[selectedOption]?.offer}</div>
                                                <div className='font-supera700 text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-[3%] text-[#131313] ml-5 capitalize whitespace-nowrap'>{data[selectedOption]?.offer}</div>
                                                <div className='font-supera700 text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-[3%] text-[#131313] ml-5 capitalize whitespace-nowrap'>{data[selectedOption]?.offer}</div>
                                                <div className='font-supera700 text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-[3%] text-[#131313] ml-5 capitalize whitespace-nowrap'>{data[selectedOption]?.offer}</div>
                                                <div className='font-supera700 text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-[3%] text-[#131313] ml-5 capitalize whitespace-nowrap'>{data[selectedOption]?.offer}</div>
                                                <div className='font-supera700 text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-[3%] text-[#131313] ml-5 capitalize whitespace-nowrap'>{data[selectedOption]?.offer}</div>
                                                <div className='font-supera700 text-[16px] 2xl:text-[18px] 3xl:text-[21px] tracking-[3%] text-[#131313] ml-5 capitalize whitespace-nowrap'>{data[selectedOption]?.offer}</div>
                                            </Marquee>
                                        </div>
                                    </div>

                                    <div className='ml-[27px] pr-2  h-[50%] flex flex-col justify-evenly '>
                                        <div className=''>
                                            <div className='font-supera600 text-[35px] 2xl:text-[39px] 3xl:text-[39px] leading-snug text-left tracking-[3%] text-[#fff] uppercase'>{data[selectedOption]?.heading}</div>
                                            {/* <div className='font-supera600 text-[32px] 3xl:text-[39px] leading-snug  text-left text-[#fff] uppercase'>{selectedOption} Apartments</div> */}
                                        </div>
                                        <div className=''>
                                            <div className=' font-supera600 text-[50px] 3xl:text-[54px] text-[#fff] flex items-center gap-x-1 2xl:gap-x-1.5'>{data[selectedOption]?.size} <span className='uppercase font-supera400 text-[12px] 2xl:text-[14.50px] text-[#fff]'>sqft.</span></div>
                                            <p className='-mt-3 font-supera400 2xl:font-supera500 text-[14px] 2xl:text-[16px] text-[#fff] uppercase'>Ground + 17 Storey</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-around  h-[40%]'>
                                        <div className='h-[39%] flex items-center'>
                                            <div className={`w-full bg-[#9c7520] py-3 2xl:py-[15px]`}>
                                                <div className='flex justify-around '>
                                                    <div className='flex flex-col justify-center items-center'>
                                                        <div className=' w-[21px] h-[22px] relative'>
                                                            <Image src={BuildIcn} className='object-cover' fill alt='building-icon' />
                                                        </div>
                                                        <span className='font-supera600 text-[11px] text-[#292929] mt-[6.55px]'>Type</span>
                                                        <div className='font-supera600 text-[12px] 2xl:text-[12px] mt-[-2px] text-[#FFFFFF] capitalize'>{data[selectedOption]?.type}</div>
                                                    </div>
                                                    <div className='flex flex-col justify-center items-center relative px-[15px] border-x-[0.89px] border-[#5251514D]'>
                                                        <div className=' w-[21px] h-[22px] relative'>
                                                            <Image src={RupeeIcn} className='object-contain' fill alt='rupee-icon' />
                                                        </div>
                                                        <span className='font-supera600 text-[11px] text-[#292929] mt-[6.55px hidden'>Start From</span>
                                                        <span className='font-supera600 text-[11px] text-[#292929] mt-[6.55px]'>Start From</span>
                                                        <div className='xl:tracking-wider font-supera600 text-[12px] 2xl:text-[12px] mt-[-2px] text-[#fff] capitalize'>{data[selectedOption]?.price}</div>
                                                        <p className='absolute top-[102%] font-supera500 tracking-wider text-[5px] text-[#131313]'>T&C Apply*</p>
                                                    </div>
                                                    <div className='flex flex-col justify-center items-center'>
                                                        <div className=' w-[21px] h-[22px] relative'>
                                                            <Image src={keyIcn} className='object-cover' fill alt='key-icon' />
                                                        </div>
                                                        <span className='font-supera600 text-[11px] text-[#292929] mt-[6.55px]'>Hand over</span>
                                                        <div className='xl:tracking-wider font-supera600 text-[12px] 2xl:text-[12px] mt-[-2px] text-[#fff] capitalize'>{data[selectedOption]?.handover}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-[60%] flex flex-row 2xl:flex-col justify-around items-center 2xl:items-start gap-2 xl:gap-1  2xl:gap-0 px-1 2xl:px-0 '>
                                            <div className='mt-1 2xl:ml-[27px] flex justify-start gap-x-[14px] 2xl:gap-x-[40px] '>
                                                <button aria-label="call" onClick={() => window.location.href = "tel:+918968066698"} className={`group relative cursor-pointer group w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-full bg-transparent ${process.env.basePath == '' ? 'hover:bg-backgroud-theme-local' : 'hover:bg-backgroud-theme-production '} bg-cover bg-no-repeat border-[1px] border-[#FFFFFF] hover:border-[#e8aa28] flex justify-center items-center`}>
                                                    <svg className='w-[17px] 3xl:w-[19px] group-hover:fill-[#292929] fill-[#fff]' viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.87884 2.41184H5.73448L6.97704 5.51174L4.98053 6.83977C4.86296 6.91804 4.76656 7.02406 4.6999 7.14841C4.63324 7.27276 4.59838 7.41161 4.5984 7.55263V7.57148C4.59891 7.6098 4.60062 7.64808 4.60355 7.68629C4.6087 7.75655 4.61729 7.85165 4.63361 7.96903C4.66709 8.20037 4.7315 8.5191 4.85687 8.89438C5.10933 9.64836 5.60395 10.6243 6.56743 11.5856C7.53091 12.5469 8.50899 13.0404 9.2638 13.2923C9.64078 13.4174 9.95936 13.4808 10.1929 13.5151C10.3248 13.5335 10.4575 13.5449 10.5905 13.5494L10.6017 13.5502H10.6086C10.768 13.5501 10.9251 13.5058 11.0607 13.4221C11.1963 13.3384 11.3058 13.2187 11.3771 13.0764L11.9524 11.9283L15.7617 12.5623V16.2637C13.949 16.525 9.05256 16.7829 5.20551 12.9445C1.35846 9.10601 1.61608 4.21968 1.87884 2.41184ZM6.37852 7.96903L7.93022 6.93745C8.25803 6.71928 8.50068 6.39528 8.61747 6.01979C8.73427 5.64429 8.7181 5.24015 8.57168 4.87513L7.32912 1.77524C7.20161 1.45728 6.98154 1.18474 6.69731 0.992777C6.41307 0.800809 6.07771 0.698219 5.73448 0.698242H1.83419C1.05362 0.698242 0.319416 1.23888 0.191467 2.08369C-0.100497 4.00463 -0.496365 9.67835 3.99129 14.156C8.47894 18.6336 14.1654 18.2378 16.0906 17.9473C16.9373 17.8188 17.4791 17.0871 17.4791 16.3083V12.5623C17.4792 12.1567 17.335 11.7642 17.0723 11.4546C16.8095 11.1451 16.4452 10.9386 16.0442 10.8719L12.235 10.2387C11.8727 10.1784 11.5005 10.2355 11.1732 10.4017C10.8458 10.568 10.5805 10.8346 10.4162 11.1623L10.1191 11.7561C10.014 11.7303 9.91003 11.7003 9.80737 11.6661C9.27497 11.4896 8.53561 11.1263 7.78166 10.3741C7.02771 9.6218 6.66361 8.8841 6.48672 8.35202C6.44448 8.22625 6.40779 8.09842 6.37852 7.96903Z" />
                                                    </svg>
                                                    {/* <div className='whitespace-nowrap group-hover:inline hidden absolute top-[104%] left-[50%] translate-x-[-50%] capitalize text-[12px] text-[#fff] mt-1'>Call Us</div> */}
                                                </button>
                                                <div aria-label="whatsapp buttton" onClick={() => handleWhatsAppClick()} className={`group relative cursor-pointer group w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-full bg-transparent ${process.env.basePath == '' ? 'hover:bg-backgroud-theme-local' : 'hover:bg-backgroud-theme-production '} bg-cover bg-no-repeat border-[1px] border-[#FFFFFF] hover:border-[#e8aa28] flex justify-center items-center`}>
                                                    <svg className='w-[23px] 3xl:w-[25px] group-hover:fill-[#292929] fill-[#fff]' viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21.9658 4.25873C20.8052 3.08899 19.4228 2.16155 17.8992 1.53048C16.3756 0.899409 14.7413 0.577349 13.0916 0.583083C6.17963 0.583083 0.546221 6.20391 0.546221 13.1005C0.546221 15.3109 1.12855 17.4582 2.21725 19.3529L0.444946 25.8452L7.0911 24.1021C8.92671 25.1 10.9902 25.6305 13.0916 25.6305C20.0036 25.6305 25.637 20.0097 25.637 13.1131C25.637 9.76588 24.3331 6.62074 21.9658 4.25873ZM13.0916 23.5085C11.218 23.5085 9.38244 23.0032 7.77471 22.0559L7.39493 21.8286L3.44521 22.8643L4.49594 19.0245L4.24275 18.6329C3.20183 16.9744 2.64912 15.0573 2.64767 13.1005C2.64767 7.36597 7.33163 2.69247 13.079 2.69247C15.864 2.69247 18.4845 3.77875 20.4467 5.74919C21.4183 6.71416 22.1883 7.86195 22.712 9.12602C23.2357 10.3901 23.5027 11.7453 23.4976 13.1131C23.5229 18.8476 18.839 23.5085 13.0916 23.5085ZM18.8137 15.7277C18.4972 15.5762 16.9527 14.8183 16.6742 14.7046C16.3831 14.6036 16.1805 14.5531 15.9653 14.8562C15.7501 15.172 15.1551 15.8793 14.9779 16.0814C14.8006 16.2961 14.6108 16.3214 14.2943 16.1572C13.9778 16.0056 12.965 15.6646 11.7751 14.6036C10.8383 13.7699 10.218 12.7468 10.0281 12.431C9.85084 12.1153 10.0028 11.9511 10.1673 11.7868C10.3066 11.6479 10.4838 11.4205 10.6357 11.2437C10.7876 11.0669 10.8509 10.9279 10.9522 10.7258C11.0535 10.5111 11.0028 10.3343 10.9269 10.1827C10.8509 10.0311 10.218 8.49014 9.96477 7.85858C9.71159 7.25229 9.44574 7.32808 9.25585 7.31545H8.6482C8.43299 7.31545 8.10385 7.39123 7.81269 7.70701C7.53418 8.02279 6.72398 8.78065 6.72398 10.3216C6.72398 11.8626 7.85066 13.3531 8.00258 13.5552C8.15449 13.7699 10.218 16.9277 13.3575 18.2792C14.1044 18.6076 14.6867 18.7971 15.1424 18.936C15.8893 19.176 16.573 19.1381 17.1173 19.0623C17.725 18.9739 18.9782 18.3045 19.2314 17.5719C19.4973 16.8393 19.4973 16.2204 19.4086 16.0814C19.32 15.9425 19.1301 15.8793 18.8137 15.7277Z" />
                                                    </svg>
                                                    {/* <div className='whitespace-nowrap group-hover:inline hidden absolute top-[104%] left-[50%] translate-x-[-50%] capitalize text-[12px] text-[#fff] mt-1'>Whatsapp</div> */}
                                                </div>

                                                <button aria-label="Download Brochure" onClick={() => { setFormHeading('Download Brochure'), handleOpenModal(); setFuncRunStatus(true); setEvent("Our Products Download Button") }} className={`group relative cursor-pointer group w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-full bg-transparent ${process.env.basePath == '' ? 'hover:bg-backgroud-theme-local' : 'hover:bg-backgroud-theme-production '} bg-cover bg-no-repeat border-[1px] border-[#FFFFFF] hover:border-[#e8aa28] flex justify-center items-center`}>
                                                    <svg className='w-[19px] 3xl:w-[23px] group-hover:fill-[#292929] fill-[#fff]' viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.671509 23.2495H24.7592V25.9259H0.671509V23.2495ZM14.0536 15.4504L22.1778 7.32485L24.07 9.21708L12.7154 20.5731L1.36069 9.21841L3.25291 7.32485L11.3772 15.4518V0.5H14.0536V15.4504Z" />
                                                    </svg>
                                                    {/* <div className='whitespace-nowrap group-hover:inline hidden absolute top-[104%] left-[50%] translate-x-[-50%] capitalize text-[12px] text-[#fff] mt-1'>Download</div> */}
                                                </button>
                                            </div>

                                            <button aria-label='Enquiry Now' onClick={() => { setFormHeading('We Are Excited To Meet You'), handleOpenModal(); setFuncRunStatus(false); setEvent("Our Products Enquiry Button") }} className={` 2xl:self-end 2xl:mr-[15px] w-[120px] xl:w-[152px] py-[7px] 2xl:py-[8px] rounded-[7px] ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-cover font-supera600 text-[12.5px] xl:text-[13px] 2xl:text-[15px] text-[#292929] flex items-center justify-center gap-2`}>
                                                Enquiry Now
                                                <div>
                                                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.3715 6.77456L10.0627 1.46663L11.2989 0.230352L15.0086 3.93961L18.7183 7.64887L11.2998 15.0674L10.0627 13.8311L15.3723 8.52318L0.447754 8.52318L0.447754 6.77456L15.3715 6.77456Z" fill="#292929" />
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* for Mobile and Tablet  */}
                <div {...swipeHandlers} style={{ touchAction: 'pan-y' }} className='w-full h-full block lg:hidden '>
                    <div style={{ backgroundImage: `url('${process.env.basePath}${data[selectedOption]?.image}')` }} className='duration-500 w-full h-[40vh] sm:h-[60vh] relative   bg-cover bg-center bg-no-repeat'>
                        <div onClick={() => handlePrev()} className='cursor-pointer absolute left-3.5 top-[50%] translate-y-[-50%]'>
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.62295 1.66121L8.19177 0.231384L0.396508 8.02395C0.270852 8.14882 0.17113 8.2973 0.103081 8.46085C0.0350318 8.62441 -7.80402e-07 8.7998 -7.64915e-07 8.97695C-7.49429e-07 9.15409 0.0350319 9.32949 0.103081 9.49304C0.17113 9.6566 0.270852 9.80508 0.396508 9.92994L8.19178 17.7266L9.62161 16.2967L2.3052 8.97897L9.62295 1.66121Z" fill="white" />
                            </svg>
                        </div>
                        <div onClick={() => handleNext()} className='cursor-pointer absolute right-3.5 top-[50%] translate-y-[-50%]'>
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.377047 1.66121L1.80823 0.231384L9.60349 8.02395C9.72915 8.14882 9.82887 8.2973 9.89692 8.46085C9.96497 8.62441 10 8.7998 10 8.97695C10 9.15409 9.96497 9.32949 9.89692 9.49304C9.82887 9.6566 9.72915 9.80508 9.60349 9.92994L1.80822 17.7266L0.378394 16.2967L7.6948 8.97897L0.377047 1.66121Z" fill="white" />
                            </svg>
                        </div>

                        <div className='absolute top-2 left-0 w-[130px] '>
                            <motion.div
                                className='relative'
                                animate={{
                                    x: visible ? 0 : '-150%',  // Move further to simulate stretch
                                    rotate: visible ? [0, 5, -10, 0] : [0, -15, 10, -5],  // Sharper whip rotations
                                    scaleX: visible ? [4, 3, 3, 1] : [1, 3, 0.5, 1],  // Stretch horizontally
                                    scaleY: visible ? [1, 1.95, 1.05, 1] : [1, 1.05, 1.2, 1],  // Add slight vertical stretch
                                    opacity: visible ? 1 : 0  // Fade slightly when it hides
                                }}
                                initial={{ x: '-200%', scaleX: 0.6, scaleY: 0.6, rotate: -15, opacity: 0.5 }} // Start with tighter, smaller scale and more rotation
                                transition={{
                                    duration: 1,  // Slow it down slightly for more dramatic effect
                                    ease: [0.25, 0.1, 0.25, 1],  // Ease-in-out for more flexibility in transition
                                    times: [0, 0.2, 0.8, 1],  // Control timing of the phases for smooth rotation
                                    type: "spring",  // Add spring-like behavior
                                    stiffness: 50,  // Lower stiffness for more flexibility
                                    damping: 10,  // Control bounce for realistic flexibility
                                    mass: 0.5,  // Lower mass for a lighter feel
                                }}
                                onAnimationComplete={() => setTimeout(() => setVisible(!visible), visible ? 2500 : 1000)}  // Time between cycles
                            >
                                <svg className='w-full h-full' viewBox="0 0 114 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M113.588 0.547974H-2.6283C-3.29415 0.547974 -3.83393 1.08775 -3.83393 1.7536V29.0341C-3.83393 29.7 -3.29415 30.2398 -2.6283 30.2398H113.588L105.538 14.8033L113.588 0.547974Z" fill="white" />
                                </svg>
                                <span className='whitespace-nowrap absolute top-[50%] translate-y-[-50%] left-[45%] translate-x-[-50%] text-[#131313] font-supera700 text-[14px] capitalize tracking-wide'>{data[selectedOption]?.flatStatus}</span>
                            </motion.div>
                        </div>

                        <div onClick={() => handleShare()} className="cursor-pointer absolute top-2 right-3 z-40 font-supera700 ">
                            <div className='size-[25px] md:size-[30px] relative'>
                                <ShareButton title={`${selectedOption} Apartments`} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-transparent'>
                        <div className='w-[90%] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative z-10 mx-auto -mt-20'>
                            <div className='pt-4 cxs:pt-5 pb-3 cxs:pb-4'>
                                <div className='pl-3 xs:pl-5 sm:pl-8 font-supera700 text-[21px] bxxs:text-[22px] xs:text-[25px] sm:text-[34px] leading-tight  text-left text-[#131313] uppercase'>{data[selectedOption]?.heading}</div>
                                <div className='flex pl-3 xs:pl-5 sm:pl-8 mt-2'>
                                    {/* <div className='font-supera600 text-[24px] xs:text-[28px] sm:text-[30px] text-[#7c5661]  uppercase flex items-center'></div> */}
                                    <p className='font-supera600 text-[16px] xs:text-[18px] sm:text-[24px] text-[#3E3B3B]  uppercase flex items-end pl-1 relative top-[-3px]'>{data[selectedOption]?.size} sq.ft <span className='pl-1 pr-1'>|</span> Ground + 17 storey</p>
                                </div>
                                <div className='w-full bottom-4 left-0  bg-white'>
                                    <Marquee behavior="scroll" direction="left" className="flex justify-center items-center py-1">
                                        <span className='ml-5 relative z-20 font-supera800 text-[13px] tracking-[0.7px] text-[#000] capitalize '>{data[selectedOption]?.offer}</span>
                                        <span className={`ml-5 relative z-20 font-supera700 text-[13px] bg-cover bg-right-bottom text-transparent offer-outlined-text capitalize tracking-[1px] ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-cover bg-left-top`}>{data[selectedOption]?.offer}</span>
                                        <span className='ml-5 relative z-20 font-supera800 text-[13px] tracking-[0.7px] text-[#000] capitalize '>{data[selectedOption]?.offer}</span>
                                        <span className={`ml-5 relative z-20 font-supera700 text-[13px] bg-cover bg-right-bottom text-transparent offer-outlined-text capitalize tracking-[1px] ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-cover bg-left-top`}>{data[selectedOption]?.offer}</span>
                                        <span className='ml-5 relative z-20 font-supera800 text-[13px] tracking-[0.7px] text-[#000] capitalize '>{data[selectedOption]?.offer}</span>
                                        <span className={`ml-5 relative z-20 font-supera700 text-[13px] bg-cover bg-right-bottom text-transparent offer-outlined-text capitalize tracking-[1px] ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-cover bg-left-top`}>{data[selectedOption]?.offer}</span>
                                        <span className='ml-5 relative z-20 font-supera800 text-[13px] tracking-[0.7px] text-[#000] capitalize '>{data[selectedOption]?.offer}</span>
                                        <span className={`ml-5 relative z-20 font-supera700 text-[13px] bg-cover bg-right-bottom text-transparent offer-outlined-text capitalize tracking-[1px] ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-cover bg-left-top`}>{data[selectedOption]?.offer}</span>
                                        <span className='ml-5 relative z-20 font-supera800 text-[13px] tracking-[0.7px] text-[#000] capitalize '>{data[selectedOption]?.offer}</span>
                                        <span className={`ml-5 relative z-20 font-supera700 text-[13px] bg-cover bg-right-bottom text-transparent offer-outlined-text capitalize tracking-[1px] ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-cover bg-left-top`}>{data[selectedOption]?.offer}</span>
                                        <span className='ml-5 relative z-20 font-supera800 text-[13px] tracking-[0.7px] text-[#000] capitalize '>{data[selectedOption]?.offer}</span>
                                        <span className={`ml-5 relative z-20 font-supera700 text-[13px] bg-cover bg-right-bottom text-transparent offer-outlined-text capitalize tracking-[1px] ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-cover bg-left-top`}>{data[selectedOption]?.offer}</span>
                                        <span className='ml-5 relative z-20 font-supera800 text-[13px] tracking-[0.7px] text-[#000] capitalize '>{data[selectedOption]?.offer}</span>
                                        <span className={`ml-5 relative z-20 font-supera700 text-[13px] bg-cover bg-right-bottom text-transparent offer-outlined-text capitalize tracking-[1px] ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-cover bg-left-top`}>{data[selectedOption]?.offer}</span>
                                        <span className='ml-5 relative z-20 font-supera800 text-[13px] tracking-[0.7px] text-[#000] capitalize '>{data[selectedOption]?.offer}</span>
                                        <span className={`ml-5 relative z-20 font-supera700 text-[13px] bg-cover bg-right-bottom text-transparent offer-outlined-text capitalize tracking-[1px] ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-cover bg-left-top`}>{data[selectedOption]?.offer}</span>
                                        <span className='ml-5 relative z-20 font-supera800 text-[13px] tracking-[0.7px] text-[#000] capitalize '>{data[selectedOption]?.offer}</span>
                                        <span className={`ml-5 relative z-20 font-supera700 text-[13px] bg-cover bg-right-bottom text-transparent offer-outlined-text capitalize tracking-[1px] ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-cover bg-left-top`}>{data[selectedOption]?.offer}</span>
                                        <span className='ml-5 relative z-20 font-supera800 text-[13px] tracking-[0.7px] text-[#000] capitalize '>{data[selectedOption]?.offer}</span>
                                        <span className={`ml-5 relative z-20 font-supera700 text-[13px] bg-cover bg-right-bottom text-transparent offer-outlined-text capitalize tracking-[1px] ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-cover bg-left-top`}>{data[selectedOption]?.offer}</span>
                                    </Marquee>
                                </div>
                            </div>
                            <div className='h-[39%] flex items-center'>
                                <div className={`w-full bg-[#a27d27] py-3 2xl:py-[15px]`}>
                                    <div className='flex justify-around '>
                                        <div className='w-1/3 flex flex-col justify-center items-center gap-x-2'>
                                            <div className='w-[21px] h-[22px] cxs:w-[25px] cxs:h-[26px] sm:w-[30px] sm:h-[31px] relative'>
                                                <Image src={BuildIcn} className='object-contain sm:object-cover' fill alt='building-icon' />
                                            </div>
                                            <div className='flex flex-col justify-center items-center'>
                                                <span className='font-supera500 text-[11px] sm:text-[12px] text-[#fff] mt-[6.55px]'>Type</span>
                                                <div className=' font-supera600 bxxs:font-supera700 tracking-wide cxs:tracking-wider text-[10px] bxxs:text-[12px] sm:text-[13px]  text-[#fff] uppercase'>{data[selectedOption]?.type}</div>
                                            </div>
                                        </div>
                                        <div className='w-1/3 flex flex-col justify-center items-center gap-x-2 border-x-[0.5px] border-x-[#fff]'>
                                            <div className='w-[26px] h-[26px]  sm:w-[32px] sm:h-[32px] relative'>
                                                <Image src={RupeeIcn} className='object-contain' fill alt='building-icon' />
                                            </div>
                                            <div className='flex flex-col justify-center items-center'>
                                                {/* <span className='font-supera400 text-[10px] sm:text-[11px] text-[#fff]  capitalize'>Start from</span> */}
                                                <div className='mt-[6.55px] font-supera600 bxxs:font-supera700 tracking-wide cxs:tracking-wider text-[10px] bxxs:text-[12px] sm:text-[13px] text-[#fff] capitalize'>{data[selectedOption]?.price}</div>
                                                <p className='font-supera300 text-[6px] tracking-wide text-[#fff] text-left'>T&C Apply*</p>
                                            </div>
                                        </div>
                                        <div className='w-1/3 flex flex-col justify-center items-center gap-x-2'>
                                            <div className='w-[19px] h-[19px] sm:w-[31px] sm:h-[31px] relative'>
                                                <Image src={keyIcn} className='object-cover' fill alt='building-icon' />
                                            </div>
                                            <div className='flex flex-col justify-center items-center'>
                                                <span className='font-supera500 text-[11px] sm:text-[12px] text-[#fff] mt-[6.55px]'>Hand Over</span>
                                                <div className='font-supera600 bxxs:font-supera700 tracking-wide cxs:tracking-wider text-[10px] bxxs:text-[12px] sm:text-[13px] text-[#fff] uppercase'>{data[selectedOption]?.handover}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[100%] py-6 px-2.5 sm:px-6 flex flex-row  justify-between items-center gap-2 '>
                                <div className='w-1/2 2xl:ml-[27px] flex justify-between sm:justify-normal items-center gap-x-[7px] sm:gap-x-[45px] '>
                                    <button aria-label="call" onClick={() => window.location.href = "tel:+918968066698"} className='flex flex-col justify-center items-center gap-y-0.5'>
                                        <div className={`bg-white hover:bg-[#a27d27] p-1 border-2 border-[#4B4B4B] hover:border-[#a27d27]  relative cursor-pointer group size-[40px] bxxs:size-[45px] sm:size-[50px] rounded-full bg-transparent  flex justify-center items-center`}>
                                            <svg className='w-[21px] bxxs:w-[22px] sm:w-[27px] fill-[#4B4B4B] hover:fill-[#fff]' viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.87884 2.41184H5.73448L6.97704 5.51174L4.98053 6.83977C4.86296 6.91804 4.76656 7.02406 4.6999 7.14841C4.63324 7.27276 4.59838 7.41161 4.5984 7.55263V7.57148C4.59891 7.6098 4.60062 7.64808 4.60355 7.68629C4.6087 7.75655 4.61729 7.85165 4.63361 7.96903C4.66709 8.20037 4.7315 8.5191 4.85687 8.89438C5.10933 9.64836 5.60395 10.6243 6.56743 11.5856C7.53091 12.5469 8.50899 13.0404 9.2638 13.2923C9.64078 13.4174 9.95936 13.4808 10.1929 13.5151C10.3248 13.5335 10.4575 13.5449 10.5905 13.5494L10.6017 13.5502H10.6086C10.768 13.5501 10.9251 13.5058 11.0607 13.4221C11.1963 13.3384 11.3058 13.2187 11.3771 13.0764L11.9524 11.9283L15.7617 12.5623V16.2637C13.949 16.525 9.05256 16.7829 5.20551 12.9445C1.35846 9.10601 1.61608 4.21968 1.87884 2.41184ZM6.37852 7.96903L7.93022 6.93745C8.25803 6.71928 8.50068 6.39528 8.61747 6.01979C8.73427 5.64429 8.7181 5.24015 8.57168 4.87513L7.32912 1.77524C7.20161 1.45728 6.98154 1.18474 6.69731 0.992777C6.41307 0.800809 6.07771 0.698219 5.73448 0.698242H1.83419C1.05362 0.698242 0.319416 1.23888 0.191467 2.08369C-0.100497 4.00463 -0.496365 9.67835 3.99129 14.156C8.47894 18.6336 14.1654 18.2378 16.0906 17.9473C16.9373 17.8188 17.4791 17.0871 17.4791 16.3083V12.5623C17.4792 12.1567 17.335 11.7642 17.0723 11.4546C16.8095 11.1451 16.4452 10.9386 16.0442 10.8719L12.235 10.2387C11.8727 10.1784 11.5005 10.2355 11.1732 10.4017C10.8458 10.568 10.5805 10.8346 10.4162 11.1623L10.1191 11.7561C10.014 11.7303 9.91003 11.7003 9.80737 11.6661C9.27497 11.4896 8.53561 11.1263 7.78166 10.3741C7.02771 9.6218 6.66361 8.8841 6.48672 8.35202C6.44448 8.22625 6.40779 8.09842 6.37852 7.96903Z" />
                                            </svg>
                                        </div>
                                    </button>

                                    <div aria-label="whatsapp button" onClick={() => handleWhatsAppClick()} className='flex flex-col justify-center items-center gap-y-0.5'>
                                        <div className={`bg-white hover:bg-[#a27d27] p-1 border-2 border-[#4B4B4B] hover:border-[#a27d27]  relative cursor-pointer group size-[40px] bxxs:size-[45px] sm:size-[50px] rounded-full bg-transparent  flex justify-center items-center`}>
                                            <svg className='w-[23px] bxxs:w-[25px] sm:w-[28px] fill-[#4B4B4B] hover:fill-[#fff]' viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.9658 4.25873C20.8052 3.08899 19.4228 2.16155 17.8992 1.53048C16.3756 0.899409 14.7413 0.577349 13.0916 0.583083C6.17963 0.583083 0.546221 6.20391 0.546221 13.1005C0.546221 15.3109 1.12855 17.4582 2.21725 19.3529L0.444946 25.8452L7.0911 24.1021C8.92671 25.1 10.9902 25.6305 13.0916 25.6305C20.0036 25.6305 25.637 20.0097 25.637 13.1131C25.637 9.76588 24.3331 6.62074 21.9658 4.25873ZM13.0916 23.5085C11.218 23.5085 9.38244 23.0032 7.77471 22.0559L7.39493 21.8286L3.44521 22.8643L4.49594 19.0245L4.24275 18.6329C3.20183 16.9744 2.64912 15.0573 2.64767 13.1005C2.64767 7.36597 7.33163 2.69247 13.079 2.69247C15.864 2.69247 18.4845 3.77875 20.4467 5.74919C21.4183 6.71416 22.1883 7.86195 22.712 9.12602C23.2357 10.3901 23.5027 11.7453 23.4976 13.1131C23.5229 18.8476 18.839 23.5085 13.0916 23.5085ZM18.8137 15.7277C18.4972 15.5762 16.9527 14.8183 16.6742 14.7046C16.3831 14.6036 16.1805 14.5531 15.9653 14.8562C15.7501 15.172 15.1551 15.8793 14.9779 16.0814C14.8006 16.2961 14.6108 16.3214 14.2943 16.1572C13.9778 16.0056 12.965 15.6646 11.7751 14.6036C10.8383 13.7699 10.218 12.7468 10.0281 12.431C9.85084 12.1153 10.0028 11.9511 10.1673 11.7868C10.3066 11.6479 10.4838 11.4205 10.6357 11.2437C10.7876 11.0669 10.8509 10.9279 10.9522 10.7258C11.0535 10.5111 11.0028 10.3343 10.9269 10.1827C10.8509 10.0311 10.218 8.49014 9.96477 7.85858C9.71159 7.25229 9.44574 7.32808 9.25585 7.31545H8.6482C8.43299 7.31545 8.10385 7.39123 7.81269 7.70701C7.53418 8.02279 6.72398 8.78065 6.72398 10.3216C6.72398 11.8626 7.85066 13.3531 8.00258 13.5552C8.15449 13.7699 10.218 16.9277 13.3575 18.2792C14.1044 18.6076 14.6867 18.7971 15.1424 18.936C15.8893 19.176 16.573 19.1381 17.1173 19.0623C17.725 18.9739 18.9782 18.3045 19.2314 17.5719C19.4973 16.8393 19.4973 16.2204 19.4086 16.0814C19.32 15.9425 19.1301 15.8793 18.8137 15.7277Z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <button aria-label="download Brochure" onClick={() => { setFormHeading('Download Brochure'), handleOpenModal(); setFuncRunStatus(true); setEvent("Our Products Download Button") }} className='flex flex-col justify-center items-center gap-y-0.5'>
                                        <div className={`bg-white hover:bg-[#a27d27] p-1 border-2 border-[#4B4B4B] hover:border-[#a27d27]  relative cursor-pointer group size-[40px] bxxs:size-[45px] sm:size-[50px] rounded-full bg-transparent  flex justify-center items-center`}>
                                            <svg className='w-[22px] bxxs:w-[23px] sm:w-[27px] fill-[#4B4B4B] hover:fill-[#fff]' viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.671509 23.2495H24.7592V25.9259H0.671509V23.2495ZM14.0536 15.4504L22.1778 7.32485L24.07 9.21708L12.7154 20.5731L1.36069 9.21841L3.25291 7.32485L11.3772 15.4518V0.5H14.0536V15.4504Z" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>

                                <button aria-label="Enquiry now" onClick={() => { setFormHeading('We Are Excited To Meet You'), handleOpenModal(); setFuncRunStatus(false); setEvent("Our Products Enquiry Button") }} className={`bg-[#a27d27] 2xl:self-end 2xl:mr-[15px] w-[110px] bxxs:w-[130px] xs:w-[140px] py-[8px] rounded-[7px] font-supera500 xs:font-supera600 text-[12.5px] bxxs:text-[12px] xl:text-[13px] 2xl:text-[15px] text-[#FFF] flex items-center justify-center tracking-[0.8px] gap-2`}>
                                    Enquiry Now
                                    <div className='hidden bxxs:block'>
                                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.3715 6.77456L10.0627 1.46663L11.2989 0.230352L15.0086 3.93961L18.7183 7.64887L11.2998 15.0674L10.0627 13.8311L15.3723 8.52318L0.447754 8.52318L0.447754 6.77456L15.3715 6.77456Z" fill="#fff" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurProducts

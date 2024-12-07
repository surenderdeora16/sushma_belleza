'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Icon1 from '@/app/images/brouchure-icon-1.svg'
import Icon2 from '@/app/images/brouchure-icon-2.svg'
import ModalEnquiryForm from '@/app/components/common/ModalEnquiryForm'
import { toast } from 'react-toastify';

const Brochure = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; 
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset'; 
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

    return (
        <section style={{ backgroundImage: `url('${process.env.basePath}/images/brouche-section-bg-img.webp')` }} className={`w-full h-screen bg-cover bg-right sm:bg-top bg-no-repeat relative `}>
            <div className='absolute top-0 left-0  sm:hidden bg-brochure-section-Shadow w-full h-full'></div>
            <div className='absolute top-0 left-0  hidden sm:block bg-[#00000053] cmd:bg-[#00000000] w-full h-full'></div>
            <div className='w-full h-[10%] sm:h-[80%] bg-[linear-gradient(0deg,#000000_12.53%,#0000_100%)] sm:bg-[linear-gradient(100deg,#00000_1.53%,rgba(0,0,0,0)_100%)] absolute z-20 left-0 bottom-0'></div>
            <div className=' 2xl:container h-full mx-auto flex flex-col cmd:justify-end items-start px-5 xs:px-7 sm:px-10 lg:px-16 cmd:pb-[45px] relative z-30'>
                <div className='pb-[50px] xs:pb-[70px] sm:pb-5 w-full h-full cmd:h-auto flex flex-col cmd:flex-row gap-y-[60px] sm:gap-y-0 justify-end sm:justify-around cmd:justify-between items-start sm:items-center cmd:items-end'>
                    <div className='w-full cmd:max-w-[400px] lg:max-w-[400px] xl:max-w-[440px] flex flex-col items-start sm:items-center cmd:items-start'>
                        <h3 className='text-left sm:text-center cmd:text-left font-supera500 text-[27px] cxs:text-[32px] sm:text-[30px] lg:text-[35px] leading-[0.92]  text-[#FFFFFF] uppercase flex flex-col items-start gap-x-2 sm:block'>
                            The pride of
                            <span className={`tracking-wide sm:tracking-normal font-supera700 text-[60px] sm:text-[65px] lg:text-[80px] xl:text-[85px] text-transparent bg-clip-text bg-[#e3a71a] ${process.env.basePath == '' ? 'sm:bg-backgroud-theme-local' : 'sm:bg-backgroud-theme-production '} bg-no-repeat bg-center`}> zirakpur </span>
                        </h3>
                        <p className='mt-1.5 pb-6 cmd:border-b font-supera500 text-[15px] bxxs:text-[16px] xs:text-xl tracking-wider text-[#fff] capitalize text-center cmd:text-left'>live amidst nature and openness.</p>
                        <div className='text-left sm:text-left cmd:text-left tracking-wide font-supera500 text-[19px] xs:text-[20px] text-[#FFFFFF] capitalize mt-8 sm:mt-3'>Sushma belleza PR-7 airport road, zirakpur</div>
                    </div>
                    <div>
                        <div className='flex flex-col sm:flex-row'>
                            <div className='flex flex-row sm:flex-col items-center justify-start sm:justify-normal gap-y-0.5 cmd:block h-[95px] xs:h-[78px] cmd:h-[74px] lg:h-[85px] xl:h-[105px] sm:border-r sm:border-[#FFFFFF] sm:pr-[38px]'>
                                <div className='sm:pr-0 sm:mx-auto cmd:mx-0 w-[44px] h-[42px] sm:w-[30px] sm:h-[28px] lg:w-[38px] lg:h-[36px] xl:w-[44px] xl:h-[42px] relative'>
                                    <Image src={Icon1} fill alt="" />
                                </div>
                                <div className='ml-3 sm:ml-0 pl-3 sm:pl-0 border-l-[2px] sm:border-none border-[#C0C0C0]'>
                                    <div className='whitespace-nowrap text-left sm:text-center cmd:text-left font-supera400 sm:font-supera500 text-[11.5px] sm:text-[12.5px] lg:text-[14px] xl:text-[16px] text-[#fff] pt-1 uppercase tracking-wide'>SPREAD ACROSS</div>
                                    <div className='text-center cmd:text-left font-supera600 text-[25px] sm:text-[26px] lg:text-[30px] xl:text-[36px] leading-[1] text-[#fff] uppercase'>12 acres</div>
                                </div>
                            </div>
                            <div className='flex flex-row sm:flex-col items-center justify-start sm:justify-normal gap-y-0.5 cmd:block h-[95px] xs:h-[78px] cmd:h-[74px] lg:h-[85px] xl:h-[105px] sm:pl-[38px]'>
                                <div className='sm:pr-0 sm:mx-auto cmd:mx-0 w-[44px] h-[38px] sm:w-[30px] sm:h-[28px] lg:w-[38px] lg:h-[36px] xl:w-[44px] xl:h-[42px] relative'>
                                    <Image src={Icon2} fill alt="" />
                                </div>
                                <div className='ml-3 sm:ml-0 pl-3 sm:pl-0 border-l-[2px] sm:border-none border-[#C0C0C0]'>
                                    <div className='whitespace-nowrap text-left sm:text-center cmd:text-left font-supera500 text-[11.5px] sm:text-[12.5px] lg:text-[14px] xl:text-[16px] text-[#fff] pt-1 uppercase'>HANDOVER DATE</div>
                                    <div className='text-center cmd:text-left font-supera600 text-[25px] leading-[28px] sm:text-[26px] sm:leading-[26px] lg:text-[30px] lg:leading-[33px] xl:text-[36px] xl:leading-[38px] text-[#fff] uppercase'>December 2027</div>
                                </div>
                            </div>
                        </div>
                        <p className='text-center cmd:text-left mt-1 sm:mt-2 lg:mt-3 xl:mt-3 capitalize font-supera500 sm:font-supera600 text-[14.15px] sm:text-[18px] lg:text-[20px] xl:text-[24px] text-[#fff]'>Low rise G+4  | G+19  | 76% Open area</p>
                        <div onClick={handleOpenModal} className={`bg-[#a27d27]  bg-cover bg-left-top cursor-pointer sm:mx-auto cmd:mx-0 mt-[20px] xs:mt-[28px] sm:mt-[20px] w-[150px] h-[38px] xl:w-[176px] xl:h-[44px] rounded-full flex justify-center items-center`}>
                            <button aria-label="Brochure" className='flex items-center gap-[8.98px]'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.62945 13.4604L3.32249 8.15339L4.80844 6.61437L7.56806 9.37399V0.723633H9.69085V9.37399L12.4505 6.61437L13.9364 8.15339L8.62945 13.4604ZM2.26109 17.7059C1.67733 17.7059 1.17776 17.4982 0.762405 17.0829C0.347046 16.6675 0.139013 16.1676 0.138306 15.5831V12.399H2.26109V15.5831H14.9978V12.399H17.1206V15.5831C17.1206 16.1669 16.9129 16.6668 16.4976 17.0829C16.0822 17.499 15.5823 17.7066 14.9978 17.7059H2.26109Z" fill="#fff" />
                                    </svg>
                                </div>
                                <span className='font-supera600 text-[15px] text-[#fff] tracking-wider'>Brochure</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <ModalEnquiryForm formType={'enquiry'} heading={"Download Brochure"} isOpen={isModalOpen} onClose={handleCloseModal} onFormSubmit={handleDownloadBrochure} eventSource="Brochure Button" />}
        </section>
    )
}

export default Brochure

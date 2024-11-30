'use client'
import React, { useState } from 'react'
import ModalEnquiryForm from '@/app/components/common/ModalEnquiryForm';

const CallToAction = ({ className }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset'; // Enable scrolling
    };

    return (
        <section className='section-gap w-full '>
            {isModalOpen && <ModalEnquiryForm heading={'We Are Excited To Meet You'} formType={'enquiry'} isOpen={isModalOpen} onClose={handleCloseModal} eventSource="Call To Action" />}

            <div className='bg-[#000] h-[50px] sm:h-[80px] cmd:h-[100px] flex justify-center items-center '>
                <div className={`w-[95%] md:w-[88%] 3xl:container lg:mx-auto flex justify-between items-center  px-2 cxs:px-0 md:px-0 lg:px-0 3xl:mx-3  ${className} `}>
                    <p className="lg:text-[36px] text-[12px] xs:text-[15px] cxs:text-[20px] sm:text-[22px] md:text-[25px]  xl:text-[36px] font-supera500 lg:leading-[49px] text-[#FFF]">
                        Are you interested in this Property?
                    </p>
                    <div onClick={() => { handleOpenModal() }}>
                        <button
                            aria-label="connect with us"
                            type="button"
                            className={`${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production ' } bg-cover bg-right flex items-center gap-x-2 rounded-full uppercase sm:px-6 px-2 py-2 lg:text-[16px] text-[8px] xs:text-[9px] cxs:text-[10px] font-supera700 sm:text-[13px] md:text-[14px] text-[#fff] `}
                        > 
                            connect with us 

                            <svg width="27" height="9" viewBox="0 0 27 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.3536 8.43715L25.9143 4.7964C26.0323 4.6757 26.0976 4.51306 26.0957 4.34424C26.0938 4.17542 26.025 4.01427 25.9043 3.89622L22.2635 0.335514C22.1736 0.247207 22.0594 0.187603 21.9355 0.164257C21.8116 0.140912 21.6836 0.154876 21.5677 0.204381C21.4517 0.253885 21.3531 0.336701 21.2843 0.442327C21.2155 0.547954 21.1796 0.671635 21.1811 0.797692L21.215 3.76198L0.247013 3.99414L0.26118 5.2688L21.2291 5.03484L21.2612 7.99915C21.2624 8.12521 21.301 8.24806 21.3722 8.35213C21.4433 8.4562 21.5438 8.53681 21.6608 8.58372C21.7778 8.63064 21.9061 8.64175 22.0294 8.61566C22.1528 8.58956 22.2656 8.52744 22.3536 8.43715Z" fill="#fff" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction

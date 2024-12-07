'use client'
import React, { useState } from 'react'
import Heading from '@/app/components/common/Heading'

function Faqs() {

    const [isActiveFaq, setIsActiveFaq] = useState(-1)

    let faqData = [
        {
            faqQues: "What is Sushma Belleza?",
            faqAns: "Sushma Belleza is a premium residential project located in Sushma Downtown, a 60-acre integrated township in Zirakpur, Punjab. It offers spacious apartments with modern amenities and a focus on green living."
        },
        {
            faqQues: "Where is Sushma Belleza located?",
            faqAns: "Sushma Belleza is strategically located on Airport Road, Zirakpur, Punjab. This provides excellent connectivity to Chandigarh, the airport, and other key destinations in the region."
        },
        {
            faqQues: "What types of apartments are available in Sushma Belleza?",
            faqAns: "Sushma Belleza offers a variety of spacious apartments, including 2 BHK and 3 BHK configurations, designed to meet the needs of different families."
        },
        {
            faqQues: "What are the key amenities offered at Sushma Belleza?",
            faqAns: "Residents of Sushma Belleza enjoy a wide range of amenities, including a clubhouse, swimming pool, gym, landscaped parks, kids' play areas, and more."
        },
        {
            faqQues: "What is the price range of apartments in Sushma Belleza?",
            faqAns: "Contact Reality Nivesh-sushma service partner  sales team for detailed pricing information & current offers."
        },
        {
            faqQues: "Is Sushma Belleza RERA approved?",
            faqAns: "Yes, Sushma Belleza is approved by RERA (Real Estate Regulatory Authority). [Rera No - PBRERA-SAS79-PR0680]"
        },
        {
            faqQues: "What are the payment plan options available for Sushma Belleza?",
            faqAns: "Sushma belleza offers multiple payment plans such as down payment options, installment plans, and any special offers."
        },
        {
            faqQues: "WWhat is the possession status of Sushma Belleza?",
            faqAns: "Sushma belleza under construction project estimated completion December 2027."
        },
    ]

    const handleFaqToggle = (index) => {
        setIsActiveFaq(isActiveFaq === index ? -1 : index);
    };

    return (
        <section id='faqs' className='section-gap scroll-mt-20'>
            <div>
                <Heading heading={'Frequently asked questions'}
                    subHeading={''}
                    headingColor={'#474536'}
                    subHeadingColor={'#5A5454'}
                    subHeadingClass={'font-supera600'}
                />
            </div>
            <div className='mt-10 overflow-hidden w-[99%] xs:w-[96%] md:w-[88%] 2xl:container mx-auto'>
                <div className='w-full lg:flex justify-between items-center h-[300px] lg:h-[370px]  '>
                    <div className='w-full h-full px-2  gap-y-1 sm:gap-y-4 overflow-y-auto flex flex-col justify-between faq_scroll_bar'>
                        {
                            faqData.map((item, index) => (
                                <div key={index} className={`bg-[#F1F1F1] sm:bg-transparent relative border sm:border-b sm:border-[0px] border-b-[#D6D6D6] cursor-pointer text-[#4B4B4B] rounded-[4px] py-3 sm:py-0 px-3 md:px-6 flex justify-between items-center mb-2 `} onClick={() => { handleFaqToggle(index) }}>
                                    <div className='w-full'>
                                        <div className='text-[13px] sm:text-[14px] md:text-[16px] lg:text-[19px] pb-1 sm:pb-2 font-supera600 tracking-wide flex justify-between items-center'>
                                            <div className={`block sm:hidden min-w-[28px] min-h-[28px] ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production'} bg-cover rounded-full text-[#0D0D0D] flex justify-center items-center mr-3`}>{(index + 1).toString().padStart(2, '0')}</div>
                                            <div className='w-[100%] leading-snug capitalize'>
                                                {item.faqQues}
                                            </div>
                                            <div className=' pl-5 pr-1 w-[17px] '>
                                                <div className=" flex items-center justify-center cursor-pointer"
                                                >
                                                    {isActiveFaq == index ? (
                                                        <>
                                                            <div className="absolute w-[2px] h-3 bg-[#4B4B4B] duration-300 rotate-90"></div>
                                                            <div className="absolute h-[2px] w-3 bg-[#4B4B4B] duration-300 rotate-[0deg]"></div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="absolute w-[2px] h-3 bg-[#4B4B4B] duration-300"></div>
                                                            <div className="absolute h-[2px] w-3 bg-[#4B4B4B] duration-300"></div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={`capitalize transition-all duration-500 ease-in-out max-h-0 overflow-hidden ${isActiveFaq === index ? 'max-h-[200px] opacity-100' : 'opacity-0'} `}>
                                            <p className={`tracking-[1.1px] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[17px] font-supera500 text-wrap pe-6 pt-4 pb-3`}>
                                                {item.faqAns}
                                            </p>
                                        </div>
                                    </div>




                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs

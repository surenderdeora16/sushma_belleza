'use client'
import React, { useState } from 'react'
import Heading from '@/app/components/common/Heading'

function Faqs() {

    const [isActiveFaq, setIsActiveFaq] = useState(-1)

    // let faqData = [
    //     {
    //         faqQues: "What is The Medallion Mohali?",
    //         faqAns: "The Medallion Mohali is a premium residential project located in Sector 82, Mohali. It offers luxurious 3 and 4 BHK flats with modern amenities and facilities, making it one of the most sought-after residential developments in the region. The project is known for its strategic location near Chandigarh, excellent connectivity, and high-end features."
    //     },
    //     {
    //         faqQues: "What types of flats are available at The Medallion Mohali?",
    //         faqAns: "Medallion flats in Mohali offer spacious 3 BHK and 4 BHK configurations with various floor plans and layouts to suit different family sizes. The flats are designed with modern interiors, high ceilings, and large balconies that provide stunning views of the surroundings."
    //     },
    //     {
    //         faqQues: "What amenities are available at The Medallion Mohali?",
    //         faqAns: "The Medallion Mohali provides a wide range of luxury amenities including a clubhouse, swimming pool, gym, sports facilities, landscaped gardens, jogging tracks, kids' play area, and 24/7 security. These amenities are designed to offer a high standard of living for residents."
    //     },
    //     {
    //         faqQues: "Where is The Medallion located in Mohali?",
    //         faqAns: "The Medallion Mohali is located in Sector 82, Airport Road, Mohali, which is well-connected to Chandigarh and other nearby areas. Its strategic location makes it convenient for both working professionals and families, with easy access to schools, hospitals, shopping centers, and transportation hubs."
    //     },
    //     {
    //         faqQues: "What is the price range of flats at The Medallion Mohali?",
    //         faqAns: "The price of Medallion flats in Mohali varies depending on the size, configuration, and floor plan. Typically, the starting price for a 3 BHK flat is in the range of ₹1 crore and above, while the price for 4 BHK flats may be higher. For the latest pricing, it is recommended to contact the sales office or visit the official website."
    //     },
    //     {
    //         faqQues: "Are there any special offers or payment plans for buying a flat at The Medallion Mohali?",
    //         faqAns: "Yes, buyers can often take advantage of flexible payment plans and exclusive offers when purchasing flats at The Medallion Mohali. It is advised to check with the sales team for ongoing promotions or discount offers."
    //     },
    //     {
    //         faqQues: "Is The Medallion Mohali a good investment opportunity?",
    //         faqAns: "The Medallion Mohali is considered a strong investment opportunity due to its prime location on Airport Road, world-class amenities, and rising demand for high-end residential properties in Mohali. The project offers strong appreciation potential, making it attractive for both homebuyers and investors."
    //     },
    //     {
    //         faqQues: "What is the possession timeline for The Medallion Mohali?",
    //         faqAns: "The possession date for Medallion flats in Mohali varies by phase. It is recommended to check with the developer for the exact timeline and updates on the construction progress to ensure you are informed about possession schedules."
    //     },
    //     {
    //         faqQues: "Who is the developer behind The Medallion Mohali?",
    //         faqAns: "The Medallion Mohali is developed by a reputed builder with a strong portfolio in the real estate sector. The project is known for its high-quality construction, attention to detail, and timely delivery."
    //     }
    // ]

    let faqData = [
        {
            faqQues: "What types of apartments are available at Medallion Aurum?",
            faqAns: "Medallion Aurum offers luxurious 3+1 BHK and 4+1 BHK apartments designed for spacious living, featuring modern amenities and high-end finishes."
        },
        {
            faqQues: "Where is Medallion Aurum located?",
            faqAns: "Medallion Aurum is located in Sector 67, Mohali, with convenient access to Chandigarh International Airport, IT City Mohali, educational institutions, hospitals, and major business hubs."
        },
        {
            faqQues: "What are the key amenities provided at Medallion Aurum?",
            faqAns: "Residents enjoy a range of amenities, including a clubhouse, gymnasium, swimming pool, spa, indoor games, landscaped green spaces, sports facilities like tennis and basketball courts, and 24x7 security with a 5-tier system."
        },
        {
            faqQues: "Is Medallion Aurum a gated community?",
            faqAns: "Yes, Medallion Aurum is a gated community with a secure environment, offering 24x7 CCTV surveillance, security guards, and access control systems for the safety of all residents."
        },
        {
            faqQues: "What is the size range of apartments at Medallion Aurum?",
            faqAns: "The apartments range from approximately 2,950 sq. ft. to 3,900 sq. ft., offering ample living space, thoughtful design, and modern interiors."
        },
        {
            faqQues: "What is Mivan technology, and how is it used in the construction of Medallion Aurum?",
            faqAns: "Mivan technology is an advanced construction technique used for formwork, ensuring high-quality, durable, and earthquake-resistant buildings. It enhances the overall structural integrity and timely project completion."
        },
        {
            faqQues: "Are there recreational facilities for children and families?",
            faqAns: "Yes, Medallion Aurum offers a dedicated children's play area, green spaces for family outings, sports courts, indoor game zones, and more to cater to the recreational needs of residents."
        },
        {
            faqQues: "Is Medallion Aurum suitable for investment purposes?",
            faqAns: "Absolutely! The strategic location, high-end amenities, robust construction quality, and promising growth in Mohali’s real estate market make Medallion Aurum an excellent investment option."
        },
        {
            faqQues: "What is the proximity of Medallion Aurum to key landmarks?",
            faqAns: "Medallion Aurum enjoys close proximity to Chandigarh International Airport, IT City Mohali, reputed schools, hospitals, shopping centers, and various commercial hubs."
        },

        {
            faqQues: "Is there adequate parking available?",
            faqAns: "Yes, Medallion Aurum provides ample covered parking spaces for residents and visitors, ensuring a hassle-free experience."
        },
        {
            faqQues: "Can I book a site visit for Medallion Aurum?",
            faqAns:"Yes, site visits can be arranged. Please contact our sales team or visit our website to schedule an appointment for a guided tour of the property."
        },
        {
            faqQues: "What is the open space ratio at Medallion Aurum?",
            faqAns: "Medallion Aurum boasts 82% open space, ensuring a serene living environment with lush green landscapes and natural surroundings."
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
                    headingColor={'#171717'}
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
                                            <div className='w-[100%] leading-snug'>
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
                                            className={`transition-all duration-500 ease-in-out max-h-0 overflow-hidden ${isActiveFaq === index ? 'max-h-[200px] opacity-100' : 'opacity-0'} `}>
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

'use client'
import Heading from '@/app/components/common/Heading'
import SubHeader from '@/app/components/common/SubHeader'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ApartmentImg1 from '@/app/images/price-section-apartmentImg1.webp'
import ApartmentImg2 from '@/app/images/price-section-apartmentImg2.webp'
import ApartmentImg3 from '@/app/images/price-section-apartmentImg3.webp'
import EnquiryForm from '@/app/components/common/ModalEnquiryForm'
import CurrentOfferImg from '@/app/images/current-offer-banner.webp'
import CurrentOfferMobileBanner from '@/app/images/currentofferbanner-mobile.webp'

const propertyData = [
    {
        image: ApartmentImg1,
        title: '3 BHK',
        size: '2300 SQFT.',
        description: 'introducing our 3BHK Apartments @ Sushma Belleza , A magnificent testament to luxury and modern living. These stunning towers offer spacious living spaces.',
        // offer: 'Earn Monthly Rental Up to ₹ 15000*/- Per Month till Possession',
        offer: null,
        priceLabel: 'Company price',
        companyPrice: '₹ 1.68cr',
        ourPriceLabel: 'Our Price',
        ourPrice: '₹ 1.48cr*',
    },
    {
        image: ApartmentImg2,
        title: '3 BHK+S',
        size: '2800 SQFT.',
        description: 'introducing our3bhk+s  Apartments @Sushma Belleza  , A magnificent testament to luxury and modern living. These stunning towers offer spacious living spaces.',
        offer: null,
        priceLabel: 'Company price',
        companyPrice: '₹ 2.06cr',
        ourPriceLabel: 'Our Price',
        ourPrice: '₹ 1.81cr*',
    },
    {
        image: ApartmentImg3,
        title: '4BHK+S',
        size: '3400 SQFT.',
        description: 'introducing our 4bhk+S  Apartments @ Sushma Belleza  , A magnificent testament to luxury and modern living. These stunning towers offer spacious living spaces.',
        offer: null,
        priceLabel: 'Company price',
        companyPrice: '₹ 2.58cr',
        ourPriceLabel: 'Our Price',
        ourPrice: '₹ 2.27cr*',
    }
]

const paymentPlanData = [
    {
        name: 'Booking Amount',
        percentage: '10% of BSP'
    },
    {
        name: 'Within 45 days from date of Application',
        percentage: '15% of BSP'
    },
    {
        name: 'On Start Of Foundation',
        percentage: '15% of BSP'
    },
    {
        name: 'On Start Of basement Roof Slab',
        percentage: '10% of BSP + PLC'
    },
    {
        name: 'On Start Of Ground Roof Slab',
        percentage: '10% of BSP'
    },
    {
        name: 'On Start Of First Roof Slab',
        percentage: '10% of BSP'
    },
    {
        name: 'On Start Of 2nd Roof Slab',
        percentage: '5% of BSP + Corner Charges'
    },
    // 
    {
        name: 'On Start Of 3nd Roof Slab',
        percentage: '5% of BSP'
    },
    {
        name: 'On Start Of 4nd Roof Slab',
        percentage: '5% of BSP'
    },
    {
        name: 'On Start of Internal Plaster Work',
        percentage: '5% of BSP'
    },
    {
        name: 'On Start of Finishing Work',
        percentage: '5% of BSP'
    },
    {
        name: 'On Offer of possession Of the Unit',
        percentage: '5% of BSP + Stamp Duty + IFMS + Any Other Charges'
    },
]

const page = () => {
    const [isUnlocked, setIsUnlocked] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [event, setEvent] = useState('Unlock Price')

    const handleOpenModal = (event) => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling
        setEvent(event)
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset'; // Enable scrolling
    };

    const handleUnlock = () => {
        setIsUnlocked(false)
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsUnlocked(false)
    //     }, 2000)
    // }, [])
    return (
        <div>
            {isModalOpen && <EnquiryForm heading={'View Price Sheet'} formType={'enquiry'} isOpen={isModalOpen} onClose={handleCloseModal} onFormSubmit={handleUnlock} eventSource={`Unlock Price (${event})`} notThankyou={true} />}
            <SubHeader />
            <section id="price" className='section-gap-inner scroll-mt-24 sm:scroll-mt-20'>
                <div>
                    <Heading heading={'Price List'}
                        subHeading={'Explore Sushma Belleza Price list, Payment Plan and Latest offers'}
                        headingColor={'#4E4E4E'}
                        subHeadingColor={'#5A5454'}
                        subHeadingClass={'font-supera600'}
                    />
                </div>

                <div className='xl:container mt-16 mx-auto px-5'>
                    <div className='grid grid-cols-1 lg:grid-cols-1 gap-x-6 gap-y-10'>
                        {propertyData?.map((property, index) => {
                            return (
                                <div key={index}>
                                    <div className='hidden md:flex w-full h-[200px] rounded-[22px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.3)]'>
                                        <div className='w-[35%] h-full relative rounded-l-[22px] overflow-hidden'>
                                            <div className='w-full h-full relative scale-100 hover:scale-110 duration-1000 hover:duration-1000'>
                                                <Image src={property?.image} className='object-cover' fill alt="" />
                                            </div>
                                            {property?.offer !== null && (
                                                <p className='w-full bg-[#fff] text-[#FFFFFF] font-supera500 lg:font-supera600 text-[10px] lg:text-[12px] xl:text-[13px] text-center py-2 absolute bottom-0 left-0'>
                                                    {property?.offer}
                                                </p>
                                            )}
                                        </div>
                                        <div className={`${isUnlocked ? 'bg-[#FCF5E9]' : 'bg-[#FCF5E9]'} duration-1000  w-[38%] pl-[8px] md:pl-[12px] py-2 flex flex-col justify-center items-start h-full`}>
                                            <h4 className={`${isUnlocked ? 'text-[#A27D27]' : 'text-[#A27D27]'} duration-1000 font-supera700 text-[19px] uppercase mr-1 lg:pl-3`}>{property?.title}</h4>
                                            <div className={`${isUnlocked ? 'text-[#414141]' : 'text-[#414141]'} duration-1000 mt-1 font-supera700 text-[14px] uppercase lg:pl-3`}>{property?.size}</div>
                                            <p className={`${isUnlocked ? 'text-[#414141]' : 'text-[#414141]'} duration-1000 mt-[9px] px-1 lg:px-3 font-supera500 text-[12px] 2xl:text-[13px] capitalize overflow-y-auto scroll-m-8`}>{property?.description}</p>
                                        </div>
                                        <div className='w-[27%] cursor-pointer rounded-r-[22px]  overflow-hidden'>
                                            <div className='relative w-full h-full'>
                                                <div onClick={() => handleOpenModal(property?.title)} className={' w-full h-full flex flex-col gap-y-2 justify-center items-center bg-[#474536]'}>
                                                    <span>
                                                        <svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M36.9739 18.9836H34.3744V13.7846C34.3744 6.61 28.5515 0.787109 21.3769 0.787109C14.2022 0.787109 8.37933 6.61 8.37933 13.7846V18.9836H5.77982C2.92037 18.9836 0.580811 21.3232 0.580811 24.1827V50.1777C0.580811 53.0372 2.92037 55.3767 5.77982 55.3767H36.9739C39.8333 55.3767 42.1729 53.0372 42.1729 50.1777V24.1827C42.1729 21.3232 39.8333 18.9836 36.9739 18.9836ZM21.3769 42.3792C18.5174 42.3792 16.1778 40.0396 16.1778 37.1802C16.1778 34.3207 18.5174 31.9812 21.3769 31.9812C24.2363 31.9812 26.5759 34.3207 26.5759 37.1802C26.5759 40.0396 24.2363 42.3792 21.3769 42.3792ZM29.4353 18.9836H13.3184V13.7846C13.3184 9.33948 16.9317 5.72617 21.3769 5.72617C25.822 5.72617 29.4353 9.33948 29.4353 13.7846V18.9836Z" fill="#fff" />
                                                        </svg>
                                                    </span>
                                                    <h6 className='font-poppins font-medium text-[15px] xl:text-[17px] text-[#fff]'>Unlock Price</h6>
                                                </div>

                                                <div className={`w-full h-full absolute top-0 right-0 ${isUnlocked ? 'translate-x-[96%] duration-500' : 'translate-x-0 duration-500'} duration-500 z-20 ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production'} bg-cover`}>
                                                    <div className={` w-full h-[40%] flex justify-center`}>
                                                        <div className='flex flex-col lg:flex-col items-center justify-center gap-y-1 lg:gap-y-1 gap-x-3.5 capitalize font-supera600 text-[#000] text-[14px] 2xl:text-[16px] tracking-wide'>
                                                            {property?.priceLabel}
                                                            <p className='px-1 2xl:px-0 font-poppins font-medium text-[20px] lg:text-[22px] 2xl:text-[26px] tracking-[1%] text-[#000] relative after:absolute after:top-[50%] after:translate-y-[-50%] after:left-[50%] after:translate-x-[-50%] after:w-[110%] after:h-[1.1px] after:bg-[#EB4C4C]'>{property?.companyPrice}</p>
                                                        </div>
                                                    </div>
                                                    <div className='w-full h-[60%] relative flex flex-col justify-center items-center'>
                                                        <h6 className='font-supera600 text-[14px] 2xl:text-[16px] text-center text-[#000]'>{property?.ourPriceLabel}</h6>
                                                        <p className='font-poppins font-semibold text-[32px] lg:text-[35px] 2xl:text-[38px] tracking-[1%] text-center text-[#000]'>{property?.ourPrice}</p>
                                                        <p className='rotate-0 tracking-wide  font-poppins font-medium text-[5px] text-[#000]'>T&C Apply </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='block md:hidden'>
                                        <div className='relative w-full h-[310px] rounded overflow-hidden'>
                                            <Image src={property?.image} className='object-cover' fill alt="" />
                                        </div>

                                        <div>
                                            <div className='relative max-w-[250px] bxxs:max-w-[280px] xs:max-w-[300px] cxs:max-w-[350px] sm:max-w-[400px] h-[40px] cxs:h-[50px] flex items-center mt-3.5 pl-3.5 bg-[#BE7530] tracking-wide font-supera600 sm:font-supera700 text-lg bxxs:text-xl cxs:text-[24px] sm:text-[26px] text-[#fff]'>
                                                {property?.title} | {property?.size}

                                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] cxs:border-t-[50px] border-t-transparent border-r-[40px] cxs:border-r-[50px] border-r-white"></div>
                                            </div>
                                            <p className='mt-3.5 font-supera600 text-sm cxs:text-base text-[#7B7A7A] capitalize leading-snug'>{property?.description}</p>
                                        </div>

                                        <div className='w-full mt-5 relative rounded-[10px]'>
                                            <div onClick={() => handleOpenModal(property?.title)} className={`${isUnlocked ? 'scale-100 duration-300 group text-[#fff] lg:text-[31px] text-[18px] hover:text-white font-poppins font-semibold  ' : 'scale-0 duration-300 absolute'} overflow-hidden text-center capitalize flex justify-center items-center rounded-[5.19px] px-7 lg:px-16 py-4 gap-2 w-full bg-[#474536]`}>
                                                <span>
                                                    <svg width="18" height="23" className='group-hover:fill-[#fff] fill-[#fff] ' viewBox="0 0 43 56" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M36.9739 18.9836H34.3744V13.7846C34.3744 6.61 28.5515 0.787109 21.3769 0.787109C14.2022 0.787109 8.37933 6.61 8.37933 13.7846V18.9836H5.77982C2.92037 18.9836 0.580811 21.3232 0.580811 24.1827V50.1777C0.580811 53.0372 2.92037 55.3767 5.77982 55.3767H36.9739C39.8333 55.3767 42.1729 53.0372 42.1729 50.1777V24.1827C42.1729 21.3232 39.8333 18.9836 36.9739 18.9836ZM21.3769 42.3792C18.5174 42.3792 16.1778 40.0396 16.1778 37.1802C16.1778 34.3207 18.5174 31.9812 21.3769 31.9812C24.2363 31.9812 26.5759 34.3207 26.5759 37.1802C26.5759 40.0396 24.2363 42.3792 21.3769 42.3792ZM29.4353 18.9836H13.3184V13.7846C13.3184 9.33948 16.9317 5.72617 21.3769 5.72617C25.822 5.72617 29.4353 9.33948 29.4353 13.7846V18.9836Z" />
                                                    </svg>
                                                </span>
                                                Unlock Price
                                            </div>

                                            <div className={`${!isUnlocked ? 'duration-1000 h-[180px] z-20 bg-no-repeat bg-cover bg-center' : 'duration-1000  z-0 h-[0px] '} ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production'} bg-cover w-full flex-col rounded-[5.19px] overflow-hidden`}>
                                                <div className={` w-full h-[40%] flex justify-center`}>
                                                    <div className='flex flex-col lg:flex-col items-center justify-center gap-y-1 lg:gap-y-1 gap-x-3.5 capitalize font-supera600 text-[#000] text-[14px] 2xl:text-[16px] tracking-wide'>
                                                        {property?.priceLabel}
                                                        <p className='px-1 2xl:px-0 font-poppins font-medium text-[20px] cxs:text-[22px] sm:text-[26px] tracking-[1%] text-[#000] relative after:absolute after:top-[50%] after:translate-y-[-50%] after:left-[50%] after:translate-x-[-50%] after:w-[110%] after:h-[1.1px] after:bg-[#EB4C4C]'>{property?.companyPrice}</p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-center'>
                                                    <svg width="117" height="3" viewBox="0 0 117 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M58.5002 2.7124V0.961426L0.338924 2.12365L58.5002 2.7124Z" fill="black" />
                                                        <path d="M58.5001 2.7124V0.961426L116.661 2.12365L58.5001 2.7124Z" fill="black" />
                                                    </svg>
                                                </div>
                                                <div className='w-full h-[60%] relative flex flex-col justify-center items-center'>
                                                    <h6 className='font-supera600 text-[14px] 2xl:text-[16px] text-center text-[#000]'>{property?.ourPriceLabel}</h6>
                                                    <p className='font-poppins font-semibold text-[32px] sm:text-[36px] tracking-[1%] text-center text-[#000]'>{property?.ourPrice}</p>
                                                    <p className='rotate-0 tracking-wide  font-poppins font-medium text-[6px] text-[#000]'>T&C Apply </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section id="payment-structure" className='section-gap scroll-mt-24'>
                <div className='bg-[#333333] relative'>
                    <div className='w-full h-full absolute top-0 left-0 z-10 bg-[#0000009b]'></div>
                    <div className={` pt-6 sm:py-10 cmd:py-14 px-3 bxxs:px-5 ${process.env.basePath == '' ? 'bg-paymentStructure-section-local' : 'bg-paymentStructure-section-production'}`}>
                        <div className='relative z-20'>
                            <h5 className={`text-[#fff] tracking-wider uppercase font-supera700 text-[24px] sm:text-[30px] cmd:text-[35px] text-center`}>Payment Structure</h5>
                        </div>
                        <div className='bg-white relative top-8 sm:top-0 z-20 2xl:container mx-auto rounded-2xl sm:rounded-xl overflow-hidden mb-16 sm:mb-0 sm:mt-8 cmd:mt-14 px-0 bxxs:px-3 xs:px-5 sm:px-16 py-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:shadow-none'>
                            <h6 className='font-supera600 text-[27px] text-[#494949] text-center mb-2 sm:mb-8'>Milestone Details</h6>

                            <div className='grid grid-cols-1 h-[550px] gap-y-[30px] sm:gap-y-[40px] py-2 overflow-y-auto sm:pr-2'>
                                {paymentPlanData?.map((plan, index) => {
                                    return (
                                        <div key={index} className='w-[98%] 3xl:container mx-auto h-full sm:h-[35px] md:h-full flex items-center gap-x-4 md:gap-x-7 cmd:gap-x-12 '>
                                            <div className='size-[35px] md:size-[40px] cmd:size-[53.14px] rounded-full bg-[#141413] flex justify-center items-center font-supera600 text-[13px] md:text-[14px] cmd:text-[18.5px] text-[#fff]'>
                                                {index < 9 && ("0")}{index + 1}
                                            </div>
                                            <div className='w-[88%] h-full pr-1 pb-1 cxs:pb-3 flex justify-between items-end border-b-[0.9px] border-b-[#D9D9D9] sm:border-b-[#141413] font-supera600 leading-tight xs:leading-snug sm:leading-normal text-[12px] bxxs:text-[14px] md:text-[16px] cmd:text-[18.5px] text-[#3A3A39] sm:text-[#141413]'>
                                                <div>
                                                    {plan?.name}
                                                </div>
                                                <div className="ml-8 text-right">
                                                    {plan?.percentage}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            {/* <div className=' w-[98%] 3xl:container mx-auto  h-full sm:h-[35px] md:h-[38px] border-b-[2.5px] mt-3 pb-3 border-b-[#D9D9D9] sm:border-b-[#141413] flex items-center gap-x-4 md:gap-x-7 cmd:gap-x-12 '>
                                    <div className='w-[100%] h-full pr-1 flex justify-between   font-supera700 text-[14px] md:text-[16px] cmd:text-[20.5px] text-[#3A3A39] sm:text-[#141413]'>
                                        <div>Total Payable Amount On or Before Registration</div>
                                        <div className='ml-5'>100%</div>
                                    </div>
                                </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <section id="current-offer" className='section-gap-inner scroll-mt-24 sm:scroll-mt-20'>
                <Heading heading={'current Offers'}
                    subHeading={''}
                    headingColor={'#474536'}
                    subHeadingColor={'#5A5454'}
                    subHeadingClass={'font-supera600'}
                />
                <figure onClick={() => handleOpenModal("Current Offer")} className='cursor-pointer hidden sm:block w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative'>
                    <Image src={CurrentOfferImg} fill alt="" className='object-cover object-left' />
                </figure>
                <figure onClick={() => handleOpenModal("Current Offer (Mobile)")} className='block sm:hidden w-full h-[500px] bxxs:h-[545px] cxs:h-[550px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 3xl:h-[70vh] relative'>
                    <Image src={CurrentOfferMobileBanner} fill alt="" className='object-cover sm:object-fill' />
                </figure>
            </section>
        </div>
    )
}

export default page
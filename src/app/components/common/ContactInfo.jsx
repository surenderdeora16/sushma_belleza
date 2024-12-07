'use client'
import React from 'react'
import Heading from '@/app/components/common/Heading'
import Link from 'next/link'

const ContactInfo = () => {
    return (
        <section className='section-gap'>
            <div>
                <Heading heading={'contact us'}
                    subHeading={''}
                    headingColor={'#474536'}
                    subHeadingColor={'#5A5454'}
                    subHeadingClass={'font-supera600'}
                />
            </div>

            {/* Desktop View */}
            <div className='hidden md:block'>
                <div className={`w-full md:h-[165px] ${process.env.basePath == '' ? 'bg-ContactInfoBG-local' : 'bg-ContactInfoBG-production'} bg-cover `}>
                    <div className='md:mt-16 w-[90%] 2xl:w-[70%] h-full mx-auto  pb-8 md:py-0 flex gap-7 md:gap-0 justify-start cxs:justify-around md:justify-between items-start md:items-center flex-wrap md:flex-nowrap'>
                        <div className='relative md:w-[200px] cmd:w-[250px] flex flex-row md:flex-col justify-start md:justify-center items-center gap-x-4 md:gap-x-0'>
                            <div className={`md:absolute bottom-[160%] lg:bottom-[135%] 2xl:bottom-[130%] min-w-[50px] min-h-[50px] sm:size-[61.33px] bg-[#A27D27] rounded-full border-[1.5px] border-[#fff] flex justify-center items-center`}>
                                <svg className='w-5 sm:w-6' viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.1303 6.39945C15.8039 6.39945 16.9443 7.53984 16.9443 10.2135H19.487C19.487 6.1134 17.2304 3.85676 13.1303 3.85676V6.39945ZM17.4808 13.3194C17.2365 13.0973 16.9155 12.9789 16.5856 12.9891C16.2556 12.9993 15.9425 13.1373 15.7124 13.374L12.6701 16.5028C11.9378 16.363 10.4656 15.904 8.95012 14.3924C7.43468 12.8757 6.97573 11.3996 6.83969 10.6724L9.96593 7.62884C10.2029 7.39889 10.3411 7.08575 10.3513 6.75569C10.3616 6.42563 10.2429 6.10455 10.0206 5.8604L5.32298 0.69493C5.10055 0.450014 4.7914 0.301454 4.4612 0.280802C4.131 0.260149 3.80575 0.369031 3.55454 0.584323L0.795723 2.95029C0.575922 3.17089 0.44473 3.46449 0.427033 3.7754C0.407963 4.09323 0.0443588 11.6221 5.88237 17.4627C10.9754 22.5544 17.355 22.9269 19.112 22.9269C19.3688 22.9269 19.5264 22.9193 19.5684 22.9167C19.8792 22.8993 20.1727 22.7676 20.3922 22.5468L22.7569 19.7867C22.9724 19.5356 23.0815 19.2105 23.061 18.8803C23.0406 18.5501 22.8923 18.2409 22.6476 18.0183L17.4808 13.3194Z" fill="white" />
                                </svg>
                            </div>
                            <div className='font-supera500 flex flex-col bxxs:flex-row cxs:flex-col gap-x-6 tracking-wide text-[13.5px] xs:text-[18px] cxs:text-[15px] lg:text-[18px] xl:text-[20px] text-[#fff]'>
                                <button aria-label="call-1" onClick={() => { window.location.href = 'tel:918968066698' }}>+91 89680 66698</button>
                                <button aria-label="call-2" onClick={() => { window.location.href = 'tel:919988010405' }}>+91 99880 10405</button>
                            </div>
                        </div>
                        <div className='relative md:w-[200px] cmd:w-[250px] flex flex-row md:flex-col justify-start md:justify-center items-center gap-x-4 md:gap-x-0'>
                            <div className={`md:absolute bottom-[265%] lg:bottom-[220%] min-w-[50px] min-h-[50px] sm:size-[61.33px] bg-[#A27D27] rounded-full border-[1.5px] border-[#fff] flex justify-center items-center`}>
                                <svg className='w-5 sm:w-6' viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.0201 0.0644531H0.0600586V21.6325H27.0201V0.0644531ZM24.3241 5.45646L13.5401 12.1965L2.75606 5.45646V2.76046L13.5401 9.50046L24.3241 2.76046V5.45646Z" fill="white" />
                                </svg>
                            </div>
                            <div className='font-supera500 tracking-wide text-[13.5px] xs:text-[18px] cxs:text-[15px] lg:text-[18px] xl:text-[20px] text-[#fff]'>
                                <button aria-label="info@realtynivesh.com" onClick={() => { window.location.href = 'mailto:info@realtynivesh.com' }} >info@realtynivesh.com</button>
                            </div>
                        </div>
                        <div className='relative  cxs:md:w-[250px] cmd:w-[340px] flex flex-row md:flex-col justify-start md:justify-center items-center gap-x-4 md:gap-x-0'>
                            <div className={`md:absolute bottom-[125%] lg:bottom-[110%] min-w-[50px] min-h-[50px] sm:size-[61.33px] bg-[#A27D27] rounded-full border-[1.5px] border-[#fff] flex justify-center items-center`}>
                                <svg className='w-5 sm:w-6' viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2784 0.137207C7.63045 0.140331 5.09189 1.19359 3.21953 3.06595C1.34717 4.93831 0.293906 7.47688 0.290782 10.1248C0.287611 12.2887 0.994435 14.3938 2.30283 16.1173C2.30283 16.1173 2.57521 16.476 2.6197 16.5277L10.2784 25.5601L17.9407 16.5232C17.9806 16.4751 18.2539 16.1173 18.2539 16.1173L18.2548 16.1146C19.5626 14.3919 20.2691 12.2877 20.2659 10.1248C20.2628 7.47688 19.2096 4.93831 17.3372 3.06595C15.4648 1.19359 12.9263 0.140331 10.2784 0.137207ZM10.2784 13.7566C9.56005 13.7566 8.85787 13.5436 8.26062 13.1446C7.66336 12.7455 7.19786 12.1783 6.92298 11.5146C6.64809 10.851 6.57617 10.1208 6.7163 9.41625C6.85644 8.71174 7.20234 8.06461 7.71026 7.55669C8.21818 7.04876 8.86532 6.70286 9.56983 6.56273C10.2743 6.42259 11.0046 6.49451 11.6682 6.7694C12.3318 7.04429 12.8991 7.50979 13.2981 8.10704C13.6972 8.7043 13.9102 9.40648 13.9102 10.1248C13.909 11.0876 13.526 12.0107 12.8451 12.6916C12.1643 13.3724 11.2412 13.7554 10.2784 13.7566Z" fill="white" />
                                </svg>
                            </div>
                            <div className='font-supera500 tracking-wide text-[13.5px] xs:text-[18px] cxs:text-[15px] lg:text-[18px] xl:text-[20px] text-[#fff]'>
                                <Link href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x390fe9ec15cbfd03:0x4cb1dcaa577519c8?entry=s&utm_campaign=srp-72762481&sa=X&ved=1t:8290&ictx=111" target="_blank" >
                                    <p className='text-left cxs:text-center'>
                                        Showroom No. 12 level 2, UPTOWN insignia PR-7 Airport Road, Zirakpur, Punjab
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className='block md:hidden w-full bg-white'>
                <div className='w-full py-4 space-y-1.5'>
                    {/* Individual Divs for Mobile */}
                    <div className={`pr-0.5 bg-[#84600C] bg-right-top w-full`}>
                        <div className={`flex  items-center gap-4 w-[99%] bg-[#8f7127] pl-5 pr-2 cxs:px-8 py-4`}>
                            <div className={`md:absolute bottom-[160%] lg:bottom-[135%] 2xl:bottom-[130%] min-w-[50px] min-h-[50px] sm:min-w-[55px] sm:min-h-[55px] bg-[#fff] rounded-full border-[1.5px] border-[#fff] flex justify-center items-center`}>
                                <svg className='w-5 sm:w-6' viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.1303 6.39945C15.8039 6.39945 16.9443 7.53984 16.9443 10.2135H19.487C19.487 6.1134 17.2304 3.85676 13.1303 3.85676V6.39945ZM17.4808 13.3194C17.2365 13.0973 16.9155 12.9789 16.5856 12.9891C16.2556 12.9993 15.9425 13.1373 15.7124 13.374L12.6701 16.5028C11.9378 16.363 10.4656 15.904 8.95012 14.3924C7.43468 12.8757 6.97573 11.3996 6.83969 10.6724L9.96593 7.62884C10.2029 7.39889 10.3411 7.08575 10.3513 6.75569C10.3616 6.42563 10.2429 6.10455 10.0206 5.8604L5.32298 0.69493C5.10055 0.450014 4.7914 0.301454 4.4612 0.280802C4.131 0.260149 3.80575 0.369031 3.55454 0.584323L0.795723 2.95029C0.575922 3.17089 0.44473 3.46449 0.427033 3.7754C0.407963 4.09323 0.0443588 11.6221 5.88237 17.4627C10.9754 22.5544 17.355 22.9269 19.112 22.9269C19.3688 22.9269 19.5264 22.9193 19.5684 22.9167C19.8792 22.8993 20.1727 22.7676 20.3922 22.5468L22.7569 19.7867C22.9724 19.5356 23.0815 19.2105 23.061 18.8803C23.0406 18.5501 22.8923 18.2409 22.6476 18.0183L17.4808 13.3194Z" fill="#8F7127" />
                                </svg>
                            </div>
                            <button aria-label="call 1" className='font-supera500 cxs:font-supera600 no-underline tracking-wider text-sm bxxs:text-base xs:text-lg cxs:text-xl text-white  xs:pl-1 cxs:pl-2' onClick={() => { window.location.href = 'tel:918968066698' }}>+91 89680 66698</button>
                        </div>
                    </div>
                    <div className={`pr-0.5 bg-[#84600C] bg-right-top w-full`}>
                        <div className='flex items-center gap-4 w-[99%] bg-[#6D551B] pl-5 pr-2 cxs:px-8 py-5'>
                            <div className={`md:absolute bottom-[160%] lg:bottom-[135%] 2xl:bottom-[130%] min-w-[50px] min-h-[50px] sm:min-w-[55px] sm:min-h-[55px] bg-[#fff] rounded-full border-[1.5px] border-[#fff] flex justify-center items-center`}>
                                <svg className='w-5 sm:w-6' viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.1303 6.39945C15.8039 6.39945 16.9443 7.53984 16.9443 10.2135H19.487C19.487 6.1134 17.2304 3.85676 13.1303 3.85676V6.39945ZM17.4808 13.3194C17.2365 13.0973 16.9155 12.9789 16.5856 12.9891C16.2556 12.9993 15.9425 13.1373 15.7124 13.374L12.6701 16.5028C11.9378 16.363 10.4656 15.904 8.95012 14.3924C7.43468 12.8757 6.97573 11.3996 6.83969 10.6724L9.96593 7.62884C10.2029 7.39889 10.3411 7.08575 10.3513 6.75569C10.3616 6.42563 10.2429 6.10455 10.0206 5.8604L5.32298 0.69493C5.10055 0.450014 4.7914 0.301454 4.4612 0.280802C4.131 0.260149 3.80575 0.369031 3.55454 0.584323L0.795723 2.95029C0.575922 3.17089 0.44473 3.46449 0.427033 3.7754C0.407963 4.09323 0.0443588 11.6221 5.88237 17.4627C10.9754 22.5544 17.355 22.9269 19.112 22.9269C19.3688 22.9269 19.5264 22.9193 19.5684 22.9167C19.8792 22.8993 20.1727 22.7676 20.3922 22.5468L22.7569 19.7867C22.9724 19.5356 23.0815 19.2105 23.061 18.8803C23.0406 18.5501 22.8923 18.2409 22.6476 18.0183L17.4808 13.3194Z" fill="#6D551B" />
                                </svg>
                            </div>
                            <button aria-label="call 2" className='font-supera500 cxs:font-supera600 no-underline tracking-wider text-sm bxxs:text-base xs:text-lg cxs:text-xl text-white  xs:pl-1 cxs:pl-2' onClick={() => { window.location.href = 'tel:919988010405' }}>+91 99880 10405</button>
                        </div>
                    </div>
                    <div className={`pr-0.5 bg-[#84600C] bg-right-top w-full`}>
                        <div className='flex items-center w-[99%] gap-4 bg-[#513F14] pl-5 pr-2 cxs:px-8 py-7'>
                            <div className={`md:absolute bottom-[265%] lg:bottom-[220%] min-w-[50px] min-h-[50px] sm:min-w-[55px] sm:min-h-[55px] bg-[#fff] rounded-full border-[1.5px] border-[#fff] flex justify-center items-center`}>
                                <svg className='w-5 sm:w-6' viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.0201 0.0644531H0.0600586V21.6325H27.0201V0.0644531ZM24.3241 5.45646L13.5401 12.1965L2.75606 5.45646V2.76046L13.5401 9.50046L24.3241 2.76046V5.45646Z" fill="#513F14" />
                                </svg>
                            </div>
                            <div className=' xs:pl-1 cxs:pl-2'>
                                <button aria-label="info@realtynivesh.com" onClick={() => { window.location.href = 'mailto:info@realtynivesh.com' }} className='font-supera500 cxs:font-supera600 no-underline tracking-wider text-sm bxxs:text-base xs:text-lg cxs:text-xl text-white'>info@realtynivesh.com</button>
                            </div>
                        </div>
                    </div>
                    <div className={`pr-0.5 bg-[#84600C] bg-right-top w-full`}>
                        <div className='flex items-center w-[99%] gap-4 bg-[#362A0D]  pl-5 pr-2 cxs:px-8 py-9'>
                            <div className={`md:absolute bottom-[125%] lg:bottom-[110%] min-w-[50px] min-h-[50px] sm:min-w-[55px] sm:min-h-[55px] bg-[#fff] rounded-full border-[1.5px] border-[#fff] flex justify-center items-center`}>
                                <svg className='w-5 sm:w-6' viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2784 0.137207C7.63045 0.140331 5.09189 1.19359 3.21953 3.06595C1.34717 4.93831 0.293906 7.47688 0.290782 10.1248C0.287611 12.2887 0.994435 14.3938 2.30283 16.1173C2.30283 16.1173 2.57521 16.476 2.6197 16.5277L10.2784 25.5601L17.9407 16.5232C17.9806 16.4751 18.2539 16.1173 18.2539 16.1173L18.2548 16.1146C19.5626 14.3919 20.2691 12.2877 20.2659 10.1248C20.2628 7.47688 19.2096 4.93831 17.3372 3.06595C15.4648 1.19359 12.9263 0.140331 10.2784 0.137207ZM10.2784 13.7566C9.56005 13.7566 8.85787 13.5436 8.26062 13.1446C7.66336 12.7455 7.19786 12.1783 6.92298 11.5146C6.64809 10.851 6.57617 10.1208 6.7163 9.41625C6.85644 8.71174 7.20234 8.06461 7.71026 7.55669C8.21818 7.04876 8.86532 6.70286 9.56983 6.56273C10.2743 6.42259 11.0046 6.49451 11.6682 6.7694C12.3318 7.04429 12.8991 7.50979 13.2981 8.10704C13.6972 8.7043 13.9102 9.40648 13.9102 10.1248C13.909 11.0876 13.526 12.0107 12.8451 12.6916C12.1643 13.3724 11.2412 13.7554 10.2784 13.7566Z" fill="#362A0D" />
                                </svg>
                            </div>
                            <div className=' xs:pl-1 cxs:pl-2'>
                                <Link href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x390fe9ec15cbfd03:0x4cb1dcaa577519c8?entry=s&utm_campaign=srp-72762481&sa=X&ved=1t:8290&ictx=111" target="_blank" >
                                    <p className='font-supera500 cxs:font-supera600 no-underline tracking-wider text-sm bxxs:text-base xs:text-lg cxs:text-xl  text-white'>
                                        Showroom No. 12 level 2, Uptown insignia PR-7 Airport Road, Zirakpur, Punjab
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo


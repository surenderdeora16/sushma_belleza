'use client'
import React from 'react'
import Heading from '@/app/components/common/Heading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';
import HLF_Img1 from '@/app/images/hlf-sbi.png'
import HLF_Img2 from '@/app/images/hlf-kotak.png'
import HLF_Img3 from '@/app/images/hlf-icici.png'
import HLF_Img4 from '@/app/images/hlf-hdfc.png'
import HLF_Img5 from '@/app/images/hlf-bob.png'
import HLF_Img6 from '@/app/images/hlf-axisBank.png'
import Image from 'next/image';


const HomeLoanFacility = () => {
    return (
        <section className='section-gap'>
            <div>
                <Heading heading={'Approved Banks'}
                    subHeading={'Easy & Hassle-Free Bank Loan Options for Your Dream Home'}
                    headingColor={'#0A1325'}
                    subHeadingColor={'#5A5454'}
                    subHeadingClass={'font-supera600'}
                />
            </div>

            <div className='w-full 2xl:container mx-auto px-6 sm:px-5 md:px-16'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 2000
                    }}
                    breakpoints={{
                        380: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1441:{
                            slidesPerView: 5,
                            spaceBetween: 20,
                        }
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='my-2 p-3 sm:p-1.5 max-w-full sm:max-w-[240px] h-[96px] rounded-[12.11px] px-2 py-1 border-[2.85px] shadow-[0px_0px_2.85px_0.71px_rgba(0,0,0,0.10)] overflow-hidden'>
                            <div className='w-full h-full relative flex justify-center items-center'>
                                <Image src={HLF_Img1} fill alt="" className='object-contain object-center' />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='my-2 p-3 sm:p-1.5 max-w-full sm:max-w-[240px] h-[96px] rounded-[12.11px] px-2 py-1 border-[2.85px] shadow-[0px_0px_2.85px_0.71px_rgba(0,0,0,0.10)] overflow-hidden'>
                            <div className='w-full h-full relative flex justify-center items-center'>
                                <Image src={HLF_Img2} fill alt="" className='object-contain object-center' />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='my-2 p-3 sm:p-1.5 max-w-full sm:max-w-[240px] h-[96px] rounded-[12.11px] px-2 py-1 border-[2.85px] shadow-[0px_0px_2.85px_0.71px_rgba(0,0,0,0.10)] overflow-hidden'>
                            <div className='w-full h-full relative flex justify-center items-center'>
                                <Image src={HLF_Img3} fill alt="" className='object-contain object-center' />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='my-2 p-3 sm:p-1.5 max-w-full sm:max-w-[240px] h-[96px] rounded-[12.11px] px-2 py-1 border-[2.85px] shadow-[0px_0px_2.85px_0.71px_rgba(0,0,0,0.10)] overflow-hidden'>
                            <div className='w-full h-full relative flex justify-center items-center'>
                                <Image src={HLF_Img4} fill alt="" className='object-contain object-center' />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='my-2 p-3 sm:p-1.5 max-w-full sm:max-w-[240px] h-[96px] rounded-[12.11px] px-2 py-1 border-[2.85px] shadow-[0px_0px_2.85px_0.71px_rgba(0,0,0,0.10)] overflow-hidden'>
                            <div className='w-full h-full relative flex justify-center items-center'>
                                <Image src={HLF_Img5} fill alt="" className='object-contain object-center' />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='my-2 p-3 sm:p-1.5 max-w-full sm:max-w-[240px] h-[96px] rounded-[12.11px] px-2 py-1 border-[2.85px] shadow-[0px_0px_2.85px_0.71px_rgba(0,0,0,0.10)] overflow-hidden'>
                            <div className='w-full h-full relative flex justify-center items-center'>
                                <Image src={HLF_Img6} fill alt="" className='object-contain object-center' />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='my-2 p-3 sm:p-1.5 max-w-full sm:max-w-[240px] h-[96px] rounded-[12.11px] px-2 py-1 border-[2.85px] shadow-[0px_0px_2.85px_0.71px_rgba(0,0,0,0.10)] overflow-hidden'>
                            <div className='w-full h-full relative flex justify-center items-center'>
                                <Image src={HLF_Img1} fill alt="" className='object-contain object-center' />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='my-2 p-3 sm:p-1.5 max-w-full sm:max-w-[240px] h-[96px] rounded-[12.11px] px-2 py-1 border-[2.85px] shadow-[0px_0px_2.85px_0.71px_rgba(0,0,0,0.10)] overflow-hidden'>
                            <div className='w-full h-full relative flex justify-center items-center'>
                                <Image src={HLF_Img2} fill alt="" className='object-contain object-center' />
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </section>

    )
}

export default HomeLoanFacility

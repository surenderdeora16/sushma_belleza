'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import NearbyImg1 from '@/app/images/nearby-img1.webp'
import NearbyImg2 from '@/app/images/nearby-img2.webp'
import NearbyImg3 from '@/app/images/nearby-img3.webp'
import NearbyImg4 from '@/app/images/nearby-img4.webp'
import NearbyImg5 from '@/app/images/nearby-img5.webp'
import NearbyImg7 from '@/app/images/nearby-img7.webp'
import NearbyImg8 from '@/app/images/nearby-img8.webp'
import NearbyImg9 from '@/app/images/nearby-img9.webp'
import NearbyImg12 from '@/app/images/nearby-img12.webp'
import NearbyImg13 from '@/app/images/nearby-img13.webp'



const nearbyData = [
    { image: NearbyImg13, distance: '01', unit: 'Min', place: 'manav mangal smart school zirakpur' },
    { image: NearbyImg2, distance: '02', unit: 'Min', place: 'Starbucks' },
    { image: NearbyImg3, distance: '02', unit: 'Min', place: 'Inox Cinema' },
    { image: NearbyImg4, distance: '02', unit: 'Min', place: 'Dominos' },
    { image: NearbyImg9, distance: '08', unit: 'Min', place: 'Airocity' },
    { image: NearbyImg1, distance: '11', unit: 'Min', place: 'Chandigarh' },
    { image: NearbyImg8, distance: '12', unit: 'Min', place: 'Big Bazaar' },
    { image: NearbyImg12, distance: '15', unit: 'Min', place: 'Chandigarh International Airport' },
    { image: NearbyImg5, distance: '15', unit: 'Min', place: 'Railway Station' },
    { image: NearbyImg7, distance: '25', unit: 'Min', place: 'fortis Hospital mohali' },
]

const NearBy = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section id="nearby" className='mt-5 nearby-section section-gap-inner scroll-mt-20'>
            <div className='2xl:container mx-auto'>
                <div>
                    <h2 className='px-3 font-supera700 leading-tight text-[27px] sm:text-[30px] cmd:text-[32px] text-center text-[#303030] uppercase'>
                        <span className='font-supera600'>Nearby,</span> <strong className='font-supera700'>Sushma Belleza</strong>
                    </h2>
                </div>
                <div className='my-[20px] 3xl:my-[25px] px-5 relative'>
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={true}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            // reverseDirection: false, 
                        }}
                        onClick={(swiper) => {
                            if (swiper?.clickedSlide) {
                                swiper?.slideNext();
                            }
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Use realIndex for correct mapping
                        breakpoints={{
                            500: {
                                slidesPerView: 2,
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
                            1441: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {nearbyData.map((item, index) => (
                            <SwiperSlide key={index} className='relative z-10'>
                                <div className='cursor-pointer relative z-10 overflow-hidden'>
                                    <div className={`group w-full h-[250px] xl:h-[300px] relative overflow-hidden ${activeIndex === index ? '' : ''}`}>
                                        <Image src={item.image} fill className={`object-cover duration-300  ${activeIndex === index ? 'scale-100 duration-300' : 'scale-150 duration-300'} `} quality={100} alt={`nearby ${item.place}`} />
                                        <div className={`${activeIndex === index ? 'scale-105 opacity-100 duration-200' : 'scale-0 opacity-0 duration-200'} duration-300 absolute top-0 left-0 z-40 w-full h-full bg-[#00000080] flex justify-center items-center `}>
                                            <h6 className='font-supera700 text-[74px] leading-[1] text-white text-center'>
                                                {item.distance} <br /><span className='text-[47px]'>{item.unit}</span>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className='py-4'>
                                        <h4 className='capitalize font-supera700 text-[18px] text-[#6D6868] text-center'>{item.place}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-button-prev absolute top-[50%] translate-y-[-100%] z-40 left-8 cursor-pointer">
                        <svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.7553 2.53471L14.2633 0.0451247L0.690394 13.6134C0.471605 13.8308 0.297971 14.0893 0.179486 14.3741C0.0610004 14.6589 2.45588e-06 14.9643 2.48284e-06 15.2727C2.50981e-06 15.5811 0.0610005 15.8865 0.179486 16.1713C0.297971 16.4561 0.471605 16.7146 0.690394 16.932L14.2633 30.5073L16.7529 28.0177L4.01376 15.2762L16.7553 2.53471Z" fill="#fff" />
                        </svg>
                    </div>
                    <div className="swiper-button-next absolute top-[50%] translate-y-[-100%] z-40 right-8 cursor-pointer">
                        <svg width="18" height="31" viewBox="0 0 18 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.517685 2.53471L3.00962 0.0451247L16.5826 13.6134C16.8013 13.8308 16.975 14.0893 17.0935 14.3741C17.212 14.6589 17.273 14.9643 17.273 15.2727C17.273 15.5811 17.212 15.8865 17.0935 16.1713C16.975 16.4561 16.8013 16.7146 16.5826 16.932L3.00962 30.5073L0.520031 28.0177L13.2592 15.2762L0.517685 2.53471Z" fill="#fff" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NearBy

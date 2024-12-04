'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Heading from '@/app/components/common/Heading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CommaIcn from '@/app/images/testimonal-comma.png'
import person from '@/app/images/user.png'

const TestimonialData = [
    {
        image: person,
        name: 'Ms. Sharma',
        designation: 'Working Professional',
        // messageHeading: 'Medallion Aurum’s strategic location in Sector 67, Mohali, is unbeatable',
        message: "I love how Sushma Belleza is nestled within this huge township with so much greenery!  The landscaped parks are perfect for my morning walks, and it's so peaceful.Plus, being on Airport Road means easy access to Chandigarh and the airport.It's the best of both worlds!"
    },
    {
        image: person,
        name: 'Mr. & Mrs. Verma',
        designation: 'Investors',
        // messageHeading: 'I chose Medallion Aurum for its incredible lifestyle offerings',
        message: "We invested in Sushma Belleza because we believe in the Sushma Group's reputation and the project's potential. The location on Airport Road is strategic, and the quality of construction is excellent. We're confident that our investment will appreciate in the future."
    },
    {
        image: person,
        name: 'The Gupta Family',
        designation: 'First-Time Homebuyers',
        // messageHeading: ' Highlighting Location and Connectivity',
        message: "We were looking for a spacious apartment in a good location, but we didn't want to break the bank. Sushma Belleza offered the best value for money compared to other projects we considered. We're very happy with our purchase."
    },
    {
        image: person,
        name: 'Mr. Batra',
        designation: 'Real Estate Investor',
        // messageHeading: ' Appreciation for Design and Planning',
        message: "Investing in Sushma Belleza was a smart choice. The property is located in a prime area with good connectivity, and the developer has a strong reputation for quality construction. I'm confident that my investment will yield good returns in the years to come."
    }
]

const Testimonial = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePaginationClick = (index) => {
        if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (swiperRef.current?.swiper) {
                swiperRef.current.swiper.update();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className='section-gap'>
            <div className='testimonial-section w-full h-[710px] bg-no-repeat bg-cover relative'>
                <div className='relative w-full h-full overflow-hidden bg-center'>
                    <video
                        src={`${process.env.basePath}/videos/testimonalbg.mp4`}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className='w-full h-full object-cover scale-[1.35] md:scale-[1.30] lg:scale-[1.30] xl:scale-125 bg-center'
                        aria-label="Background Video"
                        preload="auto"
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='w-full h-full absolute z-10 top-0 left-0 bg-[#020202b8]'>
                    <div className='container 2xl:pl-10 h-[calc(710px-150px)] mx-auto pt-[42px] relative z-20'>
                        <Heading
                            heading={'testimonials'}
                            subHeading={''}
                            headingColor={'#FFFFFF'}
                            subHeadingColor={'#FFFBFB'}
                            subHeadingClass={'font-supera400'}
                        />

                        <div className='mt-10 relative w-full h-full pb-0 xl:pb-16 px-6 lg:px-0'>
                            <Swiper
                                ref={swiperRef}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[Pagination, Navigation, Autoplay]}
                                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                                direction={'vertical'}
                                breakpoints={{
                                    0: {
                                        direction: 'horizontal',
                                    },
                                    768: {
                                        direction: 'vertical',
                                    },
                                }}
                                className="mySwiper h-full"
                            >
                                {TestimonialData.map((testimonial, index) => (
                                    <SwiperSlide key={index} className='w-full h-full relative z-10'>
                                        <div className='w-full h-full flex items-center justify-end'>
                                            <div className='w-full md:w-1/2 text-white font-supera900 text-[40px]'>
                                                <div className='max-w-[600px] mx-auto md:mx-0'>
                                                    <div className='relative w-[100px] h-[80px] mx-auto'>
                                                        <Image src={CommaIcn} fill alt="" className='object-contain' />
                                                    </div>
                                                    <p className='mt-3 md:mt-2 font-poppins font-light tracking-wide text-center md:text-left capitalize    text-[14px] xl:text-[17px] leading-relaxed text-[#fff] relative md:after:absolute after:left-0 after:top-[118%] after:w-[70%] after:h-[1px] md:after:bg-[#FFFFFFCC]'>
                                                        <strong className="font-medium">{testimonial.messageHeading}</strong> – {testimonial.message}
                                                    </p>
                                                    <div className='flex justify-center md:justify-start gap-x-[10.23px] mt-3 md:mt-[46px]'>
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.45331 3.58276C7.58778 1.54842 8.15456 0.53125 9.0025 0.53125C9.85044 0.53125 10.4172 1.54842 11.5517 3.58276L11.8454 4.10925C12.1677 4.68767 12.3289 4.97689 12.5796 5.16761C12.8303 5.35833 13.1437 5.42906 13.7705 5.57053L14.34 5.69947C16.5426 6.19821 17.6431 6.44713 17.9054 7.28969C18.1669 8.13136 17.4165 9.00975 15.915 10.7656L15.5264 11.2196C15.1001 11.7183 14.8861 11.9681 14.7903 12.2761C14.6945 12.5851 14.7268 12.9181 14.7912 13.5834L14.8503 14.1896C15.0769 16.5329 15.1906 17.704 14.5047 18.2243C13.8188 18.7454 12.7873 18.2699 10.7261 17.3208L10.1916 17.0755C9.606 16.8051 9.3132 16.6707 9.0025 16.6707C8.6918 16.6707 8.399 16.8051 7.81342 17.0755L7.27976 17.3208C5.21767 18.2699 4.18617 18.7445 3.50119 18.2252C2.81443 17.704 2.92814 16.5329 3.15468 14.1896L3.21377 13.5843C3.27824 12.9181 3.31047 12.5851 3.21377 12.277C3.11886 11.9681 2.90486 11.7183 2.47865 11.2205L2.09005 10.7656C0.588474 9.01064 -0.161868 8.13226 0.0995878 7.28969C0.361939 6.44713 1.46327 6.19731 3.66595 5.69947L4.23542 5.57053C4.8613 5.42906 5.17379 5.35833 5.4254 5.16761C5.67611 4.97689 5.83728 4.68767 6.15962 4.10925L6.45331 3.58276Z" fill="#FFC267" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                    <div className='block md:hidden mt-10'>
                                                        <div className='relative z-50 cursor-pointer size-[80px] rounded-full mx-auto mt-[23px]'>
                                                            <Image src={testimonial.image} className='relative z-50 w-full h-full' alt={`${testimonial.name}'s image`} />
                                                            <div className='testimonal-img-container absolute inset-0 flex justify-center items-center'>
                                                                {[...Array(4)].map((_, i) => (
                                                                    <div key={i} className={`circle size-[65px] delay${i + 1}`}></div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h6 className='font-poppins font-semibold text-[24px] text-[#fff] text-center mt-3'>{testimonial.name}</h6>
                                                            {testimonial.designation && (
                                                                <p className='font-supera500 text-[12px] text-center text-[#FFFFFF] tracking-wider'>{testimonial.designation}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}

                                {/* Pagination */}
                                <div className='w-[50%] h-full absolute z-20 top-[50%] translate-y-[-50%] hidden md:flex flex-col justify-center items-start lg:items-center 3xl:items-start gap-y-[15px]'>
                                    {TestimonialData.map((testimonial, index) => (
                                        <div
                                            onClick={() => handlePaginationClick(index)}
                                            key={index}
                                            className={`w-[300px] md:w-[333.31px] h-full border-[0.72px] border-white rounded-[8px] cursor-pointer ${activeIndex === index ? 'bg-[#FFFFFFCC]' : 'bg-[#99999980]'}`}
                                        >
                                            <div className='w-full h-full pl-[22px] pr-1 flex gap-x-8 justify-start items-center'>
                                                <div className='relative z-50 cursor-pointer size-[65px] rounded-full'>
                                                    <Image src={testimonial.image} className='relative z-50 w-full h-full' alt={`${testimonial.name}'s image`} />
                                                    <div className='testimonal-img-container absolute inset-0 flex justify-center items-center'>
                                                        {[...Array(4)].map((_, i) => (
                                                            <div key={i} className={`circle size-[50px] delay${i + 1}`}></div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 className={`${activeIndex === index ? 'text-[#2C2C2C]' : 'text-[#FFFFFF]'} font-poppins font-semibold text-[18.44px]`}>{testimonial.name}</h5>
                                                    {testimonial.designation && (
                                                        <p className={`${activeIndex === index ? 'text-[#7D7D7D]' : 'text-[#FFFFFF]'} font-supera500 tracking-wider text-[10px]`}>{testimonial.designation}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial


'use client'

import React, { useState } from 'react'
import Icon from '@/app/images/aboutusMobileTriIcon.webp'
import Image from 'next/image'

const AboutUs = () => {
    const [readMore, setReadMore] = useState(false)

    return (
        <section id='about-us' className="section-gap scroll-mt-24">
            <div className='bg-[#3A382C] md:bg-[#0b0b0b]'>
                <div className={`${process.env.basePath == '' ? 'md:bg-aboutus-bgSectionImg-local' : 'md:bg-aboutus-bgSectionImg-production'} bg-cover bg-left bg-no-repeat w-full h-full `}>
                    <div className={`w-full max-w-[100%] sm:max-w-[95%] lg:max-w-[90%] 3xl:max-w-[1400px] mx-auto pt-[40px] md:pt-[30px] md:py-[60px] pb-[35px]  flex flex-col md:flex-row gap-4 cmd:gap-5 xl:gap-8 3xl:gap-4 xl:justify-center items-center`}>
                        <div className='w-full max-w-[320px] bxxs:max-w-[360px] cxs:max-w-[400px] md:max-w-[340px] cmd:max-w-[416px] h-full flex flex-col justify-center items-center pl-2 md:pl-0 lg:pr-0 lg:pl-0 2xl:pr-0 2xl:pl-0'>
                            <div className='w-[80%] sm:w-[90%] xl:w-full h-[220px] cxs:h-[300px] md:h-[404px] relative flex items-center'>
                                <Image src={Icon} quality={100} fill className='object-contain xl:object-contain ' alt='' />
                            </div>
                        </div>
                        <div className='w-full md:w-[60%] mt-1.5 cxs:mt-0 md:mt-0 flex flex-col gap-5 px-5 md:px-0 lg:pl-0 2xl:pl-8 md:pr-8 2xl:pr-0'>
                            <p className='capitalize tracking-wide font-supera500 text-[14px] cxs:text-[15px] md:text-[16px] lg:text-[17px] 3xl:text-[19px] leading-relaxed text-justify text-[#fff]'><strong className='font-supera500'> Sushma Belleza Zirakpur </strong> offers a premium living experience with its luxurious 3 BHK, 3+1 BHK, and 4+1 BHK apartments, meticulously designed to reflect elegance and modern living. Located in the heart of Zirakpur,  <strong className='font-supera500'> Sushma Belleza </strong> ensures excellent connectivity to Chandigarh, Panchkula, and Mohali, providing residents with the perfect blend of convenience and tranquility.
                            </p>
                            <p className='capitalize tracking-wide font-supera500 text-[14px] cxs:text-[15px] md:text-[16px] lg:text-[17px] 3xl:text-[19px] leading-relaxed text-justify text-[#fff]'>The apartments feature spacious layouts, high-end finishes, large balconies with panoramic views, and modern interiors crafted for comfort and style. The amenities at <strong className='font-supera500'> Sushma Belleza </strong>elevate your lifestyle, offering a grand clubhouse, swimming pool, gymnasium, landscaped gardens, jogging tracks, children’s play areas, and 24/7 security, all curated to create a serene, luxurious living environment.
                            </p>
                            {readMore && (
                                <>
                                    <p className='capitalize tracking-wide font-supera500 text-[14px] cxs:text-[15px] md:text-[16px] lg:text-[17px] 3xl:text-[19px] leading-relaxed text-justify text-[#fff]'>
                                        Discover a new standard of prestige and refined living at <strong>Sushma Belleza Zirakpur</strong>  – where every detail is crafted for your comfort and delight.
                                    </p>
                                </>
                            )}
                            <button onClick={() => setReadMore(!readMore)} aria-label="read-more" className={`md:w-[167px] md:h-[38px] md:flex justify-center items-center font-supera600 capitalize md:uppercase text-[16px] sm:text-[20px] md:text-[24px] text-[#F9A221] md:text-[#000] rounded-md bg-right ${process.env.basePath == '' ? 'md:bg-backgroud-theme-local' : 'md:bg-backgroud-theme-production'} bg-cover cursor-pointer text-justify tracking-wide`}>{readMore ? 'Read less' : 'Read more'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs

'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import SubHeader from '@/app/components/common/SubHeader'
import Heading from '@/app/components/common/Heading'
import NearBy from '@/app/components/NearBy'
import whyImg1 from '@/app/images/whyimg1.png'
import whyImg2 from '@/app/images/whyimg2.png'
import whyImg3 from '@/app/images/whyimg3.png'
import whyImg4 from '@/app/images/whyimg4.png'
import GoogleMap from "@/app/components/GoogleMap";
import MapImage from "@/app/images/image-map.webp"

const tabsConfig = [
    {
        name: 'Map',
        content: {
            type: 'image',
            content: MapImage?.src
        }
    },
    {
        name: 'Google Map',
        content: {
            type: 'iframe',
            content: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7933.407078327625!2d76.82964920564167!3d30.624742960855595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f95853393fb35%3A0xed97a10321b272fd!2sSUSHMA%20BELLEZA%20ZIRAKPUR!5e0!3m2!1sen!2sin!4v1733492111380!5m2!1sen!2sin'
        }
    },
]

const Page = () => {
    const videoRefs = useRef({});
    const [clickedVideos, setClickedVideos] = useState({});

    const LocationVideo = [
        {
            type: "video",
            src: `${process.env.basePath}/videos/Location-video.mp4`,
            alt: "Sushma Belleza Location Video",
            class: "col-span-12",
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
            Object.entries(videoRefs.current).forEach(([key, videoRef]) => {
                if (videoRef && clickedVideos[key]) {
                    const rect = videoRef.getBoundingClientRect();
                    const visiblePercentage =
                        ((Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)) /
                            rect.height) *
                        100;

                    if (visiblePercentage >= 20) {
                        videoRef.play();
                    } else {
                        videoRef.pause();
                    }
                }
            });
        };

        const throttledScroll = throttle(handleScroll, 200);
        window?.addEventListener("scroll", throttledScroll);

        return () => {
            window?.removeEventListener("scroll", throttledScroll);
        };
    }, [clickedVideos]);

    const throttle = (func, limit) => {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    };

    return (
        <div>
            <SubHeader />
            <div className='section-gap'>
                <section className='xl:container mx-auto px-5'>
                    <div>
                        <h4 className='text-[#303030] font-supera700 text-center cmd:text-left  text-2xl  cxs:text-3xl cmd:text-4xl lg:text-4xl xl:text-[42px] leading-tight uppercase'>Why <br className="hidden cmd:block" />
                            Mohali- <br className='block cmd:hidden' /> Sushma Belleza?
                        </h4>

                        <div className='grid grid-cols-2 gap-y-10 cmd:gap-y-0 cmd:flex mt-14'>
                            <div className='border-r border-[#BFBDAC] pr-5 xl:pr-7 2xl:pr-10 flex flex-col gap-y-2 xl:gap-y-3'>
                                <div className="relative w-[50px] h-[50px] cxs:w-[55px] cxs:h-[55px] md:w-[63px] md:h-[63px]">
                                    <Image
                                        src={whyImg1}
                                        alt="Descriptive alt text"
                                        width={100}  // Replace with the appropriate width
                                        height={100}
                                        layout="intrinsic"
                                        sizes="(max-width: 768px) 55px, 63px"
                                        className="object-cover"
                                        quality={100}
                                    />
                                </div>
                                <h6 className='capitalize font-supera600 text-[#262623] leading-tight lg:leading-snug text-lg sm:text-xl 2xl:text-2xl'>Why  <br /> Mohali.</h6>
                                <p className='tracking-wider capitalize text-[#646363] font-supera600 text-[11px] bxxs:text-xs cxs:text-[13px] xl:text-sm 2xl:text-base'>Mohali is a thriving urban hub known for its excellent infrastructure, strategic location near Chandigarh, robust connectivity, and modern lifestyle amenities, making it a prime destination for both residential and commercial investments.</p>
                            </div>
                            <div className='cmd:border-r border-[#BFBDAC] pl-5 cmd:px-5 xl:px-7 2xl:px-10 flex flex-col gap-y-2 xl:gap-y-3'>
                                <div className='relative w-[50px] h-[50px] cxs:w-[55px] cxs:h-[55px] md:w-[63px] md:h-[63px]'>
                                    <Image
                                        src={whyImg2}
                                        alt="Descriptive alt text"
                                        width={100}  // Replace with the appropriate width
                                        height={100}
                                        layout="intrinsic"
                                        sizes="(max-width: 768px) 55px, 63px"
                                        className="object-cover"
                                        quality={100}
                                    />
                                </div>
                                <h6 className='capitalize font-supera600 text-[#262623] leading-tight lg:leading-snug text-lg sm:text-xl 2xl:text-2xl'>Stay <br /> Connected.</h6>
                                <p className='tracking-wider capitalize text-[#646363] font-supera600 text-[11px] bxxs:text-xs cxs:text-[13px] xl:text-sm 2xl:text-base'>The Aurum&apos;s prime location ensures you &quot;Stay Connected&quot; effortlessly with excellent roadways, proximity to Chandigarh, and easy access to educational institutions, healthcare facilities, shopping centers, and business hubs. Enjoy seamless connectivity and a lifestyle of convenience.</p>
                            </div>
                            <div className='border-r border-[#BFBDAC] pr-5 cmd:px-5 xl:px-7 2xl:px-10 flex flex-col gap-y-2 xl:gap-y-3'>
                                <div className='relative w-[50px] h-[50px] cxs:w-[55px] cxs:h-[55px] md:w-[63px] md:h-[63px]'>
                                    <Image
                                        src={whyImg3}
                                        alt="Descriptive alt text"
                                        width={100}  // Replace with the appropriate width
                                        height={100}
                                        layout="intrinsic"
                                        sizes="(max-width: 768px) 55px, 63px"
                                        className="object-cover"
                                        quality={100}
                                    />
                                </div>
                                <h6 className='capitalize font-supera600 text-[#262623] leading-tight lg:leading-snug text-lg sm:text-xl 2xl:text-2xl'>Great <br /> Infrastructure.</h6>
                                <p className='tracking-wider capitalize text-[#646363] font-supera600 text-[11px] bxxs:text-xs cxs:text-[13px] xl:text-sm 2xl:text-base'>Mohali offers Great Infrastructure with well-planned roads, modern amenities, smart city facilities, and a rapidly growing commercial sector, making it an ideal place for quality living and business growth.</p>
                            </div>
                            <div className='pl-5 xl:pl-7 2xl:pl-10 flex flex-col gap-y-2 xl:gap-y-3'>
                                <div className='relative w-[50px] h-[50px] cxs:w-[55px] cxs:h-[55px] md:w-[63px] md:h-[63px]'>
                                    <Image
                                        src={whyImg4}
                                        alt="Descriptive alt text"
                                        width={100}  // Replace with the appropriate width
                                        height={100}
                                        layout="intrinsic"
                                        sizes="(max-width: 768px) 55px, 63px"
                                        className="object-cover"
                                        quality={100}
                                    />
                                </div>
                                <h6 className='capitalize font-supera600 text-[#262623] leading-tight lg:leading-snug text-lg sm:text-xl 2xl:text-2xl'>Best Investment <br /> Opportunities.</h6>
                                <p className='tracking-wider capitalize text-[#646363] font-supera600 text-[11px] bxxs:text-xs cxs:text-[13px] xl:text-sm 2xl:text-base'>Sushma Belleza presents the Best Investment Opportunity with its prime location, modern amenities, and strong growth potential, offering high returns and a lifestyle of luxury and convenience for both residents and investors.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <NearBy />

                <section>
                    <Heading
                        heading={'Location map'}
                        subHeading={'Sushma Belleza offers premium, modern living with spacious apartments designed for comfort and style. Located in a prime sector 67 of Mohali , these luxury residences provide world-class amenities and a sophisticated urban lifestyle.'}
                        headingColor={'#474536'}
                        subHeadingColor={'#5A5454'}
                        headingClass={'font-supera600'}
                        subHeadingClass={'font-supera600'}
                    />
                    <div className='flex flex-col cmd:flex-row w-full h-[90vh]'>
                        <div className='w-full cmd:w-[65%] h-[80%] cmd:h-full  mx-auto'>
                            <GoogleMap className={'w-full h-full'} imageClass={'object-contain'} tabs={tabsConfig} />
                        </div>
                        <div className=" w-full cmd:w-[35%] h-1/2 cmd:h-full -mt-0.5 cmd:mt-0">
                            {/* <div className="w-full 2xl:container mx-auto h-[40vh] md:h-[60vh] lg:h-[80vh] relative">
                        <Image src={BannerImg} alt='banner' loading="lazy" className="object-cover object-left" fill />
                    </div> */}
                            <div className="w-full h-full">
                                {LocationVideo.map((video, index) => (
                                    <div
                                        key={index}
                                        className={`w-full h-full overflow-hidden relative ${video.class}`}
                                    >
                                        <div className="relative w-full h-full">
                                            <video
                                                src={video?.src}
                                                loop
                                                muted
                                                autoPlay
                                                playsInline
                                                className="w-full h-full object-cover pointer-events-none"
                                            >
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Page

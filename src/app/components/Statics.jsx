'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Icon1 from '@/app/images/statics-icon1.svg';
import Icon2 from '@/app/images/statics-icon2.svg';
import Icon3 from '@/app/images/statics-icon3.svg';
import Icon4 from '@/app/images/statics-icon4.svg';

const Statics = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [tapData, setTapData] = useState([
        { count: 0, text: 'Acres Land Area', icon: Icon1, endValue: 12, afterUnit: '' },
        { count: 0, text: 'Luxury Apartments', icon: Icon2, endValue: 625, afterUnit: '' },
        { count: 0, text: 'Car Parking', icon: Icon3, endValue: 1000, afterUnit: '+' },
        { count: 0, text: 'Sq ft Club House', icon: Icon4, endValue: 20000, afterUnit: '' },
    ]);
    const staticsRef = useRef(null);

    useEffect(() => {
        const currentRef = staticsRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (!hasAnimated) {
                        setHasAnimated(true);
                        startCounterAnimation();
                    }
                }
            },
            { threshold: 0.1 }
        );

        if (currentRef) observer.observe(currentRef);
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [hasAnimated]);

    const startCounterAnimation = () => {
        const duration = 1300; // Animation duration
        const stepTime = 20;   // Time per step
        const steps = Math.ceil(duration / stepTime);

        const updateCount = (endValue, index) => {
            let startValue = 0;
            const stepValue = endValue / steps;

            const interval = setInterval(() => {
                startValue += stepValue;
                if (startValue >= endValue) {
                    startValue = endValue;
                    clearInterval(interval);
                }
                setTapData((prev) => {
                    const newData = [...prev];

                    let formattedValue;
                    if (endValue % 1 === 0) {
                        // For whole numbers
                        formattedValue = Math.floor(startValue).toLocaleString();
                    } else {
                        // For decimal numbers
                        formattedValue = startValue.toFixed(1).toLocaleString();
                    }

                    // Add leading zero for numbers less than 10
                    if (endValue < 10 && endValue % 1 === 0) {
                        formattedValue = formattedValue.padStart(2, '0');
                    }

                    newData[index].count = formattedValue;
                    return newData;
                });
            }, stepTime);
        };

        tapData.forEach((item, index) => updateCount(item.endValue, index));
    };

    return (
        <section className='bg-[#F0F0F0]' ref={staticsRef}>
            <div style={{ backgroundImage: `url('${process.env.basePath}/images/staticbgimg.webp')` }} className='bg-cover bg-center  bg-no-repeat w-full h-full'>
                <div className='2xl:container mx-auto py-[55px] cxs:py-[60px] 3xl:py-[68px]  px-[14px] xs:px-[30px] cmd:px-[45px]'>
                    <div className='grid grid-cols-2 gap-x-5 gap-y-7 xs:gap-6 cxs:gap-8 md:gap-0 md:flex md:justify-between cmd:justify-around'>
                        {tapData.map((item, index) => (
                            <div
                                key={index}
                                className={`w-full md:w-auto flex justify-start md:justify-center ${index == 3 ? 'cmd:border-r-[0px]' : 'cmd:border-r-[1.29px]'}  border-[#D8D8D8] pr-[4px] cmd:pr-[2%] lg:pr-[2%] 2xl:pr-[4%]`}
                            >
                                <div className='w-full md:w-auto flex items-center gap-2.5 pb-2.5 sm:pb-1.5 lg:pb-2.5 relative before:absolute before:bottom-0 before:left-0 before:w-[90%] before:h-[1.74px] before:bg-[#474536] sm:before:bg-[#474536]'>
                                    <div className='w-[35px] xs:w-[40px] sm:w-[50px] md:w-[35px] cmd:w-[40px] lg:w-[50px] xl:w-[58px] h-[38px] xs:h-[44px] sm:h-[53px] md:h-[40px] cmd:h-[44px] lg:h-[53px] xl:h-[61px] relative'>
                                        <Image src={item.icon} fill alt="" />
                                    </div>
                                    <div>
                                        <h4 className='text-[25px] leading-[20px] bxxs:text-[32px] xs:leading-[26px] cxs:text-[40px] cxs:leading-[36px] sm:text-[45px] sm:leading-[40px] md:text-[35px] md:leading-[30px] cmd:text-[40px] cmd:leading-[36px] lg:text-[45px] lg:leading-[40px] xl:text-[55px] xl:leading-[49px] font-supera800 text-[#474536]'>
                                            {item.count}{item?.afterUnit}
                                        </h4>
                                        <div className='text-[13px] cxs:text-[14px] sm:text-[16px] md:text-[14px] cmd:text-[14px] lg:text-[16px] xl:text-[18px] mt-2 leading-tight font-supera700 sm:font-supera600 text-[#A27D27]'>
                                            {item.text}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statics;

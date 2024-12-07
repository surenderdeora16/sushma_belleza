'use client'
import React, { useRef, useState, useEffect } from 'react';
import SubHeader from '@/app/components/common/SubHeader';
import Heading from '@/app/components/common/Heading';
import { motion, AnimatePresence } from 'framer-motion';
import imageData from './amenitiesData';
import DynamicLightbox from '@/app/components/common/DynamicLightbox';
import Image from 'next/image';

const Page = () => {
    const lightboxRefs = useRef([]);

    const amenitiesImageData = imageData?.map((item) => item.src) || [];

    const handleImageClick = (index) => {
        if (lightboxRefs?.current[index]) {
            lightboxRefs?.current[index].click();
        }
    };

    return (
        <section>
            <SubHeader />
            <div id='amenities' className='section-gap scroll-mt-28 sm:scroll-mt-20'>
                <Heading
                    heading={'Amenities'}
                    subHeading={'Discover the Premium amenities at Sushma Belleza'}
                    headingColor={'#474536'}
                    subHeadingColor={'#5A5454'}
                    subHeadingClass={'font-supera600'}
                />
                <div className='w-[95%] md:w-[95%] cmd:w-[88%] 3xl:container lg:mx-auto mx-auto grid grid-cols-12 gap-3'>
                    {imageData?.map((image, index) => (
                        <AmenityItem
                            key={index}
                            image={image}
                            index={index}
                            handleImageClick={handleImageClick}
                            lightboxRef={(el) => (lightboxRefs.current[index] = el)}
                            amenitiesImageData={amenitiesImageData}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const AmenityItem = ({ image, index, handleImageClick, lightboxRef, amenitiesImageData }) => {
    const [ref, isIntersecting] = useIntersectionObserver();

    return (
        <div
            ref={ref}
            className={`${image?.className} h-[200px] lg:h-[250px] xl:h-[300px] relative overflow-hidden group`}
        >
            <DynamicLightbox
                ref={lightboxRef}
                images={image?.src}
                sliderimages={amenitiesImageData}
                idx={index}
                multipleimg={true}
                title={image?.alt}
                zoom={true}
                keyboardNavigation={true}
                className="object-cover scale-100 group-hover:scale-125 duration-500"
            />
            <AnimatePresence>
                {isIntersecting && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white"
                        onClick={() => handleImageClick(index)}
                    >
                        <motion.h3
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg cxs:text-base sm:text-lg cmd:text-xl lg:text-2xl 3xl:text-3xl text-center font-supera600 tracking-wider px-1 mb-2 capitalize"
                        >
                            {image?.title}
                        </motion.h3>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: [0, -10, 0], opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{
                                y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
                                opacity: { duration: 0.5, delay: 0.4 },
                            }}
                            className="absolute right-7 bottom-4"
                        >
                            <div className='w-[30px] sm:w-[40px] xl:w-[50px] h-[30px] sm:h-[40px]  xl:h-[50px] relative'>
                                <Image src={image?.icon} fill  loading='lazy' alt={`Sushma Belleza ${image?.title}`} />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


export function useIntersectionObserver(options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                threshold: 0.5, // 50% of the element should be visible
                rootMargin: '-25% 0px -25% 0px', // Custom viewport bounds (top and bottom margin)
                ...options,
            }
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [options]);

    return [targetRef, isIntersecting];
}


export default Page;

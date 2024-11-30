"use client"

import React, { useEffect, useState } from "react"
import { PiArrowCircleUpRightThin } from "react-icons/pi"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function ImageSlider({ slidesData }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isDesktop, setIsDesktop] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768)
        }

        // Initial check
        handleResize()

        // Add event listener
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slidesData.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [slidesData.length])

    const handleSlideClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="relative h-full md:h-[450px] 3xl:h-[550px] overflow-hidden">
            <div className="flex flex-col md:flex-row w-full h-full relative">
                <AnimatePresence initial={false}>
                    {slidesData.map((slide, index) => (
                        <motion.div
                            key={index}
                            className={`relative cursor-pointer overflow-hidden h-full`}
                            initial={
                                isDesktop
                                    ? { width: index === 0 ? "80%" : "5%", height: "100%" }
                                    : { height: index === 0 ? "80%" : "12%" }
                            }
                            animate={
                                isDesktop
                                    ? { width: index === activeIndex ? "80%" : "10%", height: "100%" }
                                    : { height: index === activeIndex ? "80%" : "12%" }
                            }
                            exit={
                                isDesktop
                                    ? { width: "10%", height: "100%" }
                                    : { height: "12%" }
                            }
                            transition={{ duration: 0.5 }}
                            onClick={() => handleSlideClick(index)}
                            style={{
                                width: isDesktop ? "100%" : '100%',
                                height: !isDesktop ? '200px' : undefined
                            }}
                        >
                            <Image
                                src={slide.image}
                                fill
                                quality={100}
                                alt={slide.title}
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50" />
                            <div className="absolute inset-0 text-white">
                                <div className={`w-full h-full relative duration-500 ${index === activeIndex
                                    ? 'flex flex-col justify-between pt-8 pb-11 px-4 duration-500'
                                    : 'flex justify-start items-center px-2 bxxs:px-4 duration-500'
                                    }`}>
                                    <h3 className={`${index === activeIndex ? 'duration-500 text-lg xs:text-xl cmd:text-2xl lg:text-3xl 3xl:text-4xl opacity-100' : 'duration-500 text-base cmd:text-xl md:-rotate-90 text-left md:absolute -bottom-4 3xl:-bottom-5 translate-x-[-50%] left-[50%] md:translate-y-[-240%] 3xl:translate-y-[-350%] opacity-100'} duration-500 opacity-0 w-full whitespace-nowrap font-supera600 tracking-wider`}>{slide.title}</h3>

                                    {index === activeIndex && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 1.2 }}
                                            className="duration-1000 text-sm sm:text-base xl:text-lg tracking-wider font-supera500 capitalize"
                                        >
                                            {slide.description}
                                        </motion.p>
                                    )}

                                    <div className={`hidden bxxs:block absolute ${index === activeIndex
                                        ? 'right-4 md:right-7 top-4 sm:right-2 md:top-4'
                                        : isDesktop
                                            ? 'opacity-60 right-[50%] translate-x-[50%] top-5'
                                            : 'right-4 top-[50%] translate-y-[-50%]'
                                        }`}>
                                        <PiArrowCircleUpRightThin className={`
                      ${index === activeIndex
                                                ? 'size-[50px] '
                                                : 'size-[35px]  '
                                            } 
                      duration-500 text-white
                    `} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}


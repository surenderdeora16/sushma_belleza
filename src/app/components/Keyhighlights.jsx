'use client'
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion";
import { ImageSlider } from "@/app/components/ImageSlider"
import Heading from "@/app/components/common/Heading"
import KeyHeighlightImg1 from "@/app/images/keyheighlights-img1.webp"
import KeyHeighlightImg2 from "@/app/images/keyheighlights-img2.webp"
import KeyHeighlightImg3 from "@/app/images/keyheighlights-img3.webp"
import KeyHeighlightImg4 from "@/app/images/keyheighlights-img4.webp"
import KeyHeighlightImg5 from "@/app/images/keyheighlights-img5.webp"
import { useState } from "react"

const slidesData = [
    {
        title: "Part of a Larger Township",
        image: KeyHeighlightImg1?.src,
        description: "Belleza is nestled within Sushma Downtown, a sprawling 60-acre integrated township. This means residents have access to a wider range of amenities and a well-planned community living experience.",
    },
    {
        title: "Strategic Location",
        image: KeyHeighlightImg2?.src,
        description: "Situated on the Airport Road, Belleza offers excellent connectivity to Chandigarh, the airport, and other key destinations in the region. This makes it convenient for residents to commute and access various facilities.",

    },
    {
        title: "Focus on Green Living",
        image: KeyHeighlightImg3?.src,
        description: "The project boasts extensive green spaces, landscaped parks, and a dedicated kids' plantation area. This promotes a healthy and eco-friendly lifestyle for residents.",
    },
    {
        title: "Thoughtful Design",
        image: KeyHeighlightImg4?.src,
        description: "Belleza features spacious apartments with dedicated family lounges and balconies, catering to the needs of modern families. The emphasis on natural light and ventilation enhances the living experience.",

    },
    {
        title: "Lifestyle Amenities",
        image: KeyHeighlightImg5?.src,
        description: "Residents can enjoy a range of amenities including a clubhouse, swimming pool, gym, indoor games, and a musical walkway. These facilities promote recreation, fitness, and community interaction.",
    },
]

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    };

    const handlePrev = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + slidesData.length) % slidesData.length
        );
    };

    const slideVariants = {
        hidden: (direction) => ({
            x: direction > 0 ? 10 : -20,
            opacity: 0,
        }),
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 1 },
            },
        },
        exit: (direction) => ({
            x: direction < 0 ? 10 : -10,
            opacity: 0,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 1 },
            },
        }),
    }

    return (
        // <section id="key-highlights" className="h-screen md:h-auto  scroll-mt-20 section-gap 3xl:px-5 md:bg-[#EFEEEE] relative ">
        //     <div className="h-full md:h-auto xl:container mx-auto md:px-4 md:pt-5 md:pb-8 xl:px-16 3xl:px-0  relative z-20">
        <section id="key-highlights" className="h-auto scroll-mt-20 section-gap 3xl:px-5 md:bg-[#EFEEEE] relative after:absolute after:top-0 after:left-0 after:w-full after:h-[40%] after:bg-black md:after:bg-transparent after:z-10">
            <div className="h-full md:h-auto xl:container mx-auto px-2 bxxs:px-4 pt-5 pb-8 xl:px-16 3xl:px-0  relative z-20">
                <div className="hidden md:block">
                    <Heading
                        heading={'key Highlights'}
                        subHeading={'Your Dream Home Awaits you to Own Exquisite Site in Sushma Belleza'}
                        headingColor={'#474536'}
                        subHeadingColor={'#5D615B'}
                        subHeadingClass={'font-supera600'}
                    />
                </div>
                <div className='block md:hidden px-5 sm:px-5 mb-[22px] xl:container mx-auto'>
                    <h2 className={`uppercase font-supera700 text-[24px] sm:text-[32px] cmd:text-[36px] text-center text-transparent bg-clip-text ${process.env.basePath == '' ? 'bg-backgroud-theme-local' : 'bg-backgroud-theme-production '} bg-cover bg-bottom`}>key Highlights</h2>
                    <p className={`font-supera600 capitalize cmd:mt-1.5  max-w-full tracking-wider sm:tracking-normal text-[13px] cxs:text-sm sm:text-[15px] md:text-[16px] cmd:text-[18px] leading-[14px] xs:leading-[18px] sm:leading-[20px] cmd:leading-[22px] text-center text-[#fff]`}>Your Dream Home Awaits you to Own Exquisite Site in Sushma Belleza</p>
                </div>
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => handleNext()}
                        className="block md:hidden w-full h-[450px] xs:h-[500px] relative">
                        <Image src={slidesData[currentIndex].image} alt={slidesData[currentIndex].title} fill className="object-cover object-right sm:object-center" />
                        <div className="absolute bottom-5 left-[50%] translate-x-[-50%] w-[95%] bg-white">
                            <div className={`relative w-full h-full pt-3 pb-5 pl-5 bxxs:pl-6 xs:pl-9 pr-4 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[5px] ${process.env.basePath == '' ? 'after:bg-backgroud-theme-local' : 'after:bg-backgroud-theme-production'} after:bg-cover after:bg-no-repeat after:bg-right`}>
                                <h3 className="font-supera600 text-xl text-[#303030] leading-tight">{slidesData[currentIndex].title}</h3>
                                <p className="font-supera600 tracking-wider text-xs capitalize text-[#303030] mt-2">{slidesData[currentIndex].description}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
                <div className='flex md:hidden justify-end gap-x-3 mt-3.5'>
                    <div onClick={() => handlePrev()} className={`group size-[30px] flex justify-center items-center cursor-pointer border-[0.94px] border-[#D9D9D9] rounded-md bg-[#FFF]  ${process.env.basePath == '' ? 'hover:bg-backgroud-theme-local' : 'hover:bg-backgroud-theme-production'} bg-left`} >
                        <svg width="10" height="20" className='group-hover:fill-[#fff] fill-[#858080]' viewBox="0 0 18 31" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.0719 2.86381L14.58 0.374226L1.00704 13.9425C0.788251 14.1599 0.614618 14.4184 0.496132 14.7032C0.377647 14.988 0.316649 15.2934 0.316649 15.6018C0.316649 15.9102 0.377647 16.2156 0.496132 16.5004C0.614618 16.7852 0.788251 17.0437 1.00704 17.2611L14.58 30.8364L17.0696 28.3468L4.3304 15.6053L17.0719 2.86381Z" />
                        </svg>
                    </div>
                    <div onClick={() => handleNext()} className={`group size-[30px] flex justify-center items-center cursor-pointer border-[0.94px] border-[#D9D9D9] rounded-md bg-[#FFF] ${process.env.basePath == '' ? 'hover:bg-backgroud-theme-local' : 'hover:bg-backgroud-theme-production'} bg-left`} >
                        <svg width="10" height="20" className='group-hover:fill-[#fff] fill-[#858080]' viewBox="0 0 17 31" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.119248 2.86381L2.61118 0.374226L16.1841 13.9425C16.4029 14.1599 16.5765 14.4184 16.695 14.7032C16.8135 14.988 16.8745 15.2934 16.8745 15.6018C16.8745 15.9102 16.8135 16.2156 16.695 16.5004C16.5765 16.7852 16.4029 17.0437 16.1841 17.2611L2.61118 30.8364L0.121594 28.3468L12.8608 15.6053L0.119248 2.86381Z" />
                        </svg>
                    </div>
                </div>
                <div className="hidden md:block mb-8 h-[calc(100%-85px)] md:h-auto ">
                    <ImageSlider slidesData={slidesData} />
                </div>
                <div className="hidden md:flex gap-x-10">
                    <div className="flex flex-col boder-2 border-black whitespace-nowrap">
                        <span className="font-supera600 text-[20px] lg:text-[22px] text-[#595959] capitalize">sushma Belleza</span>
                        <strong className={`font-supera700 text-[26px] cmd:text-[30px] xl:text-[34px] 2xl:text-[38px] text-[#000] capitalize text-transparent bg-clip-text bg-[#8e6c1c]`}>Lifestyle Amenities</strong>
                    </div>
                    <p className="font-supera600 text-sm lg:text-[15px] xl:text-base 2xl:text-lg text-[#000] capitalize">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                    </p>
                </div>
            </div>
        </section>
    )
}


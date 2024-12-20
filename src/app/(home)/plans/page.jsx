'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion';
import Heading from '@/app/components/common/Heading'
import SubHeader from '@/app/components/common/SubHeader'
import Plans from '@/app/components/Plans'
import BalconyApartImg from '@/app/images/plans-balcony-Img.webp'
import SitePlanImg from '@/app/images/siteplanImg.webp'
import towerPlanImg1 from '@/app/images/towerplanmap-img1.webp'
import towerPlanImg2 from '@/app/images/towerplanmap-img2.webp'
import towerPlanImg3 from '@/app/images/towerplanmap-img3.webp'

import BottomBanner from '@/app/images/plans-bottombanner.webp'
import BottomMobileBanner from '@/app/images/plans-bottombannersmallscreen.webp'
import DynamicLightbox from '@/app/components/common/DynamicLightbox';

const sitePlan = [
    "ENTRANCE / EXIT",
    "ROYAL AVENUE",
    "WATER CASCADE",
    "TOWER DROP OFFS",
    "PRIVATE LAWN",
    "JOGGING / WALKING TRACK",
    "KID'S PLAY AREA ",
    "SNAKE & LADDER PLAZA (COVERED)",
    "PRAYER / MEDITATION LAWN",
    "OPEN AIR GYM",
    "YOGA LAWN",
    "REFLEXOLOGY",
    "CENTRAL LAWN",
    "ACCENT MOUNDS",
    "COLOUR GARDEN",
    "ORGANIC / HERBAL GARDEN",
    "SENIOR CITIZEN LAWN (ELDER'S COURT)",
    "SHOPPING PLAZA",
    "CRICKET PRACTICE PITCH",
    "HALF BASKETBALL COURT",
    "BADMINTON COURT",
    "SEATING LAWN/ PLAZA",
    "AMPHITHEATRE",
    "PALM PLAZA / ORCHARD",
    "SEATING PAVILION",
    "TREE GROVES",
    "KIDS PLANTATION AREA",
    "CLUB ENTRANCE",
];

const towerPlans = [
    { label: 'Low rise 2300 sqft', image: towerPlanImg1?.src },
    { label: 'High rise 2800 sqft', image: towerPlanImg3?.src },
    { label: 'High rise 3400 sqft', image: towerPlanImg2?.src },
];

const Page = () => {
    const [selectedPlan, setSelectedPlan] = useState(0);
     
    const variants = {
        enter: { x: 900, opacity: 1 }, // New image enters from the right
        center: { x: 0, opacity: 1 }, // Fully visible in the center
        exit: { x: -400, opacity: 0 }, // Existing image exits to the left
    };
    return (
        <div>
            <SubHeader />

            <section id='plan' className='section-gap-inner scroll-mt-24 sm:scroll-mt-20'>
                <Heading heading={'Unit plan'}
                    subHeading={'Explore Sushma Belleza floor plans, Site plan & Tower plans'}
                    headingColor={'#474536'}
                    subHeadingColor={'#5A5454'}
                    subHeadingClass={'font-supera600'}
                />

                <Plans />
            </section>

            <section className='section-gap'>
                <h5 style={{ lineHeight: 'normal' }} className={`mb-[22px] uppercase font-supera700 px-2  text-base xs:text-lg cxs:text-[22px] sm:text-[30px] cmd:text-[35px] text-center text-[#252525]`}>Experience outdoor living, Balconies as big as rooms!</h5>

                <div className='w-full h-auto 2xl:h-[600px] 3xl:h-auto  relative'>
                    <Image
                        src={BalconyApartImg}
                        layout="responsive"
                        width={100}
                        height={75}
                        alt=""
                        className='object-cover' />
                </div>
            </section>

            <section id="sitePlan" className='section-gap-inner scroll-mt-[96px] sm:scroll-mt-2'>
                <div className={`${process.env.basePath == '' ? 'sm:bg-siteplan-local' : 'sm:bg-siteplan-production'} bg-no-repeat bg-cover`}>
                    <div className='xl:container mx-auto px-5 sm:pt-20'>
                        <Heading
                            heading={'Site plan'}
                            subHeading={'Explore Sushma Belleza floor plans, Site plan & Tower plans'}
                            headingColor={'#474536'}
                            subHeadingColor={'#5A5454'}
                            subHeadingClass={'font-supera600'}
                        />

                        <div>
                            <div className='w-full h-[350px] sm:h-[400px] lg:h-[500px] relative'>
                                <DynamicLightbox
                                    images={[SitePlanImg]}
                                    title="Site plans"
                                    zoom={true}
                                    keyboardNavigation={true}
                                    className={"cursor-pointer object-contain"}
                                />
                            </div>
                            <div className='border sm:border-none border-[#D9D9D9] rounded-xl'>
                                {/* Changed to use CSS grid with auto-flow column for vertical indexing */}
                                <ol className="grid grid-rows-14 sm:grid-rows-10 grid-flow-col auto-cols-fr gap-x-4 sm:gap-x-2 gap-y-6 sm:gap-y-4 2xl:gap-y-6 px-3 pb-5 sm:pb-24 pt-5 sm:pt-10 md:pt-14">
                                    {sitePlan?.map((sitePlan, index) => (
                                        <li key={index} className="capitalize font-supera600 text-[#565555] text-xs bxxs:text-[14px] sm:text-[13px] md:text-sm cmd:text-base lg:text-lg xl:text-[21px] flex ">
                                            <span className={`pr-1 font-supera700 sm:font-supera600 bg-clip-text bg-[#565555] text-[#a27d27]`}>{index + 1}&nbsp;</span>{sitePlan}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="towerPlan" className='section-gap py-10 lg:py-14 xl:py-20 scroll-mt-[80px] lg:scroll-mt-20 xl:scroll-mt-[70px]'>
                <div className={`flex flex-col lg:flex-row justify-center lg:justify-end items-center lg:items-end`}>
                    <div className='w-[90%] lg:w-auto xl:w-[720px]  lg:pl-5'>
                        <div className='hidden lg:block'>
                            <Heading heading={'tower plans'}
                                subHeading={'Click on the buttons below to view the tower plans in detail!'}
                                headingColor={'#474536'}
                                subHeadingColor={'#5A5454'}
                                subHeadingClass={'font-supera600'}
                                textAlign={'left'}
                            />
                        </div>
                        <div className='block lg:hidden'>
                            <Heading heading={'tower plans'}
                                subHeading={'Click on the buttons below to view the tower plans in detail!'}
                                headingColor={'#474536'}
                                subHeadingColor={'#5A5454'}
                                subHeadingClass={'font-supera600'}
                            />
                        </div>
                        <div className='flex flex-col-reverse'>
                            <ul className='flex flex-col gap-y-5 sm:gap-y-6 lg:gap-y-8 mt-10'>
                                {towerPlans.map((plan, index) => (
                                    <li
                                        key={index}
                                        onClick={() => setSelectedPlan(index)}
                                        className={`w-[90%] lg:w-[400px] h-[45px] cxs:h-[50px] lg:h-[54px] mx-auto lg:mx-0 font-supera600 tracking-wider text-sm xs:text-base cxs:text-[21px] flex justify-center items-center border-[1.34px] rounded-full cursor-pointer transition-colors ${selectedPlan === index
                                            ? 'bg-[#A27D27] text-white border-[#A27D27]'
                                            : 'text-[#000000] border-[#474536]'
                                            }`}
                                    >
                                        {plan.label}
                                    </li>
                                ))}
                            </ul>
                            <div className='block lg:hidden w-full h-[200px] cxs:h-[300px] relative overflow-hidden rounded-[20px] xs:rounded-[25px] cxs:rounded-[30px] cmd:rounded-[35px] shadow-[0px_0px_4.93px_3.15px_#00000050]'>
                                <AnimatePresence mode="popLayout">
                                    <motion.div
                                        key={selectedPlan}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.8 }}
                                        className='w-full h-full flex items-center justify-center relative'>
                                        <DynamicLightbox
                                            images={[towerPlans[selectedPlan].image]}
                                            title="Tower plans"
                                            zoom={true}
                                            keyboardNavigation={true}
                                            className={"cursor-pointer object-contain object-center"}
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:block py-1 w-[50vw] h-[370px] relative overflow-hidden rounded-l-[45px] shadow-[0px_0px_4.93px_3.15px_#00000050]'>
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={selectedPlan}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.8 }}
                                className='w-full h-full flex items-center justify-center relative'>
                                <DynamicLightbox
                                    images={[towerPlans[selectedPlan].image]}
                                    title="Tower plans"
                                    zoom={true}
                                    keyboardNavigation={true}
                                    className={"cursor-pointer object-contain object-center"}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <section className='w-full section-gap'>
                <div className='hidden lg:block w-full relative'>
                    <Image src={BottomBanner}
                        layout="responsive"
                        width={100}
                        height={100}
                        alt=""
                        quality={100}
                        className='object-contain'
                    />
                </div>

                <div className='block lg:hidden w-full relative'>
                    <Image src={BottomMobileBanner}
                        layout="responsive"
                        width={100}
                        height={100}
                        alt=""
                        quality={100}
                        className='object-contain'
                    />
                </div>
            </section>
        </div>
    )
}

export default Page

'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Heading from '@/app/components/common/Heading';
import SubHeader from '@/app/components/common/SubHeader';
import Img1 from '@/app/images/specification-img1.webp';

const topics = [
    {
        id: 'foundation',
        title: 'Foundation & Structural Frame',
        content: `
         <ul className='list-disc ml-6 leading-[2.5] mt-4'>
             <li className='font-lato font-bold text-[14px] 2xl:text-[16px] 3xl:text-[17px] capitalize text-[#4D4D4D]'>Frame : UPVC slide doors with provision for mosquito mesh.</li>
             <li className='font-lato font-bold text-[14px] 2xl:text-[16px] 3xl:text-[17px] capitalize text-[#4D4D4D]'>Shutter : Toughened clear glass</li>
             <li className='font-lato font-bold text-[14px] 2xl:text-[16px] 3xl:text-[17px] capitalize text-[#4D4D4D]'>Windows : Bedroom /Study /Kitchen /Utility</li>
             <li className='font-lato font-bold text-[14px] 2xl:text-[16px] 3xl:text-[17px] capitalize text-[#4D4D4D]'>Frame : UPVC sliding/openable window system</li>
             <li className='font-lato font-bold text-[14px] 2xl:text-[16px] 3xl:text-[17px] capitalize text-[#4D4D4D]'>Shutters : Toughened clear glass with provision for mosquito mesh</li>
             <li className='font-lato font-bold text-[14px] 2xl:text-[16px] 3xl:text-[17px] capitalize text-[#4D4D4D]'>Ventilators Frame : UPVC frame with fixed/openable shutter.</li>
             <li className='font-lato font-bold text-[14px] 2xl:text-[16px] 3xl:text-[17px] capitalize text-[#4D4D4D]'>Ventilators Shutters : Toughened clear glass / Toughened Frosted glass.</li>
         </ul>
     `,
    },
    {
        id: 'walls',
        title: 'Walls',
        content: ` <div>
                <h5 className='mt-6 font-lato font-semibold text-[23px] text-[#4D4D4D]'>Internal Walls</h5>
                <ul className='list-disc ml-6 leading-[2.5] mt-4'>
                    <li className='font-lato font-bold text-[17px] capitalize text-[#4D4D4D]'>4 or 8" thick CC Blocks.</li>
                    <li className='font-lato font-bold text-[17px] capitalize text-[#4D4D4D]'>Smooth cement/acrylic putty finish with emulsion paint from Asian Paints or equivalent.</li>
                </ul>
            </div>
            <div>
                <h5 className='mt-6 font-lato font-semibold text-[23px] text-[#4D4D4D]'>External Walls</h5>
                <ul className='list-disc ml-6 leading-[2.5] mt-4'>
                    <li className='font-lato font-bold text-[17px] capitalize text-[#4D4D4D]'>8” thick CC Blocks</li>
                    <li className='font-lato font-bold text-[17px] capitalize text-[#4D4D4D]'>Texture finish with exterior emulsion paint from Asian Paints or equivalent.</li>
                </ul>
            </div>`
    },
    { id: 'joinery', title: 'Joinery Works' },
    { id: 'flooring', title: 'Flooring' },
    { id: 'plumbing', title: 'Plumbing' },
    { id: 'electrical', title: 'Electrical' },
    { id: 'handRailing', title: 'Hand Railing' },
    { id: 'waterInlet', title: 'Water inlet' },
    { id: 'internet_cable_telecom', title: 'Internet/ Cable/Telecom' },
    { id: 'powerBackUp', title: 'Power back up' },
    { id: 'lpg', title: 'LPG' },
    { id: 'billingSystem', title: 'Billing System' },
    { id: 'lifts', title: 'Lifts' },
    { id: 'parking', title: 'Parking' },
    { id: 'security', title: 'Security' },
    { id: 'fire&Safety', title: 'Fire & Safety' },
    { id: 'waterSupply_treatment', title: 'Water Supply/ Treatment' },
    { id: 'commonArea', title: 'Common Area' },
    { id: 'solarPower', title: 'Solar Power' },
    { id: 'misc', title: 'Misc' },
    { id: 'landscapeAmenities', title: 'Landscape Amenities' },
    { id: 'tower_b_amenities', title: 'Tower B Amenities' },
    { id: 'clubhouseAmenities', title: 'Clubhouse Amenities' },
];

const Page = () => {
    const [activeSection, setActiveSection] = useState(topics[0].id);
    const sectionRefs = useRef({});

    useEffect(() => {
        const handleScroll = () => {
            topics.forEach((topic) => {
                const section = sectionRefs.current[topic.id];
                if (section) {
                    const rect = section.getBoundingClientRect();
                    // Check if 20% of the section is visible in the viewport
                    if (rect.top <= window.innerHeight * 0.8 && rect.bottom > 0) {
                        setActiveSection(topic.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <SubHeader />

            <section className="section-gap">
                <Heading
                    heading={'SPECIFICATIONS'}
                    subHeading={'Explore Sushma Belleza  Project gallery & Construction Updates.'}
                    headingColor={'#474536'}
                    subHeadingColor={'#5A5454'}
                    subHeadingClass={'font-supera600'}
                />

                <div className="w-full h-full flex mt-20">
                    {/* Sidebar */}
                    <div
                        className="w-[280px] lg:w-[350px] h-[100vh] sticky top-0"
                    >
                        <ul className="h-full list-disc overflow-auto pl-10 pr-9">
                            {topics.map((topic) => (
                                <li
                                    key={topic.id}
                                    className={`cursor-pointer font-supera600 text-sm leading-[3] text-[#474536] ${activeSection === topic.id ? 'text-blue-600 font-bold' : ''
                                        }`}
                                    onClick={() =>
                                        sectionRefs.current[topic.id]?.scrollIntoView({ behavior: 'smooth' })
                                    }
                                >
                                    {topic.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Content */}
                    <div className='w-full pl-5 overflow-auto flex flex-col gap-y-20'>
                        {topics.map((topic) => (
                            <div key={topic.id} ref={(el) => (sectionRefs.current[topic.id] = el)} className='w-full flex justify-between'>
                                <div className='pr-5'>
                                    <h4 className='max-w-[450px] leading-tight font-supera600 text-[30px] lg:text-[35px] 2xl:text-[40px] 3xl:text-[42px] text-[#303030]'>
                                        {topic.title}
                                    </h4>
                                    {/* Render HTML dynamically */}
                                    <div dangerouslySetInnerHTML={{ __html: topic.content }}></div>
                                </div>
                                <div className='pr-10 3xl:pr-20'>
                                    <Image src={Img1}  alt={topic.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;

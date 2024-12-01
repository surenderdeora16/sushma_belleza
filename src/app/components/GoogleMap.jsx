'use client';

import React, { useState, useEffect } from 'react';
import { useActivetab } from '../context/ActiveTabContext';
import Image from 'next/image';

const DynamicTabs = ({ className = '', contentHeight = '', tabs, imageClass='' }) => {
    const { activeSectionTab } = useActivetab();
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        if (activeSectionTab) {
            const index = tabs.findIndex(
                (tab) => tab.name.toLowerCase() === activeSectionTab.toLowerCase()
            );
            if (index !== -1) {
                setActiveTab(index);
            }
        }
    }, [activeSectionTab, tabs]);

    const renderContent = (content) => {
        switch (content.type) {
            case 'iframe':
                return (
                    <iframe
                        src={content?.content}
                        title="tab-content"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                    />
                );
            case 'map':
                return content?.content;
            case 'image':
                return (
                    <Image
                        src={content?.content}
                        loading='eager'
                        fill
                        quality={100}
                        alt="Tab content"
                        className={`${imageClass} w-full h-full object-cover`}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <section id="map" className={`${className} scroll-mt-24 overflow-hidden`}>
            <div className="relative w-full h-full">
                <div className={`relative w-full h-full overflow-hidden`}>
                    {tabs[activeTab] ? renderContent(tabs[activeTab].content) : null}
                </div>
                <div style={{zIndex: '500'}} className="w-full absolute top-0 left-1/2 transform -translate-x-1/2 rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg flex justify-center overflow-hidden">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            aria-label={`Tab ${tab.name}`}
                            onClick={() => setActiveTab(index)}
                            className={`outline-none py-2 px-5 lg:px-10 font-supera600 border ${activeTab === index
                                    ? `text-white bg-[#4E4E4E] border-transparent`
                                    : 'border-gray-300 bg-white text-[#4E4E4E]'
                                } ${index === 0 ? 'rounded-bl-2xl sm:rounded-bl-3xl' : ''} ${index === tabs.length - 1 ? 'rounded-br-2xl sm:rounded-br-3xl' : ''
                                } text-sm lg:text-lg tracking-wide`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DynamicTabs;

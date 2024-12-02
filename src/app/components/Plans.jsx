'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import unitPlan from '@/app/(home)/plans/UnitPlan'
import DynamicLightbox from './common/DynamicLightbox';
import View3DData from '@/app/(home)/plans/View3DData';
import BrowseHomeCard from '@/app/components/BrowseHomeCard';

const Plans = () => {
    const [selected3DItem, setSelected3DItem] = useState(Object?.keys(View3DData)[0]);
    const [activeViewBtn, setActiveViewbtn] = useState('2Dview')
    const [tab, setTab] = useState(1)
    const [selectedUnitTab, setSelectedUnitTab] = useState(unitPlan[0]);
    const [selectedSize, setSelectedSize] = useState(selectedUnitTab.sizes[0]);
    const [selectedTypeKey, setSelectedTypeKey] = useState('type1');
    const [selectedTypeData, setSelectedTypeData] = useState(selectedSize.type[selectedTypeKey]);
    const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
    const [view3DIdx, setView3DIdx] = useState(0);

    const handleTabChange = (index) => {
        const newTab = unitPlan[index];
        setSelectedUnitTab(newTab);
        setSelectedSize(newTab.sizes[0]);
        setSelectedTypeKey(Object.keys(newTab.sizes[0].type)[0]);
        setSelectedTypeData(newTab.sizes[0].type['type1']);
    };

    const handleTypeChange = (key) => {
        setSelectedTypeKey(key);
        setSelectedTypeData(selectedSize.type[key]);
    };

    const handleNextSize = () => {
        const sizes = selectedUnitTab.sizes;
        const typeKeys = Object.keys(selectedSize.type);

        if (typeKeys.indexOf(selectedTypeKey) < typeKeys.length - 1) {
            const nextKey = typeKeys[typeKeys.indexOf(selectedTypeKey) + 1];
            handleTypeChange(nextKey);
        } else {
            if (selectedSizeIndex < sizes.length - 1) {
                const nextSize = sizes[selectedSizeIndex + 1];
                setSelectedSizeIndex(selectedSizeIndex + 1);
                setSelectedSize(nextSize);
                setSelectedTypeKey(Object.keys(nextSize.type)[0]);
                setSelectedTypeData(nextSize.type['type1']);
            } else {
                handleNextUnit();
            }
        }
    };

    const handlePrevSize = () => {
        const sizes = selectedUnitTab.sizes;
        const typeKeys = Object.keys(selectedSize.type);

        if (typeKeys.indexOf(selectedTypeKey) > 0) {
            const prevKey = typeKeys[typeKeys.indexOf(selectedTypeKey) - 1];
            handleTypeChange(prevKey);
        } else {
            if (selectedSizeIndex > 0) {
                const prevSize = sizes[selectedSizeIndex - 1];
                setSelectedSizeIndex(selectedSizeIndex - 1);
                setSelectedSize(prevSize);
                setSelectedTypeKey(Object.keys(prevSize.type)[0]);
                setSelectedTypeData(prevSize.type['type1']);
            } else {
                handlePrevUnit();
            }
        }
    };

    const handleNextUnit = () => {
        const currentIndex = unitPlan.indexOf(selectedUnitTab);
        const nextIndex = (currentIndex + 1) % unitPlan.length;
        const newUnitTab = unitPlan[nextIndex];
        setSelectedUnitTab(newUnitTab);
        setSelectedSize(newUnitTab.sizes[0]);
        setSelectedTypeKey(Object.keys(newUnitTab.sizes[0].type)[0]);
        setSelectedTypeData(newUnitTab.sizes[0].type['type1']);
        setSelectedSizeIndex(0);
    };

    const handlePrevUnit = () => {
        const currentIndex = unitPlan.indexOf(selectedUnitTab);
        const prevIndex = (currentIndex - 1 + unitPlan.length) % unitPlan.length;
        const newUnitTab = unitPlan[prevIndex];
        setSelectedUnitTab(newUnitTab);
        setSelectedSize(newUnitTab.sizes[newUnitTab.sizes.length - 1]);
        setSelectedTypeKey(Object.keys(newUnitTab.sizes[newUnitTab.sizes.length - 1].type)[0]);
        setSelectedTypeData(newUnitTab.sizes[newUnitTab.sizes.length - 1].type['type1']);
        setSelectedSizeIndex(newUnitTab.sizes.length - 1);
    };

    const handleNext = () => handleNextSize();
    const handlePrev = () => handlePrevSize();

    const images3dforLightBox = Object.values(View3DData).map(item => item?.image?.src);

    return (
        <div>
            <div className={`our-product ${tab === 1 ? 'block duration-500 relative z-20' : 'hidden duration-500 absolute z-0'}`}>
                <div className={`${activeViewBtn === '2Dview' ? 'relative w-full sm:w-auto h-[100vh] sm:h-[70vh] lg:h-[55vh] xl:h-[60vh] 2xl:h-[65vh]  flex flex-col items-center justify-between ' : ''} mt-[1.90%]  w-[88%] 3xl:container mx-auto`}>
                    {/* prev button  */}


                    <button aria-label="prev button" onClick={handlePrev} className={`${activeViewBtn === '2Dview' ? 'group opacity-100 duration-500 absolute z-40 top-[45%] sm:top-[50%] translate-y-[-50%] -left-5 lg:left-1 ' : 'opacity-0 duration-500 absolute z-0 top-[50%] translate-y-[-50%] left-0'} cursor-pointer w-[40px] sm:w-[50.76px] h-[40px] sm:h-[50.76px] rounded-full hidden sm:flex justify-center items-center`}>
                        <svg width="22" height="37" className='fill-[#6B6B6B] hover:fill-[#101010]' viewBox="0 0 22 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.22459 20.5811L17.3853 36.7418L21.4248 32.7024L7.28379 18.5613L21.4248 4.42033L17.3853 0.380859L1.22459 16.5416C0.689024 17.0773 0.388163 17.8038 0.388163 18.5613C0.388163 19.3189 0.689024 20.0454 1.22459 20.5811Z" />
                        </svg>
                    </button>
                    {/* Next button  */}
                    <button aria-label="next button" onClick={handleNext} className={`${activeViewBtn === '2Dview' ? 'group opacity-100 duration-500 absolute z-40 top-[45%] sm:top-[50%] translate-y-[-50%] -right-5 lg:right-1 ' : 'opacity-0 duration-500 absolute z-0 top-[50%] translate-y-[-50%] right-0'} cursor-pointer w-[40px] sm:w-[50.76px] h-[40px] sm:h-[50.76px] rounded-full hidden sm:flex justify-center items-center`}>
                        <svg width="22" height="37" className='fill-[#6B6B6B] hover:fill-[#101010]' viewBox="0 0 22 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.4309 20.5811L4.27019 36.7418L0.230713 32.7024L14.3717 18.5613L0.230713 4.42033L4.27019 0.380859L20.4309 16.5416C20.9665 17.0773 21.2674 17.8038 21.2674 18.5613C21.2674 19.3189 20.9665 20.0454 20.4309 20.5811Z" />
                        </svg>
                    </button>
                    <div className=' w-full px-2 flex-col cmd:flex-row flex justify-between items-start cmd:items-center lg:px-5'>
                        <div className='pt-2 bxxs:pt-0 sm:pr-1 cmd:pr-0 w-full cmd:w-auto'>
                            <div className={`overflow-x-scroll sm:overflow-hidden ${activeViewBtn === '2Dview' ? 'w-full opacity-100 duration-500 relative z-20  flex self-start  justify-between sm:justify-center items-center gap-1.5 xs:gap-3 md:gap-5 border-b-[2px] sm:border-none border-[#D9D9D9]' : 'flex self-start justify-start xs:justify-center items-center gap-4 md:gap-[33.50px] opacity-0 duration-500 absolute z-0'}`}>
                                {unitPlan.map((unit, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            handleTabChange(index)
                                        }}
                                        className={`mb-1 cxs:mb-0 ${selectedUnitTab?.tab_id === unit?.tab_id ? ' text-[#986B10] sm:text-[#fff] bg-transparent sm:bg-[#474536]' : 'text-[#868484] sm:text-[#4B4B4B] bg-[#fff] sm:bg-[#EFEFEF] '} w-full h-[22px] cxs:h-[32px] md:h-[36px] px-4 xs:px-0 sm:px-5 rounded-[9.42px] sm:hover:bg-[#474536] sm:hover:text-white  cursor-pointer sm:border-0 border-[#202622]  leading-tight cxs:leading-normal whitespace-nowrap font-supera700 sm:font-supera500 text-[13px] cxs:text-sm cmd:text-[16px] tracking-[8%] text-center flex justify-center items-center uppercase`}>
                                        {unit?.tab}
                                    </div>
                                ))}
                                <div className={`block sm:hidden  w-1/3  rounded border-b-[4px] cxs:border-b-[#986B10] absolute z-30 top-[95%] ${selectedUnitTab?.tab_id == 1 ? 'left-[0%] duration-300' : selectedUnitTab?.tab_id == 2 ? 'left-[50%] translate-x-[-50%] duration-300' : 'left-[100%] translate-x-[-100%] duration-300'}`}></div>

                            </div>
                        </div>
                        <div className='self-start bxxs:self-start mt-4 xs:mt-5 cmd:mt-0 mb-0.5 sm:mb-0 w-[170px] h-[33px] md:h-[42px] border-[1.07px] rounded-[7px] sm:rounded-[10px] border-[#986B10] sm:border-[#474536] overflow-hidden  relative  flex justify-center'>
                            <div onClick={() => setActiveViewbtn('2Dview')} className={`w-1/2 h-full ${activeViewBtn === '2Dview' ? 'text-[#fff] ' : 'text-[#986B10] sm:text-[#474536]'} px-2 sm:px-0 cursor-pointer relative z-30 font-supera600 sm:font-supera500 text-[13px] sm:text-[14px] md:text-[15px] capitalize tracking-wide text-center flex items-center justify-center`}>2D View</div>
                            <div onClick={() => setActiveViewbtn('3Dview')} className={`w-1/2 h-full ${activeViewBtn === '3Dview' ? 'text-[#fff] ' : 'text-[#986B10] sm:text-[#474536]'} px-2 sm:px-0 cursor-pointer relative z-30 font-supera600 sm:font-supera500 text-[13px] sm:text-[14px] md:text-[15px] capitalize tracking-wide text-center flex items-center justify-center`}>3D View</div>
                            <div className={`w-[50%] h-full  sm:rounded-[7.47px] bg-[#986B10] sm:bg-[#474536] absolute z-20 top-0 ${activeViewBtn === '2Dview' ? 'left-[0%] duration-300' : 'left-[50%] duration-300'}  `}></div>
                        </div>
                    </div>
                    <div className={` ${activeViewBtn === '2Dview' ? 'h-full opacity-100 duration-500 w-full relative z-20 flex items-start' : 'opacity-0 duration-0 absolute z-0'}`}>
                        <div className=' w-full h-[100%] 3xl:h-full flex flex-col sm:flex-row items-center justify-center sm:justify-between  py-1 lg:py-4 px-1 sm:px-4 '>
                            <div className='w-full sm:w-1/2 h-1/2 sm:h-full my-1 sm:my-0 px-1.5 md:px-1 cmd:px-0'>
                                <div className='h-full w-full relative floorplans-unitplan-imgs'>
                                    <DynamicLightbox
                                        images={[selectedTypeData?.images]}
                                        title={selectedUnitTab?.tab}
                                        zoom={true}
                                        className={""}
                                        keyboardNavigation={true}
                                    />
                                    <button aria-label="prev button" onClick={handlePrev} className={`${activeViewBtn === '2Dview' ? 'group opacity-100 duration-500 absolute z-40 top-[40%] sm:top-[50%] translate-y-[-50%] -left-2 cxs:-left-5 lg:left-1 ' : 'opacity-0 duration-500 absolute z-0 top-[50%] translate-y-[-50%] left-0'} cursor-pointer w-[40px] sm:w-[50.76px] h-[40px] sm:h-[50.76px] flex sm:hidden justify-center items-center`}>
                                        <svg className='w-3 fill-[#474536]' viewBox="0 0 22 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.22459 20.5811L17.3853 36.7418L21.4248 32.7024L7.28379 18.5613L21.4248 4.42033L17.3853 0.380859L1.22459 16.5416C0.689024 17.0773 0.388163 17.8038 0.388163 18.5613C0.388163 19.3189 0.689024 20.0454 1.22459 20.5811Z" />
                                        </svg>
                                    </button>
                                    {/* Next button  */}
                                    <button aria-label="next button" onClick={handleNext} className={`${activeViewBtn === '2Dview' ? 'group opacity-100 duration-500 absolute z-40 top-[40%] sm:top-[50%] translate-y-[-50%] -right-2 cxs:-right-5 lg:right-1 ' : 'opacity-0 duration-500 absolute z-0 top-[50%] translate-y-[-50%] right-0'} cursor-pointer w-[40px] sm:w-[50.76px] h-[40px] sm:h-[50.76px] flex sm:hidden justify-center items-center`}>
                                        <svg className='w-3 fill-[#474536]' viewBox="0 0 22 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20.4309 20.5811L4.27019 36.7418L0.230713 32.7024L14.3717 18.5613L0.230713 4.42033L4.27019 0.380859L20.4309 16.5416C20.9665 17.0773 21.2674 17.8038 21.2674 18.5613C21.2674 19.3189 20.9665 20.0454 20.4309 20.5811Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className='px-4 sm:px-0 mt-2 w-full sm:w-1/2 sm:h-full flex flex-col items-start justify-start sm:justify-center gap-y-1.5 lg:gap-y-0'>
                                <div className='hidden sm:block'>
                                    {/* these are sqft buttons  */}
                                    <ul className="flex rounded-[7px] overflow-hidden border-[1.04px] border-[#4E4E4E]">
                                        {selectedUnitTab.sizes.map((size, idx) => (
                                            <li
                                                key={idx}
                                                onClick={() => {
                                                    setSelectedSizeIndex(idx);
                                                    setSelectedSize(size);
                                                    setSelectedTypeData(size.type[selectedTypeKey]);
                                                }}
                                                className={`${selectedSize?.size === size?.size ? 'text-[#fff] bg-[#4E4E4E]' : 'bg-[#fff] text-[#4E4E4E]'
                                                    } cursor-pointer border-r-[0.5px] border-[#4E4E4E] w-[90px] xs:w-[100px] cmd:w-[130px] h-[32px] lg:w-[135px] cmd:h-[34px] 3xl:h-[37px] flex justify-center items-center font-supera600 text-[12px] cxs:text-[14px] md:text-[15px] 3xl:text-[16px]`}
                                            >
                                                {size?.size}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <h4 className='mt-[14px] tracking-widest font-supera700 sm:font-supera600 text-[#AE7A11] sm:text-[#7F7F79] capitalize text-[20px] 2xl:text-[21px] '>{selectedTypeData?.title}</h4>
                                <div className='font-supera600 sm:font-supera500 mt-2'>
                                    <h6 className='font-supera700 text-[#322929] sm:text-[#4E4E4E] text-[20px] 2xl:text-[21px] '>{selectedTypeData?.size}</h6>
                                    <p className='font-supera600 tracking-wide mt-0.5 w-full sm:max-w-[550px] text-[#696965] sm:text-[#807F79] text-[14px] sm:text-[16px] cmd:text-[17px] 3xl:text-[18px] capitalize pr-4'>{selectedTypeData?.desc}</p>
                                </div>

                                <div className='flex bg-[#fff] rounded-[5.45px] overflow-hidden mt-[20px] border-[1px] border-[#BC8B27] sm:border-[#807F79] relative'>

                                    {selectedUnitTab?.sizes?.map((size, idx) => (
                                        <button
                                            aria-label="type"
                                            key={idx}
                                            onClick={() => { setSelectedSize(size); setSelectedSizeIndex(idx); setSelectedTypeData(size.type[selectedTypeKey]) }}
                                            className={`${selectedSizeIndex == idx ? 'bg-[#BC8B27] sm:bg-[#4E4E4E] text-[#FFFFFF]' : 'text-[#4E4E4E] bg-[#FFFFFF]'} tracking-wider w-[74px] h-[25px] 3xl:h-[30px] text-[13.5px] 3xl:text-[15px]`}
                                        >
                                            {`Type ${idx + 1}`}
                                        </button>
                                    ))}
                                </div>
                                <div className='w-full sm:w-auto grid grid-cols-2 grid-flow-row mx-auto xs:mx-0 gap-y-[14px] 3xl:gap-y-[17px] mt-[20px]'>
                                    <div className='w-full  lg:w-[195px] sm:border-r-[1.5px] border-r-[#0000]'>
                                        <p className='font-supera600 text-[13px] sm:text-[12px] lg:text-[14px] 2xl:text-[15.48px] text-[#737373] relative after:absolute after:top-[103%] after:left-0 after:w-[60%] after:h-[1.05px] after:bg-[#0C0C0C] sm:after:bg-[#3D6B96]'>Super area</p>
                                        <h5 className='mt-2 font-supera700 text-[15px] xs:text-[19px] sm:text-[15px] lg:text-[16px] 2xl:text-[19px] text-[#4B4B4B] sm:text-[#4E4E4E]'>{selectedTypeData?.SuperArea}</h5>
                                    </div>
                                    <div className='w-full  lg:w-[195px] sm:pl-8 '>
                                        <p className='font-supera600 text-[13px] sm:text-[12px] lg:text-[14px] 2xl:text-[15.48px] text-[#737373] relative after:absolute after:top-[103%] after:left-0 after:w-[60%] after:h-[1.05px] after:bg-[#0C0C0C] sm:after:bg-[#3D6B96]'>Rera Carpet Area</p>
                                        <h5 className='mt-2 font-supera700 text-[15px] xs:text-[19px] sm:text-[15px] lg:text-[16px] 2xl:text-[19px] text-[#4B4B4B] sm:text-[#4E4E4E]'>{selectedTypeData?.reraCarpetArea}</h5>
                                    </div>
                                    {/* <div className='w-full sm:pr-8 lg:w-[195px] sm:border-r-[1.5px] border-r-[#000]'>
                                                <p className='font-supera600 text-[11px] xs:text-[13px] sm:text-[12px] lg:text-[14px] 2xl:text-[15.48px] text-[#737373] relative after:absolute after:top-[103%] after:left-0 after:w-[60%] after:h-[1.05px] after:bg-[#000]'>External Wall Area</p>
                                                <h5 className='mt-2 font-supera700 text-[15px] xs:text-[19px] sm:text-[15px] lg:text-[16px] 2xl:text-[19px] text-[#000]'>{selectedTypeData?.externalWallArea}</h5>
                                            </div>
                                            <div className='w-full  lg:w-[195px] sm:pl-8'>
                                                <p className='font-supera600 text-[11px] xs:text-[13px] sm:text-[12px] lg:text-[14px] 2xl:text-[15.48px] text-[#737373] relative after:absolute after:top-[103%] after:left-0 after:w-[60%] after:h-[1.05px] after:bg-[#000]'>Common Area</p>
                                                <h5 className='mt-2 font-supera700 text-[15px] xs:text-[19px] sm:text-[15px] lg:text-[16px] 2xl:text-[19px] text-[#000]'>{selectedTypeData?.commonArea}</h5>
                                            </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${activeViewBtn === '3Dview' ? 'opacity-100 duration-500 relative z-20 w-[88%] 3xl:container mx-auto' : 'opacity-0 hidden duration-500 absolute z-0'}`}>
                    <div className='w-full mt-4  md:mt-5 scroll-hidden'>
                        <div className='w-full flex flex-col md:flex-row '>
                            <motion.div
                                className='w-full md:w-1/2 h-[250px] cxs:h-[300px] sm:h-[320px]  md:h-[420px] relative rounded-3xl overflow-hidden'
                                key={selected3DItem}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <DynamicLightbox
                                    images={[View3DData[selected3DItem]?.image?.src]}
                                    sliderimages={images3dforLightBox}
                                    multipleimg={true}
                                    idx={view3DIdx}
                                    title={View3DData[selected3DItem]?.title}
                                    zoom={true}
                                    keyboardNavigation={true}
                                    className={"object-cover rounded-3xl"}
                                />
                            </motion.div>

                            <ul className='md:hidden flex my-2.5 gap-x-5  overflow-x-auto pb-1.5'>
                                {Object?.keys(View3DData)?.map((item, index) => (
                                    <li key={item} onClick={() => { setView3DIdx(index); setSelected3DItem(item) }} className={`${selected3DItem === item ? 'bg-[#000] text-[#fff]' : 'bg-[#fff] text-[#000]'}   shadow-[0px_0px_4.8px_0px_rgba(255,211,171,0.5)] border-[0.6px] border-[#000] rounded-[22px] flex gap-x-2 items-center py-1.5 px-5`}>
                                        <div className={`${selected3DItem === item ? 'fill-[#fff]' : 'fill-[#000]'}`}>
                                            {View3DData[item]?.svg && React.cloneElement(View3DData[item]?.svg, {
                                                className: `${selected3DItem === item ? ' stroke-[#fff]' : ' stroke-[#000]'}`,
                                            })}
                                        </div>
                                        {/* <h6 className='font-supera600 whitespace-nowrap text-[12px] xs:text-[13px] xl:text-[15.5px] tracking-wide  '>{item}</h6> */}
                                    </li>
                                ))}
                            </ul>
                            <div className='w-full md:w-1/2 lg:w-auto md:pl-6 lg:pl-9 pt-0 lg:pt-2 xl:pt-4 flex flex-col justify-start'>
                                <motion.h4 className='font-supera700 text-[30px] lg:text-[39px] text-[#000] capitalize'>{View3DData[selected3DItem]?.title}</motion.h4>
                                <motion.div
                                    className='flex flex-col gap-y-3 xl:gap-y-5 mt-4 xl:mt-6'
                                    key={selected3DItem + '-features'}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {/* <div>
                                                    <h6 className='font-supera600 text-[14px] lg:text-[15px] xl:text-[17.61px] text-[#5E5D59] capitalize'>Largest main door in the segment</h6>
                                                    <p className='mt-1 font-supera600 leading-tight text-[13.5px] xl:text-[15px] text-[#000] capitalize'>8” Feet height</p>
                                                </div>
                                                <div>
                                                    <h6 className='font-supera600 text-[14px] lg:text-[15px] xl:text-[17.61px] text-[#5E5D59] capitalize'>Maximum floor to ceiling height across the flat</h6>
                                                    <p className='mt-1 font-supera600 leading-tight text-[13.5px] xl:text-[15px] text-[#000] capitalize'>10’5” (6 inches more than usual)</p>
                                                </div> */}
                                    {View3DData[selected3DItem]?.features.map((feature, index) => (
                                        <div key={index}>
                                            <h6 className='font-supera600 text-[14px] lg:text-[15px] xl:text-[17.61px] text-[#5E5D59] capitalize'>{feature.title}</h6>
                                            <p className='mt-1 font-supera600 w-full xl:max-w-[450px] leading-tight text-[13.5px] xl:text-[15px] text-[#000] capitalize'>{feature.description}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <div className='w-full pt-[19px] pb-[36px]'>
                                <div className='w-full 3xl:container mx-auto flex flex-col'>
                                    <div className='w-full'>
                                        <div className='bg-[#F4F4F4 flex items-center'>
                                            <h4 className='whitespace-nowrap font-supera600 text-[22px] border-b-[0.98px] border-b-[#000] text-[#363636]'>Browse From Here</h4>
                                        </div>
                                        <div>
                                            <ul className='scroll-hidden flex mt-4 gap-x-5 overflow-x-auto pb-2.5'>
                                                {Object?.keys(View3DData)?.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        onClick={() => { setView3DIdx(index); setSelected3DItem(item) }}
                                                        className={` ${selected3DItem === item ? ' bg-[#000] text-[#fff]' : 'text-[#000] bg-[#fff]'} cursor-pointer shadow-[0px_0px_4.8px_0px_rgba(255,211,171,0.5)] border-[0.6px] border-[#000] rounded-[22px] flex gap-x-2.5 items-center py-1.5 px-5`}>
                                                        <div className={`${selected3DItem === item ? 'fill-[#fff]' : 'fill-[#000]'}`}>
                                                            {View3DData[item]?.svg && React.cloneElement(View3DData[item]?.svg, {
                                                                className: `${selected3DItem === item ? ' stroke-[#fff]' : ' stroke-[#000]'}`,
                                                            })}
                                                        </div>
                                                        <h6 className='whitespace-nowrap font-supera600 text-[14.5px] xl:text-[15.5px] tracking-wide'>{item}</h6>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${activeViewBtn === '2Dview' ? 'opacity-100 duration-500 relative z-20 w-full mt-5 md:mt-2 pt-[19px] pb-[36px]  sm:bg-[#F4F4F4]' : 'opacity-0 duration-500 absolute z-0'} `}>
                    <div className='w-full sm:w-[88%] 3xl:containers mx-auto flex flex-col'>
                        <div className='w-[88%] mx-auto'>
                            <div className=' bg-[#F4F4F4] flex items-end sm:items-center'>
                                <h4 className='whitespace-nowrap font-supera600 text-[17px] sm:text-[22px] text-[#363636]'>Browse From Here</h4>
                                <p className='w-[90%] sm:w-[20%] h-[0.50px] sm:h-[2px] bg-[#898989CC] ml-2'></p>
                            </div>

                            <div className='hidden sm:flex justify-center gap-[5px] mt-2 sm:gap-[40px]  '>
                                {unitPlan.map((unit, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            handleTabChange(index)
                                        }}
                                        className={`relative cursor-pointer w-[200px] md:w-[260px] border-[0.94px] border-[#474536] ${selectedUnitTab?.tab_id === unit?.tab_id ? 'bg-[#474536]' : 'bg-[#F4F4F4]'
                                            } rounded-[7px] flex justify-around items-center`}>
                                        <button aria-label={unit?.tab} className={`py-[7px] font-supera600 text-[10px] xs:text-[11px] cxs:text-[12px] sm:text-[14px] md:text-[17px] ${selectedUnitTab?.tab_id === unit?.tab_id ? 'text-[#F4F4F4]' : 'text-[#474536]'}`}>
                                            {unit?.tab}
                                        </button>
                                        <span className='hidden sm:inline md:absolute right-3 cmd:right-4 top-[50%] md:translate-y-[-50%]'>
                                            <svg
                                                className={`${selectedUnitTab?.tab_id === unit?.tab_id ? 'fill-[#F4F4F4]' : 'fill-[#474536]'
                                                    }`}
                                                width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M0.849425 2.00155L2.12705 0.725131L9.08597 7.68164C9.19815 7.79311 9.28717 7.92566 9.34792 8.07166C9.40867 8.21767 9.43994 8.37425 9.43994 8.53239C9.43994 8.69053 9.40867 8.84711 9.34792 8.99311C9.28717 9.13912 9.19815 9.27167 9.08597 9.38314L2.12705 16.3433L0.850631 15.0668L7.38207 8.5342L0.849425 2.00155Z" />
                                            </svg>
                                        </span>
                                    </div>
                                ))}

                            </div>

                            <div className='relative z-20 flex flex-wrap justify-start gap-x-[16px] sm:gap-x-5  sm:pt-6 pb-2'>
                                {selectedUnitTab?.sizes?.map((size, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => { setSelectedSize(size); setSelectedSizeIndex(idx); setSelectedTypeData(size.type[selectedTypeKey]) }}
                                        className='cursor-pointer'>
                                        <div className='mt-[30px] flex flex-col xxs:flex-row gap-2 xs:gap-5'>
                                            <BrowseHomeCard image={selectedTypeData?.images} size={selectedUnitTab?.tab} sq_ft={size?.size} type={`Type ${idx + 1}`} color={'#474536'} />
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans

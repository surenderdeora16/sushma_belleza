'use client'
import React, { useEffect, useState } from 'react';
import Heading from '@/app/components/common/Heading';

const projectStatusData = [
    { title: 'Ground Floor Blockwork (Walls)', color: '#35991C', status: true, className: 'sm:after:left-[50%] sm:after:w-[100%]' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#35991C', status: true, className: 'sm:after:left-[50%] sm:after:w-[100%]' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#35991C', status: true, className: 'sm:after:left-[50%] sm:after:w-[100%]' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#35991C', status: true, className: ' md:after:left-[50%] md:after:w-[100%]' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#35991C', status: true, className: 'sm:after:left-[50%] sm:after:w-[100%]' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#35991C', status: true, className: 'sm:after:left-[50%] sm:after:w-[100%] md:after:left-[0%] md:after:w-[0%] 2xl:after:left-[50%] 2xl:after:w-[100%]' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#35991C', status: true, className: 'sm:after:left-[50%] sm:after:w-[100%]' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#35991C', status: true, className: 'md:after:left-[50%] md:after:w-[100%]' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#35991C', status: true, className: 'sm:after:left-[50%] sm:after:w-[100%] 2xl:after:left-[0%] 2xl:after:w-[0%]' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#EBAB28', status: false, className: 'sm:after:left-[50%] sm:after:w-[100%]' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#EBAB28', status: false, className: 'sm:after:left-[50%] sm:after:w-[100%]' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#EBAB28', status: false, className: ' 2xl:after:left-[50%] 2xl:after:w-[100%] ' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#EBAB28', status: false, className: 'sm:after:left-[50%] sm:after:w-[100%]' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#EBAB28', status: false, className: 'sm:after:left-[50%] sm:after:w-[100%]' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#EBAB28', status: false, className: 'sm:after:left-[50%] sm:after:w-[100%] 2xl:after:left-[50%] 2xl:after:w-[100%]' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#EBAB28', status: false, className: 'md:after:left-[50%] md:after:w-[100%]' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#EBAB28', status: false, className: 'sm:after:left-[50%] sm:after:w-[100%]' },
    { title: 'Ground Floor Blockwork (Walls)', color: '#EBAB28', status: false, className: '' },
];;

const ProjectStatus = () => {
    const [itemsPerRow, setItemsPerRow] = useState(9);
    const [totalRows, setTotalRows] = useState(0);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const updateItemsPerRow = () => {
            const width = window?.innerWidth;

            console.log('width', width)

            if (width >= 1536) {
                setItemsPerRow(9);
            } else if (width >= 814) {
                setItemsPerRow(9);
            }
            else if (width == 767) {
                setItemsPerRow(4);
            }
            else if (width >= 768 && width <= 812) {
                setItemsPerRow(6);
            }
            else if (width >= 640 && width <= 424) {
                setItemsPerRow(4);
            } else if (width >= 425) {
                setItemsPerRow(4);
            }
            else {
                setItemsPerRow(3);
            }

            const rows = Math.ceil(projectStatusData.length / itemsPerRow);
            setTotalRows(rows);
        };

        updateItemsPerRow();

        window.addEventListener('resize', updateItemsPerRow);

        return () => window.removeEventListener('resize', updateItemsPerRow);
    }, [window.innerWidth]);

    const totalItems = projectStatusData.length;
    const lastRowStartIndex = Math.floor(totalItems / itemsPerRow) * itemsPerRow;
    const lastRowItems = projectStatusData.slice(lastRowStartIndex); // Last row items
    const otherItems = projectStatusData.slice(0, lastRowStartIndex);

    const visibleItems = showMore
        ? otherItems
        : otherItems.slice(0, itemsPerRow * 3);

    return (
        <div className='section-gap project-status'>
            <div className='2xl:container mx-auto'>
                <Heading
                    heading={'Project Status'}
                    subHeading={'Sushma Belleza Zirakpur'}
                    headingColor={'#474536'}
                    subHeadingColor={'#5A5454'}
                    subHeadingClass={'font-supera600'}
                />
                <div className='w-full px-4 2xl:px-14 '>
                    <div>
                        <div className='grid grid-cols-3 xs:grid-cols-4 md:grid-cols-6 2xl:grid-cols-9 gap-y-9 lg:gap-y-14'>
                            {visibleItems.map((status, index) => (
                                <div
                                    key={index}
                                    className={`w-full h-[70px] sm:h-[100px] flex flex-col justify-center items-center relative after:absolute after:top-[50%] after:translate-y-[-50%] after:h-[2px] after:bg-[#37493C] ${status?.className}`}
                                >
                                    <div className='hidden sm:block relative z-30 cursor-pointer size-[22px] rounded-full'>
                                        <div className='w-full h-full rounded-full'></div>
                                        <div className='wave-container absolute inset-0 flex justify-center items-center'>
                                            <div style={{ background: `${status?.color}` }} className={`circle size-[42px] delay1 border-4 border-white flex justify-center items-center z-30`}>
                                                {status?.status && (
                                                    <svg width="14" height="11" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.295169 4.04725C0.465933 3.87654 0.697507 3.78064 0.938966 3.78064C1.18043 3.78064 1.412 3.87654 1.58276 4.04725L4.80266 7.26715L11.2406 0.828271C11.3252 0.743666 11.4256 0.676543 11.536 0.630732C11.6465 0.584922 11.7649 0.561322 11.8846 0.561279C12.0042 0.561237 12.1226 0.584754 12.2331 0.630486C12.3436 0.676218 12.4441 0.743271 12.5287 0.827815C12.6133 0.91236 12.6804 1.01274 12.7262 1.12323C12.772 1.23371 12.7956 1.35214 12.7957 1.47175C12.7957 1.59135 12.7722 1.7098 12.7265 1.82031C12.6807 1.93083 12.6137 2.03126 12.5291 2.11586L4.80266 9.84234L0.295169 5.33485C0.124457 5.16408 0.0285568 4.93251 0.0285568 4.69105C0.0285568 4.44959 0.124457 4.21802 0.295169 4.04725Z" fill="white" />
                                                    </svg>
                                                )}
                                            </div>
                                            <div style={{ background: `${status?.color}` }} className={`circle size-[40px] delay2`}></div>
                                            <div style={{ background: `${status?.color}` }} className={`circle size-[40px] delay3`}></div>
                                            <div style={{ background: `${status?.color}` }} className={`circle size-[40px] delay4`}></div>
                                        </div>
                                    </div>
                                    <div className='flex sm:hidden justify-center items-center relative z-30 cursor-pointer size-[38px] rounded border-2 border-[#131313]'>
                                        <div className={`size-[24px] rounded flex justify-center items-center ${status?.status ? 'bg-[#21945A]' : 'bg-[#FF6715]'} `}>
                                            {status?.status && (
                                                <svg width="14" height="11" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.295169 4.04725C0.465933 3.87654 0.697507 3.78064 0.938966 3.78064C1.18043 3.78064 1.412 3.87654 1.58276 4.04725L4.80266 7.26715L11.2406 0.828271C11.3252 0.743666 11.4256 0.676543 11.536 0.630732C11.6465 0.584922 11.7649 0.561322 11.8846 0.561279C12.0042 0.561237 12.1226 0.584754 12.2331 0.630486C12.3436 0.676218 12.4441 0.743271 12.5287 0.827815C12.6133 0.91236 12.6804 1.01274 12.7262 1.12323C12.772 1.23371 12.7956 1.35214 12.7957 1.47175C12.7957 1.59135 12.7722 1.7098 12.7265 1.82031C12.6807 1.93083 12.6137 2.03126 12.5291 2.11586L4.80266 9.84234L0.295169 5.33485C0.124457 5.16408 0.0285568 4.93251 0.0285568 4.69105C0.0285568 4.44959 0.124457 4.21802 0.295169 4.04725Z" fill="white" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    <h6 className='absolute capitalize top-[84%] sm:top-[95%] max-w-[120px] font-supera700 cxs:font-supera600 leading-snug sm:leading-normal px-1 text-[11px] xs:text-[11px] md:text-[12px] lg:text-[13px] text-center text-[#4E4E4E]'>
                                        {status?.title}
                                    </h6>
                                </div>
                            ))}
                        </div>

                        {/* Wrap last row items in a div */}
                        {
                            window.innerWidth < 640 ? showMore : true && (
                                <>
                                    {lastRowItems.length > 0 && (
                                        <div className="flex justify-center mt-8 lg:mt-14 md:px-72">
                                            {lastRowItems.map((status, index) => (
                                                <div
                                                    key={index}
                                                    className={`w-full md:min-w-[130px] max-w-[150px] h-[70px] sm:h-[100px] flex flex-col justify-center items-center relative after:absolute after:top-[50%] after:translate-y-[-50%] after:h-[2px] after:bg-[#37493C] ${status?.className}`}
                                                >
                                                    <div className="hidden sm:block relative z-30 cursor-pointer size-[22px] rounded-full">
                                                        <div className="w-full h-full rounded-full"></div>
                                                        <div className="wave-container absolute inset-0 flex justify-center items-center">
                                                            <div
                                                                style={{ background: `${status?.color}` }}
                                                                className="circle size-[40px] delay1 flex justify-center items-center z-30"
                                                            >
                                                                {status?.status && (
                                                                    <svg
                                                                        width="14"
                                                                        height="11"
                                                                        viewBox="0 0 13 10"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0.295169 4.04725C0.465933 3.87654 0.697507 3.78064 0.938966 3.78064C1.18043 3.78064 1.412 3.87654 1.58276 4.04725L4.80266 7.26715L11.2406 0.828271C11.3252 0.743666 11.4256 0.676543 11.536 0.630732C11.6465 0.584922 11.7649 0.561322 11.8846 0.561279C12.0042 0.561237 12.1226 0.584754 12.2331 0.630486C12.3436 0.676218 12.4441 0.743271 12.5287 0.827815C12.6133 0.91236 12.6804 1.01274 12.7262 1.12323C12.772 1.23371 12.7956 1.35214 12.7957 1.47175C12.7957 1.59135 12.7722 1.7098 12.7265 1.82031C12.6807 1.93083 12.6137 2.03126 12.5291 2.11586L4.80266 9.84234L0.295169 5.33485C0.124457 5.16408 0.0285568 4.93251 0.0285568 4.69105C0.0285568 4.44959 0.124457 4.21802 0.295169 4.04725Z"
                                                                            fill="white"
                                                                        />
                                                                    </svg>
                                                                )}
                                                            </div>
                                                            <div
                                                                style={{ background: `${status?.color}` }}
                                                                className="circle size-[40px] delay2"
                                                            ></div>
                                                            <div
                                                                style={{ background: `${status?.color}` }}
                                                                className="circle size-[40px] delay3"
                                                            ></div>
                                                            <div
                                                                style={{ background: `${status?.color}` }}
                                                                className="circle size-[40px] delay4"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div className="flex sm:hidden justify-center items-center relative z-30 cursor-pointer size-[38px] rounded border-2 border-[#000]">
                                                        <div
                                                            className={`size-[24px] rounded flex justify-center items-center ${status?.status ? 'bg-[#21945A]' : 'bg-[#FF6715]'}`}
                                                        >
                                                            {status?.status && (
                                                                <svg
                                                                    width="14"
                                                                    height="11"
                                                                    viewBox="0 0 13 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M0.295169 4.04725C0.465933 3.87654 0.697507 3.78064 0.938966 3.78064C1.18043 3.78064 1.412 3.87654 1.58276 4.04725L4.80266 7.26715L11.2406 0.828271C11.3252 0.743666 11.4256 0.676543 11.536 0.630732C11.6465 0.584922 11.7649 0.561322 11.8846 0.561279C12.0042 0.561237 12.1226 0.584754 12.2331 0.630486C12.3436 0.676218 12.4441 0.743271 12.5287 0.827815C12.6133 0.91236 12.6804 1.01274 12.7262 1.12323C12.772 1.23371 12.7956 1.35214 12.7957 1.47175C12.7957 1.59135 12.7722 1.7098 12.7265 1.82031C12.6807 1.93083 12.6137 2.03126 12.5291 2.11586L4.80266 9.84234L0.295169 5.33485C0.124457 5.16408 0.0285568 4.93251 0.0285568 4.69105C0.0285568 4.44959 0.124457 4.21802 0.295169 4.04725Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <h6 className="absolute top-[84%] sm:top-[95%] max-w-[125px] font-supera700 cxs:font-supera600 leading-snug sm:leading-normal px-1 text-[10px] xs:text-[11px] md:text-[12px] lg:text-[13px] text-center text-[#4E4E4E]">
                                                        {status?.title}
                                                    </h6>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )
                        }
                    </div>
                    <div className='flex sm:hidden justify-center mt-14'>
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className='text-center text-lg font-supera700 text-gray-500'
                        >
                            {showMore ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                    <div className='mt-[70px] md:mt-16 w-full'>
                        <div className='w-full gap-x-[20px] flex justify-center mb-0.5'>
                            <div className='flex sm:flex-col gap-x-2 sm:gap-x-0 gap-y-1 justify-center items-center'>
                                <div className='size-[25px] rounded-full bg-[#21945A] sm:bg-[#35991C]'></div>
                                <h5 className='uppercase font-supera700 tracking-wide text-[10px] text-center text-[#494E51]'>Completed</h5>
                            </div>
                            <div className='flex sm:flex-col gap-x-2 sm:gap-x-0 gap-y-1 justify-center items-center'>
                                <div className='size-[25px] rounded-full bg-[#FF6715] sm:bg-[#EBAB28]'></div>
                                <h5 className='uppercase font-supera700 tracking-wide text-[10px] text-center text-[#494E51]'>Pending </h5>
                            </div>
                        </div>
                        <p className='font-supera600 uppercase mt-2.5 tracking-wide text-xs cxs:text-sm sm:text-base md:text-[18px] text-center text-[#5A5454]'>Note : SUSHMA BELLEZA  project progress recoded till December 2024*.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectStatus;

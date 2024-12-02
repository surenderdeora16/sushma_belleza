'use client'
import React, { useEffect, useState } from 'react'
import AgentImg from '@/app/images/agenticon.png'
import { RxCross1, RxCross2 } from 'react-icons/rx'
import Image from 'next/image'
import EnquiryForm from '@/app/components/common/ModalEnquiryForm'
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'

const AvatarModel = () => {
    const [open, setOpen] = useState(false)
    const [isHidden, setIsHidden] = useState(false);
    const [timerId, setTimerId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false)
    const pathName = usePathname();

    useEffect(() => {
        const handleRouteChange = () => {
            setIsHidden(false);
            setOpen(false);
        };

        handleRouteChange();
    }, [pathName]);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer') // Footer element
            if (footer) {
                const footerRect = footer.getBoundingClientRect()
                setIsFooterVisible(footerRect.top < window.innerHeight && footerRect.bottom > 0)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isHidden && isFooterVisible) {
            setIsHidden(false) // Footer visible hone par avatar wapas dikhai dega
        }
    }, [isFooterVisible])

    const handleShowImmediately = () => {
        if (timerId) {
            clearTimeout(timerId); // Clear the timer
        }
        setIsHidden(false); // Immediately show content
    };


    const handleWhatsAppClick = () => {
        const phoneNumber = '9988010405';
        const message = 'Hi I am interested in *Sushma Belleza*. Please send more detail';

        const encodedMessage = encodeURIComponent(message);

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        if (typeof window !== 'undefined') {
            window.location.href = whatsappUrl;
        }
    };


    const handleOpenModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset'; // Enable scrolling
    };


    return (
        <div>
            <div className='w-screen h-full relative '>
                {isModalOpen && <EnquiryForm heading={'We Are Excited To Meet You'} formType={'enquiry'} isOpen={isModalOpen} onClose={handleCloseModal} eventSource="Avatar Contact Us" />}

                <div className='fixed bottom-20 sm:bottom-5 md:bottom-10 right-2  md:right-10 z-50'>
                    <div className='relative flex  flex-col justify-center items-center '>
                        {!isHidden ? (
                            <div onClick={() => setIsHidden(true)} className={`${open ? 'opacity-0 ' : 'opacity-100 '} bg-[#ffffffcb] absolute bottom-[100%] right-0 z-50 cursor-pointer size-[25px] border-[0.0001px] border-gray-400 rounded-full flex justify-center items-center p-1`}>
                                <RxCross1 className={` text-gray-500 relative z-50 text-4xl font-thin`} />
                            </div>

                        ) : (
                            <div onClick={() => handleShowImmediately()} className='bg-[#ffffffcb] absolute bottom-[100%] right-1 z-50 cursor-pointer size-[28px] border-[0.0001px]  rounded-full flex justify-center items-center '>
                                <Image src={AgentImg} className='object-cover' alt="agent image" />
                            </div>
                        )}

                        <h6 className={`capitalize scrollingText ${open || isHidden ? 'opacity-0 duration-500 hidden' : 'opacity-100 duration-500'} pb-3.5 max-w-[150px] text-[14px] text-[#474747] font-supera800 text-center`}>
                            Need immediate assistance?
                        </h6>
                        {!open && !isHidden && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
                                onClick={() => setOpen(true)}
                                className={`${isHidden ? 'opacity-0 duration-500 hidden' : 'opacity-100 duration-500'} call-animation relative z-50 cursor-pointer size-[65px] rounded-full`}>
                                <Image src={AgentImg} className='relative z-50 w-full h-full' alt="agent-img" />

                                {/* <!-- Insert animated circles --> */}
                                <div className='wave-container absolute inset-0 flex justify-center items-center'>
                                    <div className={`circle h-[60px] w-[60px] bg-[#a4591a] delay1`}></div>
                                    <div className='circle h-[60px] w-[60px] bg-[#a4591a] delay2'></div>
                                    <div className='circle h-[60px] w-[60px] bg-[#a4591a] delay3'></div>
                                    <div className='circle h-[60px] w-[60px] bg-[#a4591a] delay4'></div>
                                </div>
                            </motion.div>
                        )}
                        {/* {open && (
                            <div onClick={() => setOpen(false)} className=' relative z-50 cursor-pointer size-[65px] border-[0.0001px] border-gray-400 rounded-full flex justify-center items-center'>
                                <RxCross1 onClick={() => setOpen(false)} className={` text-gray-500 relative z-50 text-4xl font-thin`} />
                            </div>
                        )} */}

                        <div className={`mt-3 ${open || isHidden ? 'opacity-0 duration-500 hidden' : 'opacity-100 duration-500'}`}>
                            <strong className='font-supera700 text-[10px] text-center capitalize text-[#000]'>Pawan Kumar</strong>
                            <p className='font-supera500 text-[8px] text-center text-[#7E7E7E] capitalize'>Realty Nivesh</p>
                        </div>



                        <div className={`${open ? ` opacity-100 w-[300px] whitespace-nowrap  xs:w-[353px]  duration-1000` : `w-[0px]  opacity-0 whitespace-nowrap duration-300`} duration-500 shadow-lg absolute bottom-[90%] -right-[0px] xs:right-8 z-50   bg-white   rounded-xl overflow-hidden `}>
                            <div className='w-full h-full relative after:absolute after:w-[60%] after:h-[4px] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:rounded-t-2xl after:bg-[#000]'>
                                <div onClick={() => setOpen(false)} className='cursor-pointer text-[#131313dd] text-[25px] font-supera700 absolute top-2 right-2 z-40' >
                                    <RxCross2 />
                                </div>
                                <div className='py-4  px-3 xs:px-[37px]  relative flex flex-col gap-6'>
                                    <h5 className=' text-[16px] text-center text-[#535353] font-supera800 capitalize'>Need immediate assistance?</h5>
                                    <div className='flex'>
                                        <div className={`relative z-50 ${open ? 'cursor-pointer' : 'cursor-auto'} size-[65px]   rounded-full`}>
                                            <Image src={AgentImg} className='relative z-50 w-full h-full' alt="agent-img" />
                                        </div>
                                        <div className='ml-4'>
                                            <strong className='font-supera800 text-[15px] text-center capitalize text-[#000]'>Pawan Kumar</strong>
                                            <p className='font-supera500 text-[10px]  text-[#4c4c4c] capitalize'>Realty Nivesh</p>
                                        </div>
                                    </div>
                                    <div onClick={() => { handleOpenModal() }} className={` ${open ? 'cursor-pointer' : 'cursor-default'} w-full rounded-md overflow-hidden`}>
                                        <button aria-label="contact now" className={`w-full py-[7px]  tracking-wider bg-[#8e6c1c] text-[13px]  font-supera700 text-white uppercase`}> Contact Now </button>
                                    </div>
                                    <div className='w-full flex justify-between gap-x-[10px] pt-1 pb-3'>
                                        <button aria-label="call now" onClick={() => window.location.href = 'tel:918968066698'} className={` ${open ? 'cursor-pointer' : 'cursor-auto'} flex items-center pl-[10px] w-1/2 border-[1.5px] border-[#000] rounded-lg py-1.5`}>
                                            <span><svg width="17" height="15" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.64952 0.980195H3.39685L3.95996 2.38503L3.05516 2.98688C3.00188 3.02235 2.9582 3.0704 2.92799 3.12675C2.89778 3.18311 2.88198 3.24603 2.88199 3.30994V3.31848C2.88222 3.33585 2.883 3.3532 2.88432 3.37051C2.88666 3.40235 2.89055 3.44545 2.89794 3.49865C2.91312 3.60349 2.94231 3.74793 2.99912 3.918C3.11354 4.2597 3.33769 4.70196 3.77433 5.13762C4.21097 5.57329 4.65422 5.79694 4.99629 5.9111C5.16713 5.96779 5.31151 5.99652 5.41736 6.01206C5.47711 6.02038 5.53725 6.02556 5.59754 6.02759L5.6026 6.02798H5.60572C5.67797 6.02794 5.74917 6.00783 5.81062 5.96991C5.87207 5.93198 5.92172 5.87774 5.95401 5.81325L6.21475 5.29294L7.94106 5.58028V7.25769C7.11955 7.37612 4.90056 7.493 3.15712 5.75345C1.41369 4.01391 1.53043 1.79949 1.64952 0.980195ZM3.68871 3.49865L4.39193 3.03115C4.54049 2.93228 4.65045 2.78544 4.70338 2.61527C4.75631 2.4451 4.74898 2.26195 4.68263 2.09653L4.11952 0.691695C4.06173 0.547602 3.962 0.424091 3.83319 0.337093C3.70437 0.250095 3.55239 0.203603 3.39685 0.203613H1.62928C1.27553 0.203613 0.942803 0.448625 0.884818 0.83148C0.752504 1.70203 0.573101 4.27329 2.60685 6.3025C4.6406 8.33171 7.21762 8.15232 8.09011 8.02068C8.47382 7.96244 8.71938 7.63084 8.71938 7.27788V5.58028C8.71941 5.39644 8.65407 5.21857 8.53499 5.07828C8.41592 4.938 8.25083 4.84442 8.0691 4.81418L6.34278 4.52723C6.1786 4.49989 6.00995 4.52578 5.8616 4.60112C5.71325 4.67646 5.59301 4.79727 5.51854 4.94581L5.3839 5.21489C5.33628 5.2032 5.28915 5.18959 5.24263 5.17412C5.00135 5.09414 4.66628 4.9295 4.3246 4.58858C3.98292 4.24766 3.81792 3.91334 3.73775 3.67221C3.71861 3.61522 3.70198 3.55729 3.68871 3.49865Z" fill="#000" />
                                            </svg></span>
                                            <h6 className='pl-1.5 text-[11.5px] text-[#5f5f5f] tracking-wide font-supera700'>Call Now</h6>
                                        </button>
                                        <div onClick={() => handleWhatsAppClick()} className={` ${open ? 'cursor-pointer' : 'cursor-auto'} flex items-center pl-[10px] w-1/2 border-[1.5px] border-[#000] rounded-lg py-1.5`}>
                                            <span><svg width="19" height="19.3" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.56823 2.42157C8.10612 1.95582 7.55568 1.58653 6.94902 1.33526C6.34237 1.08399 5.69164 0.955755 5.0348 0.958038C2.28264 0.958038 0.0395922 3.19608 0.0395922 5.94209C0.0395922 6.82222 0.271458 7.6772 0.704947 8.4316L-0.000732422 11.0167L2.64557 10.3226C3.37645 10.7199 4.19806 10.9312 5.0348 10.9312C7.78695 10.9312 10.03 8.69312 10.03 5.94712C10.03 4.61435 9.51082 3.36205 8.56823 2.42157ZM5.0348 10.0862C4.28879 10.0862 3.55791 9.88507 2.91776 9.50787L2.76654 9.41734L1.19388 9.82975L1.61225 8.30083L1.51144 8.14493C1.09698 7.48456 0.876901 6.72125 0.876327 5.94209C0.876327 3.65878 2.74134 1.79793 5.02975 1.79793C6.13868 1.79793 7.18208 2.23045 7.96337 3.01503C8.35022 3.39925 8.6568 3.85626 8.86532 4.35958C9.07385 4.86289 9.18018 5.4025 9.17814 5.94712C9.18822 8.23042 7.32321 10.0862 5.0348 10.0862ZM7.31313 6.98818C7.18712 6.92783 6.57217 6.62607 6.46128 6.58081C6.34534 6.54058 6.26469 6.52046 6.17901 6.64116C6.09332 6.76689 5.85641 7.04854 5.78584 7.129C5.71527 7.2145 5.63966 7.22456 5.51365 7.15918C5.38764 7.09883 4.98439 6.96304 4.51058 6.54058C4.13757 6.20864 3.89059 5.80127 3.81498 5.67553C3.74441 5.5498 3.8049 5.48442 3.87042 5.41904C3.92587 5.36372 3.99644 5.27319 4.05693 5.20278C4.11741 5.13237 4.14262 5.07704 4.18294 4.99658C4.22326 4.91108 4.2031 4.84067 4.17286 4.78032C4.14261 4.71996 3.89059 4.10639 3.78977 3.85492C3.68896 3.61352 3.58311 3.64369 3.5075 3.63866H3.26556C3.17987 3.63866 3.04881 3.66884 2.93288 3.79457C2.82199 3.9203 2.49939 4.22206 2.49939 4.83564C2.49939 5.44921 2.948 6.04267 3.00849 6.12314C3.06897 6.20864 3.89059 7.46597 5.14065 8.00411C5.43804 8.13487 5.66991 8.21031 5.85137 8.26563C6.14876 8.36119 6.42095 8.3461 6.6377 8.31592C6.87964 8.28072 7.37866 8.01416 7.47947 7.72246C7.58532 7.43076 7.58532 7.18433 7.55004 7.129C7.51476 7.07368 7.43915 7.04854 7.31313 6.98818Z" fill="#000" />
                                            </svg></span>
                                            <h6 className='pl-1.5 text-[11.5px] text-[#5f5f5f] tracking-wide font-supera700'>Whatsapp</h6>
                                        </div>
                                        {/* <div className={` ${open ? 'cursor-pointer' : 'cursor-auto'} flex items-center pl-[5px] w-1/3 border-[1.5px] border-[#000] rounded-lg py-1.5`}>
                                            <span><svg width="12" height="11" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.80119 11.0508C10.1476 10.8954 12.0162 8.99992 12.1699 6.62041C12.1996 6.15494 12.1996 5.67265 12.1699 5.20718C12.0162 2.82823 10.1476 0.933825 7.80119 0.77736C6.99077 0.723953 6.17771 0.723953 5.36729 0.77736C3.02087 0.933264 1.15226 2.82823 0.998599 5.20774C0.968892 5.67835 0.968892 6.15036 0.998599 6.62097C1.05468 7.48742 1.43771 8.28993 1.88916 8.96739C2.15106 9.44127 1.97833 10.0329 1.70522 10.5505C1.50893 10.9235 1.41023 11.1097 1.48931 11.2443C1.56782 11.3789 1.74447 11.3833 2.09722 11.3918C2.79543 11.4086 3.26594 11.2112 3.63944 10.9358C3.85086 10.7794 3.95686 10.7014 4.02976 10.6924C4.10267 10.6835 4.24679 10.7429 4.53393 10.8607C4.7919 10.9672 5.09193 11.0328 5.36673 11.0513C6.16588 11.1041 7.00092 11.1041 7.80175 11.0513" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M4.06055 7.74766L5.09355 4.64864C5.11948 4.5713 5.16906 4.50406 5.23527 4.45642C5.30149 4.40879 5.381 4.38316 5.46256 4.38316C5.54413 4.38316 5.62364 4.40879 5.68986 4.45642C5.75607 4.50406 5.80565 4.5713 5.83158 4.64864L6.86458 7.74766M8.547 4.38281V7.74766M4.62135 6.62604H6.30378" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg></span>
                                            <h6 className='pl-1.5 text-[10.5px] text-[#5f5f5f] tracking-wide font-supera700'>Chat</h6>
                                        </div> */}
                                    </div>

                                    {/* <div className={`absolute top-4 right-4  ${open ? 'cursor-pointer' : 'cursor-auto'} `} onClick={() => setOpen(false)}>
                                        <div className=' text-[#aaaaaa] lg:text-[34px] text-[25px] font-supera700 '>
                                            <RxCross2 />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvatarModel

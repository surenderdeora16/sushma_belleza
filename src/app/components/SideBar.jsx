'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import logo from '@/app/images/logo.webp'; // Adjust the path as needed
import Link from 'next/link';
import { useActivetab } from '../context/ActiveTabContext';

const menuData = [
    { href: '/#about-us', label: 'About Us', submenu: [] },
    {
        href: '/#products',
        label: 'Products',
        submenu: [
            { href: '/#products', tab: '3+1 BHK', label: '3+1 BHK' },
            { href: '/#products', tab: '4+1 BHK', label: '4+1 BHK' }
        ]
    },
    {
        href: '/plans',
        label: 'Plans',
        submenu: [
            { href: '/plans#plan', label: 'Unit Plan' },
            { href: '/plans#sitePlan', label: 'Site Plan' },
            { href: '/plans#towerPlan', label: 'Tower Plan' },
        ]
    },
    {
        href: '/location',
        label: 'Location Map',
        submenu: [
            { tab: 'nearby', href: '/location/#nearby', label: 'Near By' },
            { tab: 'find-distance', href: '/#map', label: 'Find Distance' },
            { href: '/#key-highlights', label: 'Key Highlights' }
        ]
    },
    {
        href: '/price',
        label: 'Price',
        submenu: [
            { href: '/price#price', label: 'Price Sheet' },
            { href: '/price#payment-structure', label: 'Payment Structure' },
            { href: '/price#current-offer', label: 'Current Offers' }
        ]
    },
    { href: '/amenities#amenities', label: 'Amenities', submenu: [] },
    {
        href: '/gallery',
        label: 'Gallery',
        submenu: [
            { tab: 'project-walk-through', href: '/gallery#project-walk-through', label: 'Project Walk-Through' },
            { tab: 'sample-flat', href: '/gallery#sample-flat', label: 'Sample Flat' },
            { tab: 'project-gallery', href: '/gallery#project-gallery', label: 'Project Gallery' },
            { tab: 'construction-updates', href: '/gallery#construction-updates', label: 'Construction Updates' }
        ]
    },
    {
        href: '/#contact-us',
        label: 'Contact Us',
        submenu: [
            { label: '+91 89680 66698' },
            { label: '+91 99880 10405' },
            { label: 'whatsapp-icon' }
        ]
    }
];

const SideBar = ({ open, setOpen }) => {
    const router = useRouter();
    const { setActiveSectionTab } = useActivetab();
    const [activeMenu, setActiveMenu] = useState(null);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);

    const toggleSubMenu = (menuLabel, event) => {
        event.preventDefault();
        event.stopPropagation();
        setActiveMenu((prev) => (prev === menuLabel ? null : menuLabel));
    };

    const handleTabChange = useCallback((tab, href, event) => {
        event.preventDefault();
        if (tab) {
            setActiveSectionTab(tab);
            setOpen(false);
        } else if (href) {
            setActiveSectionTab(href);
            setOpen(false);
        }

        const isExternalLink = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('https://wa.me');
        if (isExternalLink) {
            window.open(href, '_blank', 'noopener,noreferrer');
            return;
        }
        const [path, hash] = href.split('#');
        if (path) {
            router.push(href);
        }
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [router, setActiveSectionTab, setOpen]);


    const handleWhatsAppClick = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        const phoneNumber = '9988010405';
        const message = 'Hi I am interested in *Sushma Belleza*. Please send more detail';
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        if (typeof window !== 'undefined') {
            window.location.href = whatsappUrl;
        }
    }, []);


    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop with blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        style={{ zIndex: 2147483646 }}
                        className={`fixed inset-0 shadow-2xl top-0 left-0 w-full h-full bg-[#000000f6] backdrop-blur-xl z-[99999999999999999999999999999]`}
                        onClick={() => setOpen(false)}
                    >
                    </motion.div>
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: open ? 0 : '100%' }}
                        exit={{ x: '100%' }}  // Ensures smooth exit transition
                        transition={{
                            type: 'spring',
                            stiffness: 570,
                            damping: 150,  // Adjusted damping for smoother closing
                            mass: 10,      // Control the mass for more fluid movement
                            velocity: 5,  // Prevent sudden jumps
                        }}
                        style={{ zIndex: 2147483647 }}
                        className="fixed top-0 right-0 h-full w-[80%] bg-gray-800 text-white shadow-lg z-[999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999]"
                    >
                        <div className="flex flex-col min-h-full pt-5 relative">
                            <div className="flex items-center justify-between pl-5 pr-2">
                                <button
                                    onClick={(e) => handleTabChange('/', e)}
                                    aria-label="Back to homepage"
                                    className="flex w-[150px] h-[60px] relative"
                                >
                                    <Image
                                        src={logo}
                                        alt="Logo"
                                        fill
                                        priority
                                        className="object-contain"
                                    />
                                </button>
                                <button
                                    className="text-white p-2"
                                    onClick={() => setOpen(false)}
                                    aria-label="Close menu"
                                >
                                    <RxCross2 className="h-7 w-8" />
                                </button>
                            </div>
                            <nav className="flex-grow mt-7 pb-7">
                                <ul className="px-4 py-2 overflow-auto h-[calc(100vh-200px)]">
                                    {menuData.map((menuItem, index) => (
                                        <li key={index} className="mb-3">
                                            <div className={`${activeMenu === menuItem.label ? 'pt-3 pb-3 mb-5 duration-500' : 'pb-1 duration-500'} duration-500 pl-3  flex items-center justify-between w-full border-b-[0.50px] border-b-gray-700`}>
                                                <Link href={menuItem?.href ? menuItem?.href : ''}
                                                    onClick={() => { setOpen(false) }}
                                                    className="w-full text-left text-white hover:text-gray-300 text-lg font-supera500 tracking-wider py-2"
                                                >
                                                    {menuItem.label}
                                                </Link>
                                                {menuItem.submenu.length > 0 && (
                                                    <button
                                                        onClick={(e) => toggleSubMenu(menuItem.label, e)}
                                                        className="text-white p-2"
                                                    >
                                                        <MdOutlineKeyboardArrowDown
                                                            className={`w-6 h-6 transition-transform duration-300 ${activeMenu === menuItem.label ? 'rotate-180' : ''
                                                                }`}
                                                        />
                                                    </button>
                                                )}
                                            </div>
                                            <AnimatePresence>
                                                {menuItem.submenu.length > 0 &&
                                                    activeMenu === menuItem.label && (
                                                        <div className='mb-4 pb-1'>
                                                            <motion.ul
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.5 }}
                                                                className={`ml-8 space-y-2`}
                                                            >
                                                                {menuItem.submenu.map((subItem, subIndex) => (
                                                                    <motion.li
                                                                        key={subIndex}
                                                                        initial={{ opacity: 0, y: -10 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        exit={{ opacity: 0, y: -10 }}
                                                                        transition={{
                                                                            duration: 0.5,
                                                                            delay: subIndex * 0.05,
                                                                        }}
                                                                    >
                                                                        <Link href={subItem?.href ? subItem?.href : ''}
                                                                            onClick={(e) => { handleTabChange(subItem.tab, subItem.href || menuItem.href, e); }}
                                                                            className="block py-1.5 text-white hover:text-[#6b7280] text-lg font-supera500 tracking-wider w-full text-left"
                                                                        >
                                                                            {subItem.label === '+91 89680 66698' || subItem.label === '+91 99880 10405' ? (
                                                                                <span className="flex items-center gap-x-1.5">
                                                                                    <svg className="w-4" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M13.1303 6.39945C15.8039 6.39945 16.9443 7.53984 16.9443 10.2135H19.487C19.487 6.1134 17.2304 3.85676 13.1303 3.85676V6.39945ZM17.4808 13.3194C17.2365 13.0973 16.9155 12.9789 16.5856 12.9891C16.2556 12.9993 15.9425 13.1373 15.7124 13.374L12.6701 16.5028C11.9378 16.363 10.4656 15.904 8.95012 14.3924C7.43468 12.8757 6.97573 11.3996 6.83969 10.6724L9.96593 7.62884C10.2029 7.39889 10.3411 7.08575 10.3513 6.75569C10.3616 6.42563 10.2429 6.10455 10.0206 5.8604L5.32298 0.69493C5.10055 0.450014 4.7914 0.301454 4.4612 0.280802C4.131 0.260149 3.80575 0.369031 3.55454 0.584323L0.795723 2.95029C0.575922 3.17089 0.44473 3.46449 0.427033 3.7754C0.407963 4.09323 0.0443588 11.6221 5.88237 17.4627C10.9754 22.5544 17.355 22.9269 19.112 22.9269C19.3688 22.9269 19.5264 22.9193 19.5684 22.9167C19.8792 22.8993 20.1727 22.7676 20.3922 22.5468L22.7569 19.7867C22.9724 19.5356 23.0815 19.2105 23.061 18.8803C23.0406 18.5501 22.8923 18.2409 22.6476 18.0183L17.4808 13.3194Z" fill="white" />
                                                                                    </svg>
                                                                                    {subItem.label}
                                                                                </span>
                                                                            ) : subItem.label === 'whatsapp-icon' ? (
                                                                                    <span onClick={handleWhatsAppClick} className="flex items-center gap-x-3.5 bg-white text-[#1ca04e] font-supera600 rounded-full py-2 px-6">
                                                                                    <svg className='w-6' xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 509 511.514">
                                                                                            <path fill="#1ca04e" d="M434.762 74.334C387.553 26.81 323.245 0 256.236 0h-.768C115.795.001 2.121 113.696 2.121 253.456l.001.015a253.516 253.516 0 0033.942 126.671L0 511.514l134.373-35.269a253.416 253.416 0 00121.052 30.9h.003.053C395.472 507.145 509 393.616 509 253.626c0-67.225-26.742-131.727-74.252-179.237l.014-.055zM255.555 464.453c-37.753 0-74.861-10.22-107.293-29.479l-7.72-4.602-79.741 20.889 21.207-77.726-4.984-7.975c-21.147-33.606-32.415-72.584-32.415-112.308 0-116.371 94.372-210.743 210.741-210.743 56.011 0 109.758 22.307 149.277 61.98a210.93 210.93 0 0161.744 149.095c0 116.44-94.403 210.869-210.844 210.869h.028zm115.583-157.914c-6.363-3.202-37.474-18.472-43.243-20.593-5.769-2.121-10.01-3.202-14.315 3.203-4.305 6.404-16.373 20.593-20.063 24.855-3.69 4.263-7.401 4.815-13.679 1.612-6.278-3.202-26.786-9.883-50.899-31.472a192.748 192.748 0 01-35.411-43.867c-3.712-6.363-.404-9.777 2.82-12.873 3.224-3.096 6.363-7.381 9.48-11.092a41.58 41.58 0 006.357-10.597 11.678 11.678 0 00-.508-11.09c-1.718-3.18-14.444-34.357-19.534-47.06-5.09-12.703-10.37-10.603-14.272-10.901-3.902-.297-7.911-.19-12.089-.19a23.322 23.322 0 00-16.964 7.911c-5.707 6.298-22.1 21.673-22.1 52.849s22.671 61.249 25.852 65.532c3.182 4.284 44.663 68.227 108.288 95.649 15.099 6.489 26.891 10.392 36.053 13.403a87.504 87.504 0 0025.216 3.718c4.905 0 9.82-.416 14.65-1.237 12.174-1.782 37.453-15.291 42.776-30.073s5.303-27.57 3.711-30.093c-1.591-2.524-5.704-4.369-12.088-7.615l-.038.021z" />
                                                                                    </svg>
                                                                                    WhatsApp Now
                                                                                </span>
                                                                            ) : (
                                                                                subItem.label
                                                                            )}
                                                                        </Link>
                                                                    </motion.li>
                                                                ))}
                                                            </motion.ul>
                                                        </div>
                                                    )}
                                            </AnimatePresence>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SideBar;

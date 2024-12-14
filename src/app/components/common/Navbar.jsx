'use client';

import { Suspense } from 'react';
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useActivetab } from '@/app/context/ActiveTabContext';
import logo from '@/app/images/logo.webp';
import HambarIcon from '@/app/images/hambar.svg';
import dynamic from 'next/dynamic';
const SideBar = dynamic(() => import('@/app/components/SideBar'), {
  loading: () => <p>SideBar...</p>,
});


const navigationItems = [
  {
    href: '/#about-us',
    label: 'About Us',
    submenu: []
  },
  {
    href: '/#products',
    label: 'Products',
    submenu: [
      { href: '/#products', tab: '3BHK', label: '3BHK' },
      { href: '/#products', tab: '3BHK+S', label: '3BHK+S' },
      { href: '/#products', tab: '4BHK+S', label: '4BHK+S' }
    ]
  },
  {
    href: '/plans',
    label: 'Plans',
    submenu: [
      { href: '/plans#plan', label: 'Unit Plan' },
      { href: '/plans#sitePlan', label: 'Site Plan' },
      { href: '/plans#towerPlan', label: 'Tower Plan' },
      { href: '/amenities#amenities', label: 'Amenities' }
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
  {
    href: '/amenities',
    label: 'Amenities',
    submenu: []
  },
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
  },
];

const pageContent = {
  '/price/': [
    { label: 'Price', path: '/price', hastPath: '#price' },
    { label: 'Payment Structure', path: '/price', hastPath: '#payment-structure' },
    { label: 'Current offers', path: '/price', hastPath: '#current-offer' },
  ],
  '/gallery/': [
    { label: 'Project walk through', path: '/gallery', hastPath: '#project-walk-through' },
    { label: 'Sample flat', path: '/gallery', hastPath: '#sample-flat' },
    { label: 'Project Gallery', path: '/gallery', hastPath: '#project-gallery' },
    { label: 'Construction updates', path: '/gallery', hastPath: '#construction-updates' },
  ],
  '/plans/': [
    { label: 'Unit Plan', path: '/plans', hastPath: '#plan' },
    { label: 'Site Plan', path: '/plans', hastPath: '#sitePlan' },
    { label: 'Tower Plans', path: '/plans', hastPath: '#towerPlan' },
  ],
};

const Navbar = () => {
  const { setActiveSectionTab } = useActivetab();
  const pathName = usePathname();

  const params = useParams()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [megaMenu, setMegaMenu] = useState(false);
  const [tab, setTab] = useState('#project-walk-through');

  const content = pageContent[
    process.env.basePath === ''
      ? pathName
      : pathName.replace(process.env.basePath, '')
  ] || null;


  const handleUserInteraction = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (pathName === `${process.env.basePath == '' ? '/' : `${process.env.basePath}/`}`) {
      const mouseMoveHandler = () => handleUserInteraction();
      const scrollHandler = () => handleUserInteraction();

      window.addEventListener('mousemove', mouseMoveHandler);
      window.addEventListener('scroll', scrollHandler);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 6000);

      return () => {
        window.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('scroll', scrollHandler);
        clearTimeout(timer);
      };
    }
  }, [pathName, handleUserInteraction]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (pathName === `${process.env.basePath == '' ? '/' : `${process.env.basePath}/`}` || pathName.includes(`${process.env.basePath}/location`) || pathName.includes(`${process.env.basePath}/amenities`)) {
        // Existing behavior for home page
        if (currentScrollY > lastScrollY && currentScrollY > 500 && (pathName !== `${process.env.basePath == '' ? '/' : `${process.env.basePath}/`}` && !pathName.includes(`${process.env.basePath}/location`) && !pathName.includes(`${process.env.basePath}/amenities`))) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        // New behavior for other pages
        if (currentScrollY <= 0 || (currentScrollY > 0 && currentScrollY <= 200)) {
          setIsVisible(true);
        } else {
          if (currentScrollY > lastScrollY) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        }
      }

      setLastScrollY(currentScrollY);

      if (currentScrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(pathName !== `${process.env.basePath == '' ? '/' : `${process.env.basePath}/`}`);
      }

      setLastScrollY(currentScrollY);

      if (currentScrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(pathName !== `${process.env.basePath == '' ? '/' : `${process.env.basePath}/`}`);
      }

      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, pathName, params]);

  const isActive = (hash) => activeSection === hash;

  const handleTabChange = useCallback((tab, href) => {
    setActiveSectionTab(tab);
    setMegaMenu(false);

    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [setActiveSectionTab]);

  const handleWhatsAppClick = useCallback(() => {
    const phoneNumber = '9988010405';
    const message = 'Hi I am interested in *Sushma Belleza*. Please send more detail';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    if (typeof window !== 'undefined') {
      window.location.href = whatsappUrl;
    }
  }, []);

  return (
    <nav>
      <Suspense fallback={<div>Loading...</div>}>
        <SideBar open={isSidebarOpen} setOpen={setIsSidebarOpen} />
      </Suspense>
      <div style={{ zIndex: '550' }} className={`w-full z-[50] ${isSticky ? 'fixed top-0' : 'absolute top-0 left-0'}`}>

        <div className={`relative bg-no-repeat bg-cover bg-right-bottom ${megaMenu ? `bg-[#27261e] backdrop-blur px-5 sm:px-10 cmd:px-14 lg:px-6 2xl:px-8 3xl:px-4 pt-2 sm:pt-6 lg:pb-10` : ``}  w-full transition-all duration-500 ${isSticky ? `bg-[#363738] sm:bg-[#27261e] shadow-lg py-1.5 sm:py-2 lg:py-1 ${isVisible ? 'translate-y-0' : `${megaMenu ? '' : '-translate-y-full'}`} duration-500` : `${pathName == `${process.env.basePath == '' ? '/' : `${process.env.basePath}/`}` ? 'py-2 lg:py-1 xl:py-4 ' : `bg-[#27261e] ${pathName == `${process.env.basePath == '' ? '/' : `${process.env.basePath}/`}` ? 'bg-[#363738] sm:bg-transparent-local' : 'bg-[#363738] sm:bg-transparent-production '}  py-1`}  duration-500 `} flex justify-center items-center duration-500`}>
          <div className={`duration-500  xl:py-1 lg:py-2.5 w-full 2xl:container flex justify-between lg:justify-around 3xl:justify-between ${megaMenu ? 'items-center sm:items-end xl:items-center duration-1000 px-0' : 'items-center duration-1000 px-1.5 cxs:px-5 xl:px-0'} duration-1000 mx-2`}>
            <Link href={`${process.env.basePath == '' ? '/' : `${process.env.basePath}/`}`} aria-label="Back to homepage" className={`${isSticky ? 'w-[130px] h-[42px] sm:w-[160px] sm:h-[50px]  duration-1000  sm:my-0' : `${pathName == `${process.env.basePath == '' ? '/' : `${process.env.basePath}/`}` ? 'w-[150px] h-[50px] sm:w-[200px] sm:h-[60px] xl:w-[206px] xl:h-[50px]' : 'w-[120px] h-[50px] sm:w-[150px] sm:h-[60px] py-3'} duration-1000`} flex relative`}>
              <Image
                src={logo}
                fill
                className="object-contain"
                priority
                alt='logo'
              />
            </Link>
            <ul className={`w-full  ${megaMenu ? 'items-start w-[90%] xl:w-[85%] 2xl:w-[85%] justify-around 2xl:justify-center xl:pl-[10px] 2xl:pl-[10px] ' : 'items-center justify-between xl:justify-end 2xl:justify-between xl:gap-6 2xl:gap-0 w-[80%] xl:w-[77%] 2xl:w-[76%]  pl-16 xl:pl-5 3xl:px-0'} h-full duration-500 hidden  lg:flex `}>
              {navigationItems.map((item) => (
                <li className={`${megaMenu ? `font-supera500 xl:font-supera600  xl:w-1/6 flex justify-center ${(item?.label === 'About Us' || item?.label === 'Amenities') ? 'hidden' : ''}` : 'font-supera400 xl:font-supera500'} h-full`} key={item.href}>
                  <div className={`text-white  tracking-wide text-[14px] xl:text-[17px] 3xl:text-lg uppercase relative table`}>
                    <Link href={
                      pathName === `${process.env.basePath == '' ? '/' : `${process.env.basePath}/`}`
                        ? `${process.env.basePath}${item?.href}`
                        : item?.href.includes('#')
                          ? `${process.env.basePath}${item?.href}`
                          : `${process.env.basePath}${item?.href}`
                    }
                      className={`w-full h-full text-left whitespace-nowrap relative after:absolute after:left-0 after:top-[120%] after:h-[3px] after:rounded-[20px] after:duration-500 after:z-[60] after:bg-white hover:after:w-[100%] hover:after:duration-500 ${isActive(item.href.replace('#', '').substring(1)) ? 'after:w-[100%] after:duration-500' : 'after:w-[0%]'} ${pathName?.includes(item?.href) ? 'after:w-[100%] after:duration-500' : 'after:w-[0%]'} ${isActive(item.href.substring(1)) ? 'after:w-[100%] after:duration-500' : 'after:w-[0%]'
                        }`}
                    >
                      {item.label}
                    </Link>
                    <div className={`${megaMenu ? 'w-full  flex justify-center items-center' : 'hidden'}`}>
                      <ul className='leading-loose mt-4 mx-auto flex flex-col justify-center gap-y-5 '>
                        {item.submenu.map((subitem, idx) => (
                          <li key={idx} className={`tracking-wider cursor-pointer text-left font-supera400 capitalize flex justify-start gap-x-1 text-[13px] xl:text-[14px] 3xl:text-[15px] leading-tight`}>
                            <Link href={(subitem?.href) ? `${process.env.basePath}${subitem?.href}` : `${process.env.basePath}${item?.href}`} onClick={(e) => { setTab(subitem?.href?.replace('/gallery', '')); handleTabChange(subitem?.tab, subitem?.href, e) }}>
                              {subitem?.label === '+91 89680 66698' ? (
                                <>
                                  <div onClick={() => { window.location.href = 'tel:918968066698' }}>
                                    <button aria-label={subitem?.label} onClick={() => { }} className=' flex justify-center items-center gap-x-1.5'>
                                      <svg className='w-4' viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.1303 6.39945C15.8039 6.39945 16.9443 7.53984 16.9443 10.2135H19.487C19.487 6.1134 17.2304 3.85676 13.1303 3.85676V6.39945ZM17.4808 13.3194C17.2365 13.0973 16.9155 12.9789 16.5856 12.9891C16.2556 12.9993 15.9425 13.1373 15.7124 13.374L12.6701 16.5028C11.9378 16.363 10.4656 15.904 8.95012 14.3924C7.43468 12.8757 6.97573 11.3996 6.83969 10.6724L9.96593 7.62884C10.2029 7.39889 10.3411 7.08575 10.3513 6.75569C10.3616 6.42563 10.2429 6.10455 10.0206 5.8604L5.32298 0.69493C5.10055 0.450014 4.7914 0.301454 4.4612 0.280802C4.131 0.260149 3.80575 0.369031 3.55454 0.584323L0.795723 2.95029C0.575922 3.17089 0.44473 3.46449 0.427033 3.7754C0.407963 4.09323 0.0443588 11.6221 5.88237 17.4627C10.9754 22.5544 17.355 22.9269 19.112 22.9269C19.3688 22.9269 19.5264 22.9193 19.5684 22.9167C19.8792 22.8993 20.1727 22.7676 20.3922 22.5468L22.7569 19.7867C22.9724 19.5356 23.0815 19.2105 23.061 18.8803C23.0406 18.5501 22.8923 18.2409 22.6476 18.0183L17.4808 13.3194Z" fill="white" />
                                      </svg>
                                      {subitem?.label}

                                    </button>
                                  </div>
                                </>
                              ) : subitem?.label === '+91 99880 10405' ? (
                                <>
                                  <div onClick={() => { window.location.href = 'tel:919988010405' }}>
                                    <button aria-label={subitem?.label} onClick={() => { }} className=' flex justify-center items-center gap-x-1.5'>
                                      <svg className='w-4' viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.1303 6.39945C15.8039 6.39945 16.9443 7.53984 16.9443 10.2135H19.487C19.487 6.1134 17.2304 3.85676 13.1303 3.85676V6.39945ZM17.4808 13.3194C17.2365 13.0973 16.9155 12.9789 16.5856 12.9891C16.2556 12.9993 15.9425 13.1373 15.7124 13.374L12.6701 16.5028C11.9378 16.363 10.4656 15.904 8.95012 14.3924C7.43468 12.8757 6.97573 11.3996 6.83969 10.6724L9.96593 7.62884C10.2029 7.39889 10.3411 7.08575 10.3513 6.75569C10.3616 6.42563 10.2429 6.10455 10.0206 5.8604L5.32298 0.69493C5.10055 0.450014 4.7914 0.301454 4.4612 0.280802C4.131 0.260149 3.80575 0.369031 3.55454 0.584323L0.795723 2.95029C0.575922 3.17089 0.44473 3.46449 0.427033 3.7754C0.407963 4.09323 0.0443588 11.6221 5.88237 17.4627C10.9754 22.5544 17.355 22.9269 19.112 22.9269C19.3688 22.9269 19.5264 22.9193 19.5684 22.9167C19.8792 22.8993 20.1727 22.7676 20.3922 22.5468L22.7569 19.7867C22.9724 19.5356 23.0815 19.2105 23.061 18.8803C23.0406 18.5501 22.8923 18.2409 22.6476 18.0183L17.4808 13.3194Z" fill="white" />
                                      </svg>
                                      {subitem?.label}
                                    </button>
                                  </div>
                                </>
                              ) : subitem?.label === 'whatsapp-icon' ? (
                                <>
                                  <div onClick={handleWhatsAppClick} className='rounded-full bg-white ml-1'>
                                    <button aria-label="whatsapp now" onClick={() => { }} className='w-full h-full font-supera600 text-[12px] py-2 px-3 text-[#000] uppercase flex justify-center items-center gap-x-1.5'>
                                      <span>
                                        <svg className='w-4' xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 509 511.514">
                                          <path fill="#000" d="M434.762 74.334C387.553 26.81 323.245 0 256.236 0h-.768C115.795.001 2.121 113.696 2.121 253.456l.001.015a253.516 253.516 0 0033.942 126.671L0 511.514l134.373-35.269a253.416 253.416 0 00121.052 30.9h.003.053C395.472 507.145 509 393.616 509 253.626c0-67.225-26.742-131.727-74.252-179.237l.014-.055zM255.555 464.453c-37.753 0-74.861-10.22-107.293-29.479l-7.72-4.602-79.741 20.889 21.207-77.726-4.984-7.975c-21.147-33.606-32.415-72.584-32.415-112.308 0-116.371 94.372-210.743 210.741-210.743 56.011 0 109.758 22.307 149.277 61.98a210.93 210.93 0 0161.744 149.095c0 116.44-94.403 210.869-210.844 210.869h.028zm115.583-157.914c-6.363-3.202-37.474-18.472-43.243-20.593-5.769-2.121-10.01-3.202-14.315 3.203-4.305 6.404-16.373 20.593-20.063 24.855-3.69 4.263-7.401 4.815-13.679 1.612-6.278-3.202-26.786-9.883-50.899-31.472a192.748 192.748 0 01-35.411-43.867c-3.712-6.363-.404-9.777 2.82-12.873 3.224-3.096 6.363-7.381 9.48-11.092a41.58 41.58 0 006.357-10.597 11.678 11.678 0 00-.508-11.09c-1.718-3.18-14.444-34.357-19.534-47.06-5.09-12.703-10.37-10.603-14.272-10.901-3.902-.297-7.911-.19-12.089-.19a23.322 23.322 0 00-16.964 7.911c-5.707 6.298-22.1 21.673-22.1 52.849s22.671 61.249 25.852 65.532c3.182 4.284 44.663 68.227 108.288 95.649 15.099 6.489 26.891 10.392 36.053 13.403a87.504 87.504 0 0025.216 3.718c4.905 0 9.82-.416 14.65-1.237 12.174-1.782 37.453-15.291 42.776-30.073s5.303-27.57 3.711-30.093c-1.591-2.524-5.704-4.369-12.088-7.615l-.038.021z" />
                                        </svg>
                                      </span>
                                      Whatsapp now
                                    </button>
                                  </div>
                                </>
                              ) : (
                                <>{subitem?.label}</>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
              <li className={`${megaMenu ? 'self-start' : 'self-center'} `}>
                {!megaMenu && (
                  <button aria-label="megamenu toggle button" className="flex justify-end  pl-[20px] xl:pl-[40px] relative top-1">
                    <Image onClick={() => setMegaMenu(!megaMenu)} src={HambarIcon} priority alt='bar' />
                  </button>
                )}
                {megaMenu && (
                  <button aria-label="megamenu close button" className="flex justify-end pl-[20px] xl:pl-[40px]">
                    <div onClick={() => setMegaMenu(false)} className=''>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" cursor="pointer"><path d="M0.981 16L0 15.019L7.019 8L0 0.981L0.981 0L8 7.019L15.019 0L16 0.981L8.981 8L16 15.019L15.019 16L8 8.981L0.981 16Z" fill="white"></path></svg>
                    </div>
                  </button>
                )}
              </li>
            </ul>
            <button aria-label="megamenu open button" onClick={() => setIsSidebarOpen(true)} className="flex justify-end  lg:p-4 lg:hidden">
              <Image src={HambarIcon} alt='bar' priority className='object-center p-1 sm:p-0' />
            </button>
          </div>
          {content && (
            <div className={`mt-[-0.5px] ${pathName.includes(`${process.env.basePath}/gallery`) ? 'hidden sm:block' : ''} shadow-xl shadow-[#00000039] absolute top-full w-full sm:w-[95%] md:w-[90%] xl:w-[80%] px-2  sm:rounded-b-2xl xl:rounded-b-3xl bg-[#d5d5d3b4] backdrop-blur-md sm:bg-[#fff] overflow-auto`}>
              <ul className='my-3.5 sm:my-2 2xl:my-3 flex justify-around gap-x-3 sm:gap-x-0'>
                {(pageContent[`/gallery/`] && pathName?.includes(`${process.env.basePath}/gallery`)) ? (
                  <>
                    {content?.map((item, index) => (
                      <li key={index} onClick={() => { setTab(item?.hastPath); setActiveSectionTab(item?.hastPath.replace('#', '')) }}
                        className={` min-w-[130px] py-1.5 inline-flex justify-center rounded-full font-supera700 text-[12px] md:text-[13px] cmd:text-sm lg:text-base xl:text-xl text-center tracking-wide uppercase ${tab == item?.hastPath ? `bg-[#a27d27]  px-4 cmd:px-6 text-white` : 'text-[#fff] sm:text-[#474536] duration-1000'}  bg-no-repeat bg-center`}>
                        <Link href={`${process.env.basePath}${item?.path}${item?.hastPath}`}>
                          {item?.label}
                        </Link>
                      </li>
                    ))}
                  </>) : (
                  <>
                    {content?.map((item, index) => (
                      <li key={index} onClick={() => { setActiveSectionTab(item?.hastPath.replace('#', '')) }}
                        className={` sm:min-w-[130px] px-4 sm:px-6 py-1.5 inline-flex justify-center rounded-lg sm:rounded-full whitespace-nowrap font-supera700 text-sm md:text-[13px] cmd:text-sm lg:text-base xl:text-xl text-center tracking-wide uppercase ${isActive(item?.hastPath?.substring(1)) ? `bg-[#986b10] text-white` : `text-[#121212] sm:text-[#474536] bg-[#FFFFFF80] sm:bg-inherit sm:duration-1000`}  bg-no-repeat bg-center`}>
                        <Link href={`${process.env.basePath}${item?.path}${item?.hastPath}`}>
                          {item?.label}
                        </Link>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


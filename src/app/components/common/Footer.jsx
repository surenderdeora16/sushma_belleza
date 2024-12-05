'use client'
import React from 'react'
import Image from 'next/image';
import logo from "@/app/images/combined-logo.webp";
import Link from 'next/link';

function Footer() {

    return (
        <footer className='section-gap'>
            <div style={{ backgroundImage: `url('${process.env.basePath}/images/footer-bg-image.webp')` }} className={`w-full`}>
                <div className='w-full h-full bg-[#2D2C2CE5] '>
                    <div className='lg:container mx-auto pt-[35px]'>
                        <Link href={`${process.env.basePath}/`}>
                            <div className='w-full max-w-[300px] sm:max-w-[350px] h-[100px] mx-auto relative'>
                                <Image
                                    src={logo}
                                    alt="footer-logo"
                                    fill 
                                    className='w-full object-contain'
                                />
                            </div>
                        </Link>
                        <hr className='max-w-[1257px] mx-5 lg:mx-auto border-[#787777] mt-[35px] mb-[25px]' />
                        <div className='flex flex-col gap-y-[38px]'>
                            <ul className='flex justify-center flex-wrap lg:flex-nowrap gap-3 md:gap-x-6 lg:gap-x-6 xl:gap-x-7 2xl:gap-x-9 px-2 sm:px-0'>
                                <Link href={`${process.env.basePath}#about-us`}>
                                    <li className=' text-[12px] cmd:text-[14px] lg:text-[13px] 2xl:text-[15px] 3xl:text-[16px] font-supera500 text-white uppercase tracking-wide'>About Us</li>
                                </Link>
                                <Link href={`${process.env.basePath}#products`}>
                                    <li className=' text-[12px] cmd:text-[14px] lg:text-[13px] 2xl:text-[15px] 3xl:text-[16px] font-supera500 text-white uppercase tracking-wide'>Products </li>
                                </Link>
                                <Link href={`${process.env.basePath}/location`}>
                                    <li className=' text-[12px] cmd:text-[14px] lg:text-[13px] 2xl:text-[15px] 3xl:text-[16px] font-supera500 text-white uppercase tracking-wide'>LOCATION MAP</li>
                                </Link>
                                <Link href={`${process.env.basePath}/plans`}>
                                    <li className=' text-[12px] cmd:text-[14px] lg:text-[13px] 2xl:text-[15px] 3xl:text-[16px] font-supera500 text-white uppercase tracking-wide'>PLANS</li>
                                </Link>
                                <Link href={`${process.env.basePath}/price`}>
                                    <li className=' text-[12px] cmd:text-[14px] lg:text-[13px] 2xl:text-[15px] 3xl:text-[16px] font-supera500 text-white uppercase tracking-wide'>Price</li>
                                </Link>
                                <Link href={`${process.env.basePath}/amenities`}>
                                    <li className=' text-[12px] cmd:text-[14px] lg:text-[13px] 2xl:text-[15px] 3xl:text-[16px] font-supera500 text-white uppercase tracking-wide'>amenities</li>
                                </Link>
                                <Link href={`${process.env.basePath}/gallery`}>
                                    <li className=' text-[12px] cmd:text-[14px] lg:text-[13px] 2xl:text-[15px] 3xl:text-[16px] font-supera500 text-white uppercase tracking-wide'>GALLERY</li>
                                </Link>
                                <Link href={`${process.env.basePath}#faqs`}>
                                    <li className=' text-[12px] cmd:text-[14px] lg:text-[13px] 2xl:text-[15px] 3xl:text-[16px] font-supera500 text-white uppercase tracking-wide'>FAQ</li>
                                </Link>
                                <Link href={`${process.env.basePath}#download`}>
                                    <li className=' text-[12px] cmd:text-[14px] lg:text-[13px] 2xl:text-[15px] 3xl:text-[16px] font-supera500 text-white uppercase tracking-wide'>Downloads</li>
                                </Link>
                                <Link href={`${process.env.basePath}#contact-us`}>
                                    <li className=' text-[12px] cmd:text-[14px] lg:text-[13px] 2xl:text-[15px] 3xl:text-[16px] font-supera500 text-white uppercase tracking-wide'>Contact us</li>
                                </Link>
                            </ul>

                            <div className='flex justify-around cxs:justify-center flex-wrap cxs:flex-nowrap gap-y-6 cxs:gap-y-0 gap-x-4 sm:gap-x-10 px-2 cxs:px-0'>
                                <button aria-label="call 1" onClick={() => window.location.href = 'tel:918968066698'} className=' flex items-center  gap-2.5'>
                                    <span className=''>
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4089 8.28773H16.0963C16.0963 3.95957 12.8287 0.695312 8.49463 0.695312V2.3827C11.9217 2.3827 14.4089 4.8657 14.4089 8.28773Z" fill="white" />
                                            <path d="M8.50262 5.75793C10.2769 5.75793 11.0337 6.51473 11.0337 8.28902H12.7211C12.7211 5.5681 11.2235 4.07054 8.50262 4.07054V5.75793ZM11.3897 10.3502C11.2276 10.2028 11.0146 10.1242 10.7956 10.131C10.5766 10.1378 10.3689 10.2294 10.2162 10.3864L8.1972 12.4628C7.71123 12.37 6.73424 12.0654 5.72855 11.0622C4.72287 10.0557 4.41829 9.07619 4.32802 8.59359L6.40266 6.57379C6.55994 6.42119 6.65167 6.21338 6.65844 5.99434C6.66521 5.77531 6.58649 5.56223 6.43894 5.40021L3.32149 1.97227C3.17388 1.80974 2.96872 1.71115 2.74959 1.69745C2.53046 1.68374 2.31462 1.756 2.14791 1.89887L0.317089 3.46899C0.171223 3.61538 0.084161 3.81022 0.0724171 4.01655C0.0597617 4.22747 -0.181535 9.22383 3.69271 13.0998C7.07256 16.4788 11.3062 16.726 12.4722 16.726C12.6426 16.726 12.7473 16.7209 12.7751 16.7192C12.9814 16.7077 13.1761 16.6202 13.3218 16.4737L14.8911 14.642C15.0341 14.4754 15.1065 14.2597 15.0929 14.0405C15.0794 13.8214 14.9809 13.6162 14.8185 13.4685L11.3897 10.3502Z" fill="white" />
                                        </svg>
                                    </span>
                                    <h6 className='font-supera500 text-white text-[15px] md:text-[18px] lg:text-[19px]'>+91 89680 66698 </h6>
                                </button>
                                <button aria-label="call 2" onClick={() => window.location.href = 'tel:919988010405'} className='flex items-center  gap-2.5'>
                                    <span className=''>
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4089 8.28773H16.0963C16.0963 3.95957 12.8287 0.695312 8.49463 0.695312V2.3827C11.9217 2.3827 14.4089 4.8657 14.4089 8.28773Z" fill="white" />
                                            <path d="M8.50262 5.75793C10.2769 5.75793 11.0337 6.51473 11.0337 8.28902H12.7211C12.7211 5.5681 11.2235 4.07054 8.50262 4.07054V5.75793ZM11.3897 10.3502C11.2276 10.2028 11.0146 10.1242 10.7956 10.131C10.5766 10.1378 10.3689 10.2294 10.2162 10.3864L8.1972 12.4628C7.71123 12.37 6.73424 12.0654 5.72855 11.0622C4.72287 10.0557 4.41829 9.07619 4.32802 8.59359L6.40266 6.57379C6.55994 6.42119 6.65167 6.21338 6.65844 5.99434C6.66521 5.77531 6.58649 5.56223 6.43894 5.40021L3.32149 1.97227C3.17388 1.80974 2.96872 1.71115 2.74959 1.69745C2.53046 1.68374 2.31462 1.756 2.14791 1.89887L0.317089 3.46899C0.171223 3.61538 0.084161 3.81022 0.0724171 4.01655C0.0597617 4.22747 -0.181535 9.22383 3.69271 13.0998C7.07256 16.4788 11.3062 16.726 12.4722 16.726C12.6426 16.726 12.7473 16.7209 12.7751 16.7192C12.9814 16.7077 13.1761 16.6202 13.3218 16.4737L14.8911 14.642C15.0341 14.4754 15.1065 14.2597 15.0929 14.0405C15.0794 13.8214 14.9809 13.6162 14.8185 13.4685L11.3897 10.3502Z" fill="white" />
                                        </svg>
                                    </span>
                                    <h6 className='font-supera500 text-white text-[15px] md:text-[18px] lg:text-[19px]'>+91 99880 10405 </h6>
                                </button>
                                <div className='flex gap-[13px]'>
                                    <div>
                                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.9582 0.368164C5.85269 0.368164 0.0390625 6.18179 0.0390625 13.2873C0.0390625 20.3928 5.85269 26.2065 12.9582 26.2065C20.0638 26.2065 25.8774 20.3928 25.8774 13.2873C25.8774 6.18179 20.0638 0.368164 12.9582 0.368164ZM20.2253 17.7283C20.2253 19.2624 18.9334 20.5543 17.3991 20.5543H8.51727C6.98312 20.5543 5.6912 19.2624 5.6912 17.7283V8.84637C5.6912 7.31222 6.98312 6.0203 8.51727 6.0203H17.3991C18.9334 6.0203 20.2253 7.31222 20.2253 8.84637V17.7283ZM18.2874 7.6352H18.6104V10.0575H16.188V7.6352H18.2874ZM15.3806 13.2873C15.3806 14.5792 14.3308 15.7096 12.9582 15.7096C11.5856 15.7096 10.5359 14.66 10.5359 13.2873C10.5359 12.7221 10.9396 10.865 12.9582 10.865C14.9769 10.865 15.3806 12.7221 15.3806 13.2873ZM18.5296 11.6724H16.5918C16.7532 12.1569 16.9147 12.8028 16.9147 13.2873C16.9147 15.4675 15.1383 17.2439 12.9582 17.2439C10.7781 17.2439 9.00174 15.4675 9.00174 13.2873C9.00174 12.7221 9.08249 12.1569 9.32472 11.6724H7.22535V17.5668C7.22535 18.3743 7.87131 18.9394 8.59802 18.9394H17.157C17.9644 18.9394 18.5296 18.2935 18.5296 17.5668V11.6724Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.5647 0.368164C6.45914 0.368164 0.645508 6.18179 0.645508 13.2873C0.645508 20.3928 6.45914 26.2065 13.5647 26.2065C20.6702 26.2065 26.4839 20.3928 26.4839 13.2873C26.4839 6.18179 20.6702 0.368164 13.5647 0.368164ZM17.4404 12.749H15.1796V20.2851H11.9498V12.749H9.79659V10.5958H11.9498V9.30389C11.9498 8.11962 12.3804 6.28941 14.7489 6.28941H17.3327V8.76558H15.8255C15.6103 8.76558 15.1796 8.87324 15.1796 9.41154V10.4881H17.6557L17.4404 12.749Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.1711 0.368164C6.06558 0.368164 0.251953 6.18179 0.251953 13.2873C0.251953 20.3928 6.06558 26.2065 13.1711 26.2065C20.2767 26.2065 26.0903 20.3928 26.0903 13.2873C26.0903 6.18179 20.2767 0.368164 13.1711 0.368164ZM18.8771 10.4882V10.8112C18.8771 14.5793 16.0779 18.8856 10.8026 18.8856C9.18773 18.8856 7.6805 18.4551 6.49625 17.5937C8.00348 17.8091 9.51071 17.3785 10.695 16.4095C9.40305 16.4095 8.43411 15.5483 8.00348 14.4716C8.43411 14.5793 8.86476 14.5793 9.2954 14.4716C8.00348 14.2564 7.03454 13.072 7.03454 11.6725C7.46519 11.8878 7.89582 11.9955 8.32646 11.9955C7.57284 11.4572 7.03454 10.5959 7.03454 9.62695C7.03454 9.08865 7.1422 8.65801 7.46519 8.22738C8.86476 9.94993 10.9103 11.0265 13.2788 11.2418C13.1711 10.9189 13.1711 10.7035 13.1711 10.4882C13.1711 8.87334 14.463 7.68907 15.9704 7.68907C16.8316 7.68907 17.4776 8.01205 18.0158 8.55036C18.6618 8.44269 20.169 8.22738 20.169 8.22738C19.7384 8.87334 19.4154 10.0576 18.8771 10.4882Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.7776 0.368164C6.67203 0.368164 0.858398 6.18179 0.858398 13.2873C0.858398 20.3928 6.67203 26.2065 13.7776 26.2065C20.8831 26.2065 26.6967 20.3928 26.6967 13.2873C26.6967 6.18179 20.8831 0.368164 13.7776 0.368164ZM15.0695 17.7283C14.0199 17.7283 13.0509 17.1631 12.7278 16.5979C12.7278 16.5979 12.1627 18.6973 12.0819 19.1817C11.6782 20.6351 10.467 22.0885 10.3863 22.25C10.3055 22.3307 10.1441 22.3307 10.1441 22.1692C10.1441 22.0077 9.82108 20.1507 10.1441 18.6165L11.3552 13.5296C11.3552 13.5296 11.0322 12.9643 11.0322 12.0762C11.0322 10.7035 11.8397 9.65382 12.8893 9.65382C13.7776 9.65382 14.1814 10.2998 14.1814 11.0265C14.1814 11.9147 13.6161 13.1258 13.3738 14.337C13.1316 15.306 13.8584 16.1134 14.908 16.1134C16.6844 16.1134 17.9763 13.8526 17.9763 11.188C17.9763 9.16935 16.5229 7.6352 14.0199 7.6352C11.113 7.6352 9.33661 9.73456 9.33661 12.0762C9.33661 12.8836 9.57884 13.4488 9.98257 13.9333C10.1441 14.1756 10.1441 14.2562 10.1441 14.4177L9.74033 15.1445C9.65959 15.3867 9.4981 15.4675 9.25586 15.3867C7.96394 14.8215 7.31799 13.4488 7.31799 11.8339C7.31799 9.16935 9.57884 6.0203 14.1814 6.0203C17.8148 6.0203 20.2372 8.60414 20.2372 11.3495C20.2372 14.983 18.1378 17.7283 15.0695 17.7283Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.384 0.368164C6.27847 0.368164 0.464844 6.18179 0.464844 13.2873C0.464844 20.3928 6.27847 26.2065 13.384 26.2065C20.4896 26.2065 26.3032 20.3928 26.3032 13.2873C26.3032 6.18179 20.4896 0.368164 13.384 0.368164ZM22.1851 13.9333C22.1851 15.306 22.0237 16.6786 22.0237 16.6786C22.0237 16.6786 21.8622 17.809 21.297 18.3743C20.7736 18.8977 20.144 18.997 19.7522 19.0588C19.6605 19.0732 19.5819 19.0857 19.5206 19.1009C17.0175 19.2624 13.384 19.2624 13.384 19.2624C13.384 19.2624 8.78156 19.2624 7.4089 19.1009C7.33726 19.0866 7.25036 19.0749 7.15226 19.0616C6.69757 18.9999 6.00235 18.9056 5.47102 18.3743C4.90581 17.8898 4.74432 16.6786 4.74432 16.6786C4.74432 16.6786 4.58283 15.306 4.58283 13.9333V12.6413C4.58283 11.2687 4.74432 9.89605 4.74432 9.89605C4.74432 9.89605 4.90581 8.76562 5.47102 8.20041C6.01141 7.66003 6.6083 7.57171 7.02534 7.51C7.10681 7.49795 7.18143 7.48691 7.24741 7.47371C9.66976 7.31222 13.384 7.31222 13.384 7.31222C13.384 7.31222 17.0983 7.31222 19.5206 7.47371C19.8436 7.47371 20.6511 7.55445 21.297 8.20041C21.8622 8.68488 22.0237 9.89605 22.0237 9.89605C22.0237 9.89605 22.1851 11.2687 22.1851 12.6413V13.9333ZM16.2908 13.1258L11.5269 15.4675V10.7035L16.2908 13.1258Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className=' max-w-[1257px] mx-5 lg:mx-auto border-[#787777] mt-[30px] mb-[15px]' />
                        <div className='flex flex-col cmd:flex-row justify-center items-center gap-2 cmd:gap-0 pb-4 px-3'>
                            <div className='flex items-center justify-center'>
                                <span className='font-supera700 text-[15px] cxs:text-[19px] lg:text-[23px] text-white uppercase tracking-wide'>Sales Partner</span>
                                &nbsp;
                                &nbsp;
                                <span>
                                    <svg className='w-[26px] h-[19px] lg:w-[31px] lg:h-[26px]' viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.07112 9.58352C1.4542 10.1501 1.90016 10.3912 2.83707 10.5723L13.1001 12.6117C13.1951 12.6301 13.2762 12.6457 13.3069 12.7075C13.3396 12.7559 13.3371 12.8401 13.3214 12.9218L11.3742 23.2171C11.2071 24.1561 11.2648 24.6598 11.6479 25.2264C12.1601 26.0011 13.0768 26.0659 13.8675 25.5429C14.2889 25.2579 14.6865 24.7299 15.0491 24.2365L29.7582 3.84993C30.521 2.81519 30.6159 1.96015 30.1675 1.29627C29.7286 0.648641 28.9004 0.418325 27.656 0.740712L3.25668 6.79641C2.66374 6.94914 2.02558 7.12137 1.60411 7.40635C0.824232 7.94523 0.545551 8.80621 1.07112 9.58352Z" fill="white" />
                                    </svg>
                                </span>
                                &nbsp;
                                &nbsp;
                                <b className='inline cmd:hidden font-supera600 text-[14px] text-[#FC6602] uppercase'> Realty </b>&nbsp;<b className='inline cmd:hidden text-[#1EC8EC] uppercase'> Nivesh </b>
                            </div>
                            <h6 className='font-supera500 text-[12px] cxs:text-[14px] lg:text-[16px] xl:text-[18px] flex'>
                                <b className='hidden cmd:inline text-[#FC6602] uppercase'> Realty </b>&nbsp;<b className='hidden cmd:inline text-[#1EC8EC] uppercase'> Nivesh :&nbsp;</b>
                                <p className='font-supera500 text-white text-center cmd:text-left'>Showroom No. 12 level 2, Uptown Insignia PR-7 Airport Road, Zirakpur, Punjab</p>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className='flex px-4 cxs:px-[20px] xl:px-[60px] flex-col sm:flex-row justify-center sm:justify-between gap-1 sm:gap-0 py-[14px] bg-[#F1F1F1]'>
                    <div className='text-[#000] flex gap-3 md:gap-5 lg:gap-10 justify-center sm:justify-normal'>
                        <Link href={`${process.env.basePath}/disclaimer`} className='font-supera600 text-[10px] cxs:text-[13px] sm:text-[10px] cmd:text-[13px] lg:text-[15px]'>Disclaimer</Link>
                        <Link href={`${process.env.basePath}/terms-and-conditions`} className='font-supera600 text-[10px] cxs:text-[13px] sm:text-[10px] cmd:text-[13px] lg:text-[15px]'>Term & conditions</Link>
                        <Link href={`${process.env.basePath}/privacy-policy`} className='font-supera600 text-[10px] cxs:text-[13px] sm:text-[10px] cmd:text-[13px] lg:text-[15px]'>Privacy policy</Link>
                    </div>
                    <div>
                        <p className='text-center sm:text-left font-lato text-[#081724] font-bold  text-[10px] cxs:text-[13px] sm:text-[10px] cmd:text-[13px] lg:text-[15px] capitalize'>© Copyright 2024 Sushma Belleza.  Realty nivesh All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

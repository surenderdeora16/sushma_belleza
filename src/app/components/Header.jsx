'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import ModalEnquiryForm from '@/app/components/common/ModalEnquiryForm';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import HeaderImg from '@/app/images/header-background-Img.webp'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  return (
    <section className="w-full h-screen relative">
      {isModalOpen && (
        <ModalEnquiryForm
          heading={'Talk to our Relationship Manager!'}
          formType={'enquiry'}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          eventSource="Top Section Enquire Now Button"
        />
      )}
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        speed={1500}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide
          style={{ height: '100vh', width: '100%', display: 'flex' }}
          className="flex justify-center items-center"
        >
          <div className="absolute w-full h-full">
            <div className="relative w-full h-full overflow-hidden">
              {/* Background video */}
              <Image
                src={HeaderImg}
                className="w-full h-full object-cover"
                alt="sushma belleza"
                fill
                aria-label="Sushma Belleza Header Image"
              />
              {/* Overlay content */}
              <div className="w-full h-full absolute top-0 left-0">
                <div className="relative w-full h-full bg-[#00000029]">
                  <div className="px-5 xs:px-10 cmd:px-14 lg:px-6 xl:px-16 3xl:px-4 2xl:pt-12 w-full h-full flex flex-col justify-center sm:justify-center items-start">
                    <div></div>
                    <div className=" 2xl:container mx-auto sm:mx-0 2xl:mx-auto">
                      {/* Heading */}
                      <h1 className="mx-auto sm:mx-0 text-center sm:text-left w-full bxxs:w-[300px] xs:w-full cxs:w-[400px] sm:w-[580px] md:w-[631px] lg:w-[800px] 2xl:max-w-[1000px] 2xl:w-full font-supera600 text-white text-[30px] xs:text-[35px] cxs:text-[40px] sm:text-[50px] md:text-[50px] xl:text-[60px] 3xl:text-[77px] uppercase leading-tight">
                        LUXURY BUILT
                        AROUND NATURE
                      </h1>
                      {/* Subheading */}
                      <h2 className="text-center sm:text-left font-supera500 text-[17px] xs:text-[19px] cxs:text-[22px] sm:text-[25px] text-white capitalize mt-[16px] xs:mt-[18px] md:mt-[22px]">
                        with Outdoor Living Balconies.
                      </h2>
                      {/* Location text */}
                      <h3 className="text-center sm:text-left font-supera500 text-[11px] xs:text-[13px] cxs:text-[15px] sm:text-[17px] text-white capitalize tracking-wide mt-[8px] md:mt-[16px]">
                        Sushma in Financial District, Zirakpur
                      </h3>
                      {/* Button */}
                      <div
                        className={`${process.env.basePath == ''
                          ? 'bg-backgroud-theme-local'
                          : 'bg-backgroud-theme-production'
                          } bg-right bg-cover mx-auto sm:mx-0 w-[150px] h-[34px] sm:w-[175px] sm:h-[44px] rounded-full text-[#000] mt-[25px] md:mt-[30px] duration-1000`}
                      >
                        <button
                          aria-label="Enquire now"
                          onClick={() => handleOpenModal()}
                          className="w-full h-full font-supera600 text-[15px] duration-200 uppercase"
                        >
                          Enquire now
                        </button>
                      </div>
                      {/* RERA info */}
                      <h4 className="text-center sm:text-left font-poppins font-medium text-[12px] sm:text-[13px] text-white tracking-wide mt-[20px] md:mt-[22px]">
                        Rera No - PBRERA-SAS79-PR0680
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Header;

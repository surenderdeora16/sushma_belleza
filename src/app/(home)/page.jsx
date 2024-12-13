'use client'
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Header from "@/app/components/Header";
import AboutUs from "@/app/components/AboutUs";
import Statics from "@/app/components/Statics";
import Brochure from "@/app/components/Brochure";
import OurProducts from "@/app/components/OurProducts";
const ProjectStatus = dynamic(() => import('@/app/components/ProjectStatus'), { ssr: false });
import BannerImg from "@/app/images/banner.webp"
import MobileBannerImg from "@/app/images/banner_mobile.webp"
import Testimonal from "@/app/components/Testimonal";
import Keyhighlights from "../components/Keyhighlights";
const EnquiryForm = dynamic(() => import('@/app/components/common/ModalEnquiryForm'), { ssr: false });

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [event, setEvent] = useState(false)

  const handleOpenModal = (event) => {
    setEvent(event)
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div>
      {isModalOpen && <EnquiryForm heading={'We Are Excited To Meet You'} formType={'enquiry'} isOpen={isModalOpen} onClose={handleCloseModal} eventSource={event} />}

      <Header />
      <AboutUs />
      <Statics />
      <Brochure />
      <Keyhighlights />
      <OurProducts />
      <ProjectStatus />
      <section className="w-full section-gap">
        <div onClick={() => { handleOpenModal("Banner") }} className="cursor-pointer hidden sm:block w-full mx-auto h-[500px] 3xl:h-[65vh] relative">
          <Image src={BannerImg} alt='banner' loading="lazy" className="object-cover object-left" fill />
        </div>
        <div onClick={() => { handleOpenModal("Banner (Mobile)") }} className="cursor-pointer block sm:hidden w-full  mx-auto">
          <Image
            src={MobileBannerImg}
            layout="responsive"
            width={100}
            height={75}
            alt='banner'
            loading="lazy"
            className="object-cover sm:object-contain object-center sm:object-center"
          />
        </div>
      </section>
      <Testimonal />
    </div>
  );
}
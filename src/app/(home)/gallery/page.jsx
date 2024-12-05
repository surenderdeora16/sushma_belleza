"use client";
import { useState, useEffect, useRef } from "react";
import SubHeader from "@/app/components/common/SubHeader";
import Heading from "@/app/components/common/Heading";
import dynamic from "next/dynamic";
import { useActivetab } from "@/app/context/ActiveTabContext";
const DynamicLightbox = dynamic(() => import("@/app/components/common/DynamicLightbox"), { ssr: false });
import { useParams } from "next/navigation";

import projectGalleryImg1 from "@/app/images/projectgalleryImg1.webp";
import projectGalleryImg2 from "@/app/images/projectgalleryImg2.webp";
import projectGalleryImg3 from "@/app/images/projectgalleryImg3.webp";
import projectGalleryImg4 from "@/app/images/projectgalleryImg4.webp";
import projectGalleryImg5 from "@/app/images/projectgalleryImg5.webp";
import projectGalleryImg6 from "@/app/images/projectgalleryImg6.webp";

import projectGalleryImg7 from "@/app/images/projectgalleryImg7.webp";
import projectGalleryImg8 from "@/app/images/projectgalleryImg8.webp";
import projectGalleryImg9 from "@/app/images/projectgalleryImg9.webp";
import projectGalleryImg10 from "@/app/images/projectgalleryImg10.webp";

import constructionImg1 from "@/app/images/constructionImg1.webp"
import constructionImg2 from "@/app/images/constructionImg2.webp"
import constructionImg3 from "@/app/images/constructionImg3.webp"

import SampleFlatImg1 from "@/app/images/sampleFlatImg1.webp"
import SampleFlatImg2 from "@/app/images/sampleFlatImg2.webp"
import SampleFlatImg3 from "@/app/images/sampleFlatImg3.webp"
import SampleFlatImg4 from "@/app/images/sampleFlatImg4.webp"
import SampleFlatImg5 from "@/app/images/sampleFlatImg5.webp"
import SampleFlatImg6 from "@/app/images/sampleFlatImg6.webp"
import SampleFlatImg7 from "@/app/images/sampleFlatImg7.webp"
import SampleFlatImg8 from "@/app/images/sampleFlatImg8.webp"
import SampleFlatImg9 from "@/app/images/sampleFlatImg9.webp"
import SampleFlatImg10 from "@/app/images/sampleFlatImg10.webp"


const desktopTabs = [
  "Project Walk Through",
  "Sample Flat",
  "Project Gallery",
  "Construction Updates",
];

const mobileTabs = ["Project Walk Through", "Sample Flat", "Project Gallery", "Construction Updates"];

const galleryImages = {
  "Project Walk Through": [
    {
      type: "video",
      src: "/videos/galleryVideo-background.mp4",
      poster: "/images/galleryvideothumbnail.png",
      alt: "Walkthrough Video",
      class: "col-span-12",
    },
  ],
  "Project Gallery": [
    { src: projectGalleryImg1, alt: "Sushma Belleza", class: "col-span-12 cxs:col-span-6 md:col-span-4", status: false },
    { src: projectGalleryImg2, alt: "Sushma Belleza", class: "col-span-12 cxs:col-span-6 md:col-span-4", status: true },
    { src: projectGalleryImg3, alt: "Sushma Belleza", class: "col-span-12 cxs:col-span-6 md:col-span-4", status: true },
    { src: projectGalleryImg4, alt: "Sushma Belleza", class: "col-span-12 cxs:col-span-6", status: true },
    { src: projectGalleryImg5, alt: "Sushma Belleza", class: "col-span-12 cxs:col-span-6", status: true },
    { src: projectGalleryImg6, alt: "Sushma Belleza", class: "col-span-12 cxs:col-span-6 md:col-span-4", status: true },
    { src: projectGalleryImg7, alt: "Sushma Belleza", class: "col-span-12 cxs:col-span-6 md:col-span-4", status: true },
    { src: projectGalleryImg8, alt: "Sushma Belleza", class: "col-span-12 cxs:col-span-6 md:col-span-4", status: true },
    { src: projectGalleryImg9, alt: "Sushma Belleza", class: "col-span-12 cxs:col-span-6", status: true },
    { src: projectGalleryImg10, alt: "Sushma Belleza", class: "col-span-12 cxs:col-span-6", status: true },
  ],
  "Sample Flat": [
    { src: SampleFlatImg1, title: "", alt: "Sushma Belleza image", class: "col-span-12 sm:col-span-6 md:col-span-4", status: true },
    { src: SampleFlatImg2, title: "", alt: "Sushma Belleza image", class: "col-span-12 sm:col-span-6 md:col-span-4", status: true },
    { src: SampleFlatImg3, title: "", alt: "Sushma Belleza image", class: "col-span-12 sm:col-span-6 md:col-span-4", status: true },
    { src: SampleFlatImg4, title: "", alt: "Sushma Belleza image", class: "col-span-12 sm:col-span-6", status: true },
    { src: SampleFlatImg5, title: "", alt: "Sushma Belleza image", class: "col-span-12 sm:col-span-6", status: true },
    { src: SampleFlatImg6, title: "", alt: "Sushma Belleza image", class: "col-span-12 sm:col-span-6 md:col-span-4", status: true },
    { src: SampleFlatImg7, title: "", alt: "Sushma Belleza image", class: "col-span-12 sm:col-span-6 md:col-span-4", status: true },
    { src: SampleFlatImg8, title: "", alt: "Sushma Belleza image", class: "col-span-12 sm:col-span-6 md:col-span-4", status: true },
    { src: SampleFlatImg9, title: "", alt: "Sushma Belleza image", class: "col-span-12 sm:col-span-6", status: true },
    { src: SampleFlatImg10, alt: "Sushma Belleza image", class: "col-span-12 cxs:col-span-6", status: true },
  ],
  "Construction Updates": [
    { src: constructionImg1, alt: "Sample Flat Image 6", class: "col-span-12 cxs:col-span-6 md:col-span-4", status: false },
    { src: constructionImg2, alt: "Sample Flat Image 7", class: "col-span-12 cxs:col-span-6 md:col-span-4", status: true },
    { src: constructionImg3, alt: "Sample Flat Image 8", class: "col-span-12 cxs:col-span-6 md:col-span-4", status: true },
    { src: projectGalleryImg4, alt: "Sample Flat Image 9", class: "col-span-12 cxs:col-span-6", status: true },
    { src: projectGalleryImg5, alt: "Sample Flat Image 10", class: "col-span-12 cxs:col-span-6", status: true },
    { src: projectGalleryImg6, alt: "Construction Update Image 1", class: "col-span-12 cxs:col-span-6 md:col-span-4", status: true },
    { src: projectGalleryImg7, alt: "Construction Update Image 2", class: "col-span-12 cxs:col-span-6 md:col-span-4", status: true },
    { src: projectGalleryImg8, alt: "Construction Update Image 3", class: "col-span-12 cxs:col-span-6 md:col-span-4", status: true },
    { src: projectGalleryImg9, alt: "Construction Update Image 4", class: "col-span-12 cxs:col-span-6", status: true },
    { src: projectGalleryImg10, alt: "Construction Update Image 5", class: "col-span-12 cxs:col-span-6", status: true },
  ],
};

export default function Page() {
  const params = useParams()
  const { activeSectionTab } = useActivetab()
  const [activeTab, setActiveTab] = useState(desktopTabs[0] || 'Gallery');
  const [mobileActiveTab, setMobileActiveTab] = useState(mobileTabs[0]);
  const [showAll, setShowAll] = useState({});
  const [clickedVideos, setClickedVideos] = useState({});
  const [isSticky, setIsSticky] = useState(false);
  const sectionRefs = useRef({});
  const videoRefs = useRef({});
  const stickyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        Object.entries(videoRefs.current).forEach(([key, videoRef]) => {
          if (videoRef && clickedVideos[key]) {
            const rect = videoRef.getBoundingClientRect();
            const visiblePercentage = (Math.min(rect?.bottom, window?.innerHeight) - Math.max(rect.top, 0)) / rect.height * 100;

            if (visiblePercentage >= 20) {
              videoRef.play();
            } else {
              videoRef.pause();
            }
          }
        });

        Object.keys(sectionRefs.current).forEach((tab) => {
          const section = sectionRefs.current[tab];

          if (window?.scrollY < 20) {
            setMobileActiveTab('Project Walk Through');
          }
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveTab(tab);
              setMobileActiveTab(tab == 'Project Walk Through' ? mobileTabs[1] : tab);
            }
          }
        });
      }
    };

    window?.addEventListener("scroll", handleScroll);
    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, [clickedVideos, params]);

  const handleVideoClick = (key) => {
    setClickedVideos(prev => ({ ...prev, [key]: true }));
    const video = videoRefs.current[key];
    if (video) {
      video.play();
    }
  };

  const toggleShowAll = (tab) => {
    setShowAll((prev) => ({ ...prev, [tab]: !prev[tab] }));
  };


  useEffect(() => {
    if (typeof window !== "undefined") {
      if (activeSectionTab || window?.location?.hash) {
        if (activeSectionTab == 'project-walk-through') {
          setActiveTab('Project Walk Through');
          handleScrollToSection('Project Walk Through');

        } else if (activeSectionTab == 'sample-flat') {
          setActiveTab('Sample Flat');
          handleScrollToSection('Sample Flat');

        } else if (activeSectionTab == 'project-gallery') {
          setActiveTab('Project Gallery');
          handleScrollToSection('Project Gallery');

        } else if (activeSectionTab == 'construction-updates') {
          setActiveTab('Construction Updates');
          handleScrollToSection('Construction Updates');

        }
      }
    }
  }, [activeSectionTab, params]);

  const handleScrollToSection = (tab) => {
    if (typeof window !== "undefined") {
      if (tab == "Project Walk Through") {
        setMobileActiveTab("Project Walk Through");
        setActiveTab(mobileTabs[0]);

        window?.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        sectionRefs.current[tab]?.scrollIntoView({ behavior: "smooth" });
        setActiveTab(tab);
        setMobileActiveTab(tab);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 1, rootMargin: "-50px 0px 0px 0px" }
    );

    if (stickyRef.current) {
      observer.observe(stickyRef.current);
    }

    return () => {
      if (stickyRef.current) {
        observer.unobserve(stickyRef.current);
      }
    };
  }, []);

  const galleryImageArray = galleryImages[activeTab]?.map((item) => item.src) || [];
  const filteredTabs = isSticky ? mobileTabs : mobileTabs.filter(tab => tab !== "Project Walk Through");

  return (
    <div>
      <SubHeader />

      <div id={activeSectionTab || 'project-walk-through'} className="section-gap scroll-mt-[140px]">
        <Heading
          heading={typeof window !== 'undefined' && window.innerWidth >= 640 ? activeTab : 'Gallery'}
          subHeading={
            "Explore Sushma Belleza mohali  Project gallery & Construction Updates."
          }
          headingColor={"#0A1325"}
          subHeadingColor={"#5A5454"}
          subHeadingClass={"font-supera600"}
        />
      </div>

      <section className="hidden sm:block w-full mt-7 md:mt-10">
        <div className="w-[95%] md:w-[95%] cmd:w-[88%] 3xl:container lg:mx-auto mx-auto grid grid-cols-12 gap-3">
          {galleryImages[activeTab]?.map((item, index) => (
            <div
              key={index}
              className={`${item?.class} ${item?.type === "video" ? 'w-full h-[70vh] 3xl:h-[80vh]' : 'h-[200px] lg:h-[250px] xl:h-[300px]'} w-full overflow-hidden relative`}
            >
              {item?.type === "video" ? (
                <div className="relative w-full h-full">
                  <video
                    ref={(el) => videoRefs.current[`desktop-${index}`] = el}
                    src={item?.src}
                    poster={item?.poster}
                    loop
                    muted
                    controls
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                    onClick={() => handleVideoClick(`desktop-${index}`)}
                  >
                    Your browser does not support the video tag.
                  </video>
                  {!clickedVideos[`desktop-${index}`] && (
                    <div
                      className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center cursor-pointer"
                      onClick={() => handleVideoClick(`desktop-${index}`)}
                    >
                    </div>
                  )}
                </div>
              ) : (
                <DynamicLightbox
                  images={item?.src?.src}
                  sliderimages={galleryImageArray}
                  idx={index}
                  multipleimg={true}
                  title={item?.alt}
                  zoom={true}
                  keyboardNavigation={true}
                  className={"object-cover hover:scale-125 overflow-hidden duration-1000"}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="project-walk-through" className="block sm:hidden">
        {mobileTabs.map((tab) => (
          tab == "Project Walk Through" && (
            <div key={tab} className={`relative w-full mb-1 flex items-center transition-all duration-300 `}>
              <div className="relative">
                <svg
                  className="w-[300px] bxxs:w-auto bxxs:h-[40px] xs:h-[40px] object-fill"
                  viewBox="0 0 500 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H500L450 55H0V0Z"
                    fill={`${mobileActiveTab == 'Project Walk Through' ? '#EFA056' : '#949494'}`}
                  />
                  <path
                    d="M0 0H479.167L431.25 55H0V0Z"
                    fill={`${mobileActiveTab == 'Project Walk Through' ? '#DB8B3F' : '#313131'}`}
                  />
                  <path
                    d="M0 0H460.069L414.062 55H0V0Z"
                    fill={`${mobileActiveTab == 'Project Walk Through' ? '#BE7530' : '#0E0E0E'}`}
                  />
                </svg>
                <h4 className="w-full h-full absolute top-0 tracking-wider font-supera600 text-base xs:text-lg capitalize text-white flex justify-left items-center pl-[10%]">Project Walk Through</h4>
              </div>
            </div>
          )
        ))}
        <div className="mt-5 mx-4  h-auto ">
          {galleryImages['Project Walk Through']?.map((item, index) => (
            <div key={index} className={item?.class}>
              {item.type === "video" ? (
                <div className="relative w-full h-full">
                  <video
                    ref={(el) => videoRefs.current[`mobile-${index}`] = el}
                    src={item?.src}
                    poster={item?.poster}
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                    onClick={() => handleVideoClick(`mobile-${index}`)}
                  >
                    Your browser does not support the video tag.
                  </video>
                  {!clickedVideos[`mobile-${index}`] && (
                    <div
                      className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center cursor-pointer"
                      onClick={() => handleVideoClick(`mobile-${index}`)}
                    >

                    </div>
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div style={{ zIndex: '600' }} ref={stickyRef} className="sticky top-0  pt-2 pb-4 mt-4 bg-white text-center shadow-md transition-all duration-300 ease-in-out">
          <div
            id="gallery-tab"
            className="flex flex-col items-start tracking-wide max-w-[265px] bxxs:max-w-[280px] xs:max-w-[300px] cxs:max-w-[400px] sm:max-w-[400px]"
          >
            {filteredTabs.map(tab => (
              <div
                key={tab}
                className={`relative w-full mb-1 flex items-center transition-all duration-300`}
              >
                <div onClick={() => handleScrollToSection(tab)} className="relative">
                  <svg
                    className="w-[300px] bxxs:w-auto bxxs:h-[40px] xs:h-[40px] object-fill"
                    viewBox="0 0 500 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0H500L450 55H0V0Z"
                      fill={`${mobileActiveTab === tab ? '#EFA056' : '#949494'}`}
                    />
                    <path
                      d="M0 0H479.167L431.25 55H0V0Z"
                      fill={`${mobileActiveTab === tab ? '#DB8B3F' : '#313131'}`}
                    />
                    <path
                      d="M0 0H460.069L414.062 55H0V0Z"
                      fill={`${mobileActiveTab === tab ? '#BE7530' : '#0E0E0E'}`}
                    />
                  </svg>
                  <h4 className="w-full h-full absolute top-0 tracking-wider font-supera600 text-base xs:text-lg capitalize text-white flex justify-left items-center pl-[10%]">
                    {tab}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>;

        <div className=" mx-2 grid grid-cols-1  gap-3">
          {mobileTabs.map((tab) => (
            <div
              id={tab.replace(/\s+/g, "-").toLowerCase()}
              key={tab}
              ref={(el) => (sectionRefs.current[tab] = el)}
              className=""
            >
              <div className="grid grid-cols-1 cxs:grid-cols-2 gap-3 ">
                {(showAll[tab]
                  ? galleryImages[tab]
                  : galleryImages[tab].filter((img) => img?.status)
                ).map((img, idx) => (
                  <div
                    key={idx}
                    className="h-[200px] lg:h-[250px] xl:h-[300px] relative overflow-hidden"
                  >
                    <DynamicLightbox
                      images={img?.src?.src}
                      sliderimages={galleryImages[tab]?.map((item) => item?.src) || []}
                      idx={idx}
                      multipleimg={true}
                      title={img?.alt}
                      zoom={true}
                      keyboardNavigation={true}
                      className={"object-cover hover:scale-125 overflow-hidden duration-1000"}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <button
                  aria-label="show-more"
                  onClick={() => toggleShowAll(tab)}
                  className="mt-4 text-blue-500 underline justify-center"
                >
                  {galleryImages["Project Gallery"]?.status && (showAll[tab] ? "Show Less" : "Show More")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
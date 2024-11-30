import { useState, useEffect, forwardRef } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import Image from "next/image"; // Assuming you're using Next.js's Image component
import { FaDownload, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons for navigation
import { createPortal } from "react-dom"; // To inject React component into DOM
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const DynamicLightbox = forwardRef(
  (
    {
      images = [],
      sliderimages = [],
      multipleimg = false,
      title = "Image",
      zoom = true,
      keyboardNavigation = true,
      className = "",
      idx = 0,
      alt = "Image",
      fill = true,
      onContextMenu,
      slider = false
    },
    ref
  ) => {

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxHeader, setLightboxHeader] = useState(null);
    const [clickedCanvasImage, setClickedCanvasImage] = useState(false);

    const handleDownload = () => {
      const imageSrc = images[currentIndex]?.src || images[currentIndex] || sliderimages[currentIndex]?.src || sliderimages[currentIndex]
      const link = document.createElement("a");
      link.href = imageSrc;
      link.download = `the_medallion_${title}`;
      link.click();
    };

    const currentIndexSet = multipleimg ? sliderimages : images;
    const handleNext = (e) => {
      e.stopPropagation(); // Prevent event bubbling
      setCurrentIndex((prevIndex) => (prevIndex + 1) % currentIndexSet.length);
    };

    const handlePrev = (e) => {
      e.stopPropagation(); // Prevent event bubbling
      setCurrentIndex((prevIndex) => (prevIndex - 1 + currentIndexSet.length) % currentIndexSet.length);
    };

    useEffect(() => {
      if (isOpen) {
        const lbHeader = document.querySelector(".lb-header");
        if (lbHeader) {
          setLightboxHeader(lbHeader);
        }
      }
    }, [isOpen]);

    useEffect(() => {
      const imageElement = document.querySelector(".lb-canvas img");
      const resetIcon = document.querySelector(".lb-icon-reset");
      const isZoomedIn = imageElement?.style.transform && imageElement.style.transform.includes("scale");

      if (isOpen && imageElement && !resetIcon && !isZoomedIn) {
        imageElement.addEventListener("click", handleNext);
      }

      return () => {
        if (imageElement) {
          imageElement.removeEventListener("click", handleNext);
        }
      };
    }, [isOpen, currentIndexSet.length]);

    return (
      <>
        {!slider && (
          <Image
            ref={ref}
            src={Array.isArray(images) ? images[0] : images}
            onClick={() => {
              setIsOpen(true);
              setCurrentIndex(idx || 0);
            }}
            quality={100}
            onContextMenu={onContextMenu}
            fill={fill}
            className={`${className} cursor-pointer object-contain`}
            alt={alt}
          />
        )}
        {slider && (
          <Swiper
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper w-full h-full"
          >
            {images?.map((img, index) => {
              return (
                <SwiperSlide key={index} className=" w-full h-full relative ">
                  <Image
                    ref={ref}
                    src={img || img?.src}
                    onClick={() => {
                      setIsOpen(true);
                      setCurrentIndex(index);
                    }}
                    quality={100}
                    onContextMenu={onContextMenu}
                    fill
                    className={`${className} p-4 cursor-pointer object-contain`}
                    alt={alt}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        )}
        {isOpen && (
          <>
            <Dialog style={{zIndex: '700'}} open={isOpen} onClose={() => setIsOpen(false)} className="relative">
              <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                  <div className="fixed top-0 left-0 inset-0 z-[1000] bg-[#00000016] bg-opacity-80 flex items-center justify-center" style={{ overflow: "hidden" }}>

                    {(sliderimages.length > 1) ? (
                      <Lightbox
                        image={sliderimages[currentIndex]?.src || sliderimages[currentIndex]}
                        title={title}
                        zoom={zoom}
                        keyboardNavigation={keyboardNavigation}
                        onClose={() => setIsOpen(false)}
                      />
                    ) : (
                      <Lightbox
                        image={images[currentIndex]?.src || images[currentIndex]}
                        title={title}
                        zoom={zoom}
                        keyboardNavigation={keyboardNavigation}
                        onClose={() => setIsOpen(false)}
                      />
                    )}


                    {lightboxHeader && (
                      <>
                        {createPortal(
                          <div
                            className="lb-button download-btn flex justify-center items-center z-50"
                            title="Download"
                            onClick={handleDownload}
                            style={{ cursor: "pointer", padding: "10px 10px" }}
                          >
                            <FaDownload className="text-white" />
                          </div>,
                          lightboxHeader
                        )}

                        {(sliderimages.length > 1) ? (
                          <>
                            {Array.isArray(sliderimages) && sliderimages?.length > 1 && (
                              createPortal(
                                <div className="fixed top-[50%] translate-y-[-50%] left-0 inset-0 flex items-center w-full h-28">
                                  <div
                                    className="lb-button flex justify-center items-center absolute top-[50%] left-0 transform -translate-y-1/2"
                                    title="Previous"
                                    onClick={handlePrev}
                                    style={{ cursor: "pointer", padding: "10px 10px" }}
                                  >
                                    <FaArrowLeft className="text-white" />
                                  </div>
                                  <div
                                    className="lb-button flex justify-center items-center absolute top-[50%] right-0 transform -translate-y-1/2"
                                    title="Next"
                                    onClick={handleNext}
                                    style={{ cursor: "pointer", padding: "10px 10px" }}
                                  >
                                    <FaArrowRight className="text-white" />
                                  </div>
                                </div>,
                                lightboxHeader
                              )
                            )}
                          </>
                        ) : (
                          <>
                            {Array.isArray(images) && images?.length > 1 && (
                              createPortal(
                                <div className="fixed top-[50%] translate-y-[-50%] left-0 inset-0 flex items-center w-full h-28">
                                  <div
                                    className="lb-button flex justify-center items-center absolute top-[50%] left-0 transform -translate-y-1/2"
                                    title="Previous"
                                    onClick={handlePrev}
                                    style={{ cursor: "pointer", padding: "10px 10px" }}
                                  >
                                    <FaArrowLeft className="text-white" />
                                  </div>
                                  <div
                                    className="lb-button flex justify-center items-center absolute top-[50%] right-0 transform -translate-y-1/2"
                                    title="Next"
                                    onClick={handleNext}
                                    style={{ cursor: "pointer", padding: "10px 10px" }}
                                  >
                                    <FaArrowRight className="text-white" />
                                  </div>
                                </div>,
                                lightboxHeader
                              )
                            )}
                          </>
                        )}
                        {Array.isArray(images || sliderimages) && images.length > 1 || sliderimages.length > 1 && (
                          createPortal(
                            <div className="fixed top-[50%] translate-y-[-50%] left-0 inset-0 flex items-center w-full h-28">
                              <div
                                className="lb-button flex justify-center items-center absolute top-[50%] left-0 transform -translate-y-1/2"
                                title="Previous"
                                onClick={handlePrev}
                                style={{ cursor: "pointer", padding: "10px 10px" }}
                              >
                                <FaArrowLeft className="text-white" />
                              </div>
                              <div
                                className="lb-button flex justify-center items-center absolute top-[50%] right-0 transform -translate-y-1/2"
                                title="Next"
                                onClick={handleNext}
                                style={{ cursor: "pointer", padding: "10px 10px" }}
                              >
                                <FaArrowRight className="text-white" />
                              </div>
                            </div>,
                            lightboxHeader
                          )
                        )}
                      </>
                    )}
                  </div>
                </DialogPanel>
              </div>
            </Dialog>
          </>
        )
        }
      </>
    );
  }
);

DynamicLightbox.displayName = "DynamicLightbox";

export default DynamicLightbox;

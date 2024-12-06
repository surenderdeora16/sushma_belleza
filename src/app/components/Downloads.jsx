'use client'
import React, { useState } from 'react'
import DownloadImg from '@/app/images/download-section-smallscreen.webp'
import Image from 'next/image'
import { toast } from 'react-toastify';
import ModalEnquiryForm from '@/app/components/common/ModalEnquiryForm'

const Downloads = () => {
    const [pdfdata, setPdfData] = useState('')
    const [downFunction, setDownFunction] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [event, setEvent] = useState('Download Section')
    const [FormHeading, setFormHeading] = useState('We Are Excited To Meet You')
    const [formUnlock, setFormUnlock] = useState(false)

    const handleOpenModal = (pdf, func) => {
        if (formUnlock) {
            if (func == 'single') {
                return handleDownload(pdf)
            }
            if (func == 'multiple') {
                return handleDownloadMultiple()
            }
            return
        }

        setPdfData(pdf)
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset'; // Enable scrolling
    };


    const handleDownload = async (fileUrl) => {
        setFormUnlock(true);

        const downloadFile = async (url) => {
            if (!url) {
                throw new Error('File URL is undefined');
            }

            const response = await fetch(url);
            const blob = await response?.blob();

            // Extract the file name from the URL or fallback to a default name
            let fileName = url?.split('/').pop();
            if (!fileName || fileName === '') {
                const fileType = blob.type.split('/')[1]; // Extract type from blob (e.g., pdf, jpeg, png)
                fileName = `downloaded-file.${fileType || 'unknown'}`; // Default file name
            }

            const link = document.createElement('a');
            link.href = window?.URL?.createObjectURL(blob); // Use blob directly
            link.setAttribute('download', fileName); // Set the file name to the extracted or default name
            document.body.appendChild(link);
            link.click();
            link.remove();
        };

        try {
            await downloadFile(fileUrl);
            toast.success('File downloaded successfully!');
        } catch (error) {
            toast.error('Error downloading file!');
        }
    };




    const handleDownloadMultiple = async () => {
        setFormUnlock(true)

        const downloadFile = async (url, fileName) => {
            const response = await fetch(url);
            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = window?.URL?.createObjectURL(new Blob([blob]));
            link.setAttribute('download', fileName); // Set the file name
            document.body.appendChild(link);
            link.click();
            link.remove();
        };

        try {

            const pdf1Url = `${process.env.basePath}/download/Mont Elementa_6th.jpeg`; // Replace with actual URL
            const pdf2Url = `${process.env.basePath}/download/SUSHMA_Elementa Tower 1,2,3,4,5,6&7_6th.jpeg`; // Replace with actual URL


            await Promise.all([
                downloadFile(pdf1Url, 'Mont Elementa_6th.jpeg'),
                downloadFile(pdf2Url, 'SUSHMA_Elementa Tower 1,2,3,4,5,6&7_6th.jpeg'),
            ]);

            toast.success('Files downloaded successfully!');
        } catch (error) {
            toast.error('Error downloading files!');
        }
    };

    return (
        <section id="download" className='section-gap scroll-mt-24 h-[450px] xs:h-[500px] cxs:h-[550px] md:h-[610px] cmd:h-[680px] lg:h-auto'>
            {isModalOpen && <ModalEnquiryForm formType={'enquiry'} heading={FormHeading} isOpen={isModalOpen} onClose={handleCloseModal} onFormSubmit={!formUnlock ? downFunction == 'single' ? handleDownload : handleDownloadMultiple : ''} funcParameter={pdfdata} eventSource={event} />}
            <div className={` w-full relative h-[330px] xs:h-[350px] cxs:h-[380px] cmd:h-[450px] lg:h-[570px] ${process.env.basePath == '' ? 'bg-download-sectionLeftImg-local' : 'bg-download-sectionLeftImg-production'} bg-no-repeat bg-left lg:bg-right-top bg-cover lg:bg-contain lg:bg-[#090909]`}>
                <div className={`w-full h-full ${process.env.basePath == '' ? 'lg:bg-download-section-local' : 'lg:bg-download-section-production'} bg-no-repeat bg-right bg-cover sm:bg-[length:80%_100%] md:bg-[length:70%_100%] lg:bg-[length:70%_100%] xl:bg-[length:70%_100%] 2xl:bg-[length:70%_100%] 3xl:bg-contain`}>
                    <div className='hidden lg:block w-full h-full bg-[#00000096] sm:bg-transparent absolute top-0 left-0 z-20 sm:z-0'></div>
                    <div className='2xl:container h-full pl-0 lg:pl-10 3xl:pl-0 mx-auto flex flex-col gap-y-10 lg:gap-y-0 justify-start lg:justify-evenly relative sm:z-10'>
                        <div className=' sm:px-0 relative z-30'>
                            <h2 className={`mt-6 lg:mt-10 uppercase font-supera600 sm:font-supera700 text-[22px] sm:text-[30px] cmd:text-[35px] text-center lg:text-left text-[#FFFFFF]`}>
                                downloads
                            </h2>
                            {/* <p className={`lg:mt-2 px-2 lg:px-0 mx-auto lg:mx-0 max-w-[600px] lg:max-w-[400px] tracking-wide cxs:tracking-normal text-[12px]  sm:text-[15px] cmd:text-[18px] leading-[14px] xs:leading-[18px] sm:leading-[20px] cmd:leading-[22px] text-center lg:text-left text-[#FFFFFF]`}>
                            Within the premises of the Sushma Township  are reputed Schools.
                        </p> */}
                        </div>
                        <div className='lg:-mt-10 flex flex-row lg:flex-col justify-center lg:justify-start gap-y-[36px] relative z-30'>
                            <button aria-label="Brochure" onClick={() => { setFormHeading('Download Brochure'), handleOpenModal(`${process.env.basePath}/download/BROCHURE.pdf`, 'single'), setDownFunction('single'), setEvent('Download Section Brochure Button') }} className={`w-[245px] lg:h-[68px] group flex flex-col lg:flex-row justify-evenly items-center gap-y-2 lg:gap-y-0 gap-x-2.5 lg:border-[1px] border-[#FFFFFF] rounded-[13px]`}>
                                <div className='size-[70px] sm:size-[80px] rounded-full lg:rounded-none lg:size-auto border-[1.08px] border-[#FFFFFF] lg:border-none flex justify-center items-center lg:block'>
                                    <svg width="38" height="35" className='stroke-[#fff] lg:group-hover:stroke-[#fff]' viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30.2096 7.56543H31.0669C33.4912 7.56543 34.7034 7.56543 35.4561 8.31051C36.2104 9.0522 36.2105 10.2494 36.2105 12.6455V24.499C36.2105 26.8934 36.2104 28.0906 35.4561 28.834C34.7034 29.5791 33.4912 29.5791 31.0669 29.5791H30.2096M7.92076 7.56543H7.0635C4.63916 7.56543 3.42699 7.56543 2.67431 8.31051C1.91992 9.0522 1.91992 10.2494 1.91992 12.6455V24.499C1.91992 26.8934 1.91992 28.0906 2.67431 28.834C3.42528 29.5791 4.63745 29.5791 7.0635 29.5791H7.92076M23.3515 10.9521H14.7789M23.3515 17.7256H14.7789M23.3515 24.499H14.7789M30.2096 26.1924V9.25879C30.2096 6.06511 30.2096 4.46997 29.2049 3.47766C28.2002 2.48535 26.5851 2.48535 23.3515 2.48535H14.7789C11.5453 2.48535 9.93019 2.48535 8.92548 3.47766C7.92076 4.46997 7.92076 6.06511 7.92076 9.25879V26.1924C7.92076 29.3861 7.92076 30.9812 8.92548 31.9735C9.93019 32.9658 11.5453 32.9658 14.7789 32.9658H23.3515C26.5851 32.9658 28.2002 32.9658 29.2049 31.9735C30.2096 30.9812 30.2096 29.3861 30.2096 26.1924Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className='font-supera500 sm:font-supera600 capitalize text-left text-[14px] xs:text-[18px] sm:text-[20px] md:text-[22px] text-[#FFFFFF] lg:group-hover:text-[#fff] tracking-wide'>
                                    Brochure
                                </div>
                            </button>
                            <button aria-label="Site Plan" onClick={() => { setFormHeading('Download Site Plans'), handleOpenModal(`${process.env.basePath}/download/SITE_PLAN.pdf`, 'single'), setDownFunction('single'), setEvent('Download Section Master Plans Button') }} className={`w-[245px] lg:h-[68px] group flex flex-col lg:flex-row justify-evenly items-center gap-y-2 lg:gap-y-0 gap-x-2.5 lg:border-[1px] border-[#FFFFFF] rounded-[13px]`}>
                                <div className='size-[70px] sm:size-[80px] rounded-full lg:rounded-none lg:size-auto border-[1.08px] border-[#FFFFFF] lg:border-none flex justify-center items-center lg:block'>
                                    <svg width="36" height="36" viewBox="0 0 36 36" className='stroke-[#fff] lg:group-hover:stroke-[#fff] fill-none' xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.1875 11.7057L27.8932 6.85284L18.1875 2V18.1761" className='stroke-[#fff] lg:group-hover:stroke-[#fff]' strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.7169 18.1603L2.82005 23.2397C2.5711 23.3807 2.36403 23.5853 2.21997 23.8326C2.0759 24.0798 2 24.3608 2 24.647C2 24.9331 2.0759 25.2141 2.21997 25.4614C2.36403 25.7086 2.5711 25.9132 2.82005 26.0543L16.5698 33.9159C17.0616 34.1999 17.6195 34.3493 18.1874 34.3493C18.7553 34.3493 19.3132 34.1999 19.805 33.9159L33.5547 26.0543C33.8037 25.9132 34.0107 25.7086 34.1548 25.4614C34.2989 25.2141 34.3748 24.9331 34.3748 24.647C34.3748 24.3608 34.2989 24.0798 34.1548 23.8326C34.0107 23.5853 33.8037 23.3807 33.5547 23.2397L24.6578 18.1765M9.27433 19.5515L27.1004 29.7425M27.1004 19.5515L9.29051 29.7425" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className='font-supera500 sm:font-supera600 capitalize text-left text-[14px] xs:text-[18px] sm:text-[20px] md:text-[22px] text-[#FFFFFF] lg:group-hover:text-[#fff] tracking-wide'>
                                    Site Plans
                                </div>
                            </button>
                            <button aria-label="Price list" onClick={() => { setFormHeading('Download Price List'), handleOpenModal(`${process.env.basePath}/download/PRICE_LIST.png`, 'single'), setDownFunction('single').setEvent('Download Section Price List Button') }} className={`w-[245px] lg:h-[68px] group flex flex-col lg:flex-row justify-evenly items-center gap-y-2 lg:gap-y-0 gap-x-2.5 lg:border-[1px] border-[#FFFFFF] rounded-[13px]`}>
                                <div className='size-[70px] sm:size-[80px] rounded-full lg:rounded-none lg:size-auto border-[1.08px] border-[#FFFFFF] lg:border-none flex justify-center items-center lg:block'>
                                    <svg width="20" height="28" className='fill-[#fff] lg:group-hover:fill-[#fff] ' xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.2679 4.28369C19.677 4.28369 20.0088 3.95194 20.0088 3.54276V1.07297C20.0088 0.663785 19.677 0.332031 19.2679 0.332031H0.991425C0.582243 0.332031 0.250488 0.663785 0.250488 1.07297V3.83592C0.250488 4.2451 0.582243 4.57686 0.991425 4.57686H6.25701C7.94314 4.57686 9.23687 5.19171 10.0216 6.25952H0.991425C0.582243 6.25952 0.250488 6.59128 0.250488 7.00046V9.47025C0.250488 9.87943 0.582243 10.2112 0.991425 10.2112H10.7938C10.41 12.4393 8.75866 13.8314 6.17798 13.8314H0.991425C0.582243 13.8314 0.250488 14.1632 0.250488 14.5723V17.8455C0.250488 18.0523 0.336931 18.2497 0.488885 18.39L10.68 27.7972C10.8168 27.9235 10.9963 27.9937 11.1825 27.9937H16.2803C16.9548 27.9937 17.2784 27.1658 16.7828 26.7083L7.46665 18.1087C12.1901 17.9642 15.5641 14.8118 16.0071 10.2112H19.2679C19.677 10.2112 20.0088 9.87943 20.0088 9.47025V7.00046C20.0088 6.59128 19.677 6.25952 19.2679 6.25952H15.6441C15.4288 5.54693 15.1328 4.88595 14.7641 4.28369H19.2679Z" />
                                    </svg>
                                </div>
                                <div className='font-supera500 sm:font-supera600 capitalize text-left text-[14px] xs:text-[18px] sm:text-[20px] md:text-[22px] text-[#FFFFFF] lg:group-hover:text-[#fff] tracking-wide'>
                                    Price list
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='animate-moveUpDown block lg:hidden w-[90%] sm:w-[70%] mx-auto h-[230px] bxxs:h-[250px] cxs:h-[300px] md:h-[400px] relative z-40 translate-y-[-35%] rounded-xl overflow-hidden'>
                        <Image src={DownloadImg} fill className='object-contain' alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Downloads

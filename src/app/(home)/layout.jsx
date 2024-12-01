'use client'
import dynamic from "next/dynamic";
import React, { useCallback, useEffect } from "react";
import Navbar from "@/app/components/common/Navbar";
import CallToAction from "@/app/components/common/CallToAction";
import Faqs from "@/app/components/common/Faqs";
import GetInTouch from "@/app/components/common/GetInTouch";
import GoogleMap from "@/app/components/GoogleMap";
import ContactInfo from "@/app/components/common/ContactInfo";
import Downloads from "@/app/components/Downloads";
import Footer from "@/app/components/common/Footer";
import { usePathname } from "next/navigation";
import EnquiryForm from "@/app/components/common/EnquiryForm";
import HomeLoanFacility from "@/app/components/HomeLoanFacility";
import AvatarModel from "@/app/components/common/AvatarModel";
import AppBar from "@/app/components/common/AppBar";
const Maps = dynamic(() => import('@/app/components/Maps'), { ssr: false });

export default function RootLayout({ children }) {
    const pathName = usePathname()
    const tabsConfig = [
        {
            name: 'Near By',
            content: {
                type: 'iframe',
                content: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.5133579470303!2d76.8070682793457!3d30.619486707474756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe9ec15cbfd03%3A0x4cb1dcaa577519c8!2sRealty%20Nivesh!5e0!3m2!1sen!2sin!4v1732694454014!5m2!1sen!2sin'
            }
        },
        {
            name: 'Google Map',
            content: {
                type: 'map',
                content: <Maps />
            }
        },
    ]

    return (
        <div>
            <Navbar />
            {children}
            <div className="hidden sm:block">
                <CallToAction />
            </div>
            {pathName == '/price' && (
                <HomeLoanFacility />
            )}
            <Faqs />
            {(pathName == '/') ? (
                <GetInTouch />
            ) : (
                <EnquiryForm eventSource={`${pathName?.replace('/', '')} Page`} />
            )}
            <GoogleMap
                className={'section-gap-inner w-full h-[60vh]'}
                tabs={tabsConfig}
            />   
            <ContactInfo />
            <Downloads />
            <AvatarModel />
            <AppBar />
            <Footer />
        </div>
    );
}

'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function RootLayout({ children }) {
    const pathName = usePathname();

    const pathSegments = pathName.split('/').filter(Boolean);

    const basePath = process.env.basePath || ''; 

    const generateBreadcrumb = () => {
        let breadcrumb = [
            <li key="home">
                <Link href={`${basePath}/`} className="hover:underline">
                    Home
                </Link>
            </li>
        ];

        pathSegments.forEach((segment, index) => {
            if (basePath && index === 0 && segment === basePath.replace('/', '')) {
                return;
            }

            const fullPath = `/${pathSegments.slice(0, index + 1).join('/')}`;

            breadcrumb.push(
                <li key={fullPath}>/</li>,
                <li key={segment}>
                    <Link href={`${fullPath}`} className="hover:underline capitalize">
                        {segment.replace(/-/g, ' ')}
                    </Link>
                </li>
            );
        });

        return breadcrumb;
    };

    return (
        <React.Fragment>
            <header className="bg-[#000] text-white h-[30vh] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="mx-3 py-2 text-[22px] bxxs:text-2xl xs:text-3xl cxs:text-4xl md:text-5xl lg:text-6xl font-supera600 uppercase tracking-wider">
                        {
                            (pathName.includes('/privacy-policy')) ? 'Privacy Policy' :
                                (pathName.includes('/terms-and-conditions')) ? 'Terms and Conditions' :
                                    (pathName.includes('/disclaimer')) ? 'Disclaimer' : 'Policy'
                        }
                    </h1>
                    <nav className="mt-4">
                        <ol className="flex justify-center space-x-1 xs:space-x-2 text-[9px] bxxs:text-[10px] cxs:text-xs md:text-sm lg:text-base font-poppins">
                            {generateBreadcrumb()}
                        </ol>
                    </nav>
                </div>
            </header>
            {children}

            <footer className="bg-[#000] text-white py-4">
                <p className="text-center font-lato text-[#c8c8c8] tracking-wide font-bold text-[10px] cxs:text-[13px] sm:text-[10px] cmd:text-[13px] lg:text-[15px] capitalize">
                    © Copyright 2024 Sushma Belleza. Realty Nivesh. All Rights Reserved.
                </p>
            </footer>
        </React.Fragment>
    );
}

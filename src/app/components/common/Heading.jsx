import React from 'react'

const Heading = ({ heading, subHeading, headingColor, subHeadingColor, subHeadingClass, headingClass, textAlign }) => {
    return (
        <div className='px-5 sm:px-5 mb-[20px] xl:container mx-auto'>
            <h2 style={{ color: `${headingColor}`, textAlign: `${textAlign}` }} className={`${headingClass} uppercase font-supera700 text-[24px] sm:text-[32px] cmd:text-[36px] text-center text-[#37493C]`}>{heading}</h2>
            <p style={{ color: `${subHeadingColor}`, textAlign: `${textAlign}` }} className={`${subHeadingClass} capitalize cmd:mt-1.5  max-w-full tracking-wide sm:tracking-normal text-[13px] cxs:text-sm sm:text-[15px] md:text-[16px] cmd:text-[18px] leading-[14px] xs:leading-[18px] sm:leading-[20px] cmd:leading-[22px] text-center text-[#5A5454]`}>{subHeading}</p>
        </div>
    )
}

export default Heading

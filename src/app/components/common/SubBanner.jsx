// import React from 'react'
// import subBanner from '../../../../public/images/subBanner.png'
// export const SubBanner = () => {
//   return (
//     // <div>
//     //   hgfghfhfgh
//     // </div>
//     <div className='relative h-screen flex justify-center items-center bg-cover bg-center' style={{backgroundImage:'url(../../../../public/images/subBanner.png)'}}>
// <h1 className=" absolute font-supera600 text-4xl md:text-6xl lg:text-8xl text-white text-center">LUXURY BUILT AROUND NATURE</h1>
//     </div>
//   )
// }

import React from 'react';
import subBanner from '../../../../public/images/subBanner.png';

export const SubBanner = () => {
  return (
    <div 
      className="relative h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${subBanner.src})` }}
    >
      <h1 
        className="absolute text-center text-white font-supera600 
                  text-[81.56px] leading-[106.55px] tracking-[8.04px] 
                  w-[663px] h-[222px] top-[262.47px] left-[422.49px] 
                  whitespace-nowrap"
      >
        LUXURY BUILT AROUND NATURE
      </h1>
    </div>
  );
};



import { usePathname } from 'next/navigation'
import React from 'react'

const SubHeader = () => {
  const pathName  = usePathname()

  return (
    <div className={`${['/amenities', '/location', '/gallery'].includes(pathName) ? 'mb-20' : 'mb-36 sm:mb-0'}`}>
      <div className={`hidden sm:block w-full h-[85vh] ${process.env.basePath == '' ? 'bg-subHeader-local' : 'bg-subHeader-production'} bg-cover bg-bottom bg-no-repeat `}>
        <div className='w-full h-full flex justify-center items-center relative bg-[linear-gradient(90.47deg,_rgba(0,_0,_0,_0)_-11.87%,_rgba(7,_7,_7,_0.5)_35.31%)]'>
          <div className='w-full h-[20%] absolute top-0 left-0 bg-[linear-gradient(180deg,_#00000080_14.24%,_#00000000_79.76%)]'></div>
          <h1 className='px-4 lg:px-0 font-supera600 text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl leading-tight tracking-[0.4px] uppercase text-center text-[#FFFFFF] w-full max-w-[720px]'>
            Live at the heart of all the action!
          </h1>
        </div>
      </div>
    </div>
  )
}

export default SubHeader

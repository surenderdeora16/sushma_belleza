import Image from "next/image"

const BrowseHomeCard = ({ image, size, sq_ft, type, color }) => {
    return (
        <div style={{ borderColor: `${color}` }} className="bg-white  sm:pr-2 py-4 sm:py-0.5 w-[150px] sm:w-[325px] flex flex-col sm:flex-row items-center  sm:border-l-[6px] sm:border-[1px] shadow-[0px_0px_4px_0px_#00000040] sm:shadow-none rounded-[7.15px]">
            <div className="w-[100px] h-[70px] sm:w-[80px] sm:h-[64px] relative">
                <Image src={image} fill className="object-contain " alt="apartmannt map" />
            </div>
            <div>
                <h6 className="text-center sm:text-left w-full mt-1.5 sm:mt-0 px-5 sm:px-0 font-lato font-semibold text-[12px] xs:text-[14px] sm:text-[16.73px] text-[#858585] ml-[1.5px] leading-snug "><span className="text-[#444342]">{size} </span>{sq_ft} <br className="inline sm:hidden" /> <p className="uppercase text-center sm:text-left"> {type}</p></h6>
            </div>
        </div>
    )
}

export default BrowseHomeCard;

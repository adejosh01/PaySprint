import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { AiOutlineArrowRight } from "react-icons/ai";

function ScrollButton() {
    return (
      <div className="hidden md:inline-flex justify-center items-center mt-2 ml-36 shadow-md border-[0.5px]">
        <button className="button flex justify-center items-center p-5 border-[1px] rounded-md w-[30px] h-6"><div> <ArrowLeftIcon className="h-6 w-6 text-[#272343] "/></div> </button>
        <button className="button flex justify-center items-center p-5 border-[1px] rounded-md w-[30px] h-6 active:bg-[#272343]">1</button>
        <button className="button flex justify-center items-center p-5 border-[1px] rounded-md w-[30px] h-6">2</button>
        <button className="button flex justify-center items-center p-5 border-[1px] rounded-md w-[30px] h-6">...</button>
        <button className="button flex justify-center items-center p-5 border-[1px] rounded-md w-[30px] h-6">9</button>
        <button className="button flex justify-center items-center p-5 border-[1px] rounded-md w-[30px] h-6">10</button>
        <button className="button flex justify-center items-center p-5 border-[1px] rounded-md w-[30px] h-6"><div><ArrowRightIcon className="h-6 w-6 text-[#272343] "/></div></button>
      </div>
    )
}




export default ScrollButton;



import Image from "next/image";
import logo from "../../../public/image/logo.jpg";
import niffy from "../../../public/image/niffy.jpeg"
import { BellIcon, UserIcon } from "@heroicons/react/outline";
import Dropdown from "@/Components/Utils/Dropdown";
import Dropdown2 from "@/Components/Utils/Dropdown2";



function Header() {

  
  return (
    <div className="flex items-center w-full sticky max-w-auto h-[90px] top-0 z-50 bg-white p-[10px] lg:px-auto border-b-[0.5px]">
      {/* Left */}
      <div className="flex items-center w-[280px] m-4 pr-20 md:border-r-[0.5px]">
        <Image src={logo} alt="logo" width={103} height={36} />
      </div>
     
       
        {/* Center */}
        <div className="flex flex-grow md:ml-6">
          <div className="flex">
            <h1 className="w-auto  md:mr-0 font-extrabold text-[24px] text-[#272343]">
              Overview
            </h1>
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center sm:space-x-4 ">
          <div className="flex md:space-x-9 mr-4">
            {/* Bell Icon */}
            <div className="relative hidden md:inline-flex">
              <BellIcon className="icons" />
              <span className="absolute top-2 right-2 block w-2 h-2.5 bg-red-500 rounded-full" />
            </div>
            {/* Bell Icon End */}

            <div className="hidden md:flex items-center cursor-pointer bg-gray-50 text-gray-500">
              {/*An icon will be here */}
              <UserIcon className="p-2 h-10 w-10" />
              <Dropdown2 />
            </div>

            <div className="flex items-center ml-60 md:ml-0 space-x-2">
              {/*<UserCircleIcon className="flex w-[40px] h-[40px] text-gray-600 " />*/}
              <Image src={niffy} width={70} height={70} className="md:w-[40px] md:h-[40px] rounded-full" />
              <p className="hidden md:inline-flex whitespace-nowrap font-medium pr-3 text-lg">
                Adeloba Joshua
              </p>
              <Dropdown />
              
            

            </div>
          </div>
        </div>
   
    </div>
  );
}

export default Header;

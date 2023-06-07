import Image from "next/image";
import logo from "../../../public/image/logo.jpg";
import niffy from "../../../public/image/niffy.jpeg"
import { BellIcon, UserCircleIcon, UserIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Dropdown from "@/Components/Utils/Dropdown";

function Header() {
  return (
    <div className="flex w-full items-center sticky top-0 z-50 bg-white p-[10px] lg:px-5 border-b-[0.5px]">
      {/* Left */}
      <div className="flex items-center md:w-[280px] md:h-[36px] m-4 pr-20 md:border-r-[0.5px]">
        <Image src={logo} alt="logo" width={103} height={36} />
      </div>

      {/* Center */}
      <div className="flex flex-grow md:ml-6">
        <div className="flex">
          <h1 className="w-[200px] h-[30px] md:mr-0 font-extrabold text-[24px] text-[#272343]">
            Utility Bills
          </h1>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-4 justify-end">
        <div className="flex md:space-x-9 mr-4">
          {/* Bell Icon */}
          <div className="relative hidden md:inline-flex">
            <BellIcon className="icons" />
            <span className="absolute top-2 right-2 block w-2 h-2.5 bg-red-500 rounded-full" />
          </div>
          {/* Bell Icon End */}

          <div className="hidden md:inline-flex items-center cursor-pointer bg-gray-50 text-gray-500">
            {/*An icon will be here */}
            <UserIcon className="p-2 h-10 w-10" />
            <ChevronDownIcon className=" p-2 h-10 w-10" />
          </div>

          <div className="flex items-center space-x-2">
            {/*<UserCircleIcon className="flex w-[40px] h-[40px] text-gray-600 " />*/}
            <Image src={niffy} width={50} height={50} className="w-[40px] h-[40px] rounded-full" />
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

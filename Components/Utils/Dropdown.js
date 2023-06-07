import { ChevronDownIcon } from "@heroicons/react/solid";
import { UserIcon, ShareIcon } from "@heroicons/react/outline";
import { BsBoxArrowRight } from "react-icons/bs";
import { useState } from "react";
import {AiOutlineTag} from 'react-icons/ai'
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center">
      <button onClick={toggleDropdown}>
        <ChevronDownIcon className="flex items-center h-5 w-5" />
      </button>
      {isOpen &&
        <div className="absolute right-0 mt-[350px] w-[251px] h-[260px] bg-white border border-gray-300 rounded-md shadow-md">
          <ul className="py-2 m-3 space-y-1">
            <li className="px-4 py-2 text-[14px] font-semibold">PS Account No: 20983</li>
            <li className="flex items-center px-4 py-2 text-[14px] font-semibold">
                <UserIcon className="w-4 h-4 mr-2" />
                <span>Profile</span>
            </li>
            <li className="flex items-center px-4 py-2 text-[14px] font-semibold">
                <ShareIcon className="h-4 w-4 mr-2" />
                <span>Share profile link</span>
            </li>
            <li className="flex items-center px-4 py-2 text-[14px] font-semibold">
                <AiOutlineTag className="h-4 w-4 mr-2"/> 
                <span className="">Check out Special Promo</span>
            </li>
            <li className="flex items-center px-4 py-2 text-[14px] font-semibold">
                <BsBoxArrowRight className="mr-2" />
                <span> Log Out</span>
                
            </li>

          </ul>
        </div>}
    </div>
  );
}

export default Dropdown;

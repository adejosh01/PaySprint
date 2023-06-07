import React from "react";
import Link from "next/link";
import SidebarRow from "./SidebarRow";
import { useState } from "react";
import { BsArrowLeftRight, BsBoxArrowRight } from "react-icons/bs";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BiWallet, BiWindowAlt } from "react-icons/bi";
import { AiOutlineTag, AiOutlineSetting } from "react-icons/ai";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Sidebar({active}) {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="h-screen fixed p-4 mt-6  max-w-[600px] xl:min-w-[20px] md:border-r-[0.5px]">
      <Link href="/">
        <SidebarRow active Icon={HiOutlineSquares2X2} title="Overview" />
      </Link>
      <Link href="/wallet">
        <SidebarRow Icon={BiWallet} title="Wallet" />
      </Link>
      <Link href="/transaction">
        <SidebarRow Icon={BsArrowLeftRight} title="Transaction" />
      </Link>

      <div className="space-x-2 cursor-pointer p-3">
        <div className="flex items-center ml-[-20px] text-gray-400 w-[100px] md:w-[280px] md:h-[60px] hover:bg-[#272343] hover:text-white rounded-md">
          <button onClick={toggleDropdown} className="w-full px-4 py-2 flex ml-5">
              <div><BiWindowAlt className="h-6 w-6 text-gray-400" /></div>
              <span className="hidden md:flex ml-4">Services</span> 
              <span><ChevronDownIcon className="w-6 h-6 ml-3 text-gray-400" /></span>
          </button>
        </div>   
            <div>
              {isOpen &&
              <div className="bg-transparent mt-3 ml-12 border-l-2">
                 <ul className="hidden md:block space-y-2 text-gray-400">               
                    <Link href="/money_transfer" className={`block px-4 ${active && 'text-blue'}`}>Money Transfer</Link>                 
                    <Link href="/" className="block px-4">Pay invoice</Link>
                    <Link href="/" className="block px-4">Utility bills</Link>
                    <Link href="/" className="block px-4">Property management</Link>
                </ul>            
              </div>
              }              
            </div>
                      
      </div>

      <div>
        <SidebarRow Icon={AiOutlineTag} title="Promotions" />
      </div>

      <div className="mb-4 md:mt-16">
        <SidebarRow Icon={AiOutlineSetting} title="Settings" />
        <div className="flex items-center space-x-2 p-4 mt-2">
          <BsBoxArrowRight className=" h-6 w-12 text-[#FF5141]" />
          <h3 className="hidden md:inline-flex text-[#FF5141]">Sign Out</h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

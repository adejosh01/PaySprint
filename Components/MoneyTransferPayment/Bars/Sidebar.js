import Link from "next/link";
import SidebarRow from "./SidebarRow";
import SubSidebarRow from "./SubSidebarRow";
import { useState } from "react";
import { BsArrowLeftRight, BsBoxArrowRight } from "react-icons/bs";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BiWallet, BiWindowAlt } from "react-icons/bi";
import { AiOutlineTag, AiOutlineSetting } from "react-icons/ai";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Sidebar() {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="h-screen fixed p-4 mt-6  max-w-[600px] xl:min-w-[20px] md:border-r-[0.5px]">
      <Link href="/">
        <SidebarRow  Icon={HiOutlineSquares2X2} title="Overview" />
      </Link>
      <Link href="/wallet">
        <SidebarRow Icon={BiWallet} title="Wallet" />
      </Link>
      <Link href="/transaction">
        <SidebarRow Icon={BsArrowLeftRight} title="Transaction" />
      </Link>
      <div>
        <div className="space-x-2 cursor-pointer">
          <div className="flex items-center  text-gray-400 w-[100px] md:w-[280px] md:h-[60px] rounded-md">
            <button onClick={toggleDropdown} className="flex items-center w-full py-2 mr-5 ">
              <SidebarRow active Icon={BiWindowAlt} title="Service" />
              <span><ChevronDownIcon className="w-6 h-6 text-gray-400 ml-[-40px] md:ml-[-130px]" /></span>
            </button>
          </div>  
          <div>
              {isOpen &&
              <div className="bg-transparent mt-3 ml-12 border-l-2">
                 <div className="hidden md:block text-gray-400"> 
                    <Link href="/money_transfer"> <SubSidebarRow active title="Money transfer" /></Link>
                    <Link href="/payinvoice"> <SubSidebarRow  title="Pay invoice" /></Link> 
                    <Link href="/utilitybills"> <SubSidebarRow  title="Utility bills" /></Link> 
                    <Link href="/"> <SubSidebarRow  title="Property management" /></Link>                      
                </div>            
              </div>
              }              
            </div>
        </div>    
      </div>

      

      <div>
        <SidebarRow Icon={AiOutlineTag} title="Promotions" />
      </div>

      <div className="mb-4 md:mt-14">
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

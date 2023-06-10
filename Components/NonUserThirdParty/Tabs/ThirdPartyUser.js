import Dropdown from "@/Components/Utils/Dropdown";
import { useState } from "react";
import Link from "next/link";
import { TiInfoLarge } from "react-icons/ti";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Overview from "@/Components/Overview/Overview";

function ThirdPartyUser(){
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return(
        <div className="m-6 space-y-2">
            <div className="">
                <h2 className="text-[14px] text-[#272343] font-medium">Payment Channels</h2>
                <div className="mt-2">
                    <button className="flex items-center justify-between border-[0.7px] p-2 w-full h-[40px] rounded-md outline-none">
                        <p className="text-[#272343] text-[12px]">Beneficiary to accept payment on PaySprint mobile app (No transfer Fee)</p> 
                        <Dropdown className="h-6 w-6"/>
                    </button>
                </div>
            </div>
            <div>
                <p className="flex w-[906px] h-[40px] text-[12px] text-[#E7AA07]">
                    <div><TiInfoLarge className="h-4 w-4 mr-2 border-[1px] rounded-full border-[#E7AA07]" /></div>
                    This option allows you to create a link containing the necessary information to transfer money to a non-user. When the beneficiary clicks on the link, they are prompted to create an account with PaySprint and 
                    provide the necessary information to 
                    receive the funds.
                </p>
            </div>

            <div>
                <h2 className="text-[14px] text-[#272343]">Sender information</h2>             
                    <div className="flex justify-between mt-2">
                        <div>
                            <label className="text-[12px] text-[#2D334A]">ID Type</label>
                            <div>
                                <input type="country" placeholder="ID Type" className="p-2 pl-4 pr-12 w-[251px]  mt-2 border-[1px] outline-none rounded-lg"/>
                            </div>
                        </div>

                        <div>
                            <label className="text-[12px] text-[#2D334A]">ID Number</label>
                            <div>
                                <input type="text" placeholder="ID number" className=" pl-4 pr-12 p-2 w-[251px] mt-2 border-[1px] outline-none rounded-lg"/>
                            </div>
                        </div>

                        <div>
                            <label className="text-[12px] text-[#2D334A]">ID expiry date</label>
                            <div>
                                <input type="text" placeholder="ID expiry date" className="pl-4 pr-12 p-2 mt-2 w-[251px] border-[1px] outline-none rounded-lg"/>
                            </div>
                        </div>
                        
                    </div>

                    <div className="flex justify-between mt-2">

                        <button  className="p-2 mt-4 bg-[#E7AA07] w-[251px] h-[45px] text-white rounded-md">
                            <Link href="./nonuserthirdparty">
                                <div className="flex items-center justify-between">
                                    <span>Proceed</span>
                                <div className="ml-2"><ArrowRightIcon className="h-6 w-6" /></div>
                                </div>
                            </Link>
                                                 
                        </button>
                    </div>
                        
                
            </div>
           

        </div>
    )
}


export default ThirdPartyUser;
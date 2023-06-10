
import { TiInfoLarge } from "react-icons/ti";
import { ChevronDownIcon } from "@heroicons/react/outline";
import {Fragment, useState } from "react";
import NonPaySprintUserModal from "@/Components/Modal/NonPaySprintUserModal";

function NonPaySprintUser(){

    const [showUserModal, setShowUserModal] = useState(false); 
    
    return(
        <Fragment>
        <div className="m-6 space-y-2">
            <div>
                <h2 className="text-[14px] text-[#272343] font-medium">Payment Channels</h2>
                <div className="mt-2">
                    <button className="flex items-center justify-between border-[0.7px] p-2 w-full h-[40px] rounded-md outline-none">
                        <p className="text-[#272343] text-[12px]">Beneficiary to accept payment on PaySprint mobile app (No transfer Fee)</p> 
                        <ChevronDownIcon className="h-6 w-6"/>
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
                <h2 className="text-[14px] text-[#272343]">Beneficiary information</h2>
                
                    <div className="flex justify-between mt-2">
                        <div>
                            <label className="text-[12px] text-[#2D334A]">Country</label>
                            <div className="flex items-center justify-between p-2 pl-4 pr-12 w-[251px]  mt-2 border-[1px] outline-none rounded-lg">
                                <input type="text" placeholder="Country" />
                                <span><ChevronDownIcon className="h-6 w-6 text-gray-400" /></span>
                                 
                            </div>
                        </div>

                        <div>
                            <label className="text-[12px] text-[#2D334A]">First Name</label>
                            <div>
                                <input type="text" placeholder="First Name" className=" pl-4 pr-12 p-2 w-[251px] mt-2 border-[1px] outline-none rounded-lg"/>
                            </div>
                        </div>

                        <div>
                            <label className="text-[12px] text-[#2D334A]">Last Name</label>
                            <div>
                                <input type="text" placeholder="Last Name" className="pl-4 pr-12 p-2 mt-2 w-[251px] border-[1px] outline-none rounded-lg"/>
                            </div>
                        </div>
                        
                    </div>

                    <div className="flex justify-between mt-2">
                        <div>
                            <label className="text-[12px] text-[#2D334A]">Email Address</label>
                            <div>
                                <input type="email" placeholder="Email Address" className="p-2 pl-4 pr-12 w-[251px]  mt-2 border-[1px] outline-none rounded-lg"/>
                            </div>
                        </div>

                        <div>
                            <label className="text-[12px] text-[#2D334A]">Telephone</label>
                            <div className="relative flex items-center pl-4 pr-12 p-2 w-[251px] mt-2 border-[1px] outline-none rounded-lg">
                                <span className="mr-2 pr-2 text-[12px] text-gray-400 border-r-[2px]">+234</span>
                                <input type="tel" placeholder="Telephone" />
                            </div>
                        </div>

                        <button  className="p-2 mt-8 bg-[#E7AA07] w-[251px] h-[45px] text-white rounded-md" onClick={() => setShowUserModal(true) }>                         
                                <div className="flex items-center justify-center">
                                    <span>Proceed</span>
                                </div>                                                                          
                        </button>
                        <NonPaySprintUserModal isVisible={showUserModal} onClose={() => setShowUserModal(false)}  />
                    </div>
                        
               
            </div>
           

        </div>
        </Fragment>
    )
}


export default NonPaySprintUser;
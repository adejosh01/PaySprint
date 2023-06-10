import { ArrowRightIcon, } from "@heroicons/react/solid";
import { TiTick } from "react-icons/ti";
import LocalModal from "../../Modal/LocalModal";
import { Fragment, useState } from "react";

function PaySprintUser(){
    const [showModal, setShowModal] = useState(false); 
    return(
        <Fragment>
        <div className="m-8 space-y-12" >
            <div>
                <p className="w-[936px] text-[14px] text-gray-400">
                 PaySprint offers a seamless and secure platform for
                 sending money locally. Please enter your preferred receiver’s PaySprint account number below ,
                 and send funds to anyone with no hidden fees.
                </p>
            </div>
            <div className="mt-6">
                <label className="text-[14px] text-[#272343] font-medium">Account number</label>
                <div className="mt-2">
                    <input className="border-[1px] p-2 w-[300px] h-[48px] rounded-md outline-none" />
                    <button className="p-2 ml-6 bg-[#E7AA07] w-[240px] h-[48px] text-white rounded-md" onClick={() => setShowModal(true) }>
                        <div className="flex items-center justify-center">
                            <span>Proceed</span>
                            <div className="ml-2"><ArrowRightIcon className="h-6 w-6" /></div>
                        </div>
                    </button>
                    <LocalModal isVisible={showModal} onClose={() => setShowModal(false)}    />

                </div>
            </div>

            <div className="mt-8">
                <div className="flex space-x-40">
                    <div>
                        <div className="flex items-center space-x-2">
                            <div className="bg-[#27B560] w-[20px] h-[20px] justify-between rounded-full"><TiTick className="h-6 w-6 text-white" /></div>
                            <h2 className="text-[#2D334A] font-medium text-[20px]">Adeloba Joshua</h2>
                        </div>  
                        <span className="text-gray-300 ml-6">3299265</span>
                    </div>  
                    <div className="w-[167px] text-[14px]">
                        <p className="text-gray-400">2 Samuel Ike Street, Isolo
                            Lagos, Nigeria
                        </p>
                    </div>  
                </div>         
            </div>
    
        </div>
        </Fragment>
      
    )
}

export default PaySprintUser;
import { ArrowRightIcon } from "@heroicons/react/solid"
import { useState } from "react";

function SavedBeneficiary() {

    const [checkboxColor, setCheckboxColor] = useState('');

    const handleCheckboxChange = (event) => {
      if(checkboxColor === 'black'){
        setCheckboxColor(event.target.value);
      }else{
        setCheckboxColor(null)
      }
     
    };

  return (
    <div className="m-6">
        <div>
            <p className="w-[655px] paragraph">
                Send money to any of your saved beneficiaries
                or send to multiple beneficiaries at the same time
             </p>
        </div>
        <div className="mt-2">
                <label className="text-[14px] text-[#272343] font-medium">Account number</label>
                <div className="mt-2">
                    <input className="border-[1px] p-2 w-[300px] h-[48px] rounded-md outline-none" />
                    <button className="p-2 ml-6 bg-[#E7AA07] w-[240px] h-[48px] text-white rounded-md">
                        <div className="flex-container">
                            <span>Proceed</span>
                            <div className="ml-2"><ArrowRightIcon className="h-6 w-6" /></div>
                        </div>
                    </button>
                </div>
        </div>

        <div>
            <div className="flex-container border-b-[0.8px] mt-1">
                <div>
                    <h2 className="ml-2">Name</h2>
                </div>
                <div>
                    <h2>Account No</h2>
                </div>
                <div>
                    <h2 className={`bg-${checkboxColor} text-gray-400 bg-[#F7F7F7] p-[12px]`}>Send to multiple beneficiaries </h2>
                </div>
            </div>
            <div className="flex-container border-b-[0.8px] p-4">
                <div className="flex items-center space-x-2 ml-[-20px]">
                    <input type="checkbox" className="form-checkbox w-4 h-4" value="black" onChange={handleCheckboxChange}  />
                    <p className="text-[14px]">Shalom Adebiyi Professionals File Account</p>
                </div>
                <div>
                    <p className="mr-[300px] text-gray-400">35443</p>
                </div>

                <div className="mr-20 text-[#E7AA07]">
                    <p className="text-[14px]">Send Money</p>
                </div>    
            </div>

            <div className="flex-container border-b-[0.8px] p-4">
                <div className="flex items-center space-x-2 ml-[-20px]">
                    <input type="checkbox" className="w-4 h-4" />
                    <p className="text-[14px]">Shalom Adebiyi Professionals File Account</p>
                </div>
                <div>
                    <p className="mr-[300px] text-gray-400">35443</p>
                </div>

                <div className="mr-20 text-[#E7AA07]">
                    <p className="text-[14px]">Send Money</p>
                </div>    
            </div>

            <div className="flex-container p-4">
                <div className="flex items-center space-x-2 ml-[-20px]">
                    <input type="checkbox" className="w-4 h-4" />
                    <p className="text-[14px]">Shalom Adebiyi Professionals File Account</p>
                </div>
                <div>
                    <p className="mr-[300px] text-gray-400">35443</p>
                </div>

                <div className="mr-20 text-[#E7AA07]">
                    <p className="text-[14px]">Send Money</p>
                </div>    
            </div>
        </div>
        
    </div>
  )
}

export default SavedBeneficiary
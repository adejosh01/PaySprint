import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import PaySprintUserIntl from './PaySprintUserIntl';
import NonPaySprintUser from '../MoneyTransferPayment/SwitchTab/NonUserPaymentLink';
import SavedBeneficiary from "../MoneyTransferPayment/SwitchTab/SavedBeneficiary";


function SwitchIntlTabContent() {
  const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
  return (
    <div className="space-y-4">
    <div className="flex items-center">
        <div className="flex-container border-[0.5px] rounded-md w-[250px]">
                <div><SearchIcon className=" h-8 w-6 text-gray-400" /></div>
                <div>
                <input
                    type="text"
                    placeholder="Search transaction"
                    className="p-2 outline-none"
                />
                </div>
        </div>
        <div className="ml-2 bg-[#272343] p-2 rounded-md">
            <SearchIcon className="h-6 w-6 text-white" />
        </div>
    </div>

    <div >
        <h2 className="text-[18px] text-[#272343]">Send Money to: </h2>
        <div className="w-[1032px] h-[430px] border-[0.5px] mt-4 rounded-md">
            <div>
                <div className="flex items-center w-[1032px] h-[60px] bg-[#f7f7f7] border-[0.5px] rounded-md">
                    <button className={`flex-container py-7 my-2 px-8 w-[344px] h-[50px] text-[#2d334a]
                    ${activeTab === 1 ? 'bg-white text-[#272343]' : 'bg-transparent text-[#AEAEAE] rounded-md'}`}
                    onClick={() => handleTabClick(1)}
                    >
                      PaySprint User
                    </button>

                    <button className={`flex-container py-7 my-2 px-8 w-[344px] h-[50px] text-[#2d334a] rounded-lg
                    ${activeTab === 2 ? 'bg-white text-[#272343]' : 'bg-transparent text-[#AEAEAE]'}`}
                    onClick={() => handleTabClick(2)}
                    >
                        Non-PaySprint User
                    </button> 

                    <button className={`flex-container py-7 my-2 px-8 w-[344px] h-[50px] text-[#2d334a] rounded-lg
                    ${activeTab === 3 ? 'bg-white text-[#272343]' : 'bg-transparent text-[#AEAEAE] rounded-md'}`}
                    onClick={() => handleTabClick(3)}
                    >
                       Saved Beneficiary
                    </button> 
                </div>

            </div>

            <div>
                {activeTab === 1 && 
                    <div>
                        <PaySprintUserIntl />
                    </div>
                }
                {activeTab === 2 && 
                    <div>
                        <NonPaySprintUser />
                    </div>
                }

                {activeTab === 3 && 
                    <div>
                        <SavedBeneficiary />
                    </div>
                }
            </div>
            

        </div>
    </div>
</div>
  )
}

export default SwitchIntlTabContent
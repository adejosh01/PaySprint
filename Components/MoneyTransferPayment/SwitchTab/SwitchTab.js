import { useState } from "react";
import SwitchTabContent from "./SwitchTabContent";
import SwitchIntlTabContent from "../../International/SwitchIntlTabContent";

function SwitchTab(){

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };

    return(
        <>
            <div className="flex items-center justify-center w-[560px] h-[60px] bg-[#f7f7f7] mt-2 border-[0.5px] rounded-md">
                <button className={`flex items-center justify-center py-7 my-2  px-8 w-[280px] h-[20px] text-[#2d334a] rounded-md
                ${activeTab === 1 ? 'bg-white text-[#2d334a]' : 'bg-transparent text-[#2d334a]'}`}
                onClick={() => handleTabClick(1)}
                >
                    Local
                </button>

                <button className={`flex items-center justify-center py-7 my-2 px-8 w-[280px] h-[20px] text-[#2d334a] rounded-md
                ${activeTab === 2 ? 'bg-white text-[#2d334a]' : 'bg-transparent text-[#2d334a]'}`}
                onClick={() => handleTabClick(2)}
                >
                    International
                </button> 
            </div>

            <div className="mt-6">
                {activeTab === 1 && 
                    <div>
                        <SwitchTabContent />
                    </div>
                }

                {activeTab === 2 && 
                    <div>
                        <SwitchIntlTabContent />
                    </div>
                }

            </div>
        </>
              
    )
}

export default SwitchTab;
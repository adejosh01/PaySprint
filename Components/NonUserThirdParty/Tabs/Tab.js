import { useState } from "react";
import TabContent from "./TabContent";

function Tab(){

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };

    return(
        <>
            <div className="flex items-center w-[592px] h-[67px] bg-[#f7f7f7] mt-2 border-[0.5px] rounded-md">
                <button className={`flex items-center justify-between py-7 my-2 mx-1 px-8 w-[280px] h-[20px] text-[#2d334a] rounded-md
                ${activeTab === 1 ? 'bg-white text-[#2d334a]' : 'bg-transparent text-[#2d334a]'}`}
                onClick={() => handleTabClick(1)}
                >
                    Local
                </button>

                <button className={`flex items-center justify-between py-7 my-2 mx-1 px-8 w-[280px] h-[20px] text-[#2d334a] rounded-md
                ${activeTab === 2 ? 'bg-white text-[#2d334a]' : 'bg-transparent text-[#2d334a]'}`}
                onClick={() => handleTabClick(2)}
                >
                    International
                </button> 
            </div>

            <div className="mt-6">
                {activeTab === 1 && 
                    <div>
                        <TabContent />
                    </div>
                }

                {activeTab === 2 && 
                    <div>
                        <TabContent />
                    </div>
                }

            </div>
        </>
              
    )
}

export default Tab;
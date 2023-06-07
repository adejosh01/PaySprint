import React from "react";
import {Airtime, Data, TV, Electricity, Education,Insurance} from "./Bills";



function UtilityBillContent() {
  return (
    <div className="mt-6">
      <div className="flex justify-between mr-14">
        <div className="w-[768px] h-[3915px]">
              <Airtime />  
              <Data />  
              <TV />   
              <Electricity />  
              <Education />
              <Insurance  />    
        </div>
        <div className="hidden md:block">
          <ul className="space-y-2 border-l-2 pl-4 border-[#E7AA07] font-medium]">
            <li className="text-[14px] text-[#272343] font-bold">On this page</li>
            <li className="text-[14px] font-medium text-gray-400 hover:text-[#E7AA07]"><a href="">Airtime & Data</a></li>
            <li className="text-[14px] font-medium text-gray-400 hover:text-[#E7AA07]"><a href="">TV Subscription</a></li>
            <li className="text-[14px] font-medium text-gray-400 hover:text-[#E7AA07]"><a href="">Electricity bill</a></li>
            <li className="text-[14px] font-medium text-gray-400 hover:text-[#E7AA07]"><a href="">Education</a></li>
            <li className="text-[14px] font-medium text-gray-400 hover:text-[#E7AA07]"><a href="">Insurance</a></li>
          </ul>
        </div>
      </div>
        
    </div>

  );
}

export default UtilityBillContent;

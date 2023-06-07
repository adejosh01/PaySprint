import React from 'react'
import {Showmax, Startime,  DSTV} from "../../../public/image"
import Image from 'next/image'

function TV() {
  return (
    <div>
         <div className="w-[768px] mt-10">
          <div>
            <h2 className="text-[24px] font-medium text-[#272343]">
              TV Subscription
            </h2>
            <p className="text-[16px] text-gray-400 ">
              Renew your TV/Cable subscriptions with speed and ease! 
            </p>
          </div>

          <div className="mt-6 space-y-10">
            <div className="flex items-center justify-between">
            
                <div className="billscard">
                    <div className="flex flex-col items-center">
                        <Image src={DSTV} alt="airtel" width={94} height={94} />
                        <div className="flex flex-col items-center mt-2">
                            <h3 className="text-[16px] font-medium text-[#272343]">
                            DSTV
                            </h3>
                            <p className="text-gray-400 text-[14px]">Feel Every Moment</p>
                        </div>
                        <div className="mt-2">
                            <button className="billsbutton">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="billscard">
                    <div className="flex flex-col items-center">
                    <Image src={Startime} alt="airtel" width={94} height={94} />
                    <div className="flex flex-col items-center mt-2">
                        <h3 className="text-[16px] font-medium text-[#272343]">
                         GOTV
                        </h3>
                        <p className="text-gray-400 text-[14px]">Live it. Love it.</p>
                    </div>
                    <div className="mt-2">
                        <button className="billsbutton">Subscribe</button>
                    </div>
                    </div>
                </div>


                <div className="billscard">
                    <div className="flex flex-col items-center">
                        <Image src={Startime} alt="airtel" width={94} height={94} />
                        <div className="flex flex-col items-center mt-2">
                            <h3 className="text-[16px] font-medium text-[#272343]">
                            STARTIMES
                            </h3>
                            <p className="text-gray-400 text-[14px]">Better life, Let’s GO</p>
                        </div>
                        <div className="mt-2">
                            <button className="billsbutton">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="billscard">
                        <div className="flex flex-col items-center">
                            <Image src={Showmax} alt="airtel" width={94} height={94} />
                            <div className="flex flex-col items-center mt-2">
                                <h3 className="text-[16px] font-medium text-[#272343]">
                                SHOWMAX
                                </h3>
                                <p className="text-gray-400 text-[12px]">Africa’s Original Streaming Service</p>
                            </div>
                            <div className="mt-2">
                                <button className="billsbutton">Subscribe</button>
                            </div>
                        </div>
                </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default TV
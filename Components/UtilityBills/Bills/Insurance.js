import React from 'react'
import Image from 'next/image'
import {INSU} from "../../../public/image"

function Insurance() {
  return (
    <div className='mt-10'>
        <div>
          <h2 className="text-[24px] font-medium text-[#272343]">
            Insurance
          </h2>
          <p className="text-[16px] text-gray-400 ">
            There’s no such thing as too safe
          </p>
        </div>
        <div className='flex items-center mt-6'>
                <div className="billscard">
                    <div className="flex flex-col items-center">
                        <Image src={INSU} alt="ikeja" width={95} height={90} />
                        <div className="flex flex-col items-center">
                            <h3 className="text-[13px] font-medium text-[#272343] ml-10">
                               PERSONAL ACCIDENT INSURANCE
                            </h3>
                            <p className="text-gray-400 text-[12px]">
                            Health is Wealth             
                            </p>
                        </div>
                        <div className="mt-2">
                        <button className="billsbutton">Get Product</button>
                        </div>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default Insurance
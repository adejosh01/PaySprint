import React from 'react'
import Image from 'next/image'
import {WAEC, JAMB} from "../../../public/image"

function Education() {
  return (
    <div className='mt-10'>
         <div>
          <h2 className="text-[24px] font-medium text-[#272343]">
            Education
          </h2>
          <p className="text-[16px] text-gray-400 ">
             Generate tokens and pins
          </p>
        </div>
        <div className='mt-6'>
            <div className='flex items-center space-x-12'>
                <div className="billscard">
                    <div className="flex flex-col items-center">
                        <Image src={WAEC} alt="ikeja" width={100} height={90} />
                        <div className="flex flex-col items-center mt-6">
                            <h3 className="text-[16px] font-medium text-[#272343] mr-5">
                                WAEC
                            </h3>
                            <p className="text-gray-400 text-[12px]">
                            Result Checker PIN               
                            </p>
                        </div>
                        <div className="mt-2">
                        <button className="billsbutton">Get Product</button>
                        </div>
                    </div>
                </div>

                <div className="billscard">
                    <div className="flex flex-col items-center">
                        <Image src={JAMB} alt="ikeja" width={100} height={90} />
                        <div className="flex flex-col items-center mt-2">
                        <h3 className="text-[16px] font-medium text-[#272343] mr-5">
                          JAMB PIN VENDING
                        </h3>
                        <p className="text-gray-400 text-[12px]">
                           UTME & Direct Entry          
                        </p>
                        </div>
                        <div className="mt-2">
                        <button className="billsbutton">Pay</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Education
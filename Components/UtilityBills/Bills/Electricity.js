import React from 'react'
import {AEDC, BEDC, EEDC, EKO, IBEDC, IKEJA, JOS, Kaduna, KANO, PH } from "../../../public/image"
import Image from 'next/image'

function Electricity() {
  return (
    <div className='mt-10'>
        <div>
          <h2 className="text-[24px] font-medium text-[#272343]">
            Electricity Bill
          </h2>
          <p className="text-[16px] text-gray-400 ">
            Let there be light!
          </p>
        </div>
        <div className="mt-6 space-y-10">
          <div className="flex items-center justify-between">
            <div className="billscard">
              <div className="flex flex-col items-center">
                <Image src={IKEJA} alt="ikeja" width={100} height={90} />
                <div className="flex flex-col items-center mt-2">
                  <h3 className="text-[16px] font-medium text-[#272343] mr-5">
                    IKEDC
                  </h3>
                  <p className="text-gray-400 text-[12px] ml-5">
                    IKEJA Electricity Distribution company
                  </p>
                </div>
                <div className="mt-2">
                  <button className="billsbutton">Pay</button>
                </div>
              </div>
            </div>

            <div className="billscard">
              <div className="flex flex-col items-center">
                <Image src={EKO} alt="eko" width={100} height={90} className='mt-4' />
                <div className="flex flex-col items-center mt-6 ">
                  <h3 className="text-[16px] font-medium text-[#272343]">
                    EKEDC
                  </h3>
                  <p className="text-gray-400 text-[12px] ml-5">EKO Electricity Distribution company</p>
                </div>
                <div className="mt-2">
                  <button className="billsbutton">Pay</button>
                </div>
              </div>
            </div>

            <div className="billscard">
              <div className="flex flex-col items-center">
                <Image src={AEDC} alt="aedc" width={100} height={90} className='mt-4' />
                <div className="flex flex-col items-center mt-6">
                  <h3 className="text-[16px] font-medium text-[#272343]">
                    AEDC
                  </h3>
                  <p className="text-gray-400 text-[12px] ml-4">ABUJA Electricity Distribution company</p>
                </div>
                <div className="mt-2">
                  <button className="billsbutton">Pay</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="billscard">
              <div className="flex flex-col items-center">
                <Image src={KANO} alt="kano" width={100} height={90} className='mt-4' />
                <div className="flex flex-col items-center mt-6">
                  <h3 className="text-[16px] font-medium text-[#272343]">
                     KEDC
                  </h3>
                  <p className="text-gray-400 text-[12px] ml-4">KANO Electricity Distribution company</p>
                </div>
                <div className="mt-2">
                  <button className="billsbutton">Pay</button>
                </div>
              </div>
            </div>

            <div className="billscard">
              <div className="flex flex-col items-center">
                <Image src={PH} alt="ph" width={100} height={90} className='mt-3' />
                <div className="flex flex-col items-center mt-6">
                  <h3 className="text-[16px] font-medium text-[#272343]">
                    PHED
                  </h3>
                  <p className="text-gray-400 text-[12px] ml-4">PORT HARCOURT Electricity Distribution company</p>
                </div>
                <div className="mt-2">
                  <button className="billsbutton">Pay</button>
                </div>
              </div>
            </div>

            <div className="billscard">
              <div className="flex flex-col items-center">
                <Image src={JOS} alt="JOS" width={100} height={90} className='mt-3' />
                <div className="flex flex-col items-center mt-2">
                  <h3 className="text-[16px] font-medium text-[#272343]">
                    JED
                  </h3>
                  <p className="text-gray-400 text-[14px] w-[102px]">JOS Electricity Distribution Plc</p>
                </div>
                <div className="mt-2">
                  <button className="billsbutton">Pay</button>
                </div>
              </div>
            </div>
          </div>


          <div className="flex items-center justify-between">
            <div className="billscard">
              <div className="flex flex-col items-center">
                <Image src={Kaduna} alt="kano" width={100} height={90} className='mt-3' />
                <div className="flex flex-col items-center mt-6">
                  <h3 className="text-[16px] font-medium text-[#272343]">
                     KAEDCO
                  </h3>
                  <p className="text-gray-400 text-[12px] ml-4">KADUNA Electricity Distribution company</p>
                </div>
                <div className="mt-2">
                  <button className="billsbutton">Pay</button>
                </div>
              </div>
            </div>

            <div className="billscard">
              <div className="flex flex-col items-center">
                <Image src={EEDC} alt="ph" width={100} height={90} className='mt-3' />
                <div className="flex flex-col items-center mt-6">
                  <h3 className="text-[16px] font-medium text-[#272343]">
                    EEDC
                  </h3>
                  <p className="text-gray-400 text-[12px] ml-4">ENUGU Electricity Distribution company</p>
                </div>
                <div className="mt-2">
                  <button className="billsbutton">Pay</button>
                </div>
              </div>
            </div>

            <div className="billscard">
              <div className="flex flex-col items-center">
                <Image src={IBEDC} alt="JOS" width={70} height={90} className='mt-3' />
                <div className="flex flex-col items-center mt-2">
                  <h3 className="text-[16px] font-medium text-[#272343]">
                    IBEDC
                  </h3>
                  <p className="text-gray-400 text-[12px] ml-3">IBADAN Electricity Distribution company</p>
                </div>
                <div className="mt-2">
                  <button className="billsbutton">Pay</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="billscard">
              <div className="flex flex-col items-center">
                <Image src={BEDC} alt="kano" width={100} height={90} className='mt-3' />
                <div className="flex flex-col items-center mt-6">
                  <h3 className="text-[16px] font-medium text-[#272343]">
                     BEDC
                  </h3>
                  <p className="text-gray-400 text-[12px] ml-4">BENIN Electricity Distribution company</p>
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

export default Electricity
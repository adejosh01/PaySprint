import React from 'react'
import Image from "next/image";
import { International, mobile, airtel} from "../../../public/image"


function Airtime() {
  return (
    <div>
        {/*--------------- Airtime ---------------------*/}
        <div>
          <h2 className="text-[24px] font-medium text-[#272343]">
            Airtime Recharge
          </h2>
          <p className="text-[16px] text-gray-400 ">
            Purchase airtime for your mobile phones and other devices
          </p>
        </div>
        <div className="mt-6 space-y-10">
          <div className="flex items-center justify-between">
            <div className="billscard">
              <div className="flex flex-col items-center">
                <Image src={airtel} alt="airtel" width={94} height={94} />
                <div className="flex flex-col items-center mt-2">
                  <h3 className="text-[16px] font-medium text-[#272343]">
                    Airtel
                  </h3>
                  <p className="text-gray-400 text-[14px]">Airtime VTL</p>
                </div>
                <div className="mt-2">
                  <button className="billsbutton">Recharge</button>
                </div>
              </div>
            </div>

            <div className="billscard">
              <div className="flex flex-col items-center">
                <Image src={mobile} alt="airtel" width={52.88} height={91.8} />
                <div className="flex flex-col items-center mt-2">
                  <h3 className="text-[16px] font-medium text-[#272343]">
                    MTN
                  </h3>
                  <p className="text-gray-400 text-[14px]">Airtime VTL</p>
                </div>
                <div className="mt-2">
                  <button className="billsbutton">Recharge</button>
                </div>
              </div>
            </div>

            <div className="billscard">
              <div className="flex flex-col items-center">
                <Image src={airtel} alt="airtel" width={94} height={94} />
                <div className="flex flex-col items-center mt-2">
                  <h3 className="text-[16px] font-medium text-[#272343]">
                    GLO
                  </h3>
                  <p className="text-gray-400 text-[14px]">Airtime VTL</p>
                </div>
                <div className="mt-2">
                  <button className="billsbutton">Recharge</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="billscard">
              <div className="flex flex-col items-center">
                <Image src={mobile} alt="airtel" width={52.88} height={91.8} />
                <div className="flex flex-col items-center mt-2">
                  <h3 className="text-[16px] font-medium text-[#272343]">
                    9mobile
                  </h3>
                  <p className="text-gray-400 text-[14px]">Airtime VTL</p>
                </div>
                <div className="mt-2">
                  <button className="billsbutton">Recharge</button>
                </div>
              </div>
            </div>

            <div className="billscard">
              <div className="flex flex-col items-center">
                <Image src={mobile} alt="airtel" width={52.88} height={91.8} />
                <div className="flex flex-col items-center mt-2">
                  <h3 className="text-[16px] font-medium text-[#272343]">
                    9mobile
                  </h3>
                  <p className="text-gray-400 text-[14px]">Airtime VTL</p>
                </div>
                <div className="mt-2">
                  <button className="billsbutton">Recharge</button>
                </div>
              </div>
            </div>

            <div className="billscard">
              <div className="flex flex-col items-center">
                <Image src={International} alt="airtel" width={94} height={94} />
                <div className="flex flex-col items-center mt-2">
                  <h3 className="text-[16px] font-medium text-[#272343]">
                    International
                  </h3>
                  <p className="text-gray-400 text-[14px]">Airtime VTL</p>
                </div>
                <div className="mt-2">
                  <button className="billsbutton">Recharge</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Airtime
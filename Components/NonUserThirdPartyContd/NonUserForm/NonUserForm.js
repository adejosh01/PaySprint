import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid"
import {ChevronDownIcon} from "@heroicons/react/solid"
import { TiInfoLarge } from "react-icons/ti"


function NonUserForm() {
  return (
    <div className="m-2 ml-8">
        <div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#E7AA07] p-2 rounded-lg"> <ArrowLeftIcon className="w-5 h-5 text-white" /></div>
              <h2 className="text-[16px] text-[#272343]">Non-Paysprint User</h2>
            </div>
            <div className="m-6 mt-4 ml-10 space-y-3">
              <h3 className="text-[#272343] font-medium">Beneficiary information</h3>
              <div className="space-y-2">
                <label htmlFor="Receiver" className="text-[12px] font-medium">Receiver option<span className="text-[red]">*</span></label>
                <div>
                <button className="flex-container border-[0.7px] p-2 w-[350px] h-[35px] rounded-md outline-none">
                        <p className="text-[#272343] text-[12px] font-medium">Create new beneficiary</p> 
                        <ChevronDownIcon className="h-6 w-6 text-gray-400"/>
                 </button>
                </div>
                <div>
                  <div>
                    <div className="flex space-x-14 mt-2">
                          <div>
                              <label className="text-[12px] text-[#2D334A] font-medium">Last Name<span className="text-[red]">*</span></label>
                              <div>
                                  <input type="text" placeholder="Last Name" className=" pl-4 pr-12 p-2 w-[251px] h-[35px] mt-2 border-[1px] outline-none rounded-lg"/>
                              </div>
                          </div>

                          <div>
                              <label className="text-[12px] text-[#2D334A] font-medium">Full Name<span className="text-[red]">*</span></label>
                              <div>
                                  <input type="text" placeholder="Full Name" className=" pl-4 pr-12 p-2 w-[251px] h-[35px] mt-2 border-[1px] outline-none rounded-lg"/>
                              </div>
                          </div>

                          <div>
                              <label className="text-[12px] text-[#2D334A] font-medium">Email Address<span className="text-[red]">*</span></label>
                              <div>
                                  <input type="text" placeholder="forexample@gmail.com" className="pl-4 pr-20 p-2 mt-2 w-[330px] h-[35px] border-[1px] outline-none rounded-lg"/>
                              </div>
                          </div>                       
                    </div>

                    <div className="flex space-x-14 mt-2">
                        <div>
                            <label className="text-[12px] text-[#2D334A] font-medium">Country<span className="text-[red]">*</span></label>
                            <button className="flex-container p-2 pl-4 pr-12 w-[251px] h-[35px] mt-2 border-[1px] outline-none rounded-lg">
                                <p className="text-[14px]">Ghana</p>
                                <span><ChevronDownIcon className="h-6 w-6 text-gray-400 ml-10" /></span>    
                            </button>
                        </div>

                        <div>
                            <label className="text-[12px] text-[#2D334A] font-medium">Telephone<span className="text-[red]">*</span></label>
                            <div className="relative flex items-center pl-4 pr-12 p-2 w-[251px] h-[35px] mt-2 border-[1px] outline-none rounded-lg">
                                <span className="mr-2 pr-2 text-[12px] text-gray-400 border-r-[2px]">+234</span>
                                <input type="tel" placeholder="Telephone" />
                            </div>
                        </div>

                        <div>
                            <label className="text-[12px] text-[#2D334A]">ID Document<span className="text-[red]">*</span></label>
                            <div>
                                <input type="text" placeholder="" className="pl-4 pr-20 p-2 mt-2 w-[300px] h-[35px] border-[1px] outline-none rounded-lg"/>
                            </div>
                        </div>

                    </div>  

                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[#272343] font-medium">Payment information</h3>
                <div className="flex space-x-4 mt-2">
                  <div>
                      <label className="text-[12px] text-[#2D334A] font-medium">Payment Type<span className="text-[red]">*</span></label>
                      <button className="flex-container p-2 pl-4 pr-12 w-[330px] h-[35px]  mt-2 border-[1px] outline-none rounded-lg">
                          <p className="text-[14px]">Cash payments</p>
                          <span><ChevronDownIcon className="h-6 w-6 text-gray-400" /></span>    
                      </button>
                  </div>
                  <div>
                      <label className="text-[12px] text-[#2D334A] font-medium">Remittance company<span className="text-[red]">*</span></label>
                      <button className="flex p-2 pl-4 pr-12 w-[570px] h-[35px]  mt-2 border-[1px] outline-none rounded-lg">
                          <p className="text-[14px]">GHANA COMMERCIAL BANK LTD</p>
                          <span><ChevronDownIcon className="h-6 w-6 text-gray-400" /></span>    
                      </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="w-[936px] h-[200px] border-[0.5px] rounded-md">
                  <div className="flex m-4 justify-between">
                    <h3 className="text-gray-400 text-[14px]">Min amount</h3>
                    <h3 className="text-gray-400 text-[14px]">Max amount</h3>
                    <h3 className="text-gray-400 text-[14px]">Notification</h3>
                    <h3 className="text-gray-400 text-[14px] mr-6">Payment type </h3>
                    <h3 className="text-gray-400 text-[14px] mr-10">Service & terms of payment</h3>
                  </div>
                  <div>
                    <div className="flex m-4 justify-between">
                      <h3 className="text-[14px] text-[#272343]">GHC 150.00</h3>
                      <h3 className="text-[14px] text-[#272343] ">GHC 7000.00</h3>
                      <h3 className="text-[14px] text-[#272343] mr-24">-</h3>
                      <h3 className="text-[14px] text-[#272343]">Instant</h3>
                      <p className="text-[14px] text-[#272343] w-[259px]">
                        Bank deposit: 24 hours. | Wallet: Wallet deductions of 1.5% could
                         be applied in the beneficiary wallet
                      </p>
                    </div>
                  </div>

                  <div className="ml-4 mt-8">
                      <p className="flex w-[906px] h-[40px] text-[12px] text-[#E7AA07]">
                          <div><TiInfoLarge className="h-4 w-4 mr-2 border-[1px] rounded-full border-[#E7AA07]" /></div>
                          This option allows you to create a link containing the necessary information to transfer money to a non-user. When the beneficiary clicks on the link, they are prompted to create an account with PaySprint and 
                          provide the necessary information to 
                          receive the funds.
                      </p>
                </div>
                  
                </div>
                <div className="mt-2">
                    <button className="p-2 bg-[#E7AA07] w-[240px] h-[40px] text-white rounded-md">
                        <div className="flex items-center justify-center">
                            <span>Proceed</span>
                            <div className="ml-2"><ArrowRightIcon className="h-6 w-6" /></div>
                        </div>
                    </button>
                </div>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default NonUserForm
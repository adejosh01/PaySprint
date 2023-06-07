import React from 'react'
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/solid'
import { PlusIcon, SearchIcon } from '@heroicons/react/outline'
import { HiArrowDownTray } from "react-icons/hi2";
import payinvoiceCard from "../../public/image/payinvoiceCard.png"
import payinvoice2 from "../../public/image/payinvoice2.png"

function PayInvoiceContent() {
  return (
    <div className='flex flex-col fixed md:flex-row justify-between'>
        <div>
            <div className='mt-2 w-[502px]'>
                <div>
                    <h2 className='text-gray-400 text-[16px]'>Print, view and pay your invoices</h2>
                </div>
                <div className='mt-2 space-y-4'>
                    <div>
                      <label className="text-[12px] text-[#2D334A] font-medium">Service Type</label>
                      <button className="flex-container p-2  w-[495px] h-[35px]  mt-2 border-[1px] outline-none rounded-lg">
                          <p className="text-[12px] text-gray-400">Select service type</p>
                          <span><ChevronDownIcon className="h-6 w-6 text-gray-400" /></span>    
                      </button>
                    </div>

                    <div>
                      <label className="text-[12px] text-[#2D334A] font-medium">Invoice Number</label>
                      <button className="flex-container p-2  w-[495px] h-[35px]  mt-2 border-[1px] outline-none rounded-lg">
                          <p className="paragraph">Payca_xxxxxxxxxxx</p>
                          <span><ChevronDownIcon className="h-6 w-6 text-gray-400" /></span>    
                      </button>
                    </div>

                </div>

                <div className='flex space-x-4 mt-4'>
                    <div className="flex items-center">
                        <div className="md:inline-flex items-center">
                            <button className="flex justify-center text-[14px] font-bold p-[12px] w-[240px] h-[48px] bg-[#E7AA07] text-white rounded-md">
                            View Invoice
                            <PlusIcon className="h-6 w-6 ml-3" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="md:inline-flex items-center">
                            <button className="flex justify-center text-[14px] font-bold p-[12px] w-[240px] h-[48px] bg-[#00751F] text-white rounded-md">
                            Pay Invoice
                            <PlusIcon className="h-6 w-6 ml-3" />
                            </button>
                        </div>
                    </div>

                </div>

                <div className='mt-4'>
                    <div>
                        <h2 className='text-[18px] text-[#272343] font-medium'>Recent transactions</h2>
                        <div className='w-[502px] '>
                            <div className='mt-2 space-y-2'>  
                                <div className='border-b-[1px]'>               
                                    <div className="flex items-center space-x-2 border-[1px] w-[200px] p-2 rounded-md h-8 mb-2">
                                        <SearchIcon className='w-6 h-6 text-gray-400' />
                                        <div className="flex relative mr-12 justify-between">
                                            <input
                                                type="text"
                                                placeholder="Search transactions"
                                                className="w-[150px] outline-none"
                                            />
                                        </div>    
                                    </div>
                                </div>
                                <div>
                                    <div className='border-b-[1px]'>
                                            <div className='flex-container mb-2'>
                                                <h2 className='text-[#272343] text-[16px] font-medium'>Description</h2>
                                                <h2 className='text-[#272343] text-[16px] font-medium mr-3'>Amount</h2>
                                            </div>
                                    </div>

                                    <div className=' border-b-[1px]'>
                                        <div className='mb-2 flex-container'>
                                            <div className='mt-2'>
                                                <p className='w-[349px] h-[48px] text-[14px] text-[#2D334A] '>
                                                Invoice for Consulting Fee to Profilr Nig. LTD
                                                PS_2021042446
                                                </p>
                                                <span className='text-[14px] text-[#2D334A]'>12/06/2020</span>
                                                <span className='text-[12px] text-gray-400 ml-2'>5:45 am</span>
                                            </div>

                                            <div>
                                                <h2>₦10.00</h2>
                                                <span className="text-[10px] text-[#00751F] bg-[#f2f6f3] w-[65px] h-[23px] p-1 rounded-full px-2">
                                                    Successful
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=' border-b-[1px]'>
                                        <div className='mb-2 flex-container'>
                                            <div className='mt-2'>
                                                <p className='w-[349px] h-[48px] text-[14px] text-[#2D334A] '>
                                                Invoice for Consulting Fee to Profilr Nig. LTD
                                                PS_2021042446
                                                </p>
                                                <span className='text-[14px] text-[#2D334A]'>12/06/2020</span>
                                                <span className='text-[12px] text-gray-400 ml-2'>5:45 am</span>
                                            </div>

                                            <div>
                                                <h2>₦10.00</h2>
                                                <span className="text-[10px] text-[#00751F] bg-[#f2f6f3] w-[65px] h-[23px] p-1 rounded-full px-2">
                                                    Successful
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=' border-b-[1px]'>
                                        <div className='mb-2 flex-container'>
                                            <div className='mt-2'>
                                                <p className='w-[349px] h-[48px] text-[14px] text-[#2D334A] '>
                                                Invoice for Consulting Fee to Profilr Nig. LTD
                                                PS_2021042446
                                                </p>
                                                <span className='text-[14px] text-[#2D334A]'>12/06/2020</span>
                                                <span className='text-[12px] text-gray-400 ml-2'>5:45 am</span>
                                            </div>

                                            <div>
                                                <h2>₦10.00</h2>
                                                <span className="text-[10px] text-[#00751F] bg-[#f2f6f3] w-[65px] h-[23px] p-1 rounded-full px-2">
                                                    Successful
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div className='ml-12 '>
                <div>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-[20px] text-[#272343] font-medium '>Invoice Summary</h2>
                        <div className="md:inline-flex items-center mt-4">
                            <button className="flex items-center justify-center text-[14px] font-bold p-[12px] w-[240px] h-[48px] bg-[#7165E3] text-white rounded-md">
                            <span>Export report</span>
                            <HiArrowDownTray className='w-5 h-5 ml-3' />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='mt-2'>
                    <div>
                       <Image src={payinvoiceCard} width={503.86} height={50} />
                    </div>
                    <div>
                        <Image src={payinvoice2} width={503.86} height={50} />
                    </div>
                  
                </div>
                
        </div>
    </div>
  )
}

export default PayInvoiceContent
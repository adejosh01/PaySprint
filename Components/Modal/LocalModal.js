import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { TiInfoLarge } from 'react-icons/ti'
import {AiOutlineClose} from 'react-icons/ai'

function LocalModal({ isVisible , onClose}) {
    if ( !isVisible ) return null;
  return (
    <div className='fixed inset-0 bg-white bg-opacity-0 flex items-center justify-between'> 
        <div className=' w-[350px] h-[643px] bg-white rounded-lg mt-24 shadow-lg'>
            <div className='m-4 ml-5'>
                <div className='flex items-center justify-between'>
                    <div className='space-y-2'>
                        <h3 className='text-[#E7AA07] text-[10px] font-medium'>SEND TO</h3>
                        <h2 className='text-[#2D334A] font-medium text-[16px]'>Adeloba Joshua</h2>
                        <p className='w-[100px] text-gray-400 h-[20px] text-[10px]'>2 Samuel Ike Street, Isolo
                            Lagos, Nigeria
                        </p>
                    </div>
                    <div>
                        <button onClick={() => onClose()}><AiOutlineClose className='h-5 w-5 bg-[#D2D2D2] text-white rounded-full' /></button>
                    </div>
                </div>
                <div className=' w-[310px] h-[295px] bg-[#FAFAFA] rounded-md border-[1px] mt-6'>
                    <div className='space-y-1'>
                        <div className='m-4'>
                            <h2 className='text-[14px] text-[#2D334A] font-medium'>Transaction details</h2>
                            <div className='space-y-[2px]'>
                                <div>
                                    <label className='text-[8px] text-gray-400 '>Purpose of Transfer</label>
                                    <div>
                                    <input placeholder='Desc' className='w-[250px] h-[35px] p-2 bg-white text-[12px] rounded-md outline-none border-[1px] ' />
                                    </div>
                                </div>

                                <div>
                                    <label className='text-[8px] text-gray-400 '>Amount</label>
                                    <div className='w-[250px] h-[35px] p-2 items-center bg-white text-[12px] rounded-md border-[1px] '>
                                        <span className='span border-r-2 pr-2 '>NGN</span>
                                        <input className='outline-none' />
                                    </div>
                                </div>

                                <div>
                                    <label className='text-[8px] text-gray-400 '>Fee</label>
                                    <div>
                                    <input placeholder='NGN 0.00' className='w-[250px] h-[35px] p-2 bg-white text-[12px] rounded-md border-[1px] outline-none ' />
                                    </div>
                                </div>

                                <div>
                                    <label className='text-[8px] text-gray-400 '>Transaction Pin</label>
                                    <div className='flex w-[250px] h-[35px] p-2 items-center bg-white text-[12px] rounded-md border-[1px] '>
                                        <span className='span border-r-2 pr-2 '><LockClosedIcon className='h-4 w-4'/></span>
                                        <input className='outline-none' />
                                    </div>
                                </div>
                                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between mt-2 mb-3'>
                    <span className='span'>Total Amount</span>
                    <h3 className='text-[20px] text-[#2D334A]'>#0.00</h3>
                </div>
                <hr />
                <div className='w-[300px] h-[70px] mt-2 p-2 bg-[#efe3c1] rounded-md border-[1px] border-[#E7AA07] mb-3'>
                     <p className="flex text-[10px] text-[#E7AA07]">
                          <div><TiInfoLarge className="h-3 w-3 mr-2 border-[1px] rounded-full border-[#E7AA07]" /></div>
                          Add the receiver's PaySprint Account Number and Transaction Pin to 
                          "Fast Track Verification for Families and Friends" in your profile.
                      </p>
                </div>
                <hr />
                <div className='mt-2'>
                    <div className='flex items-center space-x-2'>
                       <input type='checkbox' className='w-4 h-4 outline-none' value="blue" />
                       <h3 className='text-[12px] text-[#2D334A]'>Save  as beneficiary</h3>
                    </div>
                    <div className='mt-2' >
                        <button className='bg-[#7165E3] items-center w-[296px] h-[35px] text-white rounded-md' >Send Money</button>
                    </div>
                    
                </div>

           </div>
        </div>
    </div>
  )
}

export default LocalModal
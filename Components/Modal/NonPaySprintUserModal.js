import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { TiInfoLarge } from 'react-icons/ti'
import {AiOutlineClose} from 'react-icons/ai'
import { ChevronDownIcon } from '@heroicons/react/outline'


function NonPaySprintUserModal({ isVisible , onClose}) {
    if ( !isVisible ) return null;
  return (
    <div className='fixed inset-0 bg-white bg-opacity-0 flex-container'> 
        <div className=' w-[350px] h-[643px] bg-white rounded-lg mt-24 shadow-lg'>
            <div className='m-4 ml-6'>
                <div className='flex-container'>
                    <div className='space-y-2'>
                        <h3 className='text-[#E7AA07] text-[10px] font-medium'>SEND TO</h3>
                        <h2 className='text-[#2D334A] font-medium text-[16px]'>Adeloba Joshua</h2>
                        <p className='w-[100px] span h-[20px]'>2 Samuel Ike Street, Isolo
                            Lagos, Nigeria
                        </p>
                    </div>
                    <div>
                        <button onClick={() => onClose()}><AiOutlineClose className='h-5 w-5 bg-[#D2D2D2] text-white rounded-full' /></button>
                    </div>
                </div>
                <div className=' w-[296px] h-[419px] bg-[#FAFAFA] rounded-md border-[1px] mt-6'>
                    <div>
                        <div className='m-4'>
                            <h2 className='text-[14px] text-[#2D334A] font-medium'>Transaction details</h2>
                            <div className='space-y-[3px]'>
                                <div>
                                    <label className='text-[10px] text-gray-400 '>Purpose of Transfer</label>
                                    <div>
                                    <input  className='w-[250px] h-[35px] p-2 bg-white text-[12px] rounded-md outline-none border-[1px] ' />
                                    </div>
                                </div>
                               
                                <div>
                                    <label className='span'>Wallet type<span className='text-[red]'>*</span></label>
                                    <div>
                                        <button className="flex-container bg-white border-[0.7px] p-2 w-[250px] h-[35px] rounded-md outline-none">
                                            <p className="text-[#272343] text-[12px] font-medium">PaySprint  FX Wallet</p> 
                                            <ChevronDownIcon className="h-5 w-5 text-gray-400"/>
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className='span'>Payment Wallet<span className='text-[red]'>*</span></label>
                                    <div>
                                        <button className="flex-container bg-white border-[0.7px] p-2 w-[250px] h-[35px] rounded-md outline-none">
                                            <p className="text-[#272343] text-[10px] font-medium">ES_618157eca3662_TUE - GHS100.00</p> 
                                            <ChevronDownIcon className="h-5 w-5 text-gray-400"/>
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className='span'>Amount<span className='text-[red]'>*</span></label>
                                    <div className='flex w-[250px] h-[35px] p-2 items-center bg-white text-[12px] rounded-md border-[1px] '>
                                        <div className='flex items-center pr-1 border-r-2'>
                                            <span className='text-[10px]'>NGN</span>
                                            <ChevronDownIcon className='h-3 w-3' />
                                        </div>   
                                        <input className='outline-none ml-2' />
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
                                        <span className='text-[10px] text-gray-400 border-r-2 pr-2 '><LockClosedIcon className='h-4 w-4'/></span>
                                        <input type='password' className='outline-none ml-2' />
                                    </div>
                                </div>
                                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-container mt-2 mb-3'>
                    <span className='text-[12px] text-gray-400'>Total Amount</span>
                    <h3 className='text-[20px] text-[#2D334A]'>#0.00</h3>
                </div>
                           
                <div className='mt-2'>
                    <div className='mt-2' >
                        <button className='bg-[#7165E3] items-center w-[296px] h-[35px] text-white rounded-md' >Send Money</button>
                    </div>
                    
                </div>

           </div>
        </div>
    </div>
  )
}

export default NonPaySprintUserModal
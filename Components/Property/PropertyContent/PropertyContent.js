import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import niffy from "../../../public/image/niffy.jpeg"
import Image from 'next/image'
import ScrollButton from '@/Components/Utils/ScrollButton'

function PropertyContent() {
  return (
    <div className='m-6 mt-10'>
        <div>
            <p className='text-gray-400'>Manage your properties from the comfort of your couch</p>
        </div>
        <div className='mt-10'>
            <div className='w-[1032px] h-auto border-[1px] rounded-md p-4'>
                <div className='border-b-[0.8px]'>               
                    <div className="flex items-center space-x-2 border-[1px] w-[200px] p-2 rounded-md h-8 mb-2">
                        <SearchIcon className='w-6 h-6 text-gray-400' />
                        <div className="flex relative mr-12 justify-between">
                            <input
                                type="text"
                                placeholder="Search Properties"
                                className="w-[150px] outline-none"
                            />
                        </div>    
                    </div>
                </div>

                <div className="border-b-[0.8px]">
                    <div className='flex items-center space-x-44 mt-2 p-2 mb-2'>
                        <div>
                            <h2 className='text-[#272343] text-[16px] font-medium ml-6'>Property manager</h2>
                        </div>
                        <div>
                            <h2 className='text-[#272343] text-[16px] font-medium'>Location</h2>
                        </div>
                        <div>   
                        </div>
                    </div>   
                </div>

                <div className="border-b-[0.8px]">
                    <div className='flex items-center justify-between mt-2 p-2 mb-2'> 
                        <div className='flex items-center space-x-3'>
                            <Image src={niffy} width={35} height={35} className='rounded-full' />
                            <h2 className='text-[#2D334A] text-[16px] font-medium w-[120px]'>Adeloba Joshua</h2>
                        </div>
                        <div>
                            <p className='w-[316px] text-[14px]'>1 Alh. Awonusi Close, Lagos Lagos Nigeria Ketu 100242 Lagos</p>
                        </div>
                        <div>
                            <p className='text-[14px] text-[#7165E3] w-[160px] font-medium'>Manage property</p>
                        </div>
                    </div>
                </div>

                <div className="border-b-[0.8px]">
                    <div className='flex items-center justify-between mt-2 p-2 mb-2'> 
                        <div className='flex items-center space-x-3'>
                            <Image src={niffy} width={35} height={35} className='rounded-full' />
                            <h2 className='text-[#2D334A] text-[16px] font-medium w-[120px]'>Adeloba Joshua</h2>
                        </div>
                        <div>
                            <p className='w-[316px] text-[14px]'>1 Alh. Awonusi Close, Lagos Lagos Nigeria Ketu 100242 Lagos</p>
                        </div>
                        <div>
                            <p className='text-[14px] text-[#7165E3] w-[160px] font-medium'>Manage property</p>
                        </div>
                    </div>
                </div>

                <div className="border-b-[0.8px]">
                    <div className='flex items-center justify-between mt-2 p-2 mb-2'> 
                        <div className='flex items-center space-x-3'>
                            <Image src={niffy} width={35} height={35} className='rounded-full' />
                            <h2 className='text-[#2D334A] text-[16px] font-medium w-[120px]'>Adeloba Joshua</h2>
                        </div>
                        <div>
                            <p className='w-[316px] text-[14px]'>1 Alh. Awonusi Close, Lagos Lagos Nigeria Ketu 100242 Lagos</p>
                        </div>
                        <div>
                            <p className='text-[14px] text-[#7165E3] w-[160px] font-medium'>Manage property</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
        <div className='m-32 ml-52'>
            <ScrollButton />
        </div>

    </div>
  )
}

export default PropertyContent
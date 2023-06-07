import React from 'react'
import Header from '../MoneyTransferPayment/Bars/Header'
import Sidebar from '../MoneyTransferPayment/Bars/Sidebar'
import Tab from './Tabs/Tab'

function ThirdParty() {
  return (
    <>
        <Header />
        <Sidebar />

       <main>
                <div className=" ml-28 md:ml-80 lg:px-10 mt-2 space-y-4">
                    <div className="mt-6">
                        <p className="text-gray-400">Make seamless local & international transactions</p>
                    </div>
                    <Tab />
                </div>
       </main>

    </>
  )
}

export default ThirdParty
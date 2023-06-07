import React from 'react'
import Header from './Bars/Header'
import Sidebar from './Bars/Sidebar'
import UtilityBillContent from './UtilityBillContent'

function UtilityBill() {
  return (
    <>
     <Header />
     <Sidebar />
     <div className=" ml-28 md:ml-80 lg:px-10 mt-2">
        <UtilityBillContent />
     </div>

    </>
  )
}

export default UtilityBill
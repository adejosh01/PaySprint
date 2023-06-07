import React from 'react'
import Head from 'next/head'
import PayInvoice from '@/Components/PayInvoice/PayInvoice'


function payinvoice() {
  return (
   <>
    <Head>
        <title>PaySprint</title>
    </Head>
    <main>
        <PayInvoice />
    </main>
   
   </>
  )
}

export default payinvoice
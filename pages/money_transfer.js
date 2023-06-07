import Head from "next/head"
import Money_transfer from "@/Components/MoneyTransferPayment/Moneytransfer"

function money_transferPage(){
    return (
        <>
         <Head>
            <title>Paysprint</title>
         </Head>


         <main>
 
               <Money_transfer />
            
            
         </main>
        </>
    )
}

export default money_transferPage;
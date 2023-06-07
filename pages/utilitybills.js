import Head from "next/head"
import UtilityBill from "@/Components/UtilityBills/UtilityBill"


function utilitybills() {
  return (
    <>
      <Head>
        <title>PaySprint</title>
      </Head>
      <main>
        <UtilityBill />
      </main>
    </>
  )
}

export default utilitybills
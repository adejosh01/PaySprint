import Head from "next/head"
import Property from "@/Components/Property/Property"


function property() {
  return (
    <>
        <Head>
            <title>PaySprint</title>
        </Head>
        <main>
            <Property />
        </main>
    </>
  )
}

export default property
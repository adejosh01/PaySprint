import Wallet from "@/Components/Wallet/Wallet";
import Head from "next/head";

function WalletPage() {
    return(
        <>
      <Head>
        <title>Paysprint</title>
        
      </Head>
      <main>
          <Wallet />
      </main>
    </>
    )
}

export default WalletPage;
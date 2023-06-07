import Sidebar from "./Bars/Sidebar";
import Header from "./Bars/Header";
import SendFund from "./Send_Fund/SendFund";
import Card from "./Wallet_Card/WalletCard";
import WalletTrans from "./WalletTrans/WalletTrans";

function Wallet() {
    return (
        <>
            <Header />
            <Sidebar />

            <div className=" ml-28 md:ml-80 lg:px-10 mt-2">
                <SendFund />
                <Card />
                <WalletTrans />
                
            </div>
        </>
    )
}
 
export default Wallet;
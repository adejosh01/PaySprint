import Sidebar from "./Bars/Sidebar";
import Header from "./Bars/Header";
import TransactionTab from "./TransationTab/TransactionTab";
import TransTitle from "./Title/TransTitle";
import History from "./Card/History";

function Transaction() {
    return (
        <>
            <Header />
            <Sidebar />

            <div className=" ml-28 md:ml-80 lg:px-10 mt-2">
             <TransTitle />
             <History />
             <TransactionTab />
            </div>
        </>
    )
}
 
export default Transaction;
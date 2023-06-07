import Welcome from "./Welcome/Welcome";
import Card from "./Card/Card";
import TransactionView from "./TransactionView/TransactionView";
import Header from "./Bars/Header";
import Sidebar from "./Bars/Sidebar";


function Overview() {
    return(
        <>
            <Header />
            <Sidebar />
            <div className=" ml-28 md:ml-80 lg:px-10 mt-2">
               {/*Main Content */}
                <Welcome />
                <Card />
                <TransactionView />
            </div>
        </>
    )
}


export default Overview;
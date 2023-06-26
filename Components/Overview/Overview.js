import Welcome from "./Welcome/Welcome";
import Card from "./Card/Card";
import TransactionView from "./TransactionView/TransactionView";
import Header from "./Bars/Header";
import Sidebar from "./Bars/Sidebar";


function Overview() {
    return(
        <>
        <div>
            <Header />
            <Sidebar />
            <div className=" ml-32 md:ml-80 lg:px-10 mt-2 flex flex-col  ">
               {/*Main Content */}
                <Welcome />
                <Card />
                <TransactionView />
            </div>
        </div>
      
        </>
    )
}


export default Overview;
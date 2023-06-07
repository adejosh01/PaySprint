import Sidebar from "./Bars/Sidebar";
import Header from "./Bars/Header";
import SwitchTab from "./SwitchTab/SwitchTab";

function Money_transfer() {
    return(
        <>
            <Header />
            <Sidebar />

            <main>
                <div className=" ml-28 md:ml-80 lg:px-10 mt-2 space-y-6">
                    <div className="mt-6">
                        <p className="text-gray-400">Make seamless local & international transactions</p>
                    </div>
                    <SwitchTab />
                </div>
            </main>
            
        </>
    )
}


export default Money_transfer;
import Sidebar from "../MoneyTransferPayment/Bars/Sidebar"
import Header from "../MoneyTransferPayment/Bars/Header"
import NonUserForm from "./NonUserForm/NonUserForm"


function NonUserThirdPartyForm() {
  return (
    <>
        <Header />
        <Sidebar />

        <main>
            <div className="ml-32 md:ml-80 mt-2 space-y-2">
                <NonUserForm />
            </div>
        </main>
        
    </>
  )
}

export default NonUserThirdPartyForm
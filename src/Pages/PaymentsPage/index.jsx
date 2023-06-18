import Menu from "../../components/Menu"
import NavigationBar from "../../components/NavigationBar"
import MyPayments from "../../components/MyPayments"

const Payments = () => {
    return (
      <>  
        <NavigationBar showButton='true'/>
        <Menu />
        <MyPayments />
      </>    
    )
  }

export default Payments

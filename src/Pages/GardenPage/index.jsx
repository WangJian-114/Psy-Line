import GardenDesign from "../../components/GardenDesign"
import Menu from "../../components/Menu"
import NavigationBar from "../../components/NavigationBar"


const Garden = () => {
    return (
      <>  
        <NavigationBar showButton='true'/>
        <Menu />
        <GardenDesign />
      </>    
    )
  }

export default Garden

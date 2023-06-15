import NavigationBar from "../../components/NavigationBar";
import Menu from "../../components/Menu";
import Profile from "../../components/Profile";

const ProfessionalProfile = () => {
  return (
    <>
      <div> 
        <Menu />
        <NavigationBar showButton='true'/>
        <Profile />
      </div>
    </>
  )
}

export default ProfessionalProfile
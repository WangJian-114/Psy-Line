
import NavigationBar from "../../components/NavigationBar";
import Menu from "../../components/Menu";
import CalendarComponent from "../../components/DiaryPageComponent";


const DiaryP = () => {
    return (
      <div>
        <NavigationBar showButton='true'/>
        <Menu />
        <CalendarComponent />
      </div>
    );
  };
  
  export default DiaryP;

import Menu from "../../components/Menu";
import NavigationBar from "../../components/NavigationBar";
import CurrentSessions from "../../components/CurrentSessions";

const Sessions = () => {
    return (
      <div>
        <NavigationBar showButton='true'/>
        <Menu />
        <CurrentSessions />        
      </div>
    );
  };
  
  export default Sessions;

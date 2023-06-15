import BuscarPersonas from "../../components/Search";
import NavigationBar from "../../components/NavigationBar";
import Menu from "../../components/Menu";


const Search = () => {
    return (
      <div>
        <NavigationBar showButton='true'/>
        <Menu />
        <BuscarPersonas />
      </div>
    );
  };
  
  export default Search;

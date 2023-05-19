import Navigation from '../Navigation';

const Header = ({ title }) => {
    return ( 
        <header>
            <div className="general_container header_container">
                <div className="logo_container">
                    <img src="img/psyline-removebg-preview.png" alt=""/>
                    <h1><span>{title}</span> LINE </h1>
                </div>
                <Navigation />
            </div>
        </header>
    );
}
 
export default Header;
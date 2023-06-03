const Services = () => {
    return ( 
        <div className="container services_container fade-in">

            <div className="flex">
                <img src="img/servicio-al-cliente.png" alt=""/>
                <p className="service_title">Nuestro servicios</p>
            </div>

            <div className="container card_container">

                <div className="service_card">
                    <img src="img/icon1.png" alt=""/>
                    <h5>Test de personalidad</h5>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
                </div>

                <div className="service_card">
                    <img src="img/icon2.png" alt=""/>
                    <h5>Charlas de temas interesantes</h5>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
                </div>

                <div className="service_card">
                    <img src="img/icon3.png" alt=""/>
                    <h5>Expertos en cada tema</h5>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
                </div>

                <div className="service_card">
                    <img src="img/icon4.png" alt=""/>
                    <h5>Terapia Psicológica</h5>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
                </div>

            </div>

        </div>
    );
}
 
export default Services;
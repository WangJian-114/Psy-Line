const Services = () => {
    return ( 
        <div className="container services_container fade-in">

            <div className="flex">
                <img src="img/servicio-al-cliente.png" alt=""/>
                <p className="service_title">Nuestros servicios</p>
            </div>

            <div className="container card_container">

            <div className="service_card">
                    <img src="img/icon1.png" alt=""/>
                    <h5>Directorio de Psicólogos</h5>
                    <span></span>
                    <p>Se encuentran más de 500 profesionales que esperan a ser contactados por vos.</p> 
                </div>


                <div className="service_card">
                    <img src="img/icon2.png" alt=""/>
                    <h5>Jardín interactivo</h5>
                    <span></span>
                    <p>Sección en la que el terapeuta asigna tareas y se puede observar el avance terapéutico. </p> 
                </div>



                <div className="service_card">
                    <img src="img/icon4.png" alt=""/>
                    <h5>Diario Personal</h5>
                    <span></span>
                    <p>Diario que permite anotar eventos y reflexiones sobre experiencias personales.</p> 
                </div>

            </div>

        </div>
    );
}
 
export default Services;
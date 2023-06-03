const ProfesionalServices = () => {
    return (
        <div className="profesional_container">
            <div className="profesional_content">
                <div className="profesional_content_icon">
                    <img src="img/servicio-al-cliente.png" alt=""/>
                    <h3 className="heading">Por que es importante cuidar tu salud mental</h3>
                </div>

                <div className="profesional_service_container">
                    <div className="profesional_service">
                        <picture>
                            <img src="img/service1.jpg" alt=""/>
                            <p className="profesional_title">Terapia Psicológica</p>
                        </picture>

                        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quam, dolorem voluptate obcaecati </blockquote>


                          
                    </div>
                    
                    <div className="profesional_service">
                        <picture>
                            <img src="img/service2.jpg" alt=""/>  
                            <p className="profesional_title">Restablecer la confidencialidad</p>
                        </picture>
                    

                        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quam, dolorem voluptate obcaecati </blockquote>


                    </div>

                    <div className="profesional_service">
                        <picture>
                            <img src="img/service3.jpg" alt=""/>
                            <p className="profesional_title">Mejoras Laborales</p>
                        </picture>

                        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis quam, dolorem voluptate obcaecati </blockquote>


                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default  ProfesionalServices;
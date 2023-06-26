const ProfesionalServices = () => {
    return (
        <div className="profesional_container">
            <div className="profesional_content">
                <div className="profesional_content_icon">
                    <img src="img/servicio-al-cliente.png" alt=""/>
                    <h3 className="heading">¿Por qué es importante cuidar tu salud mental?</h3>
                </div>

                <div className="profesional_service_container">
                    <div className="profesional_service">
                        <picture>
                            <img src="img/service1.jpg" alt=""/>
                            <p className="profesional_title">Bienestar emocional</p>
                        </picture>

                        <blockquote>La salud mental adecuada permite experimentar un estado de bienestar emocional. Promueve sentimientos de felicidad, satisfacción y equilibrio en la vida cotidiana. </blockquote>


                          
                    </div>
                    
                    <div className="profesional_service">
                        <picture>
                            <img src="img/service2.jpg" alt=""/>  
                            <p className="profesional_title">Relaciones interpersonales</p>
                        </picture>
                    

                        <blockquote>Una salud mental positiva contribuye a establecer relaciones interpersonales saludables y satisfactorias. Facilita la comunicación efectiva, la empatía y la capacidad de resolver conflictos de manera constructiva. </blockquote>


                    </div>

                    <div className="profesional_service">
                        <picture>
                            <img src="img/service3.jpg" alt=""/>
                            <p className="profesional_title">Toma de decisiones</p>
                        </picture>

                        <blockquote>Una mente sana nos permite tener claridad mental y perspectiva para tomar decisiones informadas y racionales. Ayuda a evaluar situaciones, considerar opciones y tomar elecciones que sean beneficiosas para nuestro bienestar a largo plazo.</blockquote>


                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default  ProfesionalServices;
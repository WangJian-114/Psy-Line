const Teams = () => {
    return (
        <div className="team_container">
            <div className="team_content">

                <div className="heading">
                    <h3>Nuestro Team</h3>
                </div>

                <div className="team_card_container">
                    <div className="team_card">
                        <picture>
                            <img src="img/p1.jpg" alt=""/>
                            <p className="profesional_name">Dr. Mari Joe</p>
                        </picture>

                        <p className="professional_description">Psychology Experts</p>
                        
                        
                    </div>
                    
                    <div className="team_card">
                        <picture>
                            <img src="img/p2.jpg" alt=""/>  
                            <p className="profesional_name">Dr. John</p>
                        </picture>
                        <p className="professional_description">Psychology Experts</p>
                    </div>

                    <div className="team_card">
                        <picture>
                            <img src="img/p3.jpg" alt=""/>
                            <p className="profesional_name">Dr. Hessi Hanna</p>
                        </picture>
                        <p className="professional_description">Psychology Experts</p>
                    </div>

                    <div className="team_card">
                        <picture>
                            <img src="img/p4.jpg" alt=""/>
                            <p className="profesional_name">Dr. John</p>
                        </picture>

                        <p className="professional_description">Psychology Experts</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Teams;
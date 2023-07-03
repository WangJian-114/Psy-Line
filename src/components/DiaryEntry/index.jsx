
import React, {useState, useContext, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PatientContext from '../../context/patient/patientContext';
import DiaryContext from '../../context/diary/diaryContext';
import moment from 'moment';
import 'moment/locale/es';


const DiaryEntry = () => {

  const [state, setState] = useState(null);

  // traigo los datos del parametro
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const miDate = searchParams.get('date');
  const diaryId = searchParams.get('id');
  console.log('midate: ' + miDate);
  // Construir la URL con el valor como parámetro
  const navigate = useNavigate();

  const patientContext =  useContext(PatientContext);
  const { journalNormal } = patientContext;
  const diaryContext =  useContext(DiaryContext);
  const { putDiary, addDiary } = diaryContext;
 
 
  // marcar carita presionada
  const [estadoSeleccionado, setEstadoSeleccionado] = useState(null);
  const [description, setDescription] = useState(null);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const buscarEstado = () => {
    const objetoEncontrado = journalNormal.find((obj) => moment(obj.date).format('DD/MM/YYYY') === miDate);
    setState(objetoEncontrado);
  }

  // esto es para manejar el evento del click en la carita
  // guarda en la variable value para que luego sea pasada como parametro a la pagina del calendario
  const handleClick = (miAnimo) => {
    setEstadoSeleccionado(miAnimo); // estado de la carita si esta marcada o no
  };

  // esto es para manejar el evento del click en el boton guardar
  // envia como parametro a la pagina del calendario la carita que hice click
  const handleClickGuardar = async () => {
    const journal = {
      date: moment(miDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
      emotion: estadoSeleccionado.toUpperCase(),
      description: description,
    };
    const putJournal = {
      id: diaryId, 
      date: moment(miDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
      emotion: estadoSeleccionado.toUpperCase(),
      description: description,
    };
    if(diaryId){
      await putDiary(putJournal);
      console.log('Console debo hacer un put');
    } else {
      await addDiary(journal);
    }
    navigate('/diarypage');
  };
  
  useEffect(() => {
    buscarEstado();
    // eslint-disable-next-line
  }, [])

  if(miDate!=='' && state === null) return <p>cargando...</p> 

  return (
    <>
      <h1>holaaa</h1>
      <div className="div_diary_general_diary">
        <div className="div_diario_diary">
          <div className="div_texto_titulo_diary">
            <div className="texto_e_icono_diary">
              
              <div className="div_texto_diary">
                <h1 className="texto_titulo_diary">Diario dia { miDate.split('/')[0]}</h1>
              </div>
              <div className="div_icono_diary">

              </div>

            </div>
          </div>

          <div className="div_estados_de_animo">
            <h1 className="div_texto_selecciona_estado_animo">Selecciona tu estado de ánimo:</h1>
            <div className="div_box_estados">
              <div className="box_selecciona_estado_animo">
                <div className="div_background_estados">

                  <button className={`boton_carita_1 ${estadoSeleccionado === "lol" ? 'marcado' : '' } ` } onClick={() => handleClick("lol")}>
                    <img src="img\lol.png" className="carita_1" alt="carita_1"/>
                    
                  </button>
                  <button className={`boton_carita_2 ${estadoSeleccionado === "smile" ? 'marcado' : '' } `} onClick={() => handleClick("smile")}>
                    <img src="img\smile.png" className="carita_2" alt="carita_2"/>

                  </button>

                  <button className={`boton_carita_3 ${estadoSeleccionado === "shy" ? 'marcado' : ''} `} onClick={() => handleClick("shy")}>
                    <img src="img\shy.png" className="carita_3" alt="carita_3"/>
                    
                  </button>

                  <button className={`boton_carita_4 ${estadoSeleccionado === "neutral" ? 'marcado' : ''} `} onClick={() => handleClick("neutral")}>
                    <img src="img\neutral.png" className="carita_4" alt="carita_4"/>

                  </button>

                  <button className={`boton_carita_5 ${estadoSeleccionado === "sarcastic" ? 'marcado' : ''} `} onClick={() => handleClick("sarcastic")}>
                    <img src="img\sarcastic.png" className="carita_5" alt="carita_5"/>

                  </button>

                  <button className={`boton_carita_6 ${estadoSeleccionado === "angry" ? 'marcado' : ''} `} onClick={() => handleClick("angry")}>
                    <img src="img\angry.png" className="carita_6" alt="carita_6"/>

                  </button>

                  <button className={`boton_carita_7 ${estadoSeleccionado === "thinking" ? 'marcado' : '' } `} onClick={() => handleClick("thinking")}>
                    <img src="img\thinking.png" className="carita_7" alt="carita_7"/>

                  </button>

                  <button className={`boton_carita_8 ${estadoSeleccionado === "sad" ? 'marcado' : '' } `} onClick={() => handleClick("sad")}>
                    <img src="img\sad.png" className="carita_8" alt="carita_8"/>

                  </button>
                
                </div>
              </div>  
            </div>
          </div>

          <div className="div_seccion_titulo_boton_y_escritura">

            <div className="div_recuadro_titulo_y_escritura">
              <h1 className="texto_diario_detallar">Podes detallar más al respecto a continuación:</h1>

              <div className="div_input_diary">

                <textarea 
                  className="input_diary" 
                  type="text" 
                  rows="12"  
                  placeholder="Escribe aquí..."
                  value={description}
                  onChange={handleDescriptionChange}
                />
                
              </div>

            </div>
            
            <button className="boton_guardar_entrada_diario" onClick={() => handleClickGuardar()}>
              <h1 className="texto_guardar_entrada">Guardar</h1>
            </button>

          </div>
        
        </div>
      </div>

    </>
  );
}

export default DiaryEntry
import CancelIcon from '@mui/icons-material/Cancel';


const Anuncio = () => {
  
  const closeAnuncio = () =>{
    document.querySelector(".anuncioContainer").classList.add("removeAnuncio")
    
  }

    return (
    <div className="anuncioContainer" >
      <span onClick={closeAnuncio} id="spanCancel" ><CancelIcon/></span>
      <h3>Instrucciones</h3>
      <p>
        
        El Juego consiste en tratar de clikear todas las cartas una sola vez,
        cuando hagas click sobre una carta todas las demas cambiaran de
        posicion, por lo que deberas de recordar a cuales hiciste click y cuales
        no, buena suerte!
      </p>
    </div>
  );
};

export default Anuncio
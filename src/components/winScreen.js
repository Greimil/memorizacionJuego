// import resetGame from "./funciones";

const WinScreen = (props) => {
  const {
    setPuntuacion,
    setMaxPuntuacion,
    SetTommyState,
    SetCandyState,
    SetSonnyState,
    SetLanceState,
    SetKenState,
    SetOneState,
    SetMercedesState,
    SetDiegoState,
    SetDiazState,
    SetAuntieState,
  } = props;



  const resetGame = () => {
    setPuntuacion(0)
  setMaxPuntuacion(0)
  SetTommyState(false)
  SetCandyState(false)
  SetSonnyState(false)
  SetLanceState(false)
  SetKenState(false)
  SetOneState(false) 
  SetMercedesState(false) 
  SetDiegoState(false) 
  SetDiazState(false) 
  SetAuntieState(false)
};


  return (
    <div  className="winScreen" >
      <h1>Ganaste tienes la memoria de un elefante! </h1>
      <button
        className="btnResetWin"
        onClick={resetGame}
      >
        Volver a jugar
      </button>
    </div>
  );
};

export default WinScreen;

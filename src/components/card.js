import { useEffect} from "react";

import { ChangePosition } from "./funciones";

const Card = (props) => {
  const {
    imgLogo,
    id,
    name,
    setNameFN,
    setPuntuacion,
    puntuacion,
    stateName,
    position
  } = props;
  

  useEffect(()=>{
    
    
    let element = document.getElementById(id)
    // element.addEventListener("click", ()=>{
      //   ChangePosition(position, element)
      //   // console.log(element);
      // })
      ChangePosition(position, element)
      
  }, [puntuacion])



  const ActivateState = (e) => {
    if (stateName === true) {
      setPuntuacion(0);
      setNameFN(false);
    } else {
      setNameFN(true);
      setPuntuacion(puntuacion + 1);
    }
  };

  return (
    <div
      className="cardBorder"
      id={id}
      onClick={(e) => {
        ActivateState(e);
        
      }}
    >
      <img src={imgLogo} alt={(name, " imagen")} className="imgCard" />
      <h4 className="Nombreh4">{name}</h4>
    </div>
  );
};

export default Card;

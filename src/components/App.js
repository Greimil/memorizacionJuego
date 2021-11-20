import Header from "./header";
import React, { useEffect, useState } from "react";
import Anuncio from "./anuncio";
import Card from "./card";
import WinScreen from "./winScreen";
import { randomNumGenerator } from "./funciones";
// import {Checker} from "./funciones";

import TommyIMG from "../images/tommyVercetti.webp";
import CandyIMG from "../images/candy.jpg";
import SonnyIMG from "../images/sonnyForrelli.webp";
import lanceIMG from "../images/lance.jpg";
import paulIMG from "../images/paul.webp";
import oneIMG from "../images/one.webp";
import mercedesIMG from "../images/mercedes.jpg";
import diegoIMG from "../images/diegoMendez.webp";
import diazIMG from "../images/diaz.jpg";
import auntieIMG from "../images/auntie.png";

const App = () => {
  const [puntuacion, setPuntuacion] = useState(0);
  const [PuntuacionMax, setPuntuacionMax] = useState(0);

  //Estados De activacion
  const [TommyState, SetTommyState] = useState(false);
  const [CandyState, SetCandyState] = useState(false);
  const [SonnyState, SetSonnyState] = useState(false);
  const [LanceState, SetLanceState] = useState(false);
  const [KenState, SetKenState] = useState(false);
  const [OneState, SetOneState] = useState(false);
  const [MercedesState, SetMercedesState] = useState(false);
  const [DiegoState, SetDiegoState] = useState(false);
  const [DiazState, SetDiazState] = useState(false);
  const [AuntieState, SetAuntieState] = useState(false);
  let [ArrayPosition, setArrayPosition] = useState([])



  useEffect(() => {
    const checkMax = () => {
      if (puntuacion >= PuntuacionMax) {
        setPuntuacionMax(puntuacion);
      }
    };

    setArrayPosition(randomNumGenerator())
    

    
    checkMax();
  }, [puntuacion]);

  
    


  return (
    <div className="App">
      <Header puntuacion={puntuacion} PuntuacionMax={PuntuacionMax} />
      <Anuncio />
      <main className="cardContainer">
        <Card
          imgLogo={TommyIMG}
          id="Tommy"
          name="Tommy Vercetti"
          setPuntuacion={setPuntuacion}
          setNameFN={SetTommyState}
          puntuacion={puntuacion}
          stateName={TommyState}
          position= {ArrayPosition[0]}
        />

        <Card
          imgLogo={CandyIMG}
          id="Candy"
          name="Candy Suxx"
          setPuntuacion={setPuntuacion}
          setNameFN={SetCandyState}
          puntuacion={puntuacion}
          stateName={CandyState}
          position= {ArrayPosition[1]}
        />

        <Card
          imgLogo={SonnyIMG}
          id="Sonny"
          name="Sonny Forelli"
          setPuntuacion={setPuntuacion}
          setNameFN={SetSonnyState}
          puntuacion={puntuacion}
          stateName={SonnyState}
          position= {ArrayPosition[2]}
        />

        <Card
          imgLogo={lanceIMG}
          id="lance"
          name="Lance Vance"
          setPuntuacion={setPuntuacion}
          setNameFN={SetLanceState}
          puntuacion={puntuacion}
          stateName={LanceState}
          position= {ArrayPosition[3]}
        />

        <Card
          imgLogo={paulIMG}
          id="ken"
          name="Ken rosenberg"
          setPuntuacion={setPuntuacion}
          setNameFN={SetKenState}
          puntuacion={puntuacion}
          stateName={KenState}
          position= {ArrayPosition[4]}
        />

        <Card
          imgLogo={oneIMG}
          id="one"
          name="One of the Twins"
          setPuntuacion={setPuntuacion}
          setNameFN={SetOneState}
          puntuacion={puntuacion}
          stateName={OneState}
          position= {ArrayPosition[5]}
        />

        <Card
          imgLogo={mercedesIMG}
          id="mercedes"
          name="Mercedes"
          setPuntuacion={setPuntuacion}
          setNameFN={SetMercedesState}
          puntuacion={puntuacion}
          stateName={MercedesState}
          position= {ArrayPosition[6]}
        />

        <Card
          imgLogo={diegoIMG}
          id="diego"
          name="Diego"
          setPuntuacion={setPuntuacion}
          setNameFN={SetDiegoState}
          puntuacion={puntuacion}
          stateName={DiegoState}
          position= {ArrayPosition[7]}
        />

        <Card
          imgLogo={diazIMG}
          id="diaz"
          name="Ricardo Diaz"
          setPuntuacion={setPuntuacion}
          setNameFN={SetDiazState}
          puntuacion={puntuacion}
          stateName={DiazState}
          position= {ArrayPosition[8] }
        />

        <Card
          imgLogo={auntieIMG}
          id="auntie"
          name="auntie Poutle"
          setPuntuacion={setPuntuacion}
          setNameFN={SetAuntieState}
          puntuacion={puntuacion}
          stateName={AuntieState}
          position= {ArrayPosition[9]}
        />

      </main>
      {puntuacion === 10 ? (
          <WinScreen
            setPuntuacion = {setPuntuacion}
            setMaxPuntuacion = {setPuntuacionMax}
            SetTommyState = {SetTommyState}
            SetCandyState = {SetCandyState}
            SetSonnyState =  {SetSonnyState}
            SetLanceState = {SetLanceState}
            SetKenState = {SetKenState}
            SetOneState = {SetOneState}
            SetMercedesState = {SetMercedesState}
            SetDiegoState = {SetDiegoState}
            SetDiazState = {SetDiazState}
            SetAuntieState = {SetAuntieState}
          />
        ) : (
          ""
        )}
    </div>
  );
};

export default App;

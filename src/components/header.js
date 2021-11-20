import logo from "../images/GTA-VICE-CYTY--memory-Ga.png"
import HelpIcon from '@mui/icons-material/Help';

const Header = (props) => {
    
    const {puntuacion, PuntuacionMax} = props

    const ocultarInfo = () => {
        document.querySelector(".anuncioContainer").classList.remove("removeAnuncio")
        
    }

    const mostrarInfo = () => {
        document.querySelector(".anuncioContainer").classList.add("removeAnuncio")
        
    }
    
    return (
        <div id="logoIMG" >
            <img src={logo} alt="Gta vice city logo"  /> <span onMouseEnter={mostrarInfo} onMouseLeave={ocultarInfo} ><HelpIcon/> </span>
            <div className="scoretable" ><h4>Puntuacion: {puntuacion}</h4> <h4>Puntuacion mas alta: {PuntuacionMax} </h4> </div>
        </div>
    )
}

export default Header
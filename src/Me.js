import {MeStyled} from "./Styled";
import {MeImgStyled} from "./Styled";

const Me = () => {
 return (
  <MeStyled>
    <MeImgStyled src={process.env.PUBLIC_URL + "/static/foto-perfil.jpg"}></MeImgStyled>
    <h1>Sabrina Bueno Prata Fernandes</h1>
    <p style={{fontSize: "18px" }}>Estudante Eng. de Software</p>
  </MeStyled>
 )
}

export default Me
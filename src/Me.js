import {MeStyled} from "./Styled";
import {MeImgStyled} from "./Styled";
import Resume from "./Resume";

const Me = () => {
 return (
  <MeStyled>
    <MeImgStyled src={process.env.PUBLIC_URL + "/static/foto-perfil.jpg"}></MeImgStyled>
    <h1>Sabrina Bueno Prata Fernandes</h1>
    <p style={{fontSize: "18px" }}>Estudante Eng. de Software</p>
    <Resume/>
  </MeStyled>
 )
}

export default Me
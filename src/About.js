import { StyledAbout } from "./Styled";
import {MoreAboutStyled} from "./Styled"
import { AllTextStyled } from "./Styled";
import { TitlesStyled } from "./Styled";

const divStyle = {
  display:'flex',
  flexDirection:'column',
  justifyContent: 'center',
  alignItems:'center' 
}

const About = () => {
  return (
    <div style={divStyle}>
        <TitlesStyled>Sobre mim</TitlesStyled>
       <StyledAbout >
        <AllTextStyled>Estou em migração de carreira de CS para DEV.<br></br> Desde 02/2022 passei a estudar programação com foco em front-end, fiz diversos cursos e projetos para estudos e iniciei minha segunda graduação em Engenharia de Software, no momento busco uma primeira oportunidade na área. </AllTextStyled>
      </StyledAbout>
      <MoreAboutStyled>...</MoreAboutStyled>
    </div>
   
  )
}

export default About


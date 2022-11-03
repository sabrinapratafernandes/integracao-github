import { StyledAbout } from "./Styled";
import {MoreAboutStyled} from "./Styled"
import { AllTextStyled } from "./Styled";
import { TitlesStyled } from "./Styled";

const About = () => {
  return (
    <div>
       <StyledAbout >
        <TitlesStyled>Sobre mim</TitlesStyled>
        <AllTextStyled>Eu decidi entrar no mundo do desenvolvimento após presenciar o quanto esse trabalho pode ser impactante, o que mais me atrai é a possibilidade de trazer soluções inteligentes para a vida das pessoas de forma prática, optei pelo front-end pois me possiblita um resultado visual do que esta sendo construído, uma comunicação mais próxima as pessoas o que para mim é importante. </AllTextStyled>
        <AllTextStyled>Passei a me ver nesse mundo apenas após contato maior com a área, tanto por vivência pessoal com profissionais da área quanto por contato próximo que foi possibilitado a partir da minha última experiência.</AllTextStyled>
        <AllTextStyled> Não tenho medo de desafios, eles me movem e essa é uma das razões pelas quais optei migrar da carreira de Customer Success para Dev Front-end. </AllTextStyled>
      </StyledAbout>
      <MoreAboutStyled>...</MoreAboutStyled>
    </div>
   
  )
}

export default About


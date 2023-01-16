import { AllTextStyled } from "./Styled";
import { MoreStyled } from "./Styled";
import { TitlesStyled } from "./Styled";

const ReadBooks = () => {
  return (
    <MoreStyled>
      <TitlesStyled>Leituras concluídas</TitlesStyled> 
      < AllTextStyled><li>Estrutura de dados e algoritmos com JavaScript - Loiane Groner</li></ AllTextStyled>
      < AllTextStyled><li>Entendendo Algoritmos - Aditya Y. Bhargava</li></ AllTextStyled>
    </MoreStyled>
  )
}

export default ReadBooks
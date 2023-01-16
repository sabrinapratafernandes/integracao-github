import { TextLinksStyled } from "./Styled"
import { BlocksStyled } from "./Styled";
import { TitlesStyled } from "./Styled";
import {AlignHiglights} from "./Styled";
import {TitleHiglights} from "./Styled";


const Highlights = () => {
  return (
    <TitleHiglights>
    <TitlesStyled>Destaques:</TitlesStyled>
    <AlignHiglights>   
      <TextLinksStyled href="http://lirioconsorcios.com.br/" target="_blank"><li>Página Lírio Consórcios</li></TextLinksStyled>
      <TextLinksStyled href="https://sabrinapratafernandes.github.io/Integracao_API_ViaCep/" target="_blank"><li>Integração API Via CEP</li></TextLinksStyled>
      <TextLinksStyled href="https://sabrinapratafernandes.github.io/Portfolio_1.0/" target="_blank"><li>Primeiro Portfólio</li></TextLinksStyled>
    </AlignHiglights>
    </TitleHiglights>
    
   
  )
}

export default Highlights
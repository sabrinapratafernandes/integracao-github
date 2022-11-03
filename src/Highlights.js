import { TextLinksStyled } from "./Styled"
import { BlocksStyled } from "./Styled";
import { TitlesStyled } from "./Styled";


const Highlights = () => {
  return (
    <BlocksStyled>
       <TitlesStyled>Destaques:</TitlesStyled>
      <TextLinksStyled href="http://lirioconsorcios.com.br/" target="_blank"><li>Página Lírio Consórcios</li></TextLinksStyled>
      <TextLinksStyled href="https://sabrinapratafernandes.github.io/Integracao_API_ViaCep/" target="_blank"><li>Integração API Via CEP</li></TextLinksStyled>
      <TextLinksStyled href="https://sabrinapratafernandes.github.io/Portfolio_1.0/" target="_blank"><li>Primeiro Portfólio</li></TextLinksStyled>
    </BlocksStyled>
   
  )
}

export default Highlights
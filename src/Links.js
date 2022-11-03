import {MoreStyled} from "./Styled";
import {AllIconsStyled} from "./Styled";
import {IconsImgStyled} from "./Styled";
import { TitlesStyled } from "./Styled";


const Links = () => {

  return (
  <MoreStyled>
      <TitlesStyled>Confira minhas redes:</TitlesStyled>
    <AllIconsStyled>
      <a href="https://www.linkedin.com/in/sabrinabpf/" target="_blank">
        <IconsImgStyled src="/static/linkedin.png"></IconsImgStyled>
      </a>
      <a href="https://github.com/sabrinapratafernandes" target="_blank">
        <IconsImgStyled src="/static/github.png"></IconsImgStyled>
      </a>
      <a href="https://wa.me/5541995805171?text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20portfolio%20de%20Dev%20front-end" target="_blank">
        <IconsImgStyled src="/static/wpp-icon.png"></IconsImgStyled>
      </a>
      <a href="mailto:sabrinabuenoprata@gmail.com?subject=Contato%20via%20portf%C3%B3lio&body=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%20para%20Dev%20front-end!" target="_blank">
        <IconsImgStyled src="/static/email-icon.png"></IconsImgStyled>
      </a>
    </AllIconsStyled>
  </MoreStyled>
  )
}

export default Links
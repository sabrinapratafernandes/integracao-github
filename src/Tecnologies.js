import {MoreStyled} from "./Styled";
import {AllIconsStyled} from "./Styled";
import {IconsImgStyled} from "./Styled";
import { TitlesStyled } from "./Styled";

const Tecnologies = () => {
  return (
    <MoreStyled>
      <TitlesStyled>Tecnologias:</TitlesStyled>
      <AllIconsStyled>
        <IconsImgStyled src="/static/js.png"></IconsImgStyled>
        <IconsImgStyled src="/static/react.png"></IconsImgStyled>
        <IconsImgStyled src="/static/html-5.png"></IconsImgStyled>
        <IconsImgStyled src="/static/css-3.png"></IconsImgStyled>
      </AllIconsStyled>
    </MoreStyled>
  )
}

export default Tecnologies
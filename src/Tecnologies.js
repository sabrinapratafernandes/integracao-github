import {MoreStyled} from "./Styled";
import {AllIconsStyled} from "./Styled";
import {IconsImgStyled} from "./Styled";
import { TitlesStyled } from "./Styled";

const Tecnologies = () => {
  return (
    <MoreStyled>
      <TitlesStyled>Tecnologias:</TitlesStyled>
      <AllIconsStyled>
        <IconsImgStyled src="/Static/js.png"></IconsImgStyled>
        <IconsImgStyled src="/Static/react.png"></IconsImgStyled>
        <IconsImgStyled src="/Static/html-5.png"></IconsImgStyled>
        <IconsImgStyled src="/Static/css-3.png"></IconsImgStyled>
      </AllIconsStyled>
    </MoreStyled>
  )
}

export default Tecnologies
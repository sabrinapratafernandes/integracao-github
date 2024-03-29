import {MoreStyled} from "./Styled";
import {AllIconsStyled} from "./Styled";
import {IconsImgStyled} from "./Styled";
import { TitlesStyled } from "./Styled";

const Tecnologies = () => {
  return (
    <MoreStyled>
      <TitlesStyled>Tecnologias:</TitlesStyled>
      <AllIconsStyled>
        <IconsImgStyled src={process.env.PUBLIC_URL + "/static/js.png"}></IconsImgStyled>
        <IconsImgStyled src={process.env.PUBLIC_URL + "/static/react.png"}></IconsImgStyled>
        <IconsImgStyled src={process.env.PUBLIC_URL + "/static/html-5.png"}></IconsImgStyled>
        <IconsImgStyled src={process.env.PUBLIC_URL + "/static/css-3.png"}></IconsImgStyled>
      </AllIconsStyled>
    </MoreStyled>
  )
}

export default Tecnologies
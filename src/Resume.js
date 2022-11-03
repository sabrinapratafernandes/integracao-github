import {ButtonStyled} from "./Styled";

const Resume = () => {
  return (
    <div>
      <ButtonStyled href={process.env.PUBLIC_URL + "/static/curriculo-sabrina-dev.pdf"} download="curriculo_sabrina_dev">Baixar Currículo</ButtonStyled>
    </div>
  )
}

export default Resume
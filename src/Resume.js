import {ButtonStyled, ResumeStyled} from "./Styled";

const Resume = () => {
  return (
    <ResumeStyled >
      <ButtonStyled href={process.env.PUBLIC_URL + "/static/curriculo-sabrina-dev.pdf"} download="curriculo_sabrina_dev">Baixar Currículo</ButtonStyled>
    </ResumeStyled>
  )
}

export default Resume
import { CoursesListStyled } from "./Styled";
import { CoursesStyled } from "./Styled";
import { TitlesStyled } from "./Styled";

const Courses = () => {
  return (
    <CoursesStyled>
      <TitlesStyled>Formação:</TitlesStyled>

      <CoursesListStyled>Engenharia de Software - Uninter (Cursando)</CoursesListStyled>
      <CoursesListStyled>Marketing - Uninter (Concluído)</CoursesListStyled>


      <TitlesStyled>Cursos:</TitlesStyled>
      <CoursesListStyled href="https://www.linkedin.com/posts/sabrinabpf_udemy-course-completion-certificate-activity-6985370892419649536-vU2U?utm_source=share&utm_medium=member_desktop">
        Git Completo: Do Básico ao Avançado - Udemy
      </CoursesListStyled>

    <CoursesListStyled href="https://www.linkedin.com/posts/sabrinabpf_react-github-typescript-activity-6947315429627281408-t4Ed?utm_source=share&utm_medium=member_desktop">
      React: escrevendo com Typescript - Alura
    </CoursesListStyled>

    <CoursesListStyled>
      Imersão.dev - Alura
    </CoursesListStyled>
      
    </CoursesStyled>
  )
}

export default Courses
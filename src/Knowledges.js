import ReadBooks from "./ReadBooks";
import Courses from "./Courses";
import { BlocksStyled } from "./Styled";

const Knowledges = () => {
  return (
    <BlocksStyled>
      <ReadBooks/>
      <Courses/>
    </BlocksStyled>
  )
}

export default Knowledges
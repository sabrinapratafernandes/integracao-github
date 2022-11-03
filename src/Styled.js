import styled from "styled-components"

export const TitlesStyled = styled.h2`
  font-size: 20px
`

export const TextLinksStyled = styled.a`
  text-decoration: none;
  width: fit-content;
  color: black;
  margin: 1%;
  padding: 1%;
  border-radius: 5px;
  background: black;
  color: white;
`

export const AllTextStyled = styled.p`
  font-size: 16px;
  color: black;
  text-decoration: none;
`

export const MeStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 2%;
  padding: 5px;
  width: auto;
  font-size: 10px;
  flex-direction: column;
`

export const MeImgStyled = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  padding: 5px;
`
export const StyledAbout = styled.div`
  height: 160px;
  overflow-y: auto;
  font-size: 14px;
  position: relative;
  @media screen and (min-width: 768px){
    height: auto;
    font-size: 14px;
    position: relative;
  }
`

export const MoreAboutStyled = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  margin-top: -20px;
  margin-bottom: 0
`

export const ButtonStyled = styled.a`
  text-decoration: none;
  background-color: black;
  width: auto;
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-size: 18px;
  color: #fff;
  padding: 5px;
  display: flex;
  justify-content: center;
`
export const BlocksStyled = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px){
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`

export const MoreStyled = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AllIconsStyled = styled.div `
  display: flex;
  flex-direction: row;
`

export const IconsImgStyled = styled.img`
  width: 50px;
  height: 50px;
  padding: 10px;
`

export const CoursesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const CoursesListStyled = styled.a`
  text-decoration: none;
  width: fit-content;
  color: black;
  font-size: 16px;
  margin: 1%
`
 
export const AllProjectsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 14;
  flex-wrap:wrap
`

export const ListProjectsStyled = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14;
  flex-wrap:wrap
`

export const FooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
`
 
export const GifStyled = styled.img`
  width: 100px;
  height: auto;
  padding: 5%
`



  

  



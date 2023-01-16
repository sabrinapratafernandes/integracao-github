import styled from "styled-components"

export const TitlesStyled = styled.h2`
  font-size: 20px
`

export const TextLinksStyled = styled.a`
  text-decoration: none;
  width: 160%;
  color: black;
  margin: 2%;
  padding: 1%;
  border-radius: 5px;
  background: #515151;
  color: white;

  @media screen and (min-width: 768px){
    margin: 0.5%;
    width: fit-content;
  }
`

export const AllTextStyled = styled.p`
  font-size: 16px;
  color: black;
  text-decoration: none;
`

export const MeStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 120px;
  padding-top: 50px;
  width: 100%;
  height: 150px;
  font-size: 10px;
  flex-direction: column;
  background: #b5b5b5
`

export const MeImgStyled = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0px 2px 22px 4px rgba(0,0,0,0.6);
  position: absolute;
  margin-top: -170px
`
export const StyledAbout = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
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
  box-shadow: 0px 2px 22px 4px rgba(0,0,0,0.6);
  border-radius: 20px;
  font-size: 18px;
  color: #fff;
  padding: 5px;
  margin: 2%;
  display: flex;
  justify-content: center;
`
export const BlocksStyled = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 5%;
  flex-wrap: wrap
`

export const TitleHiglights = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AlignHiglights = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  align-items: center ;
  justify-content: flex-start ;
  font-size: 14;

 
`

export const ListProjectsStyled = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14;
  flex-wrap:wrap
  box-shadow: 0px 2px 22px 4px rgba(0,0,0,0.6);

  @media screen and (min-width: 768px){
    flex-direction: row;
    flex-wrap:wrap;
    text-align:center;
    justify-content: center;
  }

`

export const FooterStyled = styled.div`
  width: 80%;



  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  position: absolute; 
  margin-bottom: 0
 `
 
export const GifStyled = styled.img`
  width: 100px;
  height: auto;
  padding: 2%;
  padding-top: 5%
  
`



  

  



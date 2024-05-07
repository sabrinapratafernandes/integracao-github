import styled from "styled-components"

export const TitlesStyled = styled.h2`
  font-size: 20px
`

export const TextLinksStyled = styled.a`
  text-decoration: none;
  width: 100%;
  color: black;
  margin: 2%;
  padding: 1%;
  border-radius: 5px;
  background: #4C0070;
  color: white;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px){
    margin: 0.5%;
    width: 220px;
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
  height: 180px;
  font-size: 10px;
  flex-direction: column;
  background: #38419D;
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

export const ResumeStyled = styled.div`
  display: flex;
  justify-content: center;
`

export const ButtonStyled = styled.a`
  text-decoration: none;
  background-color: black;
  width: 150px;
  box-shadow: 0px 2px 22px 4px rgba(0,0,0,0.6);
  border-radius: 20px;
  font-size: 16px;
  color: #fff;
  padding: 5px;
  margin: 2%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px){
    width: 200px;
    font-size: 18px;
  }
`
export const BlocksStyled = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 1%;
  flex-wrap: wrap
`
export const MoreStyled = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AllIconsStyled = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #38419D;
  border-radius: 15px
  
`

export const IconsImgStyled = styled.img`
  width: 50px;
  height: 50px;
  padding: 10px;
`
 
export const AllProjectsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center ;
  justify-content: center;
  font-size: 14;
  width: 100vw;
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

export const FooterText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  margin-top: 15px
}
 `



  

  



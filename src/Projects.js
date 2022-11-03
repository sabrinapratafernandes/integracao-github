import { useCallback, useEffect, useState } from "react";
import { REPOSITORIES } from "./data/Repositories";

import {AllProjectsStyled} from "./Styled";
import {TextLinksStyled} from "./Styled";
import { TitlesStyled } from "./Styled";
import { ListProjectsStyled } from "./Styled";



const Projects = () => {

  const [ repos, setRepos ] = useState([])

  const loadRepos = useCallback( async () => {

    const url = 'https://api.github.com/users/sabrinapratafernandes/repos'
    const repos = await fetch(url)
      .then( res => res.json() )
      .catch( console.log )

    if(repos){
      setRepos(repos)
    }
      console.log( repos )
    /**
     * @TODO load it from API
     */
  },[])

  useEffect( () => {
    loadRepos()
  }, [loadRepos] )

  return (
    <AllProjectsStyled>
      <TitlesStyled>Confira meus projetos:</TitlesStyled>
      <ListProjectsStyled>
      {
        repos.map(repo=>(
          <TextLinksStyled href={repo.html_url} target='_blank' rel="norefeer" >
            {repo.name}
          </TextLinksStyled>
        ))
      }
      </ListProjectsStyled>
    </AllProjectsStyled>
  )
}

export default Projects 
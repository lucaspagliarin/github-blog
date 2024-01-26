import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faComment,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  PostContainer,
  PostContent,
  PostHeaderContainer,
  PostHeaderLinks,
  PostInfos,
} from './styles'
// import { getIssue, issueDetailResponse } from '../../api/api'
// import { useState } from 'react'

export function Post() {
  // const [issue, setIssue] = useState<issueDetailResponse>(
  //   {} as issueDetailResponse,
  // )

  // const fetchIssue = async () => {
  //   const response = await getIssue()

  //   setIssues(response)
  // }

  return (
    <PostContainer>
      <PostHeaderContainer>
        <PostHeaderLinks>
          <a href="#">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </a>
          <a href="#">
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </PostHeaderLinks>
        <h1>Javascript data types and data structures</h1>
        <PostInfos>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>lucaspagliarin</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </div>
        </PostInfos>
      </PostHeaderContainer>
      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
        <p>
          Dynamic typing JavaScript is a loosely typed and dynamic language.
          Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
      </PostContent>
    </PostContainer>
  )
}

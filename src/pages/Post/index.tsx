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
import { getIssue, issueDetailResponse } from '../../api/api'
import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'

export function Post() {
  const [issue, setIssue] = useState<issueDetailResponse>(
    {} as issueDetailResponse,
  )

  const { id } = useParams()

  const fetchIssue = useCallback(async () => {
    const data = await getIssue(id)

    setIssue(data)
  }, [id])

  useEffect(() => {
    fetchIssue()
  }, [fetchIssue])

  return (
    <PostContainer>
      <PostHeaderContainer>
        <PostHeaderLinks>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </Link>
          <a href={issue.html_url}>
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </PostHeaderLinks>
        <h1>{issue.title}</h1>
        <PostInfos>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{issue.user?.login}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>
              {issue.created_at &&
                formatDistanceToNow(new Date(issue.created_at), {
                  locale: ptBR,
                  addSuffix: true,
                })}
            </span>
          </div>

          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>
              {issue.comments}{' '}
              {issue.comments === 1 ? 'comentário' : 'comentários'}
            </span>
          </div>
        </PostInfos>
      </PostHeaderContainer>
      <PostContent>
        <Markdown remarkPlugins={[gfm]}>{issue.body}</Markdown>
      </PostContent>
    </PostContainer>
  )
}

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
import { getIssue } from '../../api/github'
import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'

interface IssueDetails {
  html_url: string
  owner?: string
  title: string
  body?: string | null
  comments: number
  created_at: string
}

export function Post() {
  const [issue, setIssue] = useState<IssueDetails>({} as IssueDetails)

  const { id } = useParams()

  const fetchIssue = useCallback(async () => {
    const data = await getIssue(id)

    const newIssue: IssueDetails = {
      html_url: data.html_url,
      owner: data.user?.login,
      title: data.title,
      body: data.body,
      comments: data.comments,
      created_at: data.created_at,
    }

    setIssue(newIssue)
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
            <span>{issue.owner}</span>
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

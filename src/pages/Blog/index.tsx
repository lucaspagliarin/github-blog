import { useEffect, useState } from 'react'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import {
  BlogContainer,
  FormHeader,
  PostCardContainer,
  PostListContainer,
  StyledLink,
} from './styles'

import { searchIssuesList } from '../../api/github'
import { formatParagraph } from '../../utils/textFormatter'
import Markdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface IssueProps {
  number: number
  title: string
  createdAt: string
  body?: string | null
}

export function Blog() {
  const [issues, setIssues] = useState<IssueProps[]>([] as IssueProps[])

  const fetchIssuesList = async () => {
    const data = await searchIssuesList('')

    const newIssuesList: IssueProps[] = data.items.map((issue) => {
      const { number, title, body } = issue
      return {
        number,
        title,
        createdAt: issue.created_at,
        body,
      }
    })

    setIssues(newIssuesList)
  }

  useEffect(() => {
    fetchIssuesList()
  }, [])

  return (
    <div>
      <Profile />
      <BlogContainer>
        <FormHeader>
          <h1>Publicações</h1>
          <span>
            {issues.length === 1
              ? issues.length + ' publicação'
              : issues.length + ' publicações'}
          </span>
        </FormHeader>
        <SearchForm setIssues={setIssues} />
        <PostListContainer>
          {issues.map((issue) => {
            const url = `/post/${issue.number}`
            return (
              <StyledLink to={url} key={issue.number}>
                <PostCardContainer>
                  <div>
                    <h1>{issue.title}</h1>
                    <span>
                      {issue.createdAt &&
                        formatDistanceToNow(new Date(issue.createdAt), {
                          locale: ptBR,
                        })}
                    </span>
                  </div>
                  <Markdown>{formatParagraph(issue.body, 250)}</Markdown>
                </PostCardContainer>
              </StyledLink>
            )
          })}
        </PostListContainer>
      </BlogContainer>
    </div>
  )
}

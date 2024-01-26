import { useEffect, useState } from 'react'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import {
  BlogContainer,
  PostCardContainer,
  PostListContainer,
  StyledLink,
} from './styles'

import { getIssuesList, listReposIssuesResponse } from '../../api/api'
import { formatParagraph } from '../../utils/textFormatter'
import Markdown from 'react-markdown'

export function Blog() {
  const [issues, setIssues] = useState<listReposIssuesResponse>(
    [] as listReposIssuesResponse,
  )

  const fetchIssuesList = async () => {
    const response = await getIssuesList()

    setIssues(response)
  }

  useEffect(() => {
    fetchIssuesList()
  }, [])

  return (
    <div>
      <Profile />
      <BlogContainer>
        <SearchForm />
        <PostListContainer>
          {issues.map((issue) => {
            const url = `/post/${issue.number}`
            return (
              <StyledLink to={url} key={issue.number}>
                <PostCardContainer>
                  <div>
                    <h1>{issue.title}</h1>
                    <span>Há 1 dia</span>
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

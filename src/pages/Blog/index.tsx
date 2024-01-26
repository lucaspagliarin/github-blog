import { useEffect, useState } from 'react'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer, PostCardContainer, PostListContainer } from './styles'

import { getIssuesList, listReposIssuesResponse } from '../../api/api'
import { formatParagraph } from '../../utils/textFormatter'

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
            return (
              <PostCardContainer key={issue.id}>
                <div>
                  <h1>{issue.title}</h1>
                  <span>Há 1 dia</span>
                </div>
                <p>{formatParagraph(issue.body, 250)}</p>
              </PostCardContainer>
            )
          })}
        </PostListContainer>
      </BlogContainer>
    </div>
  )
}

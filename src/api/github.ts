import { Endpoints } from '@octokit/types'
import { api } from './api'

export type searchIssuesResponse =
  Endpoints[`GET /search/issues`]['response']['data']

export type listReposIssuesResponse =
  Endpoints[`GET /repos/{owner}/{repo}/issues`]['response']['data']

export type issueDetailResponse =
  Endpoints['GET /repos/{owner}/{repo}/issues/{issue_number}']['response']['data']

export type userDataResponse =
  Endpoints['GET /users/{username}']['response']['data']

const config = {
  repo: 'github-blog',
  owner: 'lucaspagliarin',
  full: 'lucaspagliarin/github-blog',
}

export async function searchIssuesList(
  text: string,
): Promise<searchIssuesResponse> {
  const { full } = config
  const queryString = 'q=' + encodeURIComponent(`${text} repo:${full}`)
  const response = await api.request(`GET /search/issues?${queryString}`)
  console.log(queryString)
  return response.data
}

export async function getIssue(id?: string): Promise<issueDetailResponse> {
  const { repo, owner } = config
  const response = await api.request(
    `GET /repos/${owner}/${repo}/issues/${id}`,
    {
      owner,
      repo,
      issue_number: id,
    },
  )

  return response.data
}

export async function getUser(): Promise<userDataResponse> {
  const { owner } = config
  const response = await api.request(`GET /users/${owner}`, {
    username: owner,
  })

  return response.data
}

import { Octokit } from 'octokit'
import { Endpoints } from '@octokit/types'

export type listReposIssuesResponse =
  Endpoints[`GET /repos/{owner}/{repo}/issues`]['response']['data']

export type issueDetailResponse =
  Endpoints['GET /repos/{owner}/{repo}/issues/{issue_number}']['response']['data']

const config = {
  repoName: 'github-blog',
  owner: 'lucaspagliarin',
}

const api = new Octokit({
  auth: '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',
})

export async function getIssuesList(): Promise<listReposIssuesResponse> {
  const { repoName, owner } = config
  const response = await api.request(`GET /repos/${owner}/${repoName}/issues`, {
    owner,
    repo: repoName,
  })

  return response.data
}

export async function getIssue(id?: string): Promise<issueDetailResponse> {
  const { repoName, owner } = config
  const response = await api.request(
    `GET /repos/${owner}/${repoName}/issues/${id}`,
    {
      owner,
      repo: repoName,
      issue_number: id,
    },
  )

  return response.data
}

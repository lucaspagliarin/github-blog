import { Octokit } from 'octokit'
import { Endpoints } from '@octokit/types'

const config = {
  repoName: 'github-blog',
  owner: 'lucaspagliarin',
}

export type listReposIssuesResponse =
  Endpoints[`GET /repos/{owner}/{repo}/issues`]['response']['data']

const api = new Octokit({
  auth: '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',
})

export async function getIssuesList(): Promise<listReposIssuesResponse[]> {
  const { repoName, owner } = config
  const response = await api.request(`GET /repos/${owner}/${repoName}/issues`, {
    owner,
    repo: repoName,
  })

  return response.data
}

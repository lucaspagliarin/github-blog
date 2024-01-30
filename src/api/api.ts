import { Octokit } from 'octokit'

export const api = new Octokit({
  auth: import.meta.env.GITHUB_AUTH_KEY,
})

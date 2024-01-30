import { ProfileContainer, ProfileLinks, ProfileTitle } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import { getUser } from '../../../../api/github'

interface UserProps {
  name?: string | null
  avatarUrl: string
  profileUrl: string
  followers: number
  bio?: string | null
  login: string
  company: string | null
}

export function Profile() {
  const [user, setUser] = useState<UserProps>({} as UserProps)

  const fetchUser = async () => {
    const data = await getUser()

    const { name, followers, bio, login, company } = data

    const User: UserProps = {
      name,
      followers,
      bio,
      login,
      company,
      avatarUrl: `https://github.com/${login}.png`,
      profileUrl: data.html_url,
    }

    setUser(User)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <ProfileContainer>
      <img src={user?.avatarUrl} alt="profile picture" />
      <div>
        <ProfileTitle>
          <h1>{user?.name}</h1>
          <a href={user?.profileUrl}>
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileTitle>
        <p>{user?.bio}</p>
        <ProfileLinks>
          {user?.login && (
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{user?.login}</span>
            </div>
          )}

          {user?.company && (
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company}</span>
            </div>
          )}

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>
              {user?.followers === 1
                ? user.followers + ' seguidor'
                : user.followers + ' seguidores'}
            </span>
          </div>
        </ProfileLinks>
      </div>
    </ProfileContainer>
  )
}

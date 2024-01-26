import { ProfileContainer, ProfileLinks, ProfileTitle } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/lucaspagliarin.png" alt="profile picture" />
      <div>
        <ProfileTitle>
          <h1>Lucas Pagliarin</h1>
          <a href="https://github.com/lucaspagliarin">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileTitle>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ProfileLinks>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>lucaspagliarin</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Open to Work</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>2 seguidores</span>
          </div>
        </ProfileLinks>
      </div>
    </ProfileContainer>
  )
}

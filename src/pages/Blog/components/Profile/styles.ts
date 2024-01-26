import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 2rem 2.5rem;

  margin-top: -5rem;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  background-color: ${(props) => props.theme['base-profile']};

  img {
    width: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-size: 12px;
  }
`

export const ProfileLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  margin-top: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`

import { styled } from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
`

export const PostHeaderContainer = styled.div`
  padding: 2rem 2rem;
  margin-top: -5rem;
  border-radius: 10px;

  background-color: ${(props) => props.theme['base-profile']};
`
export const PostHeaderLinks = styled.div`
  color: ${(props) => props.theme.blue};
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;
    color: ${(props) => props.theme.blue};

    margin-bottom: 1.5rem;
  }
`

export const PostInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  margin-top: 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;

  img {
    width: 100%;
    max-width: 864px;
  }
`

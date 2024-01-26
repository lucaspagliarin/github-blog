import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
`

export const BlogContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;

  margin-top: 4.5rem;
`

export const PostListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 3rem;
`

export const PostCardContainer = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};

  padding: 2rem;

  border: 2px solid ${(props) => props.theme['base-post']};

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  div {
    display: flex;
    align-items: self-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 20px;
  }

  span {
    white-space: nowrap;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

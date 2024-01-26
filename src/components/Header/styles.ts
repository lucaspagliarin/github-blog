import { styled } from 'styled-components'

export const HeaderContainer = styled.div`
  height: 18.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme['base-post']};
`

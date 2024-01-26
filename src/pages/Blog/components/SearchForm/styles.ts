import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: 1.175rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }

  input {
    display: flex;
    width: 100%;

    margin-top: 0.75rem;

    padding: 0.75rem 1rem;

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
  }
`

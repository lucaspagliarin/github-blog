import styled from 'styled-components'

export const SearchFormContainer = styled.form`
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

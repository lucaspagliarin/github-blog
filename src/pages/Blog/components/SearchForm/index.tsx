import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { searchIssuesList } from '../../../../api/github'
import debounce from 'lodash.debounce'
import { SearchFormContainer } from './styles'
import { IssueProps } from '../..'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

interface SearchFormProps {
  setIssues: React.Dispatch<React.SetStateAction<IssueProps[]>>
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm(props: SearchFormProps) {
  const { setIssues } = props
  const [search, setSearch] = useState('')

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const onSubmit = handleSubmit((formData) => {
    console.log(formData)
  })

  const { onChange, ...restSearchProps } = register('query')

  const debounceSearch = debounce((v) => setSearch(v), 300)

  const handleInputChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target

      debounceSearch(value)
      onChange(event)
    },
    [debounceSearch, onChange],
  )

  const handleSearch = useCallback(async () => {
    const data = await searchIssuesList(search)

    const newIssuesList: IssueProps[] = data.items.map((issue) => {
      const { number, title, body } = issue
      return {
        number,
        title,
        createdAt: issue.created_at,
        body,
      }
    })

    setIssues(newIssuesList)
  }, [setIssues, search])

  useEffect(() => {
    if (!isSubmitting) {
      handleSearch()
    }
  }, [isSubmitting, search, handleSearch])

  return (
    <SearchFormContainer onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        value={search}
        onChange={handleInputChange}
        {...restSearchProps}
      />
    </SearchFormContainer>
  )
}

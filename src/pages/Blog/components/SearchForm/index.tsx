import React, { ChangeEvent, useCallback, useState } from 'react'
import { searchIssuesList } from '../../../../api/github'

import { SearchFormContainer } from './styles'
import { IssueProps } from '../..'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useTimer } from 'react-timer-hook'

interface SearchFormProps {
  setIssues: React.Dispatch<React.SetStateAction<IssueProps[]>>
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm(props: SearchFormProps) {
  const { setIssues } = props
  const [searchValue, setSearchValue] = useState('')

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const onSubmit = handleSubmit((formData) => {
    console.log(formData)
  })

  const { onChange, ...restSearchProps } = register('query')

  const handleSearch = useCallback(async () => {
    const data = await searchIssuesList(searchValue)

    console.log(data)

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
  }, [setIssues, searchValue])

  // Timer para fazer a requisição a API

  const time = new Date()
  time.setSeconds(time.getSeconds() + 0.5)
  const { restart } = useTimer({
    expiryTimestamp: time,
    onExpire: handleSearch,
  })

  const restartTimer = useCallback(() => {
    const time = new Date()
    time.setSeconds(time.getSeconds() + 0.5)
    restart(time)
  }, [restart])

  const handleInputChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setSearchValue(value)
      onChange(event)
      restartTimer()
    },
    [onChange, restartTimer],
  )

  return (
    <SearchFormContainer onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        value={searchValue}
        onChange={handleInputChange}
        {...restSearchProps}
      />
    </SearchFormContainer>
  )
}

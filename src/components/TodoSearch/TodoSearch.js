import React, { useContext } from 'react'
import { TodoContex } from '../../context'
import { Input } from './styles'

const TodoSearch = () => {
    const { searchValue, setSearchValue, loading } = useContext(TodoContex)

    return (
      <Input 
        autoComplete='off'
        placeholder='Buscar TODO'
        value={ searchValue }
        onChange={(e) => setSearchValue(e.target.value) }
        disabled={ loading } />
    )
}

export default TodoSearch
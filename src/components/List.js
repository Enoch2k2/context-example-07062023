import React, { useContext } from 'react'
import { ItemsContext } from '../context/ItemsContext'

const List = () => {
  const { items } = useContext(ItemsContext);

  console.log('items', items)
  return (
    <div>List</div>
  )
}

export default List
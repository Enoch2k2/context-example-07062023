import React, { useContext } from 'react'
import { ItemsContext } from '../context/ItemsContext'
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
  const { items } = useContext(ItemsContext);
  const { name } = useParams()
  const item = items.filter(item => item.name === name)
  return (
    <div>ItemDetails</div>
  )
}

export default ItemDetails
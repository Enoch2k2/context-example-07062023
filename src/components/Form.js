import React, { useContext } from 'react'
import { ItemsContext } from '../context/ItemsContext'

const Form = () => {
  const { setItems } = useContext(ItemsContext);

  console.log('setItems', setItems)
  return (
    <div>Form</div>
  )
}

export default Form
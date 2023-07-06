import { createContext, useEffect, useState } from "react";


const ItemsContext = createContext([]);

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // fetch to get all of the items and update state
  })

  const addItem = item => {
    // fetch to back end update and add item reponse to the items state
  }

  return <ItemsContext.Provider value={{ items, setItems, addItem }}>{ children }</ItemsContext.Provider>
}

export { ItemsContext, ItemsProvider }
import React from 'react'
import { ItemType } from '../types/types'

export default function Item( { 
  item,
  itemsCRUD
 }: { 
  item: ItemType,
  itemsCRUD: {
    updateItem: ( arg0: string, arg1: Partial<ItemType> ) => void, 
    removeItem: ( arg0: string) => void,
  }
} ) {
  return (
    <li key={item.id} id={`item-${item.id}`}>
      {/* <span>{item.id}//</span> */}
      <span>{item.content}</span>
      <div>
      <span role="button" aria-label="toggle item status" onClick={() => itemsCRUD.updateItem(item.id, { completed: !item.completed} )}>
        {item.completed? 'Completed' : 'Pending'}
      </span>
      <button role="button" aria-label="delete item" onClick={() => itemsCRUD.removeItem(item.id)}>Remove</button>
      </div>
    </li>
  )
}

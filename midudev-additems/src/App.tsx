// React dependencies
import React from 'react';
import { useState } from 'react'

// External packages dependencies
import { v4 as uuidv4 } from 'uuid';

// Types
import { ItemType } from './types/types'

// Styles
import './App.css'

const INITIAL_ITEMS: ItemType[] = [
  // good to have some examples if I want to test.
  // { id: uuidv4(), content: 'Item 1', completed: false },
  // { id: uuidv4(), content: 'Item 2', completed: false },
  // { id: uuidv4(), content: 'Item 3', completed: false },
]

function App() {
  const [items, setItems] = useState<ItemType[]>(INITIAL_ITEMS);


  // when clicking on the Add button or Return, adds a new item and clears the input
  const handleSubmitItem = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    // get the item content from the form.
    const input = e.currentTarget.elements.namedItem('item');
    if (input instanceof HTMLInputElement && input.value?.length ) {
      // create with id and set completed to false.
      const value: string = input.value;
      const newItem = { 
        id: uuidv4(), 
        content: value,
        completed: false
      };
      addItem(newItem);
      input.value = '';
    }

  }

  function updateItem(index: number, item: Partial<ItemType> ) {
    const newItems = [...items];
    newItems[index] = {...newItems[index], ...item};
    setItems(newItems);
  }
  function removeItem(index: number) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }
  function addItem( theItem: ItemType) {
    const newItems = [...items];
    newItems.push(theItem);
    setItems(newItems);
  }

  return (
    <article>
      <h1>Exercice basic react + typescript + jest unit test</h1>
      <main>
        <div className="main-column">
          <form onSubmit={ handleSubmitItem } aria-label='Add elements to the list'>
            <input type="text" name="item" placeholder="Add a new item"/>
            <button>
              ADD
            </button>
          </form>
        </div>

        <aside>
        <ul className="items-list">
          { items.map( (item, index) => (
            <li key={item.id} id={`item-${item.id}`}>
              {/* <span>{item.id}//</span> */}
              <span>{item.content}</span>
              <div>
              <span role="button" aria-label="toggle item status" onClick={() => updateItem(index, { completed: !item.completed} )}>
                {item.completed? 'Completed' : 'Pending'}
              </span>
              <button role="button" aria-label="delete item" onClick={() => removeItem(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </aside>
      </main>
    </article>
  )
}

export default App

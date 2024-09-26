// React dependencies
import React from 'react';

// External packages dependencies
import { v4 as uuidv4 } from 'uuid';

// Types
import { ItemType } from './types/types'

// Components
import Item from './components/Item'

// Internal dependencies and helpers
import useItems from './hooks/useItems'

// Styles
import './App.css'


const INITIAL_ITEMS: ItemType[] = [
  // good to have some examples if I want to test.
  // { id: uuidv4(), content: 'Item 1', completed: false },
  // { id: uuidv4(), content: 'Item 2', completed: false },
  // { id: uuidv4(), content: 'Item 3', completed: false },
]

function App() {
  // # STATES
  // =============
  const {items, addItem, removeItem, updateItem} = useItems(INITIAL_ITEMS);

  // # HOOKS
  // =============
  // silence is golden.

  // # HANDLES
  // =============
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

  // # METHODS
  // =============
  // silence is golden

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
          { items.map( (item) => (
            <Item key={item.id}
              item={item}
              itemsCRUD={{
                updateItem,
                removeItem
              }}
            />) ) }
        </ul>
      </aside>
      </main>
    </article>
  )
}

export default App

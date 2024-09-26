// React dependencies
import React, { useEffect } from 'react';
import { useState } from 'react'

// External packages dependencies
import { v4 as uuidv4 } from 'uuid';

// Types
import { ItemType } from '../types/types'

// Internal dependencies and helpers
import { getLocalStorage, updateLocalStorage } from '../localStorage';

/**
 * 
 * @param initialItems an array of items
 * @returns 
 */
const useItems = function( initialItems: ItemType[] ) {

  // # REACT Hooks 
  // =============
  const localStorageItems: ItemType[] | null = JSON.parse(getLocalStorage('items')?? 'null');

  const [items, setItems] = useState<ItemType[]>( localStorageItems || initialItems);

  // init
  useEffect(() => {
    const initialItemasString : string | null = getLocalStorage('items');
    const initialItems: ItemType[] = initialItemasString? JSON.parse(initialItemasString) : items;
    setItems(initialItems);
  }, []);

  // Logic (Methods)
  // =============
  const addItem = function( theItem: ItemType) {
    const newItems = [...items];
    newItems.push(theItem);
    setItems(newItems);
    updateLocalStorage('items', JSON.stringify(newItems));
  }
  const removeItem = function(itemId: string) {
    const index = items.findIndex( (item) => item.id === itemId);
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    updateLocalStorage('items', JSON.stringify(newItems));
  }
  const updateItem = function(itemId: string, item: Partial<ItemType> ) {
    const index = items.findIndex( (item) => item.id === itemId);
    const newItems = [...items];
    newItems[index] = {...newItems[index], ...item};
    setItems(newItems);
    updateLocalStorage('items', JSON.stringify(newItems));
  }

  return {
    items,
    addItem,
    removeItem,
    updateItem
  }
}

export default useItems;
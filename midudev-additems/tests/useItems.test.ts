import { renderHook, act } from '@testing-library/react';
// Types
import { ItemType } from '../src/types/types'

import { test, describe } from '@jest/globals';

import { v4 as uuidv4 } from 'uuid';

import useItems from '../src/hooks/useItems';


// The Tests
// ===========================

describe('UseItems Hook Tests', () => {

  // ## Test 1
  test('Init hook with some items', ()=>{

    const INITIAL_ITEMS: ItemType[] = [
      { id: uuidv4(), content: 'Item 1', completed: false },
      { id: uuidv4(), content: 'Item 2', completed: false },
      { id: uuidv4(), content: 'Item 3', completed: false },
    ]

    const { result } = renderHook( () => useItems(INITIAL_ITEMS) );
    
    // Test 1.1: ensure the hook initializes the items
    expect(result.current.items.length).toBe(3);
  });

// ## Test 2
  test('Add, Remove and Update Item', ()=>{

    const { result } = renderHook( () => useItems([]) );

    const initialItemsLength = result.current.items.length;

    // # Test 2.1: ensure the hook was called ok.
    expect(result.current.items.length).toBe(initialItemsLength);

    // # Simulates adding an object, and in the re-rendering, it is printed.
    const firstId = uuidv4();
    const secondId = uuidv4();
    act( () => {
      result.current.addItem({ id: firstId, content: 'Play videogames', completed: false });
    });
    act( () => {
      result.current.addItem({ id: secondId, content: 'Watch Movies', completed: true });
    });
    act( () => {
      result.current.addItem({ id: uuidv4(), content: 'Run Marathons', completed: false });
    });
    // # Test 2.2: check the addition of 3 new items
    expect(result.current.items.length).toBe(initialItemsLength + 3);
    
    act( () => result.current.removeItem(firstId) );
    // # Test 2.3: check the removal of the first item
    expect(result.current.items.length).toBe(initialItemsLength + 2);

    // # Test 2.4: check that the id is not repeated
    expect( result.current.items.filter( item => item.id === secondId ).length ).toBe(initialItemsLength + 1);
  });
})
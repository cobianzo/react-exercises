import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, within, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';
import { test, describe } from '@jest/globals';


// Helpers and constants
// ===========================

const addItem = async function( Rendered: RenderResult, text: string) {
  const { getByRole } = Rendered;
  const inputText = screen.getByPlaceholderText('Add a new item') as HTMLInputElement;
  const form = getByRole('form');
  // ## Test that the input exists
  expect(inputText).toBeInTheDocument();
  expect(form).toBeInTheDocument();
  // ## The user action
  await userEvent.type(inputText, text);
  
  fireEvent.submit(form);
}


// The Tests
// ===========================

describe('App component', () => {

  // Test 1: Render the initial list of items
  it('the app works', () => {
    render(<App />);  

    // expect( screen.getByText('Exercise basic react + typescript + jest test E2E')).toBeInTheDocument();
  });
  
  // Test End-to-End test to test the complete flow of adding, toggling status, and removing an item
  test('End-to-End test for adding, toggling, and removing an item', async () => {

    const renderedApp = render(<App />);

    // # 1. Basic test. Is the title there?
    // =================================
    // expect( screen.getByText('Exercise basic react + typescript + jest test E2E')).toBeInTheDocument();

    // # 2. Start by adding two items
    // =================================
    await addItem(renderedApp, 'I like Nutella');
    const newItemContent = 'I like chocolate';
    await addItem(renderedApp, newItemContent);

    // ## Test: Confirm they are present
    expect(screen.getAllByRole('listitem', undefined)).toHaveLength(2);
    expect(screen.getByText(newItemContent)).toBeInTheDocument();
    
    // # 3. Delete one of the items
    // =================================
    const listItems = screen.getAllByRole('listitem');
    const deleteItemButton = listItems[listItems.length-1].querySelector('[aria-label="delete item"]') as HTMLButtonElement;
    
    fireEvent.click(deleteItemButton);

    // ## Test: Confirm that the item is not present anymore
    expect(screen.getAllByRole('listitem', undefined)).toHaveLength(1);
    expect(screen.queryByText(newItemContent)).toBeNull();


    // # 4. togglig the status to Completed. And back to Pending. 
    // =================================
    const firstItem = screen.getAllByRole('listitem')[0];
    const toggleItemButton = within(firstItem).getByLabelText('toggle item status');
    
    // ## Test: Confirm that the item is in Pending status
    let label = within(firstItem).queryByText('Pending');
    expect(label).toBeInTheDocument();
    
    // ## Test: Confirm that the item is Completed after clicking it
    fireEvent.click(toggleItemButton);
    label = within(firstItem).queryByText('Completed');
    expect(label).toBeInTheDocument();

    // ## Test: And back to pending
    fireEvent.click(toggleItemButton);
    label = within(firstItem).queryByText('Pending');
    expect(label).toBeInTheDocument();
  });


});
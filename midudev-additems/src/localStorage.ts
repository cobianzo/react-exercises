
/**
 * Adds a key-value pair to localStorage.
 * @param {string} key - The key to store the value under.
 * @param {string} value - The value to store.
 */
export const addLocalStorage = function(key, value) {
  localStorage.setItem(key, value);
  console.log(`Added: ${key} = ${value}`);
}

/**
* Removes an item from localStorage by key.
* @param {string} key - The key of the item to remove.
*/
export const removeLocalStorage = function(key) {
  localStorage.removeItem(key);
  console.log(`Removed: ${key}`);
}

/**
* Updates an existing item in localStorage.
* If the key does not exist, it will create a new entry.
* @param {string} key - The key of the item to update.
* @param {string} value - The new value to set.
*/
export const updateLocalStorage = function(key: string, value: string | object | null) {
  let savedValue = value;
  if ( savedValue === null || savedValue === '' || savedValue === undefined ) {
    removeLocalStorage(key);
    return;
  } else if ( typeof savedValue === 'object' ) {
    savedValue = JSON.stringify(value);
  } 
  localStorage.setItem(key, savedValue);
  console.log(`Updated: ${key} = ${savedValue}`);
}

/**
* Retrieves an item from localStorage by key.
* @param {string} key - The key of the item to retrieve.
* @returns {string|null} - The value associated with the key or null if not found.
*/
export const getLocalStorage = function(key: string) : string | null {
  const value = localStorage.getItem(key);
  if (value !== null) {
      console.log(`Retrieved: ${key} = ${value}`);
  } else {
      console.log(`Key not found: ${key}`);
      return null;
  }
  return value;
}
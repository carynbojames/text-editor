import { openDB } from 'idb';

const initdb = async () =>
  openDB('jateDB', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database')
  // Create connection to the database
  const jateDB = await openDB('jateDB', 1)
  const tx = jateDB.transaction('jateDB', 'readwrite')
  // Open the desired object store
  const store = tx.objectStore('jate')
  const request = store.put({ id: 1, value: content}) //
  const result = await request
  console.log('Data saved to the database', result)
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from the database')
  const jateDB = await openDB('jateDB', 1)
  const tx = jateDB.transaction('jateDB', 'readonly')
  const store = tx.objectStore('jate')
  const request = store.getAll()
  // const request = store.get(1)
  const result = await request
  console.log('result.value', result)
  return result
  // return result?.value
};

initdb();

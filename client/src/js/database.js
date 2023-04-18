import { openDB } from 'idb';

const initdb = async () =>
  openDB('jateDb', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate store already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate store created');
    },
  });

//edit db entry
export const putDb = async (content) => {
  console.log('CHANGE the database')
  const jateDb = await openDB('jateDb', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
}

//get from database
export const getDb = async () => {
  console.log('GET all from the database')
  const jateDb = await openDB('jateDb', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  return result[result.length - 1]?.content;
}

initdb();

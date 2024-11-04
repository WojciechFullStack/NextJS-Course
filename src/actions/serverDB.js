// app/actions/serverDB.js
'use server';

import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017'; // Upewnij się, że masz zmienną środowiskową z URI do MongoDB
const dbName = 'NextJS'; // Nazwa bazy danych
const collectionName = 'article'; // Nazwa kolekcji

export async function writeDB(data) {
  if (!uri) {
    throw new Error('Brak URI do połączenia z MongoDB');
  }

  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.insertOne({ text: data, createdAt: new Date() });
    console.log('Dane zapisane do MongoDB:', data);
  } catch (error) {
    console.error('Błąd podczas zapisu do MongoDB:', error);
  } finally {
    await client.close();
  }
}
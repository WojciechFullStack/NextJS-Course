'use client'

// app/page.js (lub inna strona w Next.js)
import { useState } from 'react';
import { writeDB } from '@/actions/serverDB';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    await writeDB(inputValue);
    setInputValue(''); // Czyszczenie pola wejściowego po wysłaniu
  }

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Wpisz coś..."
          required
        />
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}

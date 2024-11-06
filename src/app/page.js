'use client'

// app/page.js (lub inna strona w Next.js)
import { useState } from 'react';
import { writeDB } from '@/actions/serverDB';
import Link from 'next/link';
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
      <Link href="/register">
        <button className="bg-gray-800 text-white py-2 px-4 rounded-lg">
          Zarejestruj się
        </button>
      </Link>
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

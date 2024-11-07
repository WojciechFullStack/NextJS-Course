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
      <form className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg">
        <label htmlFor="input-field" className="block text-gray-700 font-semibold mb-2">Type something it will be preserved</label>
        <input id="input-field" type="text" name="input" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" placeholder="Type..."></input>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">Send</button>
      </form>

      <a href="/register">
        <button className="bg-gray-800 text-white py-2 px-4 rounded-lg m-8">
          Register by redirection to /register page
        </button>
      </a>
      {/*<form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Wpisz coś..."
          required
        />
        <button type="submit">Wyślij</button>
      </form>*/}
    </div>
  );
}

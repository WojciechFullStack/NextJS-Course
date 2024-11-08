'use client'

// app/page.js (lub inna strona w Next.js)
import { useState } from 'react';
import { writeDB } from '@/actions/serverDB';
import Link from 'next/link';
import ArticlesList from '@/components/articles';

export default  function Home() {
  const [inputValue, setInputValue] = useState('');




  return (
    
    <div>
      <h1>Home Page</h1>
      <ArticlesList/>
    </div>
  );
}

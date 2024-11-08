// app/ArticlesList.js
"use client";
import { useEffect, useState } from "react";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  // Funkcja do pobrania artykułów z endpointu API
  async function fetchArticles() {
    try {
      const response = await fetch("/api/articles");
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }
      const data = await response.json();
      setArticles(data);
    } catch (e) {
      setError(e.message);
    }
  }

  // Użycie `useEffect` do wykonania żądania przy montowaniu komponentu
  useEffect(() => {
    fetchArticles();
  }, []);

  // Renderowanie komponentu
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : articles.length > 0 ? (
        <ul className="space-y-4">
          {articles.map((article) => (
            <li key={article._id} className="border border-gray-300 p-4 rounded-md">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-700 mt-2">{article.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No articles found.</p>
      )}
    </div>
  );
}

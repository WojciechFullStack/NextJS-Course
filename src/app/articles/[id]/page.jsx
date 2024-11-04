// app/articles/[id]/page.jsx
import { MongoClient, ObjectId } from 'mongodb';

async function fetchArticleById(id) {
  const uri = 'mongodb://localhost:27017';
  const dbName = 'NextJS';
  const collectionName = 'article';

  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const article = await collection.findOne({ _id: new ObjectId(id) });

    return article;
  } catch (error) {
    console.error('Błąd podczas odczytu z MongoDB:', error);
    return null;
  } finally {
    await client.close();
  }
}

export default async function ArticlePage({ params }) {
  const article = await fetchArticleById(params.id);

  if (!article) {
    return <div>Artykuł nie został znaleziony</div>;
  }

  return (
    <div>
      <h1>{article.text}</h1>
    </div>
  );
}

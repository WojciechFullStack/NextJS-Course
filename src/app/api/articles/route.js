import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  const { db } = await connectToDatabase();
  const articles = await db.collection("article").find({}).toArray();
  return new Response(JSON.stringify(articles), { status: 200 });
}

export async function POST(request) {
  const { db } = await connectToDatabase();
  const { title, content } = await request.json();
  await db.collection("article").insertOne({ title, content });
  return new Response(JSON.stringify({ message: "Article added" }), { status: 201 });
}
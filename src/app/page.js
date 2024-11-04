'use client'
import CustomParagraph from '../components/CustomParagraph';
import { writeToDB } from '@/actions/serverDB';

export default function Home() {
  // Możesz tutaj dodać wywołanie akcji serwerowej.
  async function handleLog() {
    await writeToDB("This is a server-side log from the Home page");
  }

  return (
    <div>
      <h1>Home Page</h1>
      <CustomParagraph text="This is a custom paragraph for the Home Page." />
      <button onClick={handleLog}>Log to Server</button>
    </div>
  );
}

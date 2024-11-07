import Link from 'next/link';

export default function ErrorNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center p-8 bg-white shadow-md rounded-lg max-w-md">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">404</h2>
        <p className="text-lg mb-6">Oops! The page you’re looking for doesn’t exist.</p>
        <Link href="/">
          <div className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Return Home
          </div>
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
export default function Content() {
    return (<div className="">
      <Link href="/main">
        <button className="bg-gray-800 text-white py-2 px-4 rounded-lg">
          Dsiplay main content from internel URL
        </button>
      </Link>
    </div>);
  }
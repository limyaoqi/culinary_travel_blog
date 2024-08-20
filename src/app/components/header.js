import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">Culinary Travel Blog</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/experiences" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Culinary Experiences
              </Link>
              <Link href="/reviews" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Restaurant Reviews
              </Link>
              <Link href="/guides" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Food Travel Guides
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

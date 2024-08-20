'use client'

export default function Guides() {
  return (
    <div>


      <main className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 fade-in">Food Travel Guides</h1>
          </div>
        </header>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Guide to Street Food in Penang</h2>
            <p className="text-gray-700">
              Penang is famous for its street food, and this guide will help you navigate the best hawker stalls and night markets.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">A Culinary Journey Through Kuala Lumpur</h2>
            <p className="text-gray-700">
              Explore the diverse food scene in Malaysia&apos;s capital, from traditional Malay dishes to international cuisines.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Top Seafood Spots in Sabah</h2>
            <p className="text-gray-700">
              Sabah&apos;s coastal location makes it a paradise for seafood lovers. Discover the best places to enjoy fresh catches.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Must-Try Local Delicacies in Melaka</h2>
            <p className="text-gray-700">
              Melaka offers a unique blend of flavors, reflecting its rich history. This guide will introduce you to the must-try dishes.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">&copy; 2024 Culinary Travel Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

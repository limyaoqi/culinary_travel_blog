'use client'

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 fade-in">
              Culinary Travel Bio
            </h1>
          </div>
        </header>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-12">
          {/* Introduction */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              Welcome to the Culinary Travel Blog
            </h2>
            <p className="text-gray-700">
              Explore the best culinary experiences Malaysia has to offer. From
              street food to fine dining, we bring you the tastes and stories
              behind the dishes.
            </p>
          </div>

          {/* Featured Culinary Experiences */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              Featured Culinary Experiences
            </h2>
            <ul className="space-y-4">
              <li className="text-gray-700">
                🎉 Penang Food Festival - Discover the flavors of Penang with
                local experts.
              </li>
              <li className="text-gray-700">
                🍜 Kuala Lumpur Street Food Tour - Taste the best of KL&apos;s
                vibrant street food scene.
              </li>
              <li className="text-gray-700">
                🍴 Malacca Heritage Cuisine - Dive into the rich culinary
                history of Malacca.
              </li>
            </ul>
          </div>

          {/* Popular Restaurant Reviews */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              Popular Restaurant Reviews
            </h2>
            <ul className="space-y-4">
              <li className="text-gray-700">
                ⭐️ Nasi Kandar Line Clear - A must-visit for nasi kandar lovers
                in Penang.
              </li>
              <li className="text-gray-700">
                ⭐️ Restoran Rebung Chef Ismail - A traditional Malay buffet
                experience in KL.
              </li>
              <li className="text-gray-700">
                ⭐️ The Daily Fix Cafe - Cozy cafe with excellent pancakes in
                Malacca.
              </li>
            </ul>
          </div>

          {/* Recent Blog Posts */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Recent Blog Posts</h2>
            <ul className="space-y-4">
              <li className="text-gray-700">
                📅 <strong>Aug 20, 2024:</strong> &apos;Top 10 Street Foods You
                Must Try in Malaysia&apos;
              </li>
              <li className="text-gray-700">
                📅 <strong>Aug 15, 2024:</strong> &apos;A Guide to Traditional
                Malaysian Desserts&apos;
              </li>
              <li className="text-gray-700">
                📅 <strong>Aug 10, 2024:</strong> &apos;Exploring the Coffee
                Culture in Kuala Lumpur&apos;
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">
            &copy; 2024 Culinary Travel Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

"use client";

import Image from "next/image";

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
            <h2 className="text-2xl font-bold mb-4 text-black">
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
            <h2 className="text-2xl font-bold mb-4 text-black">
              Featured Culinary Experiences
            </h2>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4 sm:space-x-6">
                <img
                  className="h-20 w-20 object-cover rounded-lg"
                  src="https://penangfoodie.sgp1.digitaloceanspaces.com/2023/05/305192660_5485299468230363_3700483471520694736_n.jpeg"
                  alt="Penang Food Festival"
                />
                <span className="text-gray-700 text-lg">
                  🎉 Penang Food Festival - Discover the flavors of Penang with
                  local experts.
                </span>
              </li>
              <li className="flex items-center space-x-4 sm:space-x-6">
                <img
                  className="h-20 w-20 object-cover rounded-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTeucFKBV0eFH3iOYZs7jhm1g8foN-3AkIQg&s"
                  alt="Kuala Lumpur Street Food Tour"
                />
                <span className="text-gray-700 text-lg">
                  🍜 Kuala Lumpur Street Food Tour - Taste the best of KL&apos;s
                  vibrant street food scene.
                </span>
              </li>
              <li className="flex items-center space-x-4 sm:space-x-6">
                <img
                  className="h-20 w-20 object-cover rounded-lg"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR3oy5zT6vFfyk1_PLBSV5Z027U6EvMNqn3YWuAywfimGQefUdW"
                  alt="Malacca Heritage Cuisine"
                />
                <span className="text-gray-700 text-lg">
                  🍴 Malacca Heritage Cuisine - Dive into the rich culinary
                  history of Malacca.
                </span>
              </li>
            </ul>
          </div>

          {/* Popular Restaurant Reviews */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Popular Restaurant Reviews
            </h2>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4 sm:space-x-6">
                <img
                  className="h-20 w-20 object-cover rounded-lg"
                  src="https://sumptuousblog.wordpress.com/wp-content/uploads/2010/06/img_4425_1.jpg"
                  alt="Nasi Kandar Line Clear"
                />
                <span className="text-gray-700 text-lg">
                  ⭐️ Nasi Kandar Line Clear - A must-visit for nasi kandar
                  lovers in Penang.
                </span>
              </li>
              <li className="flex items-center space-x-4 sm:space-x-6">
                <img
                  className="h-20 w-20 object-cover rounded-lg"
                  src="https://www.junipersjournal.com/wp-content/uploads/2023/06/20230622_114249.jpg"
                  alt="Restoran Rebung Chef Ismail"
                />
                <span className="text-gray-700 text-lg">
                  ⭐️ Restoran Rebung Chef Ismail - A traditional Malay buffet
                  experience in KL.
                </span>
              </li>
              <li className="flex items-center space-x-4 sm:space-x-6">
                <img
                  className="h-20 w-20 object-cover rounded-lg"
                  src="https://cafeculture.my/wp-content/uploads/2020/10/90221762_3066705146700051_9149198900840628224_o-768x1029.jpg"
                  alt="The Daily Fix Cafe"
                />
                <span className="text-gray-700 text-lg">
                  ⭐️ The Daily Fix Cafe - Cozy cafe with excellent pancakes in
                  Malacca.
                </span>
              </li>
            </ul>
          </div>

          {/* Recent Blog Posts */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Recent Blog Posts
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md">
                <div className="text-lg text-gray-800">
                  📅 <strong>Aug 20, 2024:</strong>
                </div>
                <div className="flex-1">
                  <a
                    href="https://simplyenak.com/must-try-malaysian-street-food/"
                    className="text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                  >
                    &apos;Top 10 Street Foods You Must Try in Malaysia&apos;
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Discover the must-try street foods that make Malaysia a
                    culinary paradise.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md">
                <div className="text-lg text-gray-800">
                  📅 <strong>Aug 15, 2024:</strong>
                </div>
                <div className="flex-1">
                  <a
                    href="https://trysmartbite.com/blog/best-traditional-malay-desserts"
                    className="text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                  >
                    &apos;A Guide to Traditional Malaysian Desserts&apos;
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    A sweet journey through Malaysia’s traditional desserts,
                    from kuih to cendol.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md">
                <div className="text-lg text-gray-800">
                  📅 <strong>Aug 10, 2024:</strong>
                </div>
                <div className="flex-1">
                  <a
                    href="https://www.bbc.com/storyworks/travel/selamat-kembali-to-malaysia/the-perfect-pour-exploring-malaysias-coffee-culture?utm_source=SW-Nav&utm_medium=SW-Nav&utm_campaign=selamat-kembali-to-malaysia&utm_content=A5"
                    className="text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                  >
                    &apos;Exploring the Coffee Culture in Kuala Lumpur&apos;
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Dive into the vibrant coffee scene of Kuala Lumpur, from
                    traditional kopitiams to modern cafes.
                  </p>
                </div>
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

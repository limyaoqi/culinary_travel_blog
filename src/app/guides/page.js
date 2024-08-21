"use client";

export default function Guides() {
  return (
    <div>
      <main className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 fade-in">
              Food Travel Guides
            </h1>
          </div>
        </header>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-12">
          {/* Guide to Street Food in Penang */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://foodforthought.com.my/wp-content/uploads/Food-For-Thought-Title-Cards_Ulimate-Guide-Penang-Street-Food.jpg"
              alt="Street Food in Penang"
              className="w-full h-64 object-cover rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-2xl font-bold mb-4 text-black">
              Guide to Street Food in Penang
            </h2>
            <p className="text-gray-700 mb-4">
              Penang is famous for its street food, and this guide will help you
              navigate the best hawker stalls and night markets.
            </p>
            <a
              href="https://foodforthought.com.my/ultimate-guide-penang-street-food/"
              className="text-blue-500 hover:underline"
            >
              Read more &rarr;
            </a>
          </div>

          {/* A Culinary Journey Through Kuala Lumpur */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://wild-about-travel.com/wp-content/uploads/2012/07/Kl-Food-Ciki11.jpg"
              alt="Culinary Journey in Kuala Lumpur"
              className="w-full h-64 object-cover rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-2xl font-bold mb-4 text-black">
              A Culinary Journey Through Kuala Lumpur
            </h2>
            <p className="text-gray-700 mb-4">
              Explore the diverse food scene in Malaysia&apos;s capital, from
              traditional Malay dishes to international cuisines.
            </p>
            <a
              href="https://wild-about-travel.com/culinary-journey-kuala-lumpur/"
              className="text-blue-500 hover:underline"
            >
              Read more &rarr;
            </a>
          </div>

          {/* Top Seafood Spots in Sabah */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://i0.wp.com/sgmytrips.com/wp-content/uploads/2020/03/best-seafood-restaurant-in-kota-kinabalu.jpg?fit=640%2C427&ssl=1"
              alt="Seafood Spots in Sabah"
              className="w-full h-64 object-cover rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-2xl font-bold mb-4 text-black">
              Top Seafood Spots in Sabah
            </h2>
            <p className="text-gray-700 mb-4">
              Sabah&apos;s coastal location makes it a paradise for seafood
              lovers. Discover the best places to enjoy fresh catches.
            </p>
            <a
              href="https://sgmytrips.com/best-seafood-restaurant-in-kota-kinabalu/"
              className="text-blue-500 hover:underline"
            >
              Read more &rarr;
            </a>
          </div>

          {/* Must-Try Local Delicacies in Melaka */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://assets.nst.com.my/images/articles/djw_hp_A_beginner%E2%80%99s_guide_to_must-try_food_in_Melaka_NSTfield_image_listing_featured.var_1704949206.jpg"
              alt="Local Delicacies in Melaka"
              className="w-full h-64 object-cover rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-2xl font-bold mb-4 text-black">
              Must-Try Local Delicacies in Melaka
            </h2>
            <p className="text-gray-700 mb-4">
              Melaka offers a unique blend of flavors, reflecting its rich
              history. This guide will introduce you to the must-try dishes.
            </p>
            <a
              href="https://www.nst.com.my/news/nation/2024/01/999875/beginners-guide-must-try-food-melaka"
              className="text-blue-500 hover:underline"
            >
              Read more &rarr;
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">
            &copy; 2024 Culinary Travel Blog. This Page is only for educational
            purposes only..
          </p>
        </div>
      </footer>
    </div>
  );
}

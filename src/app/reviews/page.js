'use client'

export default function Review() {
  return (
    <div>
     

      <main className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 fade-in">Restaurant Reviews</h1>
          </div>
        </header>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-12">
          {/* Featured Review */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Featured Review</h2>
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold">The Majestic Hawker Stall - Penang</h3>
              <p>
                This humble hawker stall in Penang is anything but ordinary. Serving up the best Char Kway Teow, 
                it&apos;s a must-visit for any foodie. The noodles are perfectly cooked, with just the right amount of 
                char from the wok, and the prawns are fresh and succulent. Pair it with their homemade chili sauce 
                for an extra kick. Highly recommended!
              </p>
            </div>
          </div>

          {/* Recent Reviews */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Recent Reviews</h2>
            <ul className="space-y-4">
              <li className="text-gray-700">
                🍣 <strong>Sushi Zanmai - Kuala Lumpur:</strong> A delightful sushi experience with a wide range of fresh options and a cozy atmosphere.
              </li>
              <li className="text-gray-700">
                🍛 <strong>Restoran Rebung - Kuala Lumpur:</strong> An authentic Malay dining experience with a buffet that features traditional dishes from all over Malaysia.
              </li>
              <li className="text-gray-700">
                🍜 <strong>Ipoh Tuck Kee - Ipoh:</strong> Famous for its Hokkien Mee, this spot has been a favorite for locals and tourists alike.
              </li>
            </ul>
          </div>

          {/* Top-Rated Restaurants */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Top-Rated Restaurants</h2>
            <p className="text-gray-700 mb-4">
              These restaurants have received the highest praise from our reviewers for their exceptional food, service, and atmosphere.
            </p>
            <ul className="space-y-4">
              <li className="text-gray-700">🌟 <strong>FOO CHUK - Penang:</strong> Renowned for its Hokkien Mee and great customer service.</li>
              <li className="text-gray-700">🌟 <strong>Lai Po Heen - Kuala Lumpur:</strong> An upscale dining experience with exquisite Chinese cuisine.</li>
              <li className="text-gray-700">🌟 <strong>The Steakhouse - Kuala Lumpur:</strong> A meat lover&apos;s paradise, offering the finest steaks in town.</li>
            </ul>
          </div>

          {/* Submit Your Own Review */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Submit Your Own Review</h2>
            <p className="text-gray-700 mb-4">
              Have a restaurant you&apos;d like to share? Submit your review and let others know about your experience.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit Review</button>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">&copy; 2024 Culinary Travel Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

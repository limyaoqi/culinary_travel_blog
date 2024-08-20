'use client'

export default function Experiences() {
  return (
    <div>
      <main className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Culinary Experiences</h1>
          </div>
        </header>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-12">
          {/* Overview of Malaysian Culinary Culture */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Malaysian Culinary Culture</h2>
            <p className="text-gray-700">
              Malaysian cuisine is a melting pot of flavors influenced by Malay, Chinese, Indian, and various indigenous cultures. 
              It&apos;s known for its bold flavors, fragrant spices, and the use of fresh herbs. From street food to fine dining, 
              Malaysian culinary culture offers something for everyone.
            </p>
          </div>

          {/* Highlight Specific Food-Related Experiences */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Must-Try Culinary Experiences</h2>
            <ul className="space-y-4">
              <li className="text-gray-700">🍳 <strong>Cooking Classes:</strong> Learn to cook traditional Malaysian dishes with local chefs.</li>
              <li className="text-gray-700">🎉 <strong>Food Festivals:</strong> Experience the vibrant food festivals like the Penang Food Festival and more.</li>
              <li className="text-gray-700">🛶 <strong>River Dining:</strong> Enjoy a unique dining experience on a traditional boat while cruising along Malaysian rivers.</li>
            </ul>
          </div>

          {/* Interactive Map of Culinary Hotspots */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Culinary Hotspots</h2>
            <p className="text-gray-700 mb-4">Discover the best places to eat in Malaysia, from street vendors to gourmet restaurants.</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.185991484154!2d101.6929392!3d3.1412015999999964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d5a72b74d7%3A0x2497864566578ab1!2sKuala%20Lumpur%20City%20Centre!5e0!3m2!1sen!2smy!4v1625478780021!5m2!1sen!2smy"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Tips for Experiencing Local Food Like a Local */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Tips for Eating Like a Local</h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Embrace street food - It&apos;s where you&apos;ll find some of the most authentic and affordable meals.</li>
              <li>Ask locals for recommendations - They know the hidden gems that tourists often miss.</li>
              <li>Try a little bit of everything - Malaysian cuisine is diverse, so don&apos;t be afraid to sample new dishes.</li>
              <li>Understand the local etiquette - For example, eating with your hands is common when enjoying traditional Malay dishes.</li>
            </ul>
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

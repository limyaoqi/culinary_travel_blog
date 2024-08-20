import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us - Culinary Travel Blog</title>
        <meta name="description" content="Learn more about the Culinary Travel Blog and our mission to explore Malaysia's rich culinary landscape." />
      </Head>

      <main className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          </div>
        </header>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              The Culinary Travel Blog is dedicated to exploring Malaysia&apos;s rich culinary landscape, sharing authentic food experiences, and guiding travelers to the best dining spots.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700">
              We are a team of passionate food enthusiasts and travel writers who love to explore new flavors and cultures. Our goal is to bring you closer to the heart of Malaysia through its food.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-700">
              We believe in authenticity, diversity, and respect for local traditions. Our content is created with these values in mind, ensuring that our readers get a true taste of Malaysian cuisine.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Join Us on This Journey</h2>
            <p className="text-gray-700">
              Whether you&apos;re a seasoned traveler or a food lover looking for new experiences, we invite you to join us on this culinary adventure. Follow our blog for the latest reviews, guides, and tips.
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

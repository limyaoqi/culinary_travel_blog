"use client";

export default function About() {
  return (
    <div>
      <main className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 fade-in">
              About Us
            </h1>
          </div>
        </header>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-12">
          {/* Our Mission Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-black">Our Mission</h2>
            <p className="text-gray-700">
              The Culinary Travel Blog is dedicated to exploring Malaysia&apos;s
              rich culinary landscape, sharing authentic food experiences, and
              guiding travelers to the best dining spots.
            </p>
          </div>

          {/* Who We Are Section with Team Profiles */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-black">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              We are a team of passionate food enthusiasts and travel writers
              who love to explore new flavors and cultures. Our goal is to bring
              you closer to the heart of Malaysia through its food.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <img
                  src="https://decisionsystemsgroup.github.io/workshop-html/img/john-doe.jpg"
                  alt="Team Member 1"
                  className="w-32 h-32 rounded-full mx-auto"
                />
                <p className="mt-2 text-black font-semibold">John Doe</p>
                <p className="text-gray-500">Food Writer</p>
              </div>
              <div className="text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNc_Ghfe-EN197PtlilSJCLlOn9j-YzMeRA&s"
                  alt="Team Member 2"
                  className="w-32 h-32 rounded-full mx-auto"
                />
                <p className="mt-2 text-black font-semibold">Jane Smith</p>
                <p className="text-gray-500">Travel Photographer</p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>

          {/* Our Values Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-black">Our Values</h2>
            <p className="text-gray-700">
              We believe in authenticity, diversity, and respect for local
              traditions. Our content is created with these values in mind,
              ensuring that our readers get a true taste of Malaysian cuisine.
            </p>
          </div>

          {/* Call-to-Action Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Join Us on This Journey
            </h2>
            <p className="text-gray-700 mb-4">
              Whether you&apos;re a seasoned traveler or a food lover looking
              for new experiences, we invite you to join us on this culinary
              adventure. Follow our blog for the latest reviews, guides, and
              tips.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
              Subscribe to Our Newsletter
            </button>
          </div>

          {/* Testimonials Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-black">
              What Our Readers Say
            </h2>
            <div className="space-y-4">
              <blockquote className="text-gray-700">
                &quot;This blog has been my go-to source for all things food in
                Malaysia. The reviews are spot-on, and the guides are incredibly
                helpful!&quot;
                <cite className="block mt-2 text-black font-semibold">
                  - Alex W.
                </cite>
              </blockquote>
              <blockquote className="text-gray-700">
                &quot;I discovered so many hidden gems thanks to the Culinary
                Travel Blog. The team clearly knows their stuff.&quot;
                <cite className="block mt-2 text-black font-semibold">
                  - Sarah L.
                </cite>
              </blockquote>
              {/* Add more testimonials as needed */}
            </div>
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

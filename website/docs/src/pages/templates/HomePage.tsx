import {Link} from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center py-20">
          <h1 className="text-6xl md:text-7xl font-semibold mb-4 bg-clip-text text-transparent  bg-blue-50">
            Templates
          </h1>
          <p className="text-md md:text-xl max-w-4xl mx-auto text-gray-300">
            Craft stunning, high-performance products with our modern and
            minimalist templates. Powered by React, Next.js, Tailwind CSS,
            Framer Motion, and TypeScript.
          </p>
        </section>

        <div className="flex flex-col items-center justify-center py-10 -mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-20">
            {/* First Card */}

            <div className="bg-black w-[400px] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700">
              <Link to="/templates/landing" className="cursor-pointer">
                <div className="p-2">
                  <img
                    src="/chaicode_landing_page.png"
                    alt="Chaicode Landing Template"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">
                    Chaicode Landing Template
                  </h2>
                  <span className="bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded-full">
                    Popular
                  </span>
                </div>
                <p className="text-gray-400 mb-6">
                  A simple, clean, modern and minimalistic landing page template
                  for startups. Filled with microinteractions to keep your users
                  engaged.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">$10</span>
                  <a href="https://rzp.io/rzp/FuM0wyrD">
                    <button className="bg-white text-gray-900 cursor-pointer font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      Buy now
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Second Card */}

            <div className="bg-black w-[400px] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700">
              <Link to="/templates/dashboard" className="cursor-pointer">
                <div className="p-2">
                  <img
                    src="/dashboard_landing_page.jpeg"
                    alt="Dashboard Template"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">
                    Admin Dashboard Template
                  </h2>
                  <span className="bg-green-600 text-white text-sm font-medium py-1 px-3 rounded-full">
                    New
                  </span>
                </div>
                <p className="text-gray-400 mb-6">
                  A comprehensive dashboard template with analytics, user
                  management, and customizable components for your SaaS or admin
                  applications.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">$10</span>
                  <a href="https://rzp.io/rzp/FuM0wyrD">
                    <button className="bg-white text-gray-900 cursor-pointer font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      Buy now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

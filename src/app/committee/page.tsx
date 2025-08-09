import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Committee() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-center text-white mb-16">FragSoc Committee</h1>
            
            <div className="text-center mb-16">
              <Image
                src="/logo.png"
                alt="FragSoc Logo"
                width={220}
                height={220}
                className="mx-auto rounded-full shadow-2xl mb-8"
              />
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Meet the dedicated team behind FragSoc! Our committee members work hard to organize events,
                manage teams, and ensure everyone has an amazing experience in our gaming community.
              </p>
            </div>

            <div className="bg-indigo-950 border border-indigo-800 rounded-2xl p-12 mb-16">
              <h2 className="text-3xl font-bold text-indigo-400 mb-8 text-center">Get in Touch</h2>
              <p className="text-xl text-indigo-200 text-center mb-8 leading-relaxed">
                Have questions about events, want to join a team, or need help with something?
                Our committee is here to help!
              </p>
              <div className="flex justify-center">
                <a
                  href="https://discord.gg/vaTV73U5Hz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-indigo-700 transition-all duration-300 text-lg shadow-lg hover:shadow-indigo-600/25"
                >
                  Contact Us on Discord
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
              <div className="bg-gray-900 rounded-2xl shadow-2xl p-10 text-center border border-gray-800 hover:border-blue-500 transition-all duration-300">
                <div className="w-28 h-28 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-3xl">P</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">President</h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Overall leadership and coordination of society activities, events, and strategic direction.
                </p>
                <div className="text-sm text-gray-400">
                  Contact via Discord for general inquiries
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl shadow-2xl p-10 text-center border border-gray-800 hover:border-green-500 transition-all duration-300">
                <div className="w-28 h-28 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-3xl">T</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Treasurer</h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Manages society finances, budgets for events, and handles membership fees and sponsorships.
                </p>
                <div className="text-sm text-gray-400">
                  Contact for financial and membership matters
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl shadow-2xl p-10 text-center border border-gray-800 hover:border-purple-500 transition-all duration-300">
                <div className="w-28 h-28 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-3xl">S</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Secretary</h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Handles communications, meeting minutes, and administrative tasks for the society.
                </p>
                <div className="text-sm text-gray-400">
                  Contact for administrative questions
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl shadow-2xl p-10 text-center border border-gray-800 hover:border-red-500 transition-all duration-300">
                <div className="w-28 h-28 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-3xl">E</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Esports Coordinator</h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Organizes competitive teams, manages tournament entries, and coordinates with esports leagues.
                </p>
                <div className="text-sm text-gray-400">
                  Contact to join competitive teams
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl shadow-2xl p-10 text-center border border-gray-800 hover:border-yellow-500 transition-all duration-300">
                <div className="w-28 h-28 bg-gradient-to-r from-yellow-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-3xl">L</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">LAN Coordinator</h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Plans and organizes LAN parties, manages equipment, and coordinates with venues.
                </p>
                <div className="text-sm text-gray-400">
                  Contact about LAN parties and events
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl shadow-2xl p-10 text-center border border-gray-800 hover:border-indigo-500 transition-all duration-300">
                <div className="w-28 h-28 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-3xl">S</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Social Secretary</h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Organizes weekly social events, casual gaming sessions, and community building activities.
                </p>
                <div className="text-sm text-gray-400">
                  Contact about social events
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-12 text-center border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6">Want to Get Involved?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                Interested in joining the committee or helping out with events? We're always looking for
                enthusiastic members to help make FragSoc even better! Committee positions typically open
                at the beginning of each academic year.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://discord.gg/vaTV73U5Hz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-indigo-700 transition-all duration-300 text-lg shadow-lg hover:shadow-indigo-600/25"
                >
                  Join Our Discord
                </a>
                <a
                  href="https://yorksu.org/activities/view/fragsoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-green-700 transition-all duration-300 text-lg shadow-lg hover:shadow-green-600/25"
                >
                  Get Membership
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

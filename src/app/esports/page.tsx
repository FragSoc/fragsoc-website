import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Esports() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-center text-white mb-16">University of York Esports</h1>
            
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-2xl p-12 mb-16">
              <h2 className="text-4xl font-bold mb-6">Competitive Gaming Excellence</h2>
              <p className="text-2xl leading-relaxed">
                FragSoc serves as the University of York's hub for competitive gaming, fielding teams
                in major UK university esports competitions and representing York with pride and skill.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
              <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800 hover:border-indigo-500 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">NSE (National Student Esports)</h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  The premier university esports competition in the UK. We compete across multiple game titles
                  in both individual and team competitions.
                </p>
                <div className="text-indigo-400 font-semibold text-lg mb-3">Current Games:</div>
                <ul className="text-gray-300 space-y-2">
                  <li>• League of Legends</li>
                  <li>• Counter-Strike 2</li>
                  <li>• Valorant</li>
                  <li>• Overwatch 2</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">NUEL (National University Esports League)</h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  A comprehensive university esports league covering a wide range of popular competitive titles
                  with seasonal tournaments and regular matches.
                </p>
                <div className="text-purple-400 font-semibold text-lg mb-3">Competition Tiers:</div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Premier Division</li>
                  <li>• Division 1</li>
                  <li>• Division 2</li>
                  <li>• Division 3</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800 hover:border-green-500 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">ESL Masters & More</h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Beyond the major university leagues, we participate in various specialized tournaments
                  and competitions throughout the year.
                </p>
                <div className="text-green-400 font-semibold text-lg mb-3">Other Competitions:</div>
                <ul className="text-gray-300 space-y-2">
                  <li>• ESL Masters</li>
                  <li>• ETF2L (Team Fortress 2)</li>
                  <li>• RotR (Rite of the Rose)</li>
                  <li>• Various Gaming Tournaments</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-950 border border-red-800 rounded-2xl p-12 mb-16">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-2/3">
                  <h2 className="text-4xl font-bold text-red-400 mb-6">Roses Tournament</h2>
                  <p className="text-xl text-red-200 mb-6 leading-relaxed">
                    Every year, FragSoc plays a crucial role in organizing and participating in the esports
                    events during Roses, the annual sports tournament between the University of York and
                    Lancaster University.
                  </p>
                  <p className="text-xl text-red-200 mb-8 leading-relaxed">
                    This historic rivalry extends into the digital realm, where our teams compete across
                    multiple game titles to earn valuable points for York in this prestigious inter-university
                    competition.
                  </p>
                  <a
                    href="https://roseslive.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-red-700 transition-all duration-300 text-lg shadow-lg hover:shadow-red-600/25"
                  >
                    Visit Roses Website
                  </a>
                </div>
                <div className="lg:w-1/3">
                  <Image
                    src="/roses.png"
                    alt="Roses Tournament"
                    width={220}
                    height={220}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Join Our Esports Teams</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Think you have what it takes to represent the University of York in competitive gaming?
                We're always looking for skilled players to join our teams. From casual competitive play
                to serious tournament preparation, there's a place for every level of commitment.
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
                  href="/committee"
                  className="bg-gray-700 text-white font-semibold py-4 px-10 rounded-full hover:bg-gray-600 transition-all duration-300 text-lg shadow-lg"
                >
                  Contact Committee
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

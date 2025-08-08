import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-center text-white mb-16">About FragSoc</h1>
            
            <div className="flex flex-col lg:flex-row items-center gap-16 mb-16">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-white mb-8">Who We Are</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  FragSoc is the University of York's Video Gaming and LAN society, operating as part of the
                  University of York Student Union. We are a Games and Fandom society that welcomes gamers of
                  all skill levels and interests.
                </p>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Founded with the mission to bring together the gaming community at the University of York,
                  we provide a platform for students to connect through their shared love of gaming, whether
                  that's competitive esports, casual gaming sessions, or exploring new game worlds together.
                </p>
              </div>
              <div className="lg:w-1/3">
                <Image
                  src="/logo.png"
                  alt="FragSoc Logo"
                  width={280}
                  height={280}
                  className="rounded-full shadow-2xl mx-auto"
                />
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-12 mb-16 border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-10">What We Do</h2>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">LAN Parties</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We host approximately 6 LAN parties throughout the year, bringing together dozens
                    of gamers for weekend-long gaming sessions with tournaments, prizes, and plenty of fun.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Weekly Events</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Regular social events and in-house tournaments provide ongoing opportunities for
                    members to meet, play games, and build friendships within the gaming community.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Competitive Esports</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We field competitive teams in NSE, NUEL, ESL Masters, ETF2L, RotR and many other
                    UK university gaming competitions.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Roses Tournament</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Each term, we organize and participate in Roses, the annual sports tournament
                    against Lancaster University, representing York in esports competitions.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Join Our Community</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Whether you're a competitive player looking to join our esports teams, a casual gamer
                wanting to make new friends, or someone curious about gaming culture, FragSoc welcomes you!
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
                  href="https://yusu.org/activities/view/fragsoc"
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

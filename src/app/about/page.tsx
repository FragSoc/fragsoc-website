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

            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-16 text-center">What We Do</h2>
              
              {/* Gaming and LAN Events */}
              <div id="lan-events" className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-white mb-6">Gaming and LAN Events</h3>
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    We host weekly game nights along with LANs every term, bring your PC / Laptop / Console, or just yourself. A chill event, where you can meet and hang out.
                  </p>
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    At LANs there are many planned events such as tourneys, couch parties, viewing parties, 24-hour servers and much more are open to anyone wanting to participate, some even sporting prizes and goodies to win!
                  </p>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Once you arrive, our committee will PAT test any equipment you have and you are welcome to set up using the network ports and power sockets available! You will also be required to sign-in to our dedicated LAN channels in the FragSoc Discord to stay up to date on scheduled events and announcements.
                  </p>
                  <a
                    href="https://discord.gg/vaTV73U5Hz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
                  >
                    Join Our Discord to Find Out More
                  </a>
                </div>
                <div className="lg:w-1/2">
                  <Image
                    src="/aboutImages/event.png"
                    alt="Gaming and LAN Events"
                    width={400}
                    height={300}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Society Socials */}
              <div id="socials" className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-white mb-6">Society Socials</h3>
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    As well as online events, FragSoc holds a number of social events every few weeks to break the ice and provide an opportunity to meet likeminded peers.
                  </p>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    These include group meals, pub quizzes, board game socials and much more! Members of committee are always in attendance and these events are a great way to meet the rest of the community.
                  </p>
                  <a
                    href="https://discord.gg/vaTV73U5Hz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
                  >
                    Join Our Discord to Find Out More
                  </a>
                </div>
                <div className="lg:w-1/2">
                  <Image
                    src="/aboutImages/socials.png"
                    alt="Society Socials"
                    width={400}
                    height={300}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* University of York Esports */}
              <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-white mb-6">University of York Esports</h3>
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    With the ever-growing student esports scene, we are the University of York's hub for national tournaments, varsity events and inter-college challenges within the University.
                  </p>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Each term we field teams for a range of games to compete in NSE and The NUEL tournaments, as well as ESL Masters, ETF2L, RotR and much more! Esports currently holds 4 points in our annual Roses event and FragSoc helps the University of York and Lancaster University organise teams and events each year.
                  </p>
                  <a
                    href="/esports"
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
                  >
                    Find Out More
                  </a>
                </div>
                <div className="lg:w-1/2">
                  <Image
                    src="/aboutImages/esportslogo.png"
                    alt="University of York Esports"
                    width={400}
                    height={300}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Twitch Streaming */}
              <div id="twitch-streaming" className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-white mb-6">Twitch Streaming</h3>
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    At FragSoc we also have a dedicated Twitch channel with a regular stream schedule consisting of our very own members. Contact the current Stream Managers if you would like to give streaming a go as we have plenty of resources to help you get started.
                  </p>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Special events and tournaments are also produced and streamed on this account so make sure to give us a follow. In the last charity stream we ran, we raised over £2600 to be split between Doctors without Borders, Macmillan Cancer Support and York Marrow!
                  </p>
                  <a
                    href="https://www.twitch.tv/fragsoc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
                  >
                    FragSoc Twitch
                  </a>
                </div>
                <div className="lg:w-1/2">
                  <Image
                    src="/aboutImages/twitch.png"
                    alt="Twitch Streaming"
                    width={400}
                    height={300}
                    className="w-full rounded-lg shadow-lg"
                  />
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

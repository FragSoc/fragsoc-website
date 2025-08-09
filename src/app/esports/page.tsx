import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Esports() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-center text-white mb-16">University of York Esports</h1>
            
            {/* About Us Section */}
            <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-white mb-8">About Us</h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  We have numerous teams at UoY Esports, competing in Overwatch, League of Legends, CS:GO, Valorant, Rocket League, Rainbow 6 Siege, and Team Fortress 2. Some of our teams have won titles such as NSE Winter 2018 Rocket League Regional Champion, NSE Winter 2019 & 2020 Overwatch National Champion, and NSE Winter 2019 CS:GO National Champion.
                </p>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  We have also triumphed over our Lancaster rivals in a number of Roses events that take place each year and have a friendly, inter-uni relationship with the York St. John University when it comes to competitive gaming.
                </p>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  In 2017-18, FragSoc hosted the largest CS:GO Invitational LAN event in the UK with 8 of the top teams competing to win a £500 prize, sponsored by TalkTalk. The Masters tourney ran from the 24th-25th November 2018 with York emerging as the reigning champions. We're looking forward to hosting more of these large scale events in the future for a number of games!
                </p>
              </div>
              <div className="lg:w-1/3">
                <Image
                  src="/aboutImages/esportslogo.png"
                  alt="University of York Esports Logo"
                  width={287}
                  height={287}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>

            {/* National University Leagues Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">National University Leagues</h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                {/* NSE Section */}
                <div className="text-center">
                  <div className="mb-6">
                    <Image
                      src="/esports/NSE.png"
                      alt="NSE Logo"
                      width={224}
                      height={122}
                      className="mx-auto rounded-lg"
                    />
                  </div>
                  <a
                    href="https://www.nse.gg/universities/university-of-york/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
                  >
                    Visit Our NSE Page
                  </a>
                </div>

                {/* NUEL Section */}
                <div className="text-center">
                  <div className="mb-6">
                    <Image
                      src="/esports/NUEL_TournamentCard.png"
                      alt="NUEL Logo"
                      width={163}
                      height={122}
                      className="mx-auto rounded-lg"
                    />
                  </div>
                  <a
                    href="https://thenuel.com/university/university-of-york"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
                  >
                    Visit our NUEL Page
                  </a>
                </div>
              </div>

              {/* Notable Alumni Section */}
              <div className="text-center mb-12">
                <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                  Below you can find some of our notable alumni who have made a name for themselves in numerous esports leagues:
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {/* Splendour */}
                  <div className="text-center">
                    <div className="mb-4">
                      <Image
                        src="/esports/splendour.png"
                        alt="Lyubomir Splendour Kozlovski"
                        width={191}
                        height={191}
                        className="mx-auto rounded-full"
                      />
                    </div>
                    <h6 className="text-lg font-semibold text-white">
                      Lyubomir "Splendour" Kozlovski
                    </h6>
                  </div>

                  {/* BoarControl */}
                  <div className="text-center">
                    <div className="mb-4">
                      <Image
                        src="/esports/boarcontrol.png"
                        alt="George BoarControl Webb"
                        width={191}
                        height={191}
                        className="mx-auto rounded-full"
                      />
                    </div>
                    <h6 className="text-lg font-semibold text-white">
                      George "BoarControl" Webb
                    </h6>
                  </div>

                  {/* Hench */}
                  <div className="text-center">
                    <div className="mb-4">
                      <Image
                        src="/esports/hench.jpg"
                        alt="Chris Hench Henshaw"
                        width={191}
                        height={191}
                        className="mx-auto rounded-full"
                      />
                    </div>
                    <h6 className="text-lg font-semibold text-white mb-2">
                      Chris "Hench" Henshaw
                    </h6>
                    <p className="text-sm text-gray-400">
                      Head of League Operations, NSE
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Join Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Join Our Esports Teams</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Think you have what it takes to represent the University of York in competitive gaming?
                We're always looking for skilled players to join our teams. From casual competitive play
                to serious tournament preparation, there's a place for every level of commitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://discord.gg/B8htGMcGaC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-indigo-700 transition-all duration-300 text-lg shadow-lg hover:shadow-indigo-600/25"
                >
                  Join Our Discord
                </a>
                <a
                  href="/contact"
                  className="bg-gray-700 text-white font-semibold py-4 px-10 rounded-full hover:bg-gray-600 transition-all duration-300 text-lg shadow-lg"
                >
                  Contact Us
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

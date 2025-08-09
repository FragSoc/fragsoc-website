import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Fanart() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-center text-white mb-16">Fan Art</h1>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Gallery</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                  <div className="aspect-video bg-gray-800">
                    <Image
                      src="/fanart/fall.png"
                      alt="Fall Guy Fraggy Skin"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Fall Guy Fraggy Skin</h3>
                    <p className="text-gray-400 text-sm">By Necromaxic (2020)</p>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                  <div className="aspect-video bg-gray-800">
                    <Image
                      src="/fanart/among.png"
                      alt="Among Us FragSoc with Fraggy"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Among Us FragSoc (w/ Fraggy)</h3>
                    <p className="text-gray-400 text-sm">by Necromaxic (2020)</p>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                  <div className="aspect-video bg-gray-800">
                    <Image
                      src="/fanart/stronk.png"
                      alt="Ripped Fraggy"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Ripped Fraggy</h3>
                    <p className="text-gray-400 text-sm">by Spikey (2020)</p>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                  <div className="aspect-video bg-gray-800">
                    <Image
                      src="/fanart/derby.avif"
                      alt="York Derby Logo"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">York Derby Logo</h3>
                    <p className="text-gray-400 text-sm">by Spikey (2020)</p>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                  <div className="aspect-video bg-gray-800">
                    <Image
                      src="/fanart/civ.avif"
                      alt="Big Cheeky FragSoc Civilization VI Game"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Big Cheeky FragSoc Civilization VI Game</h3>
                    <p className="text-gray-400 text-sm">by Doughy (2020)</p>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 border-2 border-dashed border-gray-600">
                  <div className="aspect-video bg-gray-800 flex items-center justify-center">
                    <span className="text-4xl">➕</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Your Art Here!</h3>
                    <p className="text-gray-400 text-sm">Submit your creation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-12 mb-16 border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Submit your own art</h2>
              <p className="text-xl text-gray-300 mb-8 text-center leading-relaxed">
                Send us an email with your art attached, or message a member of committee in the FragSoc discord server to have your fanart featured on the website!
              </p>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="https://discord.gg/vaTV73U5Hz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
                  >
                    Share on Discord
                  </a>
                  <a
                    href="/contact"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
                  >
                    Email Submission
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Showcase Your Creativity</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                FragSoc loves to celebrate the artistic talents of our community! Whether it's fan art of your favorite games, original characters, or FragSoc-themed creations, we want to see what you've made.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

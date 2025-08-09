import Image from 'next/image';
import { URLS } from '@/constants';
import Link from 'next/link';

export default function MainSections() {
  return (
    <div className="bg-black text-white py-3">
      {/* Welcome Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-2/3">
            <h2 className="text-5xl font-bold text-white mb-8">Welcome to FragSoc!</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              FragSoc is the University of York's Video Gaming and LAN society as part of the
              University of York Student Union. We are a Games and Fandom society, dedicated
              to all types of gaming for all skill levels. We run around 6 LAN parties a year,
              participate in Roses and host weekly social events and in-houses.
            </p>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              FragSoc is also the University's hub for esports tournaments, participating in
              NSE, NUEL, ESL Masters and many other UK competitions as well as hosting Roses
              each term, we field teams for a range of games to compete in NSE and NUEL
              tournaments, as well as ESL Masters, ETF2L, RotR and much more!
            </p>
            <Link
              href="/about"
              className="inline-block bg-indigo-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-indigo-700 transition-all duration-300 text-lg shadow-lg hover:shadow-indigo-600/25"
            >
              Find out more
            </Link>
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <Image
              src="/logo.png"
              alt="FragSoc Logo"
              width={350}
              height={350}
              className="rounded-full shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Three Column Sections */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Roses Section */}
            <div className="bg-gray-900 rounded-2xl p-10 text-center border border-gray-800 hover:border-gray-500 transition-all duration-300 flex flex-col h-full">
              <h3 className="text-3xl font-bold text-gray-400 mb-8">Roses</h3>
              <Image
                src="/roses.png"
                alt="Roses Tournament"
                width={180}
                height={180}
                className="mx-auto mb-8"
              />
              <p className="text-gray-300 mb-8 leading-relaxed text-lg flex-grow">
                Every year, we help the University of York to organise the esports events in
                Roses, an annual sports tournament against Lancaster University.
              </p>
                <Link
                href={URLS.ROSES_LIVE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-gray-600/25 mt-auto"
                >
                Visit Roses Website
                </Link>
            </div>

            {/* Frag Smash Section */}
            <div className="bg-gray-900 rounded-2xl p-10 text-center border border-gray-800 hover:border-red-500 transition-all duration-300 flex flex-col h-full">
              <h3 className="text-3xl font-bold text-red-400 mb-8">Frag Smash</h3>
              <Image
                src="/fragsmash.png"
                alt="Frag Smash Tournament"
                width={180}
                height={180}
                className="mx-auto mb-8"
              />
              <p className="text-gray-300 mb-8 leading-relaxed text-lg flex-grow">
                Our Super Smash Bros. tournaments, Rite of the Rose, run 2-3 times a year with
                players competing from all over the UK.
              </p>
              <Link
                href={URLS.DISCORD.FRAGSMASH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-600/25 mt-auto"
              >
                Join the FragSmash Discord
              </Link>
            </div>

            {/* Committee Section */}
            <div className="bg-gray-900 rounded-2xl p-10 text-center border border-gray-800 hover:border-green-500 transition-all duration-300 flex flex-col h-full">
              <h3 className="text-3xl font-bold text-green-400 mb-8">Committee</h3>
              <Image
                src="/logo.png"
                alt="Committee"
                width={180}
                height={180}
                className="mx-auto mb-8 rounded-full"
              />
              <p className="text-gray-300 mb-8 leading-relaxed text-lg flex-grow">
                Curious to meet the ones who run the society? Have any unanswered questions?
                Take a look at our committee list and find out who to contact.
              </p>
              <Link
                href="/committee"
                className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-green-600/25 mt-auto"
              >
                FragSoc Committee
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

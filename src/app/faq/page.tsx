import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-center text-white mb-16">Frequently Asked Questions</h1>
            
            <div className="space-y-8">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-4">How do I join FragSoc?</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Regardless of whether you stumbled across the society at a Welcome fair or through our social media, you'll need to pay for membership to be recognised as a FragSoc member! This can be done through the YorkSU website. The price for a year's membership is £5. This can be paid in full at the beginning of the term or upon attendance.
                </p>
                <a
                  href="https://yorksu.org/activities/view/fragsoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Purchase Membership Online
                </a>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-4">What do I need to bring with me to LAN?</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Essential</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Your gaming PC/laptop/console</li>
                      <li>• A monitor </li>
                      <li>• Video cables</li>
                      <li>• Headphones</li>
                      <li>• Keyboard/controllers</li>
                      <li>• Mouse & mouse mat</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Optional</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Money for food orders/vending machines/local shops</li>
                      <li>• Snacks and drinks (no alcoholic drinks permitted)</li>
                      <li>• A pillow and sleeping bag/duvet (if staying overnight)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  FragSoc occasionally runs a taxi service for those who have a lot of equipment to transport. Details for arranging carpools can be found on the Discord, free of charge.
                </p>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-4">How do I get to LAN?</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  We mainly run LANs on East Campus in the Law and Management Building (LMB/030), which is next door to Goodricke College's reception and near the Computer Science and TFTI departments.
                </p>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  We also sometimes run LANs at The Exhibition Centre is located on Heslington West and is where we hold some of our LAN events. It overlooks the lake and can be found next to the YorkSU Centre with limited parking outside.
                </p>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-4">What do I do when I arrive at LAN?</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  After PAT testing and setting up all of your equipment with the kit provided, you are welcome to start playing anything you wish straight away. LANs typically run for 2-3 nights, starting at 6pm on a Friday or 12pm on a Saturday and ending at 6pm on Sunday.
                </p>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  The events we run during the LAN will be announced before the event via the Discord, as well as over the PA system during LAN. If you are struggling to look for a party to play a specific title, feel free to ask a committee member at any time during the event.
                </p>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  The games we schedule are typically widely owned and/or free. It is recommended that you pre-install any games you wish to play ahead of schedule so you don't miss out!
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Every LAN, we have a group pizza order where we have a half-price deal with Domino's, however there is also a fish and chips option available too. We will announce the taking of orders over the PA at around 4pm on a Saturday and the Treasurer will go around collecting cash at the designated time. Players are not permitted to eat meals at their desk. Light snacks and drinks are allowed with the exception of any alcohol, but please try to keep any mess to a minimum.
                </p>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-4">Will my equipment be safe if I leave it overnight?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  The building the event is taking place in is locked overnight and only those attending the event can gain access. At least one member of committee, as well as those staying overnight, will be in the room guarding the PCs at all times. We have a track record of zero incidents of stolen or broken equipment in our entire history as a society so things will be in safe hands should you choose to leave the building.
                </p>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-4">How do I join a team for NSE or NUEL?</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Each term, our Esports Officers will release a form for each game that is running on the Discord. Simply fill out your details before the deadline and, depending on the game, a drafting event will be planned to choose team captains and groups of similar skill levelled players. These teams will accommodate for players of any and all skill levels so we encourage you to sign up if you are interested in esports!
                </p>
                <a
                  href="/esports"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Find Out More
                </a>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-4">How do I stream on the FragSoc Twitch channel?</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Much like the team forms, our Stream Managers will release a form to collect a list of streamers who have shown an interest in streaming on the FragSoc Twitch channel. We welcome streamers of all experience levels – if you're a regular affiliate, a weekly streamer or want to try something completely new! Once we've scheduled a streamer for each day, the Stream Managers will get in contact and send you all the assets and keys necessary!
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Additionally, we would like to help our community members to advertise their own channels and streams if they would rather stream on their own rather than through the FragSoc Twitch. If you are interested in promoting your own channel, please contact the Stream Managers and they will give you more information on how we can aid you.
                </p>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-4">Can I buy FragSoc/UoY Esports merchandise?</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Our raven.gg clothing store is now back online! Head on over to check out our FragSoc/UoY Esports jerseys & hoodies.
                </p>
                <a
                  href="https://raven.gg/stores/fragsoc-uoy-esports/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  View Collection
                </a>
              </div>
            </div>

            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-8">Still Have Questions?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Get in touch with us!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://discord.gg/vaTV73U5Hz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
                >
                  Join Our Discord
                </a>
                <a
                  href="/contact"
                  className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
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

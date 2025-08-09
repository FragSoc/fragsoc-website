import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions about FragSoc? Want to get involved or need more information?
              We'd love to hear from you! Here are the best ways to get in touch.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Discord */}
            <div className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800 hover:border-indigo-500 transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.120.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">Discord</h3>
              <p className="text-gray-300 mb-6">
                Join our Discord server for real-time chat, announcements, and community discussions.
              </p>
              <Link
                href="https://discord.gg/fragsoc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300"
              >
                Join Discord
              </Link>
            </div>

            {/* Email */}
            <div className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800 hover:border-green-500 transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Email</h3>
              <p className="text-gray-300 mb-6">
                Send us an email for official inquiries, partnerships, or detailed questions.
              </p>
              <Link
                href="mailto:fragsoc@yorksu.org"
                className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-300"
              >
                Send Email
              </Link>
            </div>

            {/* YorkSU */}
            <div className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800 hover:border-yellow-500 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0v-4a2 2 0 011-1h1m0 0V9a2 2 0 012-2h2a2 2 0 012 2v8.5M9 21V9a2 2 0 012-2h2a2 2 0 012 2v12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">YorkSU</h3>
              <p className="text-gray-300 mb-6">
                Visit our official YorkSU page for membership information and society updates.
              </p>
              <Link
                href="https://yorksu.org/activities/view/fragsoc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-700 transition-all duration-300"
              >
                Visit YorkSU Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Button Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Meet the Committee</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Curious to meet the ones who run the society? Have any unanswered questions?
              Take a look at our committee list and find out who to contact.
            </p>
            <Link
              href="/committee"
              className="inline-block bg-purple-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-purple-700 transition-all duration-300 text-lg shadow-lg hover:shadow-purple-600/25"
            >
              View Committee Members
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-300">
                Have a specific question or want to get involved? Send us a message!
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

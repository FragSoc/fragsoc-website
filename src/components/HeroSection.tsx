import Link from 'next/link';
import { URLS, TEXT } from '@/constants';

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('/gaming-headphones.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
          Join us on Discord!
        </h1>
        <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto font-light leading-relaxed">
          Make friends, participate in online events, and get society announcements in our discord server!
        </p>
        <Link
          href="https://discord.gg/vaTV73U5Hz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white font-bold py-6 px-12 rounded-full text-xl hover:bg-indigo-700 transition-all duration-300 shadow-2xl hover:shadow-indigo-600/25 transform hover:scale-105"
        >
          Join the Discord
        </Link>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black border-b border-gray-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt="FragSoc Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">FragSoc</h1>
              <p className="text-sm text-gray-400">University of York's Gaming and Esports Society</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-lg">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-lg">
              About Us
            </Link>
            <Link href="/esports" className="text-gray-300 hover:text-white transition-colors text-lg">
              Esports
            </Link>
            <Link href="/committee" className="text-gray-300 hover:text-white transition-colors text-lg">
              Committee
            </Link>
          </nav>
          
          <Link
            href="https://yusu.org/activities/view/fragsoc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors font-semibold"
          >
            Membership
          </Link>
        </div>
      </div>
    </header>
  );
}

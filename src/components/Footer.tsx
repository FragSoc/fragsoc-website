import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">Follow us on social media</h3>
          <div className="flex justify-center flex-wrap gap-8">
            <Link
              href="https://www.facebook.com/groups/FragSoc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors text-lg font-medium"
            >
              Facebook
            </Link>
            <Link
              href="https://twitter.com/FragSoc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors text-lg font-medium"
            >
              Twitter
            </Link>
            <Link
              href="https://discord.gg/vaTV73U5Hz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors text-lg font-medium"
            >
              Discord
            </Link>
            <Link
              href="https://www.instagram.com/Fragsoc/?hl=en-gb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors text-lg font-medium"
            >
              Instagram
            </Link>
            <Link
              href="https://www.twitch.tv/fragsoc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors text-lg font-medium"
            >
              Twitch
            </Link>
            <Link
              href="https://www.youtube.com/user/Fragsoc/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors text-lg font-medium"
            >
              YouTube
            </Link>
            <Link
              href="https://www.reddit.com/user/FragSoc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-colors text-lg font-medium"
            >
              Reddit
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-lg">© 2025 FragSoc</p>
        </div>
      </div>
    </footer>
  );
}

import Header from '@/components/Header';
import AutoPlayingBanner from '@/components/AutoPlayingBanner';
import MainSections from '@/components/MainSections';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <AutoPlayingBanner />
      <MainSections />
      <Footer />
    </div>
  );
}

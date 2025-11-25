import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VendorCategories from '@/components/VendorCategories';
import WhyWeddingMall from '@/components/WhyWeddingMall';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <VendorCategories />
      <WhyWeddingMall />
    </main>
  );
}

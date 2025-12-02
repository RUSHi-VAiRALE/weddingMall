import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VendorCategories from '@/components/VendorCategories';
import WhyWeddingMall from '@/components/WhyWeddingMall';
import HelpWithDetails from '@/components/HelpWithDetails';
import BlogSection from '@/components/BlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <VendorCategories />
      <WhyWeddingMall />
      <HelpWithDetails />
      <BlogSection />
      <TestimonialsSection />
    </main>
  );
}

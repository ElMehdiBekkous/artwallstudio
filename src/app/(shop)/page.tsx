import { Suspense } from 'react';
import HeroSection from '@/components/layout/HeroSection';
import FeaturedProducts from '@/components/product/FeaturedProducts';
import CategoryGrid from '@/components/layout/CategoryGrid';
import BrandStrip from '@/components/layout/BrandStrip';
import WhyUs from '@/components/layout/WhyUs';
import Newsletter from '@/components/layout/Newsletter';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandStrip />
      <CategoryGrid />
      <Suspense fallback={null}>
        <FeaturedProducts />
      </Suspense>
      <WhyUs />
      <Newsletter />
      <Footer />
    </>
  );
}

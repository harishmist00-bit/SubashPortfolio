import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import CategoryBanner from "../components/CategoryBanner";
import CategoryMenu from "../components/CategoryMenu";
import ProductGrid from "../components/ProductGrid";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <CategoryBanner />
      <CategoryMenu />
      <ProductGrid />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Home;
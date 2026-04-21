import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import CollectionsSection from "@/components/home/CollectionsSection";
// import AIDesignerPreview from "@/components/home/AIDesignerPreview";
import FabricPreview from "@/components/home/FabricPreview";
import GlobalReachSection from "@/components/home/GlobalReachSection";
import CertificationScroll from "@/components/home/CertificationsSection";
import BrandLogoCarousel from "@/components/home/brandcarosel";
import HeroVideoSection from "@/components/home/HeroVideo";
const Index = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <FabricPreview />
      <CollectionsSection />
      <BrandLogoCarousel />
      <HeroVideoSection />
      <CertificationScroll />
      <GlobalReachSection />
    </main>
  );
};

export default Index;
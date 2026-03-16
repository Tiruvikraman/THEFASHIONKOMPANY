import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import CollectionsSection from "@/components/home/CollectionsSection";
import AIDesignerPreview from "@/components/home/AIDesignerPreview";
import FabricPreview from "@/components/home/FabricPreview";
import SustainabilitySection from "@/components/home/SustainabilitySection";
import GlobalReachSection from "@/components/home/GlobalReachSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <CollectionsSection />
      <AIDesignerPreview />
      <FabricPreview />
      <SustainabilitySection />
      <GlobalReachSection />
      <CTASection />
    </main>
  );
};

export default Index;

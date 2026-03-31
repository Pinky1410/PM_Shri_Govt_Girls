import HeroSection from "@/components/HeroSection";
import PrincipalDesk from "@/components/PrincipalDesk";
import HighlightsSection from "@/components/HighlightsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import GalleryPreview from "@/components/GalleryPreview";
import NewsSection from "@/components/NewsSection";
import CTASection from "@/components/CTASection";
import NewsTicker from "@/components/NewsTicker";

export default function Home() {
  return (
    <>
      <NewsTicker />
      <HeroSection />
      <PrincipalDesk />
      <HighlightsSection />
      <FacilitiesSection />
      <GalleryPreview />
      <NewsSection />
      <CTASection />
    </>
  );
}

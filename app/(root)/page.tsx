import HeroSection from "@/features/home/HeroSection";
import FeatureSection from "@/features/home/FeatureSection"
import WorkflowSection from "@/features/home/WorkflowSection"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeatureSection/>
      <WorkflowSection/>
    </div>
  );
}

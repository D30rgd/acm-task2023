import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/ui/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="'min-h-screen bg-black/[0.96]">
      
          <HeroSection></HeroSection>

          <FeaturedCourses/>

          <WhyChooseUs/>
    </main>
    
  );
}

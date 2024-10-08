import { notFound } from "next/navigation"; // Importing notFound to handle redirection
import Header from "@/app/components/Header/Header";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import Carousel from "@/app/components/Carousel/Carousel";
import Review from "@/app/components/Review/Review";
import TrustedIVFClinic from "@/app/components/TrustedIVFClinic/TrustedIVFClinic";
import FAQsSection from "@/app/components/FAQsSection/FAQsSection";
import FloatingButton from "@/app/components/FloatingButton/FloatingButton";
import FloatBottom from "@/app/components/FloatBottom/FloatBottom";
import Footer from "@/app/components/Footer/Footer";
import diseasesInfo from "@/data/diseaseInfo";
import FertilitySection from "../components/NewFertilitySection/FertilitySection";
import { tabsData } from "@/data/tabsData";

// Generate static parameters for valid diseases
export function generateStaticParams() {
  // Generate params for diseases only
  return diseasesInfo.map((disease) => ({ disease: disease.slug }));
}

export default function Page({ params }) {
  const { disease } = params;

  // Find the disease based on the slug from params
  const filteredDisease = diseasesInfo.find((d) => d.slug === disease);

  // If no valid disease is found, redirect to the not found page
  if (!filteredDisease) {
    notFound(); // This will trigger the 404 page in Next.js
  }
  // Access the disease data directly from tabsData object using the slug
  const currentDisease = tabsData[disease];
  const { title, tabs ,carousel} = currentDisease;
  return (
    <>
      <Header />
      <HeroSection diseaseInfo={filteredDisease} />
      {/* Other sections can be added here as necessary */}
      <FertilitySection tabsDataPass={tabs} title={title} />
      <Carousel carouselData={carousel} title={title}/>
      <TrustedIVFClinic />
      <FAQsSection />
      <FloatingButton />
      <FloatBottom />
      <Footer />
    </>
  );
}

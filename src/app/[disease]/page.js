// [disease].js or [disease]/page.js

import { notFound } from "next/navigation";
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
import FertilitySection from "@/app/components/NewFertilitySection/FertilitySection";
import { tabsData } from "@/data/tabsData";
import testimonials from "@/testimonials";
import IVFSpecialists from "../components/BestDoctors/IVFSpecialists";
import BeforeAfter from "../components/beforeAfter/BeforeAfter";
import { beforeAfter } from "@/data/before-after";
import faqsData from "@/data/faqsData"; // Import the FAQs data



// /data/faqsData.js

const temporaryData = [
  {
    question: "What is homeopathy?",
    answer:
      "A scientific approach to medicine, homeopathy is based on the idea of Similia Similibus Curentur. This Latin phrase means let things take care of like things. Early in the 18th century, German physician Dr. Samuel Hahnemann developed homeopathy as a new medical system and outlined its fundamental principles. The similia principle is based on the conventional understanding that certain substances have the potential to both cause and treat similar health conditions.",
  },
  {
    question: "How do Homoeopathy medicines work?",
    answer:
      "Homeopathy works by promoting the body's natural ability to heal itself. A cure is administered on a unique basis since it activates the body's natural healing processes. A homeopath will record all things that improve or worsen a person's symptoms and physical, mental, and emotional signs.",
  },
  {
    question: "Does Homoeopathic medicine act slowly?",
    answer:
      "The idea that homeopathic remedies take time to work is inaccurate. They act quickly, but the impact lasts a long time—often forever. The core causes of the illness are treated. The length of time needed for relief varies according to how chronic the condition is. People frequently turn to homeopathy treatment when their disease worsens and becomes chronic, when they have a challenging condition that defies conventional treatment, or when an unavoidable surgical procedure is offered. Naturally, the treatment for these diseases will take some time.",
  },
  {
    question: "Are homeopathy medicines safe for children?",
    answer:
      "Yes, homeopathy medicines are safe for everyone, even children. Homeopathic medicines are extremely mild, safe, and efficient. They are particularly beneficial for children because they function by boosting a child's vitality. Since children naturally have higher vitality, homeopathic treatments are more successful in this age group.",
  },
  {
    question: "What do homeopaths need to know about you before treatment?",
    answer:
      "The homeopaths should understand the patient, their nature, complaints, and disturbed mental and emotional state to reach the case's core. The doctor will be able to help you if they know about any odd habits, past illnesses, information about childhood, and anything else about the patient. The doctor can effectively analyze the case if given honest and accurate history.",
  },
  {
    question: "Why do homeopaths not disclose the names of the medicines they prescribe?",
    answer:
      "The medicine's name is not disclosed for the patient's benefit. When a patient knows the name of a medication and begins taking it based on personal preferences, the disease picture will be distorted, making the patient's future medical care much more challenging. Additionally, specific medications must be altered and administered based on the disease and the patient's progress.",
  },
  {
    question: "Are there any diet restrictions while taking Homeopathy medicines?",
    answer:
      "The patient taking homeopathy medication is advised to avoid eating or drinking 15 minutes before or after. Coffee, raw onion, and raw garlic must all be avoided. Also, restrictions are made on the consumption of paan, and tobacco, as these can either hinder or counteract the action of the homeopathic medicine.",
  },
  {
    question: "Is it a fact that Homoeopathic medicines don’t have any side effects?",
    answer:
      "Homeopathic medicines do not have any side effects. Unlike conventional treatments, homeopathic medicines do not target a specific area or organ of the body. The homeopathy treatment targets the underlying cause of the problem and is chosen because it matches the patient's symptoms as closely as possible.",
  },
  {
    question: "Is Homoeopathy recognized officially?",
    answer:
      "The Homeopathy Central Council Act of 1973 made homeopathy a legally recognized medical system in India. The system has been acknowledged as one of the national systems of medicine since it has assimilated so well into the ethos and traditions of the nation. Additionally, 20 State Governments have established State Boards or Councils and passed State legislation to control the use of homeopathy.",
  },
  {
    question: "Is it true that Homeopathy medicines are only placebos (sugar pills)?",
    answer:
      "Homeopathic medicine pills are made of sugar but serve only as transporters. The pills are covered with actual liquid medication that has been manufactured from a variety of natural medical ingredients. Homeopathic medications are also available as tinctures in liquid form, which can be taken either directly or diluted in water as needed.",
  },
  {
    question: "Is it safe for pregnant women to take Homeopathic medicines during pregnancy?",
    answer:
      "Yes, but it is always preferable to take homeopathy medications prescribed by a licensed homeopathy physician. The mother and the kid will benefit greatly if the treatment is planned properly. The drugs will aid in the fight against inherited diseases passed down from generation to generation, and the child will be significantly healthier.",
  },
];

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
  const { title, tabs, carousel } = currentDisease;

  // Retrieve FAQs based on the disease slug
  const faqs = faqsData[disease] || temporaryData; // Provide a fallback in case no FAQs are found

  return (
    <>
      <Header diseaseInfo={filteredDisease} />
      <HeroSection diseaseInfo={filteredDisease} />
      {/* Other sections can be added here as necessary */}
      <FertilitySection tabsDataPass={tabs} title={title} />
      {/* Pass the filtered testimonials to the Review component */}
      <Carousel carouselData={carousel} title={title} />
      <Review filteredReview={testimonials} />
      <TrustedIVFClinic />

      {/* Conditional Rendering */}
      {/* {disease.toLowerCase() === "psoriasis" ? (
        <BeforeAfter beforeAfter={beforeAfter} />
      ) : (
        <IVFSpecialists />
      )} */}

      {/* Pass the dynamic FAQs to the FAQsSection */}
      <FAQsSection faqs={faqs} />

      {/* <FloatingButton /> */}
      <FloatBottom />
      <Footer />
    </>
  );
}

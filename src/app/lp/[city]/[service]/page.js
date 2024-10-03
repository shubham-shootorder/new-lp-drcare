
import master from '@/master';
import testimonials from '@/testimonials';
import doctors from '@/doctors';

import Header from "@/app/components/Header/Header";
import HeroSection from '@/app/components/HeroSection/HeroSection';
import Treatments from '@/app/components/Treatments/Treatments';
import Carousel from '@/app/components/Carousel/Carousel';
import SpecialisedFertility from '@/app/components/SpecialisedFertility/SpecialisedFertility';
import BestDoctors from '@/app/components/BestDoctors/BestDoctors';
import Review from '@/app/components/Review/Review';
import TrustedIVFClinic from '@/app/components/TrustedIVFClinic/TrustedIVFClinic';
import AwardSection from '@/app/components/AwardSection/AwardSection';
import ParentHoodSection from '@/app/components/ParentHoodSection/ParentHoodSection';
import FAQsSection from '@/app/components/FAQsSection/FAQsSection';
import FloatingButton from '@/app/components/FloatingButton/FloatingButton';
import FloatBottom from '@/app/components/FloatBottom/FloatBottom';
import Footer from '@/app/components/Footer/Footer';
import HeroSectionU from '@/app/components/HeroSection/HeroSectionU';
import FertilitySection from '@/app/components/NewFertilitySection/FertilitySection';


export async function generateStaticParams() {
  const services = ["ivf", "iui", "fertility"];
  const params = [];

  master.forEach((item) => {
    services.forEach((service) => {
      params.push({ city: item.center_name, service });
    });
  });

  return params;
}

export async function generateMetadata({ params}) {
  // read route params
  const {city, service} = params;
  const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
  const pageTitle = `Oasis ${capitalizedCity} | Top ${service?.toUpperCase()} Clinic in ${capitalizedCity}`;
  const pageDescription = `Best IVF clinic in ${capitalizedCity} offering top fertility treatments and services. Highest IVF success rate, affordable IVF cost & 1,00,000+ happy couples.`;
 
  return {
    title: pageTitle,
    description: pageDescription
  }
}

export default function Page({ params }) {
  const { city, service } = params;
  const filteredCity = master.find(center => center.center_name === city);
  const filteredTestimonials = doctors.filter(testimonial => {
    return filteredCity?.id === testimonial.master_id
  });
  const filteredReview = testimonials.filter(testimonial => {
    return filteredCity.id === testimonial.master_id
  });

  return (
    <>
      <Header center={filteredCity} />
      {/* <HeroSectionU center={filteredCity} service={service} /> */}
      <HeroSection center={filteredCity} service={service} />
      {/* <Treatments center={filteredCity} service={service} /> */}
      <FertilitySection center={filteredCity} />
      <Carousel center={filteredCity} />
      {/* <SpecialisedFertility /> */}
      <BestDoctors center={filteredCity} filteredTestimonials={filteredTestimonials} service={service} />
      <Review center={filteredCity} filteredReview={filteredReview} service={service} />
      <TrustedIVFClinic center={filteredCity} service={service} />
      <AwardSection service={service} />
      <ParentHoodSection center={filteredCity} />
      <FAQsSection />
      <FloatingButton center={filteredCity} />
      <FloatBottom center={filteredCity} />
      <Footer />
    </>
  );
}

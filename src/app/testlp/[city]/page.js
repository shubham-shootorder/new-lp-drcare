export function generateStaticParams() {
  return [
    { city: 'hyderabad' },
    { city: 'banjara-hills' },
    { city: 'gachibowli' },
    { city: 'dilshuknagar' },
    { city: 'secunderabad' },
    { city: 'miyapur' },
    { city: 'kompally' },
    { city: 'uppal' },
    { city: 'tolichowki' },
    { city: 'hanamkonda' },
    { city: 'karimnagar' },
    { city: 'vijayawada' },
    { city: 'visakhapatnam' },
    { city: 'guntur' },
    { city: 'ongole' },
    { city: 'tirupati' },
    { city: 'kurnool' },
    { city: 'bengaluru' },
    { city: 'hsr' },
    { city: 'banashankari' },
    { city: 'hebbal' },
    { city: 'belagavi' },
    { city: 'chennai' },
    { city: 'pune' },
    { city: 'wakad' },
    { city: 'kharadi' },
    { city: 'nashik' },
    { city: 'raipur' },
    { city: 'vadodara' },
    { city: 'ranchi' },
    { city: 'bhubaneswar' },
    { city: 'suryaraopeta' },
    { city: 'india' },
    { city: 'telangana' },
    { city: 'karnataka' },
    { city: 'andhrapradesh' },
    { city: 'facebook' },
    { city: 'kakinada' }
  ]
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { city } = params;
  const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
  const pageTitle = `Dr Care ${capitalizedCity} | Top Clinic in ${capitalizedCity}`;
  const pageDescription = `Best clinic in ${capitalizedCity} offering top treatments and services. Highest success rate, affordable cost & 1,00,000+ happy couples.`;

  return {
    title: pageTitle,
    description: pageDescription
  }
}

import master from '@/master';
import testimonials from '@/testimonials';
import doctors from '@/doctors';
import Header from '@/app/components/Header/Header';
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
import FertilitySection from '@/app/components/NewFertilitySection/FertilitySection';
import Pricing from '@/app/components/Pricing/Pricing';
import HeroSectionU from '@/app/components/HeroSection/HeroSectionU';

export default function Page({ params }) {
  const { city } = params;
  const filteredCity = master.find(center => center.center_name === city);
  const filteredTestimonials = doctors.filter(testimonial => {
    return filteredCity?.id === testimonial.master_id
  });
  const filteredReview = testimonials.filter(testimonial => {
    return filteredCity.id === testimonial.master_id
  }

  );


  return (
    <>
      <Header center={filteredCity} />
      {/* <HeroSectionU center={filteredCity} testlp={true} /> */}
      <HeroSection center={filteredCity} testlp={true} />
      {/* <Treatments center={filteredCity} /> */}
      <FertilitySection center={filteredCity} />
      {/* <Pricing center={filteredCity} /> */}
      <Carousel center={filteredCity} />
      {/* <SpecialisedFertility /> */}
      <BestDoctors center={filteredCity} filteredTestimonials={filteredTestimonials} />
      <Review center={filteredCity} filteredReview={filteredReview} />
      <TrustedIVFClinic center={filteredCity} />
      <AwardSection />
      <ParentHoodSection center={filteredCity} testlp={true} />
      <FAQsSection />
      <FloatingButton center={filteredCity} testlp={true} />
      <FloatBottom center={filteredCity} testlp={true} />
      <Footer />
    </>
  );
}

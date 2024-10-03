'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import master from '@/master';
import testimonials from '@/testimonials';
import doctors from '@/doctors';
import patientsData from '@/patientsData';
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

function LpParamsComponent({referal, patient_id}) {
  const pid = patient_id;

  const [filteredPatient, setFilteredPatient] = useState(null);
  const [filteredCity, setFilteredCity] = useState(null);
  const [filteredTestimonials, setFilteredTestimonials] = useState([]);
  const [filteredReview, setFilteredReview] = useState([]);

  useEffect(() => {
    if (pid) {
      // const patientId = parseInt(pid, 10);
      const patientId = patient_id;
      const patient = patientsData.find(patient => patient.patient_id === patientId);
      setFilteredPatient(patient);
    }

    // Find the city
    const city = master.find(center => center.center_name === "india");
    setFilteredCity(city);

    
    if (city) {
      // Filter testimonials for the found city
      const testimonial = doctors.filter(testimonial => city.id === testimonial.master_id);
      setFilteredTestimonials(testimonial);
      
      // Filter reviews for the found city
      const reviews = testimonials.filter(review => city.id === review.master_id);
      setFilteredReview(reviews);
    }
  }, [pid]);


  return (
    <>
      <Header center={filteredCity} />
      <HeroSection center={filteredCity} querySubTitle={filteredPatient?.name} referal={referal} refId={pid} />
      <Treatments center={filteredCity} />
      <Carousel center={filteredCity} />
      {/* <SpecialisedFertility /> */}
      <BestDoctors center={filteredCity} filteredTestimonials={filteredTestimonials} />
      <Review center={filteredCity} filteredReview={filteredReview} />
      <TrustedIVFClinic center={filteredCity} />
      <AwardSection />
      <ParentHoodSection center={filteredCity} referal={referal} refId={pid} />
      <FAQsSection />
      <FloatingButton center={filteredCity} referal={referal} refId={pid} />
      <FloatBottom center={filteredCity} referal={referal} refId={pid} />
      <Footer />
    </>
  );
}

export default function LpParams({referal,patient_id}) {
  return (
    <Suspense>
      <LpParamsComponent referal={referal} patient_id={patient_id} />
    </Suspense>
  )
}
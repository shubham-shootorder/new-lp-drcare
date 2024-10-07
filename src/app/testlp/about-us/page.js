
export async function generateMetadata({ params, searchParams }, parent) {
    // read route params

    return {
        title: "About Us ",
        description: "Dr Care is a comprehensive healthcare provider with specific attention to infertility treatments. Oasis is a ‘one-stop’ single-day care clinic where consultation, investigation and treatment are taken care of during the course of a single day. We also take immense pride in our strict adherence to standards and quality."
    }
}

import master from '@/master';
import testimonials from '@/testimonials';
import doctors from '@/doctors';
import Header from '@/app/components/Header/Header';
import HeroSection from '@/app/components/HeroSection/HeroSection';
import FAQsSection from '@/app/components/FAQsSection/FAQsSection';
import FloatingButton from '@/app/components/FloatingButton/FloatingButton';
import FloatBottom from '@/app/components/FloatBottom/FloatBottom';
import Footer from '@/app/components/Footer/Footer';
// import LocationCard from '@/app/components/OurCenters/LocationCard';
import AboutUs from '@/app/components/AboutUs/About';
import FAQAboutUs from '@/app/components/AboutUs/FAQAboutUs';
import OurValues from '@/app/components/AboutUs/OurValues';

export default function Page({ params }) {
    const city = "india"
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
            <HeroSection center={filteredCity} />

            <AboutUs/>

            <FAQAboutUs/>

            <OurValues/>

            <FloatingButton center={filteredCity} />
            <FloatBottom center={filteredCity} />
            <Footer />
        </>
    );
}

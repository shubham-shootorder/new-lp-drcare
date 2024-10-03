
export async function generateMetadata({ params, searchParams }, parent) {
    // read route params

    return {
        title: "Infertility Treatment Options In India With High Success Rate at Oasis Fertility",
        description: "Explore Oasis India's fertility treatment options like IVF, IVM, HSG, ICSI, IUI, etc. Get personalized solutions to help you on your path to parenthood. Book a consultation today."
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
import LocationCard from '@/app/components/OurCenters/LocationCard';
import Treatmens from '@/app/components/our-treatments/Treatmens';

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

            <div className="container my-5">
                <p className="text-center fw-bold text-black my-3" style={{fontSize: "20px"}}>At Oasis, we are committed to offer evidence based fertility treatments with an individualized, warm and compassionate approach.
                </p>
                <p className="text-center text-black">
                Take a look at our fertility treatment options
                </p>

                <div className="row justify-content-center mt-3">
                    <Treatmens/>
                </div>
            </div>

            <FloatingButton center={filteredCity} />
            <FloatBottom center={filteredCity} />
            <Footer />
        </>
    );
}


export async function generateMetadata({ params, searchParams }, parent) {
    // read route params

    return {
        title: "Infertility Center & Fertility Clinic Near Me - Oasis Fertility",
        description: "Locate Infertility Center & Fertility Clinic nearby in Hyderabad, Chennai, Bangalore, Delhi, Mumbai and other metropolitan cities. Oasis is a ‘one-stop’ single-day fertility clinic where consultation, investigation and treatment are taken care of during the course of a single day. Call us!"
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

    const excludedCenters = ['india', 'karnataka', 'andhrapradesh', "telangana", "hyderabad","facebook" ];
    return (
        <>
            <Header center={filteredCity} />
            <HeroSection center={filteredCity} />

            <div className="container my-5">
                <h2 className="text-center text-black my-3">For immediate assistance, call 1800-3001-1000</h2>
                <p className="text-center text-black">
                    Thank you for visiting our website. If you would like to know more information about our fertility treatments and other services, please fill the form below and we will get in touch with you at the earliest.
                </p>

                <h3 className="text-center mt-5 text-black">Fertility Centres in India</h3>

                <div className="row justify-content-start mt-3">
                    {master
                        .filter(center => !excludedCenters.includes(center.center_name.toLowerCase()))
                        .map(center => (
                            <div className="col-md-3 d-flex justify-content-center mb-4" key={center.id}>
                                <LocationCard
                                    imageUrl="https://oasisindia.in/wp-content/uploads/2020/06/103720697_257684942162191_7803215205987702644_n.png"
                                    locationName={center?.our_center?.toUpperCase()}
                                />
                            </div>
                        ))
                    }

                </div>
            </div>

            <FloatingButton center={filteredCity} />
            <FloatBottom center={filteredCity} />
            <Footer />
        </>
    );
}

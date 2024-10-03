
export async function generateMetadata({ params, searchParams }, parent) {
    // read route params

    return {
        title: "IVF & IUI Success Stories and Facts by Oasis India",
        description: "Oasis is one of the leading IVF & IUI Clinics in Hyderabad with many IUI success stories to their credit. Increase your chances of conceiving with us!"
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
import CircularProgressBar from '@/app/components/CircularProgressBar';
// import CircularProgressbar from 'react-circular-progressbar';

const IUI_SUCCESS_RATE = [
    {
        name: "Oasis",
        Percentage: 30
    },
    {
        name: "Worldwide",
        Percentage: 18
    }
]
const IVF_SUCCESS_RATE_FRESH_CYCLE = [
    {
        name: "Oasis",
        Percentage: 59
    },
    {
        name: "Worldwide",
        Percentage: 44
    }
]
const IVF_SUCCESS_RATE_FROZEN_EMBRYO = [
    {
        name: "Oasis",
        Percentage: 69
    },
    {
        name: "Worldwide",
        Percentage: 52
    }
]

const IVM_SUCCESS_RATE = [
    {
        name: "Oasis",
        Percentage: 39
    },
    {
        name: "Worldwide",
        Percentage: 30
    }
]
const NATURAL_SUCCESS_RATE = [
    {
        name: "Oasis",
        Percentage: 35
    },
    {
        name: "Worldwide",
        Percentage: 30
    }
]
const LESS_THAN_30_YEARS = [
    {
        name: "Oasis",
        Percentage: 54
    }
]
const IVF_30_35_YEARS = [
    {
        name: "Oasis",
        Percentage: 49
    }
]
const MORE_THAN_35_YEARS = [
    {
        name: "Oasis",
        Percentage: 44
    }
]


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
                <h3 className="text-center mt-5 text-black">Quantifying Our Success</h3>
                <p className="text-center text-black">
                    Our success stories are backed by real numbers. And we are super proud of our achievements.
                </p>

                <div className="row mt-5">
                    <div className="col-md-6 col-12 text-center">
                        <h4 className="my-3 text-black">IUI SUCCESS RATE</h4>
                        <div className="d-flex flex-wrap justify-content-center">
                            <CircularProgressBar IUI_SUCCESS_RATE={IUI_SUCCESS_RATE} />
                        </div>
                    </div>
                    <div className="col-md-6 col-12 text-center">
                        <h4 className="my-3 text-black">IVF SUCCESS RATE - FRESH CYCLE</h4>
                        <div className="d-flex flex-wrap justify-content-center">
                            <CircularProgressBar IUI_SUCCESS_RATE={IVF_SUCCESS_RATE_FRESH_CYCLE} />
                        </div>
                    </div>
                </div>
                <hr className='my-5' style={{ color: "#111" }} />
                <div className="row mt-5">
                    <div className="col-md-6 col-12 text-center">
                        <h4 className="my-3 text-black">IVF SUCCESS RATE - FROZEN EMBRYO TRANSFER</h4>
                        <br />

                        <div className="d-flex flex-wrap justify-content-around">
                            <CircularProgressBar IUI_SUCCESS_RATE={IVF_SUCCESS_RATE_FROZEN_EMBRYO} />


                        </div>
                    </div>
                    <div className="col-md-6 col-12 text-center">
                        <h4 className="my-3 text-black">IVM SUCCESS RATE</h4>
                        <br />
                        <div className="d-flex flex-wrap justify-content-center">

                            <CircularProgressBar IUI_SUCCESS_RATE={IVM_SUCCESS_RATE} />

                        </div>
                    </div>
                </div>
                <hr className='my-5' style={{ color: "#111" }} />

                <div className="row mt-5">
                    <div className="col-md-6 col-12 text-center">
                        <h4 className="my-3 text-black">NATURAL CYCLE IVF SUCCESS RATE</h4>
                        <br />

                        <div className="d-flex flex-wrap justify-content-around">
                            <CircularProgressBar IUI_SUCCESS_RATE={NATURAL_SUCCESS_RATE} />

                        </div>
                    </div>
                    <div className="col-md-6 col-12 text-center">
                        <h4 className="my-3 text-black">LESS THAN 30 YEARS</h4>
                        <br />
                        <div className="d-flex flex-wrap justify-content-around">
                                <CircularProgressBar IUI_SUCCESS_RATE={LESS_THAN_30_YEARS} />
                            
                        </div>
                    </div>
                </div>
                <hr className='my-5' style={{ color: "#111" }} />

                <div className="row mt-5">
                    <div className="col-md-6 col-12 text-center">
                        <h4 className="my-3 text-black">30-35 YEARS</h4>
                        <br />

                        <div className="d-flex flex-wrap justify-content-around">
                                <CircularProgressBar IUI_SUCCESS_RATE={IVF_30_35_YEARS} />
                            
                        </div>
                    </div>
                    <div className="col-md-6 col-12 text-center">
                        <h4 className="my-3 text-black">MORE THAN 35 YEARS</h4>
                        <br />
                        <div className="d-flex flex-wrap justify-content-around">
                                <CircularProgressBar IUI_SUCCESS_RATE={MORE_THAN_35_YEARS} />
                            
                        </div>
                    </div>
                </div>
            </div>

            <FloatingButton center={filteredCity} />
            <FloatBottom center={filteredCity} />
            <Footer />
        </>
    );
}

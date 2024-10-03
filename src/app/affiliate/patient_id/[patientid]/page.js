import LpParams from "@/app/components/LpParams/LpParams";
import patientsData from "@/patientsData";

export async function generateStaticParams() {
    const params = [];
  
    patientsData.forEach((item) => {
        params.push({ patientid: item.patient_id.toString() });
    });
  
    return params;
  }


  export async function generateMetadata({ params, searchParams }, parent) {
    // read route params

    const pageTitle = `Affiliate | Oasis Fertility`;
    const pageDescription = `Oasis Fertility has been recognised as one of the best IVF clinics in your city. Our team is formed by some of the best IVF specialists using latest technology procedures which ensure that our success rates are amongst the highest`;
   
    return {
      title: pageTitle,
      description: pageDescription
    }
  }

export default function AffiliatePage({params}) {
    const {patientid} = params;
    return (
        <>
            <LpParams referal={true} patient_id={patientid} />
        </>
    );
}

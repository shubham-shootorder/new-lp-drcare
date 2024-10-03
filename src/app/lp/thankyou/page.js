import ThankyouComponent from "@/app/components/ThankyouComponent/ThankyouComponent";


export async function generateMetadata({ params, searchParams }, parent) {

    const pageTitle = "Thank You - Oasis Fertility"
    return {
        title: pageTitle,
    }
}
export default function Page() {
    return (
        <>
            <ThankyouComponent />
        </>
    );
}

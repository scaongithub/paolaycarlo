import Hero from '../../components/Hero/Hero';
import Countdown from '../../components/Countdown/Countdown';
import Parents from '../../components/Parents/Parents';
import Location from '../../components/Location/Location';
import DayPlan from '../../components/DayPlan/DayPlan';
import Itinerary from '../../components/Itinerary/Itinerary';
import DressCode from '../../components/DressCode/DressCode';
import RSVP from '../../components/RSVP/RSVP';
import GiftRegistry from '../../components/GiftRegistry/GiftRegistry';
import Gallery from '../../components/Gallery/Gallery';
import Footer from '../../components/Footer/Footer';

export default function HomePage() {
    return (
        <>
            <Hero />
            <Countdown />
            <Parents />
            <Location />
            <DayPlan />
            <Itinerary />
            <DressCode />
            <RSVP />
            <GiftRegistry />
            <Gallery />
            <Footer />
        </>
    );
}

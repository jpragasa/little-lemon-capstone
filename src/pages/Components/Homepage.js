import About from "./About";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

export default function Homepage() {
    return (
        <>
            <CallToAction />
            <Specials />
            <Testimonials/>
            <About/>
        </>

    );
}
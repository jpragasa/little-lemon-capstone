import About from "./About";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

export default function Homepage() {
    return (
        <section data-testid="ctaexists"> 
            <CallToAction />
            <Specials />
            <Testimonials/>
            <About/>
        </section>

    );
}
import stock1 from '../../stockpic1.png';
import stock2 from '../../stockpic2.png';
export default function About() {
    return (
        <section className="aboutUs">
            <section>
                <h2>About Us</h2>
                <h3>Lakeland</h3>
                <article>
                    <p>
                        Welcome to Little Lemon, a well-established culinary haven in the heart of Lakeland, FL, where every dish is a burst of sunshine. Successfully running for over 2 years and located at the charming address of 1234 Lemon Pie Ave., this restaurant is a citrus-infused paradise. From tangy lemonade concoctions to heavenly lemon pies, each creation is meticulously crafted to transport you to a world of zestful flavors. Step into Little Lemon and embark on a delightful journey where the essence of Lakeland is captured in every citrus-inspired dish.
                    </p>
                </article>
            </section>

            <figure className='stock1'>
                <img src={stock1} alt="stock picture of little lemon" />
            </figure>
            <figure className='stock2'>
                <img src={stock2} alt="stock picture of little lemon" />
            </figure>
        </section>
    );
}
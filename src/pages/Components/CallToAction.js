import callToActionImage from '../../restauranfood.jpg';
import {useNavigate} from 'react-router-dom'
export default function CallToAction() {
    const navigate = useNavigate();

    return (
        <section className='ctaContainer'>
            <article>
                <h1>Little Lemon</h1>
                <h2>Florida</h2>

                <p>
                Welcome to the charming culinary haven, "Little Lemon," nestled at 1234 Lemon Pie Ave. in the heart of Lakeland, Florida. Our restaurant is a delightful oasis where zestful flavors and warm hospitality converge to create an unforgettable dining experience. As you step through our doors, you'll be greeted by the tantalizing aroma of freshly baked lemon-infused treats that beckon you to a world of culinary delights.

At Little Lemon, we take pride in crafting a menu that celebrates the versatility of this citrus gem. From tangy lemon pies that melt in your mouth to refreshing lemonade concoctions that quench your thirst, every dish is a testament to our commitment to quality and flavor. The cozy ambiance of our establishment is complemented by lemon-themed decor that adds a touch of whimsy to your dining journey.

Our chefs, passionate about infusing the brightness of lemons into their creations, source only the finest ingredients to ensure each bite is a burst of sunshine. Whether you're here for a leisurely brunch, a quick lunch, or a delightful dinner, Little Lemon invites you to savor the essence of Lakeland's culinary spirit through our citrus-inspired offerings. So, join us at 1234 Lemon Pie Ave., where every visit promises to be a zestful celebration of flavors and community.
                </p>
                <button className='rounded' onClick={() => navigate('/booking')}>Reserve a Table</button>
            </article>
            <figure>
                <img className='ctaImage' src={callToActionImage}/>
                {/* <figcaption>The image shows the layout of a qwerty keyboard.</figcaption> */}
            </figure>
        </section>
    );
}
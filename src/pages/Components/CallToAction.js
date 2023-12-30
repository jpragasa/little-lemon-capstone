import callToActionImage from '../../restauranfood.jpg';
export default function CallToAction() {
    return (
        <section className='ctaContainer'>
            <article>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae suscipit. Eget egestas purus viverra accumsan in nisl. Volutpat commodo sed egestas egestas fringilla phasellus. Orci eu lobortis elementum nibh tellus molestie nunc. Amet porttitor eget dolor morbi non arcu risus quis varius. Arcu bibendum at varius vel pharetra vel turpis nunc. Mattis ullamcorper velit sed ullamcorper morbi. Enim ut tellus elementum sagittis vitae. Neque ornare aenean euismod elementum nisi. Aliquet porttitor lacus luctus accumsan tortor posuere. Non diam phasellus vestibulum lorem sed risus. Tempor commodo ullamcorper a lacus vestibulum sed. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Sed nisi lacus sed viverra. Aliquet risus feugiat in ante.
                </p>
                <button className='rounded'>Reserve a Table</button>
            </article>
            <figure>
                <img className='ctaImage' src={callToActionImage} />
                {/* <figcaption>The image shows the layout of a qwerty keyboard.</figcaption> */}
            </figure>
        </section>
    );
}
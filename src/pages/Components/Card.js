import Rating from "./Rating";

export default function Card({
    cardType,
    cardImageSrc,
    cardItemName,
    cardPrice,
    cardDescription,
    cardItemRating,
    cardPersonName,
    cardReview}) {

    switch (cardType) {
        case "specials":
            return (
                <section className="card applyKarla">
                    <figure>
                        <img src={cardImageSrc} alt={"Image of " + cardItemName} />
                    </figure>
                    <section className="cardHeader">
                        <h3>{cardItemName}</h3>
                        <p className="price">{cardPrice}</p>
                    </section>
                    <article>
                        <p>{cardDescription}</p>
                    </article>
                    <section>
                        <span>Order A Delivery</span>
                    </section>
                </section>
            );
        case "testimonial":
            return (
                <section className="card applyKarla">
                    <figure>
                        {
                            new Array(cardItemRating).fill('').map((_, index) => <Rating/>)
                        }
                    </figure>
                    <figure>
                        <img src={cardImageSrc} alt={"Image of " + cardItemName} />
                    </figure>
                    <h3>{cardPersonName}</h3>
                    <article>
                        <p>
                            {cardReview}
                        </p>
                    </article>
                </section>
            );
    }


}
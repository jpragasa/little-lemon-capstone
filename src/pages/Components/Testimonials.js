import Card from "./Card";
import profileImage from '../../blankprofile.jpg'
export default function Testimonials() {
    return <section className="testimonials">
        <h2>Testimonials</h2>
        <section className="cards">
            <Card cardType="testimonial"
                cardItemRating={5}
                cardPersonName={"Jerry"}
                cardImageSrc={profileImage}
                cardReview={"Little Lemon is a citrus-infused paradise! From the moment I walked in, the aroma of lemon pies and the warm atmosphere made me feel at home. The lemonade is a game-changer, and every dish bursts with flavor. Little Lemon has become my go-to spot for a zesty culinary escape."} />
            <Card cardType="testimonial"
                cardItemRating={4}
                cardPersonName={"George"}
                cardImageSrc={profileImage}
                cardReview={"I stumbled upon Little Lemon one day and haven't stopped coming back since. The lemon-themed decor adds a quirky charm, and the menu is a lemon lover's dream. The staff is friendly, the pies are heavenly, and I can't resist their signature lemon-infused entrees. Little Lemon is my culinary escape from the ordinary!"} />
            <Card cardType="testimonial"
                cardItemRating={4}
                cardPersonName={"Joanna"}
                cardImageSrc={profileImage}
                cardReview={"Little Lemon is the perfect spot for a refreshing dining experience. The attention to detail in their lemon-themed decor and the thoughtfulness put into every dish make it a standout restaurant. The lemon pies are a slice of heaven, and the ambiance is both inviting and vibrant. Little Lemon has truly become my happy place in Lakeland."} />
            <Card cardType="testimonial"
                cardItemRating={5}
                cardPersonName={"Jackie"}
                cardImageSrc={profileImage}
                cardReview={"Little Lemon is a hidden gem! From the first taste of their zesty lemonade to the delightful lemon-infused desserts, every visit feels like a treat. The cozy atmosphere, coupled with the friendly staff, creates a dining experience that keeps me coming back. Little Lemon has captured my taste buds and my heart – a must-visit for anyone seeking a unique culinary adventure!"} />
        </section>

    </section>
}
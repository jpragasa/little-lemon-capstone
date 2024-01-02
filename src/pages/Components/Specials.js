import Card from "./Card";
import greekSalad from "../../GreekSalad.png";
import bruscheta from "../../Bruscheta.png"
import lemonDesert from "../../Lemon Dessert.png"
export default function Specials({ noHeader }) {
    return (
        <section className="specials">
            {
                noHeader ? <section className="specialsHeading">
                    <h2>This weeks specials!</h2>
                    <button className="rounded">Online Menu</button>
                </section> : ""
            }

            {/* Put Card Components Here */}
            <section className="cards">
                <Card
                    cardType="specials"
                    cardImageSrc={greekSalad}
                    cardItemName="Greek Salad"
                    cardPrice={12.99}
                    cardDescription={"Indulge in the vibrant flavors of the Mediterranean with our enticing Greek Salad. Crisp lettuce, juicy tomatoes, cucumber slices, and Kalamata olives create a refreshing base, while creamy feta cheese adds a delightful richness. Drizzled with our signature olive oil vinaigrette and sprinkled with oregano, this salad is a perfect harmony of textures and tastes. Elevate your dining experience with the wholesome goodness of our Greek Salad today."}
                />
                <Card
                    cardType="specials"
                    cardImageSrc={bruscheta}
                    cardItemName="Bruscheta"
                    cardPrice={12.99}
                    cardDescription={"Indulge in the vibrant flavors of the Mediterranean with our enticing Greek Salad. Crisp lettuce, juicy tomatoes, cucumber slices, and Kalamata olives create a refreshing base, while creamy feta cheese adds a delightful richness. Drizzled with our signature olive oil vinaigrette and sprinkled with oregano, this salad is a perfect harmony of textures and tastes. Elevate your dining experience with the wholesome goodness of our Greek Salad today."}
                />
                <Card
                    cardType="specials"
                    cardImageSrc={lemonDesert}
                    cardItemName="Lemon Desert"
                    cardPrice={12.99}
                    cardDescription={"Indulge in the vibrant flavors of the Mediterranean with our enticing Greek Salad. Crisp lettuce, juicy tomatoes, cucumber slices, and Kalamata olives create a refreshing base, while creamy feta cheese adds a delightful richness. Drizzled with our signature olive oil vinaigrette and sprinkled with oregano, this salad is a perfect harmony of textures and tastes. Elevate your dining experience with the wholesome goodness of our Greek Salad today."}
                />

            </section>
        </section>
    );
}
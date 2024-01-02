import { useState } from "react"
import { useNavigate } from "react-router-dom";
import AvailableTimes from "./AvailableTimes";
export default function BookingForm({ availableTimes, timesAvailable, setTimesAvailable }) {




    const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState('Birthday');
    const navigate = useNavigate();

    const removeFromList = (itemToRemove) => {
        const updatedItems = timesAvailable.filter(item => item !== itemToRemove);
        return updatedItems;
    }

    const handleDateChange = (e) => {
        setDate(e);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(setTimesAvailable(removeFromList(time)));

        navigate('/bookingSuccess')
    }
    return <section>
        <heading className="bookingHeader">Book your reservation</heading>
        <form className="bookingForm" onSubmit={handleSubmit}>

            <label htmlFor="res-date">Choose Date:</label>
            <input data-testid="date" value={date} type="date" id="res-date" onChange={(e) => handleDateChange(e.target.value)} />
            <label htmlFor="res-time">Choose Time: </label>
            <select value={time} id="res-time" onChange={(e) => setTime(e.target.value)}>
                {
                    timesAvailable?.map((_, index) => {
                        return <option value={_} key={index}>{_}</option>
                    })
                }
            </select>
            <label htmlFor="guests">Number of guests: </label>
            <input value={guests} type="number" placeholder="1" min={1} max={10} id="guests" onChange={(e) => setGuests(e.target.value)} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make your reservation" />
            <h3>Available Times: </h3>
            <AvailableTimes timesAvailable={timesAvailable} />
        </form>
    </section>

}
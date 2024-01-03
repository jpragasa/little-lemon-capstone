import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import AvailableTimes from "./AvailableTimes";
export default function BookingForm({ availableDatesAndTime, setAvailableDatesAndTime }) {


    const defaultDate = new Date().toISOString().substring(0, 10);

    const [date, setDate] = useState(defaultDate);
    const [time, setTime] = useState('Please select date');
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState('Birthday');
    const navigate = useNavigate();
    // const removeFromList = (itemToRemove) => {
    //     const updatedItems = timesAvailable.filter(item => item !== itemToRemove);
    //     return updatedItems;
    // }

    const removeFromList = (date, time) => {
        console.log(availableDatesAndTime);
        const updatedTimeList = availableDatesAndTime.filter(item => {
            if (item[0] == date) {
                const list = item[1].map((i) => i != time ? i : <span>Not Available</span>);
                item[1] = list;
                return item[1];
            }
            else {
                return item[1];
            }
            console.log(time)
        })
        console.log(updatedTimeList);
        //console.log(updatedTimeList)
        const updatedItems = updatedTimeList.filter(item => ((item[1] !== null || item[1] !== undefined)));
        return updatedItems;
    }

    const handleDateChange = (e) => {
        setDate(e);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(setTimesAvailable(removeFromList(time)));
        setAvailableDatesAndTime(removeFromList(date, time))
        navigate('/bookingSuccess')
    }
    return <section className="booking">
        <header className="bookingHeader">Book your reservation</header>
        <form className="bookingForm" onSubmit={handleSubmit}>

            <label htmlFor="res-date">Choose Date:</label>
            <input className="rounded" data-testid="date" value={date} type="date" id="res-date" onChange={(e) => handleDateChange(e.target.value)} required/>
            <label htmlFor="res-time">Choose Time: </label>
            <select className="rounded" defaultValue={time} id="res-time" onChange={(e) => setTime(e.target.value)} required>
                {

                    availableDatesAndTime?.map((_, index) => {
                        if (date == _[0]) {
                            return _[1].map((t, index) => {
                                return <option key={index} value={t}>{t}</option>
                            })
                        }

                    })
                }
            </select>
            <label htmlFor="guests">Number of guests: </label>
            <input  className="rounded" value={guests} type="number" placeholder="1" min={1} max={10} id="guests" onChange={(e) => setGuests(e.target.value)} />
            <label htmlFor="occasion">Occasion:</label>
            <select className="rounded" id="occasion" defaultValue={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input className="rounded" type="submit" value="Make your reservation" aria-label="On Click"/>
        </form>
        <h3 className="availableTimes">Available Times: </h3>
            <AvailableTimes availableDatesAndTime={availableDatesAndTime} />
    </section>

}
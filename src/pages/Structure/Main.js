import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Homepage from '../Components/Homepage';
import About from '../Structure/About';
import Menu from '../Components/Menu';
import Reservations from '../Components/Reservations';
import OnlineOrder from '../Components/OnlineOrder';
import Login from '../Components/Login';
import BookingForm from '../Components/BookingForm';
import BookingSuccessPopup from '../Components/BookingSuccessPopup';
function Main() {
    const availableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ];
    const [timesAvailable, setTimesAvailable] = useState(availableTimes);
    return <main>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/reservations" element={<Reservations />}></Route>
            <Route path="/orderonline" element={<OnlineOrder />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/booking" element={<BookingForm availableTimes={availableTimes} timesAvailable={timesAvailable} setTimesAvailable={setTimesAvailable}/>}></Route>
            <Route path='/bookingSuccess' element={<BookingSuccessPopup/>}/>
            <Route path="*" element={<h1>404 Page Not Found</h1>}></Route>
        </Routes>
    </main>
}

export default Main;
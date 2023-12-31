import { Routes, Route } from 'react-router-dom';
import Homepage from '../Components/Homepage';
import About from '../Structure/About';
import Menu from '../Components/Menu';
import Reservations from '../Components/Reservations';
import OnlineOrder from '../Components/OnlineOrder';
import Login from '../Components/Login';
function Main() {
    return <main>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/reservations" element={<Reservations />}></Route>
            <Route path="/orderonline" element={<OnlineOrder />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<h1>404 Page Not Found</h1>}></Route>
        </Routes>
    </main>
}

export default Main;
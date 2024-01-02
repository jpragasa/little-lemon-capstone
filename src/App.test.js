import { queryByTestId, render } from "@testing-library/react";
import App from '../src/App'
import Homepage from "./pages/Components/Homepage";
import CallToAction from "./pages/Components/CallToAction";
import BookingForm from "./pages/Components/BookingForm";

describe('Homepage component', () => {
    it('should render the component onto the screen', () => {
        expect(Homepage).toBeTruthy();
    });
});

describe('Booking form component', () => {
    it('should render the component onto the screen', () => {
        expect(BookingForm).toBeTruthy();
    });
});

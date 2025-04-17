import { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBookingPage from "./pages/ConfirmedBookingPage";
import { fetchAPI, submitAPI } from "../bookingAPI";

const initializeTimes = [...fetchAPI(new Date())];

const updateTimes = (state, date) => {
  return [...fetchAPI(new Date(date))];
};

export default function Main({ children }) {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route index path="/" element={<HomePage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/confirmed" element={<ConfirmedBookingPage />}></Route>
      </Routes>
    </main>
  );
}

import { useState } from "react";
import Button from "./Button";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const occasions = ["Birthday", "Anniversary"];

  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form", form);
    submitForm(e);
  };

  const handleDateChange = (e) => {
    dispatch(e);
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          onChange={(e) => {
            setForm({ ...form, date: e.target.value });
            handleDateChange(e.target.value);
          }}
          className="bg-gray-200 p-2 rounded-md border border-gray-300"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          className="bg-gray-200 p-2 rounded-md border border-gray-300"
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          required
        >
          {availableTimes?.map((time, index) => (
            <option key={time}>{time}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(e) => setForm({ ...form, guests: e.target.value })}
          className="bg-gray-200 p-2 rounded-md border border-gray-300"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          onChange={(e) => setForm({ ...form, occasion: e.target.value })}
          className="bg-gray-200 p-2 rounded-md border border-gray-300"
          required
        >
          {occasions.map((occarsion) => (
            <option value={occarsion} key={occarsion}>
              {occarsion}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Button type="submit">Book Now</Button>
      </div>
    </form>
  );
}

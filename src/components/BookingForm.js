import { useState } from "react";
import Button from "./Button";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const occasions = ["Birthday", "Anniversary"];

  const [form, setForm] = useState({
    date: { value: "", touched: false },
    time: { value: "", touched: false },
    guests: { value: "1", touched: false },
    occasion: { value: "", touched: false },
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        value,
      },
    }));

    if (field === "date") {
      dispatch(value);
    }
  };

  const handleBlur = (field) => {
    setForm((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        touched: true,
      },
    }));
  };

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
        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          value={form.date.value}
          onChange={(e) => handleChange("date", e.target.value)}
          onBlur={() => handleBlur("date")}
          className="bg-gray-200 p-2 rounded-md border border-gray-300"
          required
        />
        {(!form.date.value && form.date.touched) && (
          <p className="text-red-600">
            The date is required.Please select a date.
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          className="bg-gray-200 p-2 rounded-md border border-gray-300"
          value={form.time.value}
          onChange={(e) => handleChange("time", e.target.value)}
          onBlur={() => handleBlur("time")}
          required
        >
          {availableTimes?.map((time, index) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        {(!form.time.value && form.time.touched) && (
          <p className="text-red-600">
            The time is required.Please select a time.
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={form.guests.value}
          onChange={(e) => handleChange("guests", e.target.value)}
          onBlur={() => handleBlur("guests")}
          className="bg-gray-200 p-2 rounded-md border border-gray-300"
          required
        />
        {((form.guests.value < 1 || form.guests.value > 10) && form.date.touched) && (
          <p className="text-red-600">
            The number of guests must be between 1 and 10.
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={form.occasion.value}
          onChange={(e) => handleChange("occasion", e.target.value)}
          onBlur={() => handleBlur("occasion")}
          className="bg-gray-200 p-2 rounded-md border border-gray-300"
          required
        >
          {occasions.map((occasion) => (
            <option value={occasion} key={occasion}>
              {occasion}
            </option>
          ))}
        </select>
        {(!form.occasion && form.date.touched) && (
          <p className="text-red-600">
            The occasion is required.Please select a occasion.
          </p>
        )}
      </div>
      <div>
        <Button type="submit" role="button">Book Now</Button>
      </div>
    </form>
  );
}

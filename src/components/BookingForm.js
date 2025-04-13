export default function BookingForm() {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" className="bg-gray-200 p-2 rounded-md border border-gray-300" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " className="bg-gray-200 p-2 rounded-md border border-gray-300">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests"  className="bg-gray-200 p-2 rounded-md border border-gray-300"/>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" className="bg-gray-200 p-2 rounded-md border border-gray-300">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>
      <div>
        <button type="submit" className="px-4 py-2 bg-secondary rounded-md">Make Your reservation</button>
      </div>
    </form>
  );
}

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("Renders the BookingForm button", () => {
  render(<BookingForm />);
  const buttonElement = screen.getByText("Book Now");
  expect(buttonElement).toBeInTheDocument();
});

describe("BookingForm", () => {
  it("should submit the form with correct values", () => {
    const availableTimes = ["18:00", "19:00", "20:00"];
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn((e) => e.preventDefault());

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByRole("button", { name: /book now/i });

    fireEvent.change(dateInput, { target: { value: "2025-04-20" } });
    fireEvent.change(timeSelect, { target: { value: "19:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith("2025-04-20");
  });
});

import {
  validateDate,
  validateTime,
  validateGuests,
  validateOccasion,
} from "./validation";

describe("Validation functions", () => {
  describe("validateDate", () => {
    it("should return true for a valid date", () => {
      expect(validateDate("2025-04-20")).toBe(true);
    });

    it("should return false for an empty date", () => {
      expect(validateDate("")).toBe(false);
    });
  });

  describe("validateTime", () => {
    it("should return true for a valid time", () => {
      expect(validateTime("19:00")).toBe(true);
    });

    it("should return false for an empty time", () => {
      expect(validateTime("")).toBe(false);
    });
  });

  describe("validateGuests", () => {
    it("should return true for a valid number of guests", () => {
      expect(validateGuests("4")).toBe(true);
    });

    it("should return false for zero guests", () => {
      expect(validateGuests("0")).toBe(false);
    });

    it("should return false for more than 10 guests", () => {
      expect(validateGuests("11")).toBe(false);
    });

    it("should return false for non-numeric input", () => {
      expect(validateGuests("abc")).toBe(false);
    });
  });

  describe("validateOccasion", () => {
    it("should return true for a valid occasion", () => {
      expect(validateOccasion("Birthday")).toBe(true);
    });

    it("should return false for an empty occasion", () => {
      expect(validateOccasion("")).toBe(false);
    });
  });
});

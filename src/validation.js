// validation.js

export function validateDate(date) {
  return Boolean(date);
}

export function validateTime(time) {
  return Boolean(time);
}

export function validateGuests(guests) {
  const num = parseInt(guests, 10);
  return !isNaN(num) && num >= 1 && num <= 10;
}

export function validateOccasion(occasion) {
  return Boolean(occasion);
}

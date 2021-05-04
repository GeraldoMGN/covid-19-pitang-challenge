const sameDay = (first, second) => (
  first.getFullYear() === second.getFullYear()
    && first.getMonth() === second.getMonth()
    && first.getDate() === second.getDate());

const sameMinute = (first, second) => (
  sameDay(first, second)
    && first.getHours() === second.getHours()
    && first.getMinutes() === second.getMinutes());

export { sameDay, sameMinute };

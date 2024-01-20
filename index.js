const { addDays } = require("date-fns");
function addingDays(days) {
  const newDate = addDays(new Date(2020, 7, 22), days);

  const fullYear = newDate.getFullYear();
  const fullMonth = newDate.getMonth();
  const fullDay = newDate.getDate();
  const fullDate = `${fullDay}-${fullMonth + 1}-${fullYear}`;
  return fullDate;
}
module.exports = addingDays;

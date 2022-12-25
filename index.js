const addDay = require("date-fns/addDays");

const newDate = days => {
    const futureDate = addDay(new Date(2020, 7, 22), days);
    return `${futureDate.getDate()}-${futureDate.getMonth() + 1}-${futureDate.getFullYear()}`
}

module.exports = newDate;

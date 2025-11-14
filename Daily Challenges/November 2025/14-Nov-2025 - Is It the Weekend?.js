/*
Is It the Weekend?
Given a date in the format "YYYY-MM-DD", return the number of days left until the weekend.

The weekend starts on Saturday.
If the given date is Saturday or Sunday, return "It's the weekend!".
Otherwise, return "X days until the weekend.", where X is the number of days until Saturday.
If X is 1, use "day" (singular) instead of "days" (plural).
Make sure the calculation ignores your local timezone.
*/

daysUntilWeekend("2025-11-14") // should return "1 day until the weekend.".
daysUntilWeekend("2025-01-01") // should return "3 days until the weekend.".
daysUntilWeekend("2025-12-06") // should return "It's the weekend!".
daysUntilWeekend("2026-01-27") // should return "4 days until the weekend.".
daysUntilWeekend("2026-09-07") // should return "5 days until the weekend.".
daysUntilWeekend("2026-11-29") // should return "It's the weekend!".

function daysUntilWeekend(dateString) {

    // Convert the date string to date
    let date = new Date(dateString);

    // Retrieve the day of week from the date
    let dayOfWeek = date.getDay();

    // Work out how many days until Saturday
    let daysTillWeekend = 6 - dayOfWeek;

    // If it's not the weekend, work out how many days until it is
    if(dayOfWeek != 6 && dayOfWeek != 0) {
        
        // To decode "day" or "days"
        let dayOrDays = "";

        // If 1 day, then decode to "day", otherwise "days"
        if(daysTillWeekend == 1) {
            dayOrDays = "day";
        } else {
            dayOrDays = "days";
        }

        // Construct the result string
        daysTillWeekend = daysTillWeekend + " " + dayOrDays + " until the weekend.";

    } else {
        // It's the weekend - construct the result string
        daysTillWeekend = "It's the weekend!";
    }

    console.log(daysTillWeekend);

  return daysTillWeekend;
}
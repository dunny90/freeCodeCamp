/*
What's My Age Again?
Given the date of someone's birthday in the format YYYY-MM-DD, return the person's age as of November 27th, 2025.

Assume all birthdays are valid dates before November 27th, 2025.
Return the age as an integer.
Be sure to account for whether the person has already had their birthday in 2025.
*/

calculateAge("2000-11-20") // should return 25.
calculateAge("2000-12-01") // should return 24.
calculateAge("2014-10-25") // should return 11.
calculateAge("1994-01-06") // should return 31.
calculateAge("1994-12-14") // should return 30.

function calculateAge(birthday) {

    // Convert birthday to a date
    const date1 = new Date(birthday);

    // Extract the day, month & year
    let y1 = date1.getFullYear();
    let m1 = date1.getMonth();
    let d1 = date1.getDay();

    // Get today's date
    const date2 = new Date(Date.now());

    // Extract the day, month & year
    let y2 = date2.getFullYear();
    let m2 = date2.getMonth();
    let d2 = date2.getDay();

    // Work out the difference in years
    let yearDiff = y2 - y1;

    // If the birthday month is less than the current month, they have not had their birthday this year yet
    if(m2 < m1) {
        // So subtract 1 year from the yearDiff
        yearDiff -= 1;
    } else if (m1 == m2) {
        // If the two months are the same, then apply the same logic to the days
        if(d2 < d1) {
            // Birthday day is less than the current day, so not hadbirthday yet. Subtract 1 year as a result
            yearDiff -= 1;
        }
    }

    console.log(yearDiff);

  return yearDiff;
}
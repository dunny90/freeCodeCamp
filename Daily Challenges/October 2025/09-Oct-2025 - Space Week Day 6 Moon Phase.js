/*Space Week Day 6: Moon Phase
For day six of Space Week, you will be given a date in the format "YYYY-MM-DD" and need to determine the phase of the moon for that day using the following rules:

Use a simplified lunar cycle of 28 days, divided into four equal phases:

"New": days 1 - 7
"Waxing": days 8 - 14
"Full": days 15 - 21
"Waning": days 22 - 28
After day 28, the cycle repeats with day 1, a new moon.

Use "2000-01-06" as a reference new moon (day 1 of the cycle) to determine the phase of the given day.
You will not be given any dates before the reference date.
Return the correct phase as a string.
*/

moonPhase("2000-01-12") // should return "New".
moonPhase("2000-01-13") // should return "Waxing".
moonPhase("2014-10-15") // should return "Full".
moonPhase("2012-10-21") // should return "Waning".
moonPhase("2022-12-14") // should return "New".

function moonPhase(dateStringToCheck) {
  
// Lunar cycle
let lunarCycle = 28;
let referenceDate = new Date("2000-01-06");
let dateToCheck = new Date(dateStringToCheck);

// Subtract one Date object from the other to get the difference in milliseconds.
let timeDifference = dateToCheck - referenceDate;
  
// Convert milliseconds into days by dividing by the number of milliseconds in a day (86400000).
// Add 1 as the 6th is considered day 1
let daysDifference = (timeDifference / (1000 * 3600 * 24)) + 1;

let modDaysDifference = daysDifference % lunarCycle;
  
console.log(modDaysDifference);
  
// Could have used a multiplier of 7 to work out the ranges, however explicitly defined them to give more flexibility
let phaseRanges = [{
                  "name": "New",
                  "min_boundary": 1,
                  "max_boundary": 7
                  },
                  {
                  "name": "Waxing",
                  "min_boundary": 8,
                  "max_boundary": 14
                  },
                  {
                  "name": "Full",
                  "min_boundary": 15,
                  "max_boundary": 21
                  },
                  {
                  "name": "Waning",
                  "min_boundary": 22,
                  "max_boundary": 28
                  }];


  let phase = phaseRanges.find(phaseName => (phaseName.min_boundary <= modDaysDifference && phaseName.max_boundary >= modDaysDifference));

  let phaseName = phase.name;

  return phaseName;
}

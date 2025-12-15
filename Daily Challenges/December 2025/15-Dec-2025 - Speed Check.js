/*
Speed Check
Given the speed you are traveling in miles per hour (MPH), and a speed limit in kilometers per hour (KPH), determine whether you are speeding and if you will get a warning or a ticket.

1 mile equals 1.60934 kilometers.
If you are travelling less than or equal to the speed limit, return "Not Speeding".
If you are travelling 5 KPH or less over the speed limit, return "Warning".
If you are travelling more than 5 KPH over the speed limit, return "Ticket".
*/

speedCheck(30, 70)  // should return "Not Speeding".
speedCheck(40, 60)  // should return "Warning".
speedCheck(40, 65)  // should return "Not Speeding".
speedCheck(60, 90)  // should return "Ticket".
speedCheck(65, 100) // should return "Warning".
speedCheck(88, 40)  // should return "Ticket".

function speedCheck(speedMph, speedLimitKph) {

    let conversionRate = 1.60934;

    let speedKMs = speedMph * conversionRate;

    if(speedKMs <= speedLimitKph) {
        return "Not Speeding";
    } else if(speedKMs <= speedLimitKph + 5) {
        return "Warning";
    } else {
        return "Ticket";
    }
    
  return speedMph;
}
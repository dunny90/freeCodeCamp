/*
Infected
On November 2nd, 1988, the first major internet worm was released, infecting about 10% of computers connected to the internet after only a day.

In this challenge, you are given a number of days that have passed since an internet worm was released, and you need to determine how many computers are infected using the following rules:

On day 0, the first computer is infected.
Each subsequent day, the number of infected computers doubles.
Every 3rd day, a patch is applied after the virus spreads and reduces the number of infected computers by 20%. Round the number of patched computers up to the nearest whole number.
For example, on:

Day 0: 1 total computer is infected.
Day 1: 2 total computers are infected.
Day 2: 4 total computers are infected.
Day 3: 8 total computers are infected. Then, apply the patch: 8 infected * 20% = 1.6 patched. Round 1.6 up to 2. 8 computers infected - 2 patched = 6 total computers infected after day 3.
Return the number of total infected computers after the given amount of days have passed.
*/

infected(1) // should return 2.
infected(3) // should return 6.
infected(8) // should return 152.
infected(17) // should return 39808.
infected(25) // should return 5217638.

function infected(days) {
  
  // Infected count is 1 on day 0
  let count = 1;

  // Loop through the days, starting from 1
  for(let day = 1; day <= days; day++) {
    
    // Calculate day mod 3, as every 3rd day we need to do something different
    switch(day % 3) {
      
      // Every 3rd day
      case 0:
        // Every 3rd day we double the count initially
        count+=count;
        // Then we work out how many have been patched by calculating 20%
        let patchedCount = count * 0.2
        // We then round this up
        patchedCount = Math.ceil(patchedCount);
        // Then adjust the count by subtracting the patched count
        count-= patchedCount;

        break;
      
      // Every other day
      default:
        // On days other than every 3rd day we simply double the count
        count+=count;
        break;
    }
  }

  return count;
}

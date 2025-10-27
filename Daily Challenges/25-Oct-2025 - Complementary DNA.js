/*
Complementary DNA
Given a string representing a DNA sequence, return its complementary strand using the following rules:

DNA consists of the letters "A", "C", "G", and "T".
The letters "A" and "T" complement each other.
The letters "C" and "G" complement each other.
For example, given "ACGT", return "TGCA".
*/

complementaryDNA("ACGT") // should return "TGCA".
complementaryDNA("ATGCGTACGTTAGC") // should return "TACGCATGCAATCG".
complementaryDNA("GGCTTACGATCGAAG") // should return "CCGAATGCTAGCTTC".
complementaryDNA("GATCTAGCTAGGCTAGCTAG") // should return "CTAGATCGATCCGATCGATC".

function complementaryDNA(strand) {

  // Letter compliment pairs
  let letterCompliments = ["AT","CG"];
  // To store the result string
  let complimentResult = "";
  
  // Loop through the input string
  for(let i = 0; i < strand.length; i++) {
    
    // Loop through the compliment pairs
    for(let j = 0; j < letterCompliments.length; j++) {
      
      // Extract letter one of the compliment pair
      let letter1 = letterCompliments[j][0];
      // Extract letter two of the compliment pair
      let letter2 = letterCompliments[j][1];
      
      // If current strand letter is equal to letter 1
      if(strand[i] == letter1) {
        // Add letter 2 to the compliment result
        complimentResult += letter2;
      }
      
      // If current strand letter is equal to letter 2
      if(strand[i] == letter2) {
        // Add letter 1 to the compliment result
        complimentResult += letter1;
      }
      
    }
  }

  return complimentResult;
}

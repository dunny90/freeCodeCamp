/*
Email Signature Generator
Given strings for a person's name, title, and company, return an email signature as a single string using the following rules:

The name should appear first, preceded by a prefix that depends on the first letter of the name. For names starting with (case-insensitive):
A-I: Use >> as the prefix.
J-R: Use -- as the prefix.
S-Z: Use :: as the prefix.
A comma and space (, ) should follow the name.
The title and company should follow the comma and space, separated by " at " (with spaces around it).
For example, given "Quinn Waverly", "Founder and CEO", and "TechCo" return "--Quinn Waverly, Founder and CEO at TechCo".
*/

generateSignature("Quinn Waverly", "Founder and CEO", "TechCo")     // should return "--Quinn Waverly, Founder and CEO at TechCo".
generateSignature("Alice Reed", "Engineer", "TechCo")               // should return ">>Alice Reed, Engineer at TechCo".
generateSignature("Tina Vaughn", "Developer", "example.com")        // should return "::Tina Vaughn,Developer at example.com".
generateSignature("B. B.", "Product Tester", "AcmeCorp")            // should return ">>B. B., Product Tester at AcmeCorp".
generateSignature("windstorm", "Cloud Architect", "Atmospheronics") // should return "::windstorm, Cloud Architect at Atmospheronics".

function generateSignature(name, title, company) {

    // Define 3 patterns to see what the first character of the nane is
    let pattern1 = /[a-i]/;
    let pattern2 = /[j-r]/;
    let pattern3 = /[s-z]/;

    let prefix = "";
    let signature = "";

    // First char is [a-i]
    if(name[0].toLowerCase().match(pattern1)) {
        prefix = ">>";
    // First char is [j-r]
    } else if (name[0].toLowerCase().match(pattern2)) {
        prefix = "--";
    // First char is [s-z]
    } else if (name[0].toLowerCase().match(pattern3)) {
        prefix = "::";
    }

    // Construct the signature as per the defined rules
    signature = prefix + name + ", " + title + " at " + company;

    console.log(signature);

  return signature;
}
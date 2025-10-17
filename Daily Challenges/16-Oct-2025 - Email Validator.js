/*
Email Validator
Given a string, determine if it is a valid email address using the following constraints:

It must contain exactly one @ symbol.
The local part (before the @):
Can only contain letters (a-z, A-Z), digits (0-9), dots (.), underscores (_), or hyphens (-).
Cannot start or end with a dot.
The domain part (after the @):
Must contain at least one dot.
Must end with a dot followed by at least two letters.
Neither the local or domain part can have two dots in a row.
*/

validate("a@b.cd") // should return true.
validate("hell.-w.rld@example.com") // should return true.
validate(".b@sh.rc") // should return false.
validate("example@test.c0") // should return false.
validate("freecodecamp.org") // should return false.
validate("develop.ment_user@c0D!NG.R.CKS") // should return true.
validate("hello.@wo.rld") // should return false.
validate("hello@world..com") // should return false.
validate("git@commit@push.io") // should return false.

function validate(email) {
  
  // The following steps could have been achieved using a single regular expression, however split out
  // so the logic could be followed more easily
  let valid = true;
  
  // See how many @ symbols are in the email
  valid = checkNumberOfAtSymbols(email);
  
  if(valid) {
    // Validate the first part
    valid = validateLocalPart(email);
  }
  
  if(valid) {
    valid = validateDomainPart(email);
  }
  
  return valid;
}

function checkNumberOfAtSymbols(email) {
  
  let valid = true;
  
  // Find the index of '@' after the first instance of '@'
  let atPosition = email.indexOf("@");
  // Check at least one '@'
  if(atPosition > 0) {
    // If -1 then no more '@', so valid
    valid = (email.indexOf("@",atPosition+1) == -1)
  } else {
    valid = false;
  }
  
  return valid;
}

function validateLocalPart(email) {
  
  let valid = true;
  
  // Extract the first part
  let localPart = email.substring(0, email.indexOf("@"));
    
  // Check the first and last characters for periods
  if(localPart.substring(0, 1) == "." || localPart.substring(localPart.length-1) == ".")   {
    valid = false;
  }    
  
  // If the first checks have passed then proceed with the following checks
  if(valid) {
    
    // Now check it contains the correct characters using regex
    let pattern = /[a-z]?\d?\.?\_?\-?/i;

    valid = pattern.test(localPart);
  }

  return valid;
}

function validateDomainPart(email) {
  
  let valid = true;
  
  // Extract the domain part of the email
  let domainPart = email.substring(email.indexOf("@") + 1);
  
  // Set the pattern as per the domain rules. Make it case insensitive with 'i'
  let pattern = /^.*\.+[A-Z]{2,}$/i;
  
  // Test whether the domain part matches the pattern
  valid = pattern.test(domainPart);

  // If valid, check for any double dots
  if(valid) {
    // Set the double dot pattern
    let doubleDotsPattern = /(\.){2,}/;
    
    // If it matches, this makes the email invalid
    if (doubleDotsPattern.test(domainPart)) {
      valid = false;
    } else {
      valid = true;
    }
  }

  return valid;
}

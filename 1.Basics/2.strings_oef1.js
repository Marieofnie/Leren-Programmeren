// const email = "jos.verminnen@gmail.com";
//naar J. Verminnen
// alles vanaf @  weg
//. veranderen door ''
// van Jos enkel index 0 overhouden
// de j in uppercase zetten
// de v in uppercase zetten

const email = "jos.verminnen@gmail.com";
const nameWithDot = email.substring(0, email.indexOf("@")); //jos.verminnen
const firstName = nameWithDot.substring(0, nameWithDot.indexOf(".")); //jos
const lastName = nameWithDot.substring(nameWithDot.indexOf(".") + 1); //verminnen (.+1 anders is het .verminnen)
const firstLetterFirstName = firstName.charAt(0); //j
const firstLetterUpperCase = firstLetterFirstName.toUpperCase(); // J
const firstLetterUpperCasePoint = firstLetterUpperCase + "."; // J.
const firstLetterLastName =
  lastName.charAt(0).toUpperCase() + lastName.substring(1); //Verminnen
console.log(firstLetterUpperCasePoint + " " + firstLetterLastName);

// email.charAt().toUpperCase()+ ". "+email.substring(email.indexOf(".")+1, email.indexOf("@")).charAt().toUppercase()+email.substring(email.indexOf(".")+1, email.indexOf("@")).substring(1);
const emailtje = "cindy.verminnen@gmail.com";
// DOEL =======>  C. Verminnen

const deel1 = emailtje.charAt(0).toUpperCase() + ". "; // 'C. '
const an = emailtje.substring(emailtje.indexOf(".") + 1, emailtje.indexOf("@")); // 'verminnen'
const deel2 = an.charAt().toUpperCase() + an.substring(1); // 'Verminnen'

const output = deel1 + deel2; // 'C. Verminnen'
console.log(output);

// - Write a JavaScript function to hide email addresses to protect from unauthorized user.
// 	console.log(protect_email("robin_singh@example.com"));
// 		"robin...@example.com"

// lengte nodig voor @
// helft nodig van lengte voor @
// rest vervangen door ...
// substring vanaf @ terug aanplakken
// return protected

// 1. create function and return emailadress and execute it
// 2. split email in 2 parts based on @ and test the 2 parts
// 3. rond de lengte van de eerste array af naar beneden

function protect_email(email_adress) {
  const parts = email_adress.split("@");
  const toSeeNum = Math.ceil(parts[0].length / 2);
  const toSee = parts[0].substring(0, toSeeNum);
  console.log(parts[0]);
  console.log(parts[1]);
  console.log(toSeeNum);
  console.log(toSee);
  return toSee + "...@" + parts[1];
}
console.log(protect_email("marieke.salien@hotmail.com"));

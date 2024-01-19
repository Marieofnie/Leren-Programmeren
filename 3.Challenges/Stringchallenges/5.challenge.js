// - Write a JavaScript function to truncate a string to a certain length.
// 	console.log(truncate_string("Robin Singh",4));
// 		"Robi"
function truncate_string(schoonmoeder, lengte) {
  return schoonmoeder.substring(0, lengte);
}
console.log(truncate_string("lalalalalalalaalalalalalalaalalalalala", 4));

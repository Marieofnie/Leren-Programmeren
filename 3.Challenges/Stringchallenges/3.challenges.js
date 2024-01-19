// - Write a JavaScript function to insert a string within a string at a particular position
// 	console.log(insert('We are doing some exercises.','JavaScript ',18));
// 		"We are doing some JavaScript exercises."

//1.basisfunctie maken
//
// 3. in juiste volgorde returnen
//4. bij default 1 positie dus IF ELSE
// 5. bij else deel 1 en 2 bepalen en mmet extra returnen

function insert(basis, extra, positie) {
  if (positie === null) {
    return extra + basis;
  } else {
    const deel1 = basis.substring(0, positie);
    const deel2 = basis.substring(positie);
    return deel1 + extra + deel2;
  }
}
console.log(insert("We are doing some exercises.", "JavaScript ", 18));

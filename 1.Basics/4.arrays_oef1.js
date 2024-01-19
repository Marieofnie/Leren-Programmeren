const nrs = [12, 45, 56, 78, 12, 1, 45, 12, 48, 60];
console.log(nrs[3]); // 78
console.log(nrs[2] + nrs[6]); //56+45 = 101

let totaal = 0;
for (let i = 0; i < nrs.length; i++) {
  //   totaal = totaal + nrs[i];
  totaal += nrs[i];
}
console.log(totaal);

for (let i = 0; i < nrs.length; i++) {
  if (nrs[i] % 3 == 0) {
    console.log(nrs[i] + "*");
  } else {
    console.log(nrs[i]);
  }
}

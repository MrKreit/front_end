let names=["Семен", "Иван", "Петр", "Татьяна"];
let age=[ 18, 27, 74, 34];
let ageNames = [];
for (i=0; i<age.length; i++) {
    ageNames.push (names[i] + " " + age[i] + "yers");
};
console.log(ageNames);
let revAgeNames = [];
revAgeNames = ageNames.reverse();
console.log(revAgeNames);

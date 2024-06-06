//If-Else-Switch-Activity 1
const age = 17;
const country = "UK";

if (age >= 17 && country !== "UK") {
  console.log("Yes, I can serve you");
} else if (age <= 17 && country == "UK") {
  console.log("you aren't old enough");
} else if (age >= 18 && country == "UK") {
  console.log("Yes, I can serve you");
} else console.log("you aren't old enough");

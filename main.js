console.log((1 + 1 > 5) ? "True fact!" : "LIES!"); // Is the sum of 1 and 1 greater than 5?
console.log((4 * 5 <= 20) ? "True fact!" : "LIES!"); // Is the product of 4 and 5 less than or equal to 20?
console.log((6 - 2 >= 0) ? "True fact!" : "LIES!"); // Is the difference between 6 and 2 greater than or equal to 0?
console.log((100 / 4 > 20) ? "True fact!" : "LIES!"); // Is the quotient of 100 divided by 4 greater than 20?

const likesDogs = false;

if (likesDogs) {
    console.log("You're a dog person!");
} else {
    console.log("You're a cat person!");
}

const person = {
    name: "Scarabee",
    preferredLanguage: "French"
};

// Conditional to check the preferred language and print a greeting accordingly
if (person.preferredLanguage == "English") {
    console.log(`Hello, ${person.name}!`);
} else if (person.preferredLanguage == "Spanish") {
    console.log(`Hola, ${person.name}!`);
} else if (person.preferredLanguage == "French") {
    console.log(`Bonjour, ${person.name}!`);
} else {
    console.log("Language not recognized.");
}

const grade = 93;

if (grade >= 0 && grade <= 69) {
    console.log("You got an F");
} else if (grade >= 70 && grade <= 76) {
    console.log("You got a D");
} else if (grade >= 77 && grade <= 84) {
    console.log("You got a C");
} else if (grade >= 85 && grade <= 92) {
    console.log("You got a B");
} else if (grade >= 93 && grade <= 100) {
    console.log("You got an A");
} else {
    console.log("This is not a valid grade");
}
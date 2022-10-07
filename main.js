// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [131, 206, 93, 65, 113, 58]

// Declare a variable to store the total. Initial value is 0.
let totalMiles = 0;

/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (trip of weeklyMiles) {
    totalMiles += trip
}

// Declare a new variable to store the average miles over time
const avgMiles = totalMiles / weeklyMiles.length;

// Output the average miles and the total miles to the console
console.log(`I average ${avgMiles} miles each week.
I have driven a total of ${totalMiles} miles.`)
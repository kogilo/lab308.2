// Part 1: Growing Pains
// Your task is to create a program that advises a 
// group of environmental scientists how to handle the 
// growth and spread of a unique plant species under their 
// supervision. You must develop a growth control system 
// that will monitor and predict the plant growth,
//  making decisions based on the available space 
// and potential growth.
// Here is the information you have been given:
     //   The area in which the plants are contained is circular, 
    //  with a radius of 5 meters.
     // The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
let radius = 5
const area = PI * radius * radius;
const plantSpace = 0.8;
const maxPlantsAreaHold = area/plantSpace
     // Each plant requires a minimum space of 0.8 square meters.
     // The area is starting with 20 plants.
     // The plants double in number every week.


    //  Using this information, your objectives are to:
    //  Predict the plant growth after a specific number of weeks.
let initialPlant = 20;
let plantGrowthPerWeek = 2 * initialPlant;
let numOfWeek = 4;
let numPlantAfterSomeWeek = initialPlant * 2**(numOfWeek)
let NumOfWeeks = [1, 2, 3, 4, 5]
// With If statement OPTION-1
console.log("With If statement OPTION-1")
console.log("=============================")
if (numOfWeek = 4) {
        console.log(`The number of plant are now ${numPlantAfterSomeWeek} after week ${numOfWeek}`)
       }
        
// With For Loop OPTION-2 ADVANCED
console.log("With For Loop ADVANCED OPTION-2")
console.log("=============================")
 for (let w =0; w < NumOfWeeks.length; w++) {
    console.log(`The number of plants are now ${initialPlant * 2**w} after ${w} week(s)`)
    let numberPlants = initialPlant * 2**w;
    // if (numberPlants > )
 }

    //  Implement control flow to make decisions on whether the plants should be:
    //  Pruned, to stop them from exceeding the capacity of the garden.
    // This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
    // Monitored, if they are growing at an acceptable rate.
        // This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
    // Planted, if there is room to plant more plants.
        // This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

if (numPlantAfterSomeWeek > 0.8 * maxPlantsAreaHold && numPlantAfterSomeWeek <= 0.8 * maxPlantsAreaHold) {
    console.log(`Prune the plants, they are exceeding capacity!`);
} else {
    console.log("Plant more, there's room for more plants.");
}

// Loop through 1, 2, and 3 weeks of growth
for (let w = 1; w <= 3; w++) {
    let numPlants = initialPlant * 2 ** w;
    console.log(`After week ${w}, the number of plants is: ${numPlants}`);
}

// Part 2: Thinking Bigger
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
    // The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
    // If the space remained circular, what would be the radius of this expanded garden?

// Part 3: Errors in Judgement
    // The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
    // Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.
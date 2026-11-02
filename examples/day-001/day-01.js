// const creates a variable binding that cannot be reassigned.
const learnerName = "Alex";

// This string value stores the learner's name.
const topic = "Variables and basic values";

// This number value stores how many minutes the learner studied.
const minutesStudied = 90;

// This number value stores the daily study target in minutes.
const dailyGoalMinutes = 60;

// >= compares the numbers and produces a boolean: true or false.
const metDailyGoal = minutesStudied >= dailyGoalMinutes;

// console.log prints a label and the learner's name to the terminal.
console.log("Learner:", learnerName);

// A template string inserts the topic and study time into a sentence.
console.log(`${learnerName} studied ${topic} for ${minutesStudied} minutes.`);

// This template string prints the boolean result of the comparison.
console.log(`Met the ${dailyGoalMinutes}-minute goal: ${metDailyGoal}`);

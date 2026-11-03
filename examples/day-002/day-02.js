// Store the learner's name in a constant string.
const learnerName = "Alex";
// Store the subject being studied in another constant string.
const topic = "Conditionals and decision making";
// Record the number of minutes the learner studied.
const minutesStudied = 45;
// Set the daily study target in minutes.
const dailyGoalMinutes = 60;

// Compare the study time with the goal; this expression evaluates to true or false.
const metDailyGoal = minutesStudied >= dailyGoalMinutes;

// Run this block only when metDailyGoal is true.
if (metDailyGoal) {
  // Print a message confirming the learner reached the goal.
  console.log(`${learnerName} met the ${dailyGoalMinutes}-minute goal for ${topic}.`);
// Run the alternative block when metDailyGoal is false.
} else {
  // Subtract the time studied from the goal to find the remaining minutes.
  const remainingMinutes = dailyGoalMinutes - minutesStudied;
  // Print how many more minutes are needed; the template string inserts the values.
  console.log(
    `${learnerName} still needs ${remainingMinutes} more minutes to reach the ${dailyGoalMinutes}-minute goal for ${topic}.`
  );
}

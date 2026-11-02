const learnerName = "Alex";
const topic = "Conditionals and decision making";
const minutesStudied = 45;
const dailyGoalMinutes = 60;

const metDailyGoal = minutesStudied >= dailyGoalMinutes;

if (metDailyGoal) {
  console.log(`${learnerName} met the ${dailyGoalMinutes}-minute goal for ${topic}.`);
} else {
  const remainingMinutes = dailyGoalMinutes - minutesStudied;
  console.log(
    `${learnerName} still needs ${remainingMinutes} more minutes to reach the ${dailyGoalMinutes}-minute goal for ${topic}.`
  );
}

// Weekly Goal: Calculate the total weekly task goal for a user.

// Declare variables and values
let myTasks = [];
function weeklyGoal(userName, dailyGoal, bonusTasks) {

    // Output message to console
    console.log("Checking status for: " + userName);

    // Calculate weekly goal based on number of workdays (5) per week
    let weeklyGoal = dailyGoal * 5;

    // Add bonusTasks to weeklyGoal
    let totalGoal = weeklyGoal + bonusTasks;

    // Output results
    let output = "Total Weekly Goal: " + totalGoal + "<br>" +
                 "User: " + userName + "<br>";

    // Display output on webpage
    document.getElementById("goal-message").innerHTML = output;
}

document.getElementById("goal-btn").addEventListener("click", function(event) {
    event.preventDefault();

    let userName = document.getElementById("name").value;
    let dailyGoal = document.getElementById("daily-goal").value;
    let bonusTasks = document.getElementById("bonus-tasks").value;

    weeklyGoal(userName, dailyGoal, bonusTasks);
});

const taskList = document.createElement("ul");
taskList.id = "user-tasks";
document.getElementById("task-list").appendChild(taskList);
document.getElementById("add-task").addEventListener("click", function() {
    let task = document.getElementById("task-name").value;
    myTasks.push(task);

    let listItem = document.createElement("li");
    listItem.textContent = task;
    taskList.appendChild(listItem);
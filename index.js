const { program } = require("commander");
const dotenv = require("dotenv");
dotenv.config();

const addTask = require("./commands/addTask");

program
    .command("add <title>")
    .description("Add a new task")
    .option("--date <date>", "Date in YYYY-MM-DD format")
    .option("--time <time>", "Time in HH:mm format")
    .option("--priority <level>", "Priority (low, medium, high)")
    .action(addTask);


const listTasks = require("./commands/listTasks");

program
.command("list")
.description("List all tasks or filter by date/status/priority")
.option("--date <date>", "Filter by date (YYYY-MM-DD)")
.option("--status <status>", "Filter by status (pending, done)")
.option("--priority <priority>", "Filter by priority (low, medium, high)")
.option("--sort <field>", "Sort by field: date, time, title, status, priority")
.option("--reverse", "Reverse the sort order")
.action(listTasks);

const deleteTask = require("./commands/deleteTask");

program
    .command("delete <id>")
    .description("Delete a task by ID")
    .action(deleteTask);
  
const markDone = require("./commands/markDone");

program
    .command("done <id>")
    .description("Mark a task as done")
    .action(markDone);
    
const showWeekView = require("./commands/weekView");

program
  .command("week")
  .description("Show weekly agenda with optional navigation")
  .option("--offset <weeks>", "Number of weeks from now (e.g., -1, 0, 1, 2)")
  .action(showWeekView);


    
const markUndone = require("./commands/markUndone");

program
  .command("undone <id>")
  .description("Mark a task as pending (undo done)")
  .action(markUndone);

const editTask = require("./commands/editTask");

program
  .command("edit <id>")
  .description("Edit a task's title, date, or time")
  .option("--title <title>", "New title for the task")
  .option("--date <date>", "New date (YYYY-MM-DD)")
  .option("--time <time>", "New time (HH:mm)")
  .action(editTask);


const searchTasks = require("./commands/searchTasks");

program
  .command("search <keyword>")
  .description("Search tasks by keyword in title")
  .action(searchTasks);


const showDayView = require("./commands/dayView");

program
    .command("day")
    .description("View tasks for a specific day (DD-MM-YYYY)")
    .option("--date <date>", "Date in DD-MM-YYYY format")
    .action(showDayView);
  
const showDashboard = require("./commands/dashboard");

program
  .command("dashboard")
  .description("Show overall task summary dashboard")
  .action(showDashboard);


const exportTasks = require("./commands/exportTasks");

program
  .command("export")
  .description("Export all tasks to tasks.csv")
  .action(exportTasks);


const showHistory = require("./commands/history");

program
    .command("history")
    .description("Show history of completed tasks")
    .action(showHistory);
 
const showStats = require("./commands/stats");

program
    .command("stats")
    .description("Show task statistics")
    .action(showStats);
    

const startStopwatch = require("./commands/startStopwatch");

program
  .command("stopwatch")
  .description("Start the terminal stopwatch")
  .action(startStopwatch);
    
    

program.parse(process.argv);

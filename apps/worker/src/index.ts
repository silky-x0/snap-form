import cron from "node-cron";

console.log("Worker service starting up...");

cron.schedule("* * * * *", () => {
  console.log("Running job...");
});

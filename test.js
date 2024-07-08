import dayjs from "dayjs";
import workDays from "./workDays.js";
dayjs.extend(workDays);

console.log(
  dayjs("2024/7/1").workDays("2024/7/31", {
    adjustWorkDdates:[],
    vacationDates: ["2024/7/1"],
  })
);

const dateRange  = require("./util.js");
const format=(date)=>date.format("YYYY-MM-DD")
module.exports=(option, dayjsClass, dayjs) => {
 dayjsClass.prototype.workDays = function (end = dayjs(), option={}) {
    //返回工作日期
    option = Object.assign(
      {
        vacationDates: [],
        weekendDays: [0, 6],
        adjustWorkDdates: [],
      },
      option
    );
    const startDate = dayjs(this).startOf("date");
    const endDate = dayjs(end).startOf("date");

    const __weekendDays = option.weekendDays.map((rest) => +rest);
    const __vacationDates = option.vacationDates.map((date) =>
      format(dayjs(date))
    );
    const __adjustWorkDdates = option.adjustWorkDdates.map((date) =>
      format(dayjs(date))
    );

    const restDays = [];
    const workDays = [];
    const weekendDays = [];
    const vacationDays = [];
    const adjustWorkDays = [];

    for (let date of dateRange(startDate, endDate)) {
      const formatDate = format(date);
      const day = date.day();
      if (__adjustWorkDdates.includes(formatDate)) {
        workDays.push(formatDate);
        adjustWorkDays.push(formatDate);
        continue;
      }
      if (__weekendDays.includes(day)) {
        restDays.push(formatDate);
        weekendDays.push(formatDate);
        continue;
      }

      if (__vacationDates.includes(formatDate)) {
        restDays.push(formatDate);
        vacationDays.push(formatDate);
        continue;
      }

      workDays.push(formatDate);
    }
    return { restDays, workDays, weekendDays, vacationDays, adjustWorkDays };
  };
};

const dateRange = function* (startDate, endDate) {
  //日期范围迭代器函数
  const dayDiff = endDate.diff(startDate, "day");
  const direction = dayDiff >= 0 ? 1 : -1;
  let current=null;
  for (
    let count = 0;
    direction >= 0 ? count <= dayDiff : count >= dayDiff;
    count += direction
  ) {
    current = startDate.add(count, "day");
    yield current;
  }
};

const format=(date)=>date.format("YYYY-MM-DD");
var workDays = (option, dayjsClass, dayjs) => {
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

export { workDays as default };

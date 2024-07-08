module.exports.dateRange = function* (startDate, endDate) {
  //日期范围迭代器函数
  const dayDiff = endDate.diff(startDate, "day");
  const direction = dayDiff >= 0 ? 1 : -1;
  let current = null;
  for (
    let count = 0;
    direction >= 0 ? count <= dayDiff : count >= dayDiff;
    count += direction
  ) {
    current = startDate.add(count, "day");
    yield current;
  }
};

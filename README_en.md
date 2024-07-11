简体中文 | [English](./README_en.md) |
Due to the author's limited English proficiency, I used machine translated English documents. We Apologize for Any Inconvenience Caused
# dayjs-plugin-workDays

一个基于 day.js 的工作日插件



A weekday plugin based  of day.js
### install

```console
npm install  dayjs-plugin-workdays --save
```

## usage method
```js
import workDays from "dayjs-plugin-workdays";
dayjs.extend(workDays);
dayjs().workDays(date, options);
```

## param

#### param date
type Date
Pass in a date or dayjs object.


Calculate the working days up to the date：dayjs("2024/01/01").workDays("2024/01/31", options)




### param options
Need to pass in an object


| Attribute Name  |   Type    |  DefaultValue   | Required |  describe                                                                            |  

| ---------------------- | ------- | -------- | ---- | -------------------------------------------------------------------------------- |  

| options.vacationDates  | Date[]  | []       | false   | Period date, which refers to holiday dates other than weekends                                             |  

| options.weekendDays    | Int[]   | [0,6]    | false   | The default value is [0,6], which means Saturday and Sunday. If the day of the week is off, the code for the day of the week will be passed in. If there is only Sunday, [0] will be passed in. If there is an additional day off on Wednesday, [0,2,6] will be passed in |  

| options.adjustWorkDates | Date[]  | []       | false   |Damn sick leave! Pass in a weekend date, which will not be recognized as a holiday but will be added as a working day; If there is a conflict with the options.xacationDates date, the priority is higher |



       

## return returns
Will return an object

| Attribute Name            |   Type  | describe                                            |  
| --------------- | ------- | -------------------------------------------------- |  
| returns.restDays        | Date[]  | Rest days refer to the dates of all weekends and holidays within the scope               |  


| returns.workDays        | Date[]  |   Workdays, including all regular workdays and compensatory workdays within the scope       |  


| returns.weekendDays     | Date[]  | Weekends, which refer to all weekend dates within the scope, will be included in returns.restDays   |  


| returns.vacationDays    | Date[]  |   All holiday dates within the scope will be included in returns.restDays           |  

| returns.adjustWorkDays  | Date[]  | All compensatory working days within the scope will be included in returns.workDays      |





### Example usage

```js
import dayjs from "dayjs";
import workDays from "dayjs-plugin-workdays";
dayjs.extend(workDays);
const options = {
  vacationDates: [
    "2024/05/01",
    "2024/05/02",
    "2024/05/03",
    "2024/05/04",
    "2024/05/05",
  ],
  adjustWorkDdates: ["2024/05/11"],
};
const result = dayjs("2024/5/1").workDays("2024/5/31", options);
console.log(result);
```

output

```js
{
  restDays: [
    '2024-05-01', '2024-05-02',
    '2024-05-03', '2024-05-04',
    '2024-05-05', '2024-05-12',
    '2024-05-18', '2024-05-19',
    '2024-05-25', '2024-05-26'
  ],
  workDays: [
    '2024-05-06', '2024-05-07',
    '2024-05-08', '2024-05-09',
    '2024-05-10', '2024-05-11',
    '2024-05-13', '2024-05-14',
    '2024-05-15', '2024-05-16',
    '2024-05-17', '2024-05-20',
    '2024-05-21', '2024-05-22',
    '2024-05-23', '2024-05-24',
    '2024-05-27', '2024-05-28',
    '2024-05-29', '2024-05-30',
    '2024-05-31'
  ],
  weekendDays: [
    '2024-05-04',
    '2024-05-05',
    '2024-05-12',
    '2024-05-18',
    '2024-05-19',
    '2024-05-25',
    '2024-05-26'
  ],
  vacationDays: [ '2024-05-01', '2024-05-02', '2024-05-03' ],
  adjustWorkDays: [ '2024-05-11' ]
}
```

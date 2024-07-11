English | [简体中文](./README.md) |

# dayjs-plugin-workDays
Due to my limited English proficiency, I used machine translated English documents. We Apologize for Any Inconvenience Caused


A weekday plugin based of day.js
###install
```console
npm install  dayjs-plugin-workdays --save
```
##Usage method
```js
import workDays from "dayjs-plugin-workdays";
dayjs.extend(workDays);
dayjs().workDays(date, options);
```
##Parameters
####Parameter date
Type Date
Pass in a date or dayjs object.
Calculate the working days up to the date, for example: dayjs ("2024/01/01"). WorkDays ("2024/01/31", options) will calculate the working days from 2024/01/01 to 2024/01/31.
###Parameter options
Need to pass in an object
|Attribute Name | Type | Default Value | Required | Description|
| ---------------------- | ------- | -------- | ---- | -------------------------------------------------------------------------------- |  
|Options.vacationDates | Date [] | [] | No | Holiday dates, which refer to holiday dates other than weekends|
|Options. weekendDays | Int [] | [0,6] | No | Weekend days, default value [0,6] is Saturday and Sunday, customizable rest days. If there are only Sundays or fewer (ah?), pass in [0]. If there are Wednesdays, Saturdays, and Sundays (right?), pass in [0,2,6]|
|Option.adjustWorkDates | Date [] | [] | No | No way to take compensatory time off!, Pass in a weekend date, which will not be recognized as a holiday but will be added as a working day; If there is a conflict with the options.xacationDates date, the priority is higher|
       
##Return value
Will return an object
|Attribute Name | Type | Description|
| --------------- | ------- | -------------------------------------------------- |  
|Returns. restDays | Date [] | Rest days, which refer to the dates of all weekends and holidays within the scope|
|Returns. workDays | Date [] | Workdays, which refers to all regular workdays and compensatory workdays within the scope|
|Returns. weekend Days | Date [] | Weekends, which are all weekend dates within the range, will be included in returns. restDays|
|All holiday dates within the range of returns.vacationDays | Date [] | will be included in returns.restDays|
|All compensatory work days within the range of returns.adjustWorkDays | Date [] | will be included in returns.workDays|


###Example usage
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
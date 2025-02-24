简体中文 | [English](./README_en.md) |

# dayjs-plugin-workDays

一个基于 day.js 的工作日插件

### 安装

```console
npm install  dayjs-plugin-workdays --save
```

## 使用方法
```js
import workDays from "dayjs-plugin-workdays";
dayjs.extend(workDays);
dayjs().workDays(date, options);
```

## 参数

#### 参数date
类型 Date
传入日期或dayjs对象。
将计算到日期的工作日例如：dayjs("2024/01/01").workDays("2024/01/31", options)就会计算2024/01/01到2024/01/31的工作日。


### 参数 options
需要传入一个对象

| 属性名                 | 类型    | 默认值   | 必填 | 描述                                                                             |  
| ---------------------- | ------- | -------- | ---- | -------------------------------------------------------------------------------- |  
| options.vacationDates  | Date[]  | []       | 否   | 假期日期，即除了周末外的节假日日期                                             |  
| options.weekendDays    | Int[]   | [0,6]    | 否   | 默认值[0,6]也就是周六和周日，周几休息就传入周几的代码，如只有周日则传入[0]，如果周三额外休息传入[0,2,6] |  
| options.adjustWorkDates | Date[]  | []       | 否   |万恶调休！，传入一个周末日期，这个日期将不会被识别为假期，而是加入工作日；如果与options.vacationDates日期冲突，则优先级较高 |



       

## 返回值 returns
将会返回一个对象 

| 属性名          | 类型    | 描述                                               |  
| --------------- | ------- | -------------------------------------------------- |  
| returns.restDays        | Date[]  | 休息日，即范围内所有周末和假日的日期               |  
| returns.workDays        | Date[]  | 工作日，即范围内所有普通工作日和调休工作日         |  
| returns.weekendDays     | Date[]  | 周末，即范围内所有周末日期，会被包含在returns.restDays内   |  
| returns.vacationDays    | Date[]  | 范围内所有假日日期，会被包含在returns.restDays内           |  
| returns.adjustWorkDays  | Date[]  | 范围内所有的调休工作日，会被包含在returns.workDays内       |


<!-- 


returns.restDays
类型：Date[] 
描述：休息日，即范围内所有周末和假日的日期

returns.workDays
类型：Date[] 
描述：工作日，即范围内所有普通工作日和调休工作日


returns.weekendDays
类型：Date[]
描述：周末，即范围内所有周末日期，会被包含在returns.restDays内

returns.vacationDays
类型：Date[]
描述：范围内所有假日日期，会被包含在returns.restDays内


returns.adjustWorkDays
类型：Date[]
描述：范围内所有的调休工作日，会被包含在returns.workDays -->



### 使用示例

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

输出

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

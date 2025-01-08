// dayjs.d.ts
import Dayjs from 'dayjs';

interface DayjsClass {
  prototype: Dayjs;
}

interface WorkDaysOptions {
  vacationDates?: string[];
  weekendDays?: number[];
  adjustWorkDates?: string[];
}

interface WorkDaysResult {
  restDays: string[];
  workDays: string[];
  weekendDays: string[];
  vacationDays: string[];
  adjustWorkDays: string[];
}

declare module 'dayjs' {
  interface Dayjs {
    workDays(end?: Dayjs, options?: WorkDaysOptions): WorkDaysResult;
  }
}

export default function (option: WorkDaysOptions, dayjsClass: DayjsClass, dayjs: Dayjs): void;
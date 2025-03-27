declare module "dayjs" {
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

  interface Dayjs {
    workDays(end?: dayjs.ConfigType, options?: WorkDaysOptions): WorkDaysResult;
  }
}

declare const workDays: dayjs.PluginFunc<WorkDaysOptions, WorkDaysResult>;
export = workDays;
declare module "dayjs-plugin-workdays" {
  import dayjs from "dayjs";
  
  declare const workDays: (option?: dayjs.PluginFunc) => dayjs.PluginFunc;
  export = workDays;
}

declare module "dayjs" {
  interface Dayjs {
    workDays(
      end?: dayjs.Dayjs,
      option?: {
        vacationDates?: string[];
        weekendDays?: number[];
        adjustWorkDdates?: string[];
      }
    ): {
      restDays: string[];
      workDays: string[];
      weekendDays: string[];
      vacationDays: string[];
      adjustWorkDays: string[];
    };
  }
}
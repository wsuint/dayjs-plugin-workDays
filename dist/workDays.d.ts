declare module "dayjs" {
  /**
   * 工作日插件配置选项
   */
  interface WorkDaysOptions {
    /**
     * 假期日期数组，格式为YYYY/MM/DD
     */
    vacationDates?: string[];
    /**
     * 周末日期数组，0表示周日，6表示周六
     */
    weekendDays?: number[];
    /**
     * 调休工作日数组，格式为YYYY/MM/DD
     */
    adjustWorkDates?: string[];
  }

  /**
   * 工作日插件返回结果
   */
  interface WorkDaysResult {
    /** 休息日数组 */
    restDays: string[];
    /** 工作日数组 */
    workDays: string[];
    /** 周末日期数组 */
    weekendDays: string[];
    /** 假期日期数组 */
    vacationDays: string[];
    /** 调休工作日数组 */
    adjustWorkDays: string[];
  }

  interface Dayjs {
    /**
     * 计算两个日期之间的工作日和休息日
     * @param end 结束日期
     * @param options 配置选项
     * @returns 返回工作日和休息日的结果对象
     */
    workDays(end?: dayjs.ConfigType, options?: WorkDaysOptions): WorkDaysResult;
  }
}

/**
 * dayjs工作日插件
 */
declare const workDays: dayjs.PluginFunc<WorkDaysOptions, WorkDaysResult>;
export = workDays;
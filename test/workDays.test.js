const dayjs = require('dayjs');
const workDays = require('../dist/workDays.cjs.js');
dayjs.extend(workDays);

describe('workDays plugin', () => {
  it('should calculate normal workdays', () => {
    const start = dayjs('2023-01-01');
    const end = dayjs('2023-01-07');
    const result = start.workDays(end);
    
    expect(result.workDays).toEqual(['2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05', '2023-01-06']);
    expect(result.weekendDays).toEqual(['2023-01-01', '2023-01-07']);
  });

  it('should handle holidays', () => {
    const start = dayjs('2023-01-01');
    const end = dayjs('2023-01-07');
    const result = start.workDays(end, {
      vacationDates: ['2023-01-02']
    });
    
    expect(result.workDays).toEqual(['2023-01-03', '2023-01-04', '2023-01-05', '2023-01-06']);
    expect(result.vacationDays).toEqual(['2023-01-02']);
  });

  it('should handle adjusted workdays', () => {
    const start = dayjs('2023-01-01');
    const end = dayjs('2023-01-07');
    const result = start.workDays(end, {
      adjustWorkDdates: ['2023-01-07']
    });
    
    expect(result.workDays).toEqual(['2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05', '2023-01-06', '2023-01-07']);
    expect(result.adjustWorkDays).toEqual(['2023-01-07']);
  });
});
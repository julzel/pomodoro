import { format, noFormat } from './timeFormat';

describe('Time Format', () => {
  it('returns a formatted timestamp', () => {
    expect(format(3599)).toBe('00:59:59');
    expect(format(150, 'mm')).toBe('02:30');
    expect(format(7, 'ss')).toBe('07');
    expect(format(1, 'hh')).toBe('00:00:01');
    expect(format(3599, 'ss')).toBe('59');
  });

  it('returns timestamp as an object', () => {
    expect(noFormat(3599).minutes).toBe(59);
    expect(noFormat(150).seconds).toBe(30);
    expect(noFormat(7)).toStrictEqual({
      hours: 0,
      minutes: 0,
      seconds: 7
    });
  });
});
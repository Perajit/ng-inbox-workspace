import { DateDynamicPipe } from './date-dynamic.pipe';

describe('DateDynamicPipe', () => {
  it('create an instance', () => {
    const pipe = new DateDynamicPipe('');
    expect(pipe).toBeTruthy();
  });

  it('should return null if value is invalid date', () => {
    const pipe = new DateDynamicPipe('');
    const actualResult = pipe.transform(new Date('invalid'));

    expect(actualResult).toEqual(null);
  });

  describe('date format', () => {
    let currentDate = new Date(2020, 1, 1, 12, 0); // Feb 1, 2020 12:00

    beforeEach(() => {
      jasmine.clock().mockDate(currentDate);
    });

    it('should return date in H:mm when date in in the same day', () => {
      const pipe = new DateDynamicPipe('en-US');
      const actualResult = pipe.transform(new Date(2020, 1, 1, 1, 30)); // Feb 1, 2020 01:30

      expect(actualResult).toEqual('1:30');
    });
  
    it('should return date in MMM d when date is in the same year', () => {
      const pipe = new DateDynamicPipe('en-US');
      const actualResult = pipe.transform(new Date(2020, 0, 1, 12, 0)); // Jan 1, 2020, 12:00

      expect(actualResult).toEqual('Jan 1');
    });
  
    it('should return date in M/d/yy when date is in different year', () => {
      const pipe = new DateDynamicPipe('en-US');
      const actualResult = pipe.transform(new Date(2019, 1, 1, 12, 0)); // Feb 1, 2019, 12:00

      expect(actualResult).toEqual('2/1/19');
    });
  })
});

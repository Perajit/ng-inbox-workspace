import { MailFilterPipe } from './mail-filter.pipe';
import mockMailList from '../../mock/mock-mail-list';

describe('MailFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new MailFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return original list if list is not present', () => {
    const pipe = new MailFilterPipe();
    const actualResult = pipe.transform(null, 'any');

    expect(actualResult).toEqual(null);
  });

  it('should return original list if term is empty', () => {
    const pipe = new MailFilterPipe();
    const actualResult = pipe.transform(mockMailList, '');

    expect(actualResult).toEqual(mockMailList);
  });

  describe('filtering by term', () => {
    const testCases = [
      { term: 'asics', expectedIndexes: [2] },
      { term: 'human-race', expectedIndexes: [2] },
      { term: 'pass', expectedIndexes: [0] },
      { term: 'oscar', expectedIndexes: [0] },
      { term: 'now', expectedIndexes: [0] },
      { term: 'test.com', expectedIndexes: [0, 1] }
    ];

    testCases.forEach(({ term, expectedIndexes }) => {
      it(`should return list from index ${expectedIndexes} for term "${term}"`, () => {
        const pipe = new MailFilterPipe();
        const actualResult = pipe.transform(mockMailList, term);

        expect(actualResult).toEqual(expectedIndexes.map((i) => mockMailList[i]));
      });
    })
  });
});

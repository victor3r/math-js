import Numbers from '../../src/entities/Numbers';

describe('Numbers', () => {
  it('should be able to add up all the values of an array', () => {
    expect(Numbers.sum([1, 2, 3])).toBe(6);
  });

  it('should be able to calculate the arithmetic mean of an array', () => {
    expect(Numbers.average([1, 2, 3])).toBe(2);
  });
});

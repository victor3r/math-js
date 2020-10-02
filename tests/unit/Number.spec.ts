import Number from '../../src/entities/Number';

describe('Number', () => {
  it('should be able to add two values', () => {
    expect(Number.sum(10, 20)).toBe(30);
  });

  it('should be able to split two values', () => {
    expect(Number.divide(20, 10)).toBe(2);
  });
});

import Number from './Number';

export default class Numbers {
  public static sum(numbers: number[]): number {
    if (numbers.length % 2 !== 0) {
      numbers.push(0);
    }

    let accumulator = 0;

    for (let index = 0; index < numbers.length; index += 2) {
      accumulator += Number.sum(numbers[index], numbers[index + 1]);
    }

    return accumulator;
  }

  public static average(numbers: number[]): number {
    let checkArraySizeChanged = false;

    if (numbers.length % 2 !== 0) {
      numbers.push(0);
      checkArraySizeChanged = true;
    }

    let accumulator = 0;

    for (let index = 0; index < numbers.length; index += 2) {
      accumulator += Number.sum(numbers[index], numbers[index + 1]);
    }

    if (checkArraySizeChanged) {
      numbers.pop();
    }

    return Number.divide(accumulator, numbers.length);
  }
}
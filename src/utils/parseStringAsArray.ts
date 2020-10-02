export default function parseStringAsArray(arrayAsString: string): number[] {
  return arrayAsString.split(',').map(number => Number(number));
}

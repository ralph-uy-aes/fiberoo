function fiftyFib(): number[] {
  const fibonacci: number[] = [0, 1];
  for (let i = 2; i < 50; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}

console.log(fiftyFib());

function numsToStrings(list: number[]): string[] {
  return list.map((x) => x.toString());
}

console.log(numsToStrings(fiftyFib()));

function numEvenNums(list: number[]): number {
  return list.filter((x) => x % 2 === 0).length;
}

console.log(numEvenNums(fiftyFib()));

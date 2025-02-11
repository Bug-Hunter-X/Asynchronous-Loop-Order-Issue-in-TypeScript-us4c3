function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // this works fine

function printNumbersAsync(n: number): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    for (let i = 1; i <= n; i++) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000); // Simulate async operation
    }
    resolve();
  });
}

printNumbersAsync(5).then(() => console.log('Done!')); // this will output numbers in wrong order
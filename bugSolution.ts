function printNumbersAsync(n: number): Promise<void> {
  return new Promise<void>(async (resolve, reject) => {
    for (let i = 1; i <= n; i++) {
      await new Promise(r => setTimeout(r, i * 1000));
      console.log(i);
    }
    resolve();
  });
}

printNumbersAsync(5).then(() => console.log('Done!'));
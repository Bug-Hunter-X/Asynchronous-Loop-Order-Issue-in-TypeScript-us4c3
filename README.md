# Asynchronous Loop Order Issue in TypeScript

This repository demonstrates a common issue encountered when dealing with asynchronous operations within loops in TypeScript. The `printNumbersAsync` function intends to print numbers 1 through 5 with a 1-second delay between each. However, due to the asynchronous nature of `setTimeout`, the output is not in the expected order.  The solution provided utilizes `async/await` for a more straightforward and correctly ordered output.

## How to Reproduce

1. Clone this repository.
2. Run `tsc bug.ts` to compile the buggy code.
3. Execute the compiled JavaScript file (`node bug.js`) to observe the unexpected output.
4. Then, run `tsc bugSolution.ts` and execute the compiled JavaScript file (`node bugSolution.js`) to see the corrected output.

## Bug Analysis

The issue stems from the use of `setTimeout` within a loop.  Each `setTimeout` call schedules a callback function to be executed after a specified delay. However, these callbacks are not executed sequentially; instead, they are added to the event queue.  Since the delays are relatively small, the order of execution may not always correspond to the loop iteration order. 
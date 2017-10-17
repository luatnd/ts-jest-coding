# A boilerplate TS + JEST + TSLint
A boilerplate was configured with:
Typescript
TSLint: Linter
JEST: Unit test

Useful for quickly start your algorithm coding in typescript

### Why? 

### Flow
1. Put your code into fibonacci.ts
2. Put your test into fibonacci.test.ts
3. Run `watch`
4. See the terminal output, `Jest` will validate your test case with time reporting in `ms`:
```
 FAIL  src/fibonacci.test.ts
  ✓ Test case: Fib(0) = 0 (2ms)
  ✓ Test case: Fib(1) = 1 (1ms)
  ✓ Test case: Fib(2) = 1 (2ms)
  ✓ Test case: Fib(3) = 2 (1ms)
  ✓ Test case: Fib(4) = 3 (1ms)
  ✓ Test case: Fib(5) = 5 (1ms)
  ✓ Test case: Fib(6) = 8
  ✓ Test case: Fib(20) = 6765 (1ms)
  ✓ Test case: Fib(25) = 75025 (1ms)
  ✓ Test case: Fib(50) = 12586269025 (1ms)
  ✓ Test case: Fib(100) = 354224848179262000000 (1ms)
  ✓ Test case: Fib(200) = 2.8057117299251016e+41 (1ms)
  ✕ Test case: Fib(300) = 0 (55ms)

  ● Test case: Fib(300) = 0
    expect(received).toBe(expected)
    Expected value to be (using ===):
      0
    Received:
      2.2223224462942035e+62
```

So that when you change your code/test, the test automatically call your code and run. 


### Code
Example: fibonacci.ts
```js
export function fib(n: number): number {
  console.log("n: ", n);
  
  return n;
}
```

### Test
Example: fibonacci.test.ts
```
import forOwn from 'lodash/forOwn'
import fib from './fibonacci'

const testCases:{[n:number]:number} = {
  0: 0,
  1: 1,
  2: 1,
  3: 2,
  4: 3,
  5: 5,
  6: 8,
  20: 6765,
  25: 75025,
  50: 12586269025,
  100: 354224848179262000000,
  200: 2.8057117299251016e41,
  300: 0,
};

forOwn(testCases, (v, k) => {
  const n = parseInt(k); // NOTE: k is string, v is number, omg

  it(`Test case: Fib(${n}) = ${v}`, () => expect(fib(n)).toBe(v));
});

```

### Watch

```bash
yarn watch
```
Jest will watch for changed files and run test for its


### Debug a file without test:

```bash
yarn debug -- src/fibonacci.ts
```

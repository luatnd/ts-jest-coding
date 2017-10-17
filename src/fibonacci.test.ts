import forOwn from "lodash/forOwn";
import fib from "./fibonacci";

const testCases: {[n: number]: number} = {
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

forOwn(testCases, (v: number, k: number) => {
  const n = parseInt(k); // NOTE: k is string, v is number, omg
  // const n = k;

  it(`Test case: Fib(${n}) = ${v}`, () => expect(fib(n)).toBe(v));
});

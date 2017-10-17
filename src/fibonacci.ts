export default function fib(n:number):number {
  if (n < 2) {
    return n;
  }

  let prev2 = 0;
  let prev1 = 1;
  let fib = 0;

  for (let i = 2; i <= n; i++) {
    fib = prev1 + prev2;

    prev2 = prev1;
    prev1 = fib;
  }

  return fib;
}

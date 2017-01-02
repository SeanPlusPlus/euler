/* eslint-disable no-console */
class Fib {
  constructor() {
    this.fibs = [1, 2];
    this.evenFibs = [2];
  }

  solve() {
    let answer = 0;
    const threshold = 4000000;
    while (answer < threshold) {
      const i = this.fibs.slice(-2).reduce((p, c) => p + c);
      this.fibs.push(i);
      if ((i % 2) === 0) {
        this.evenFibs.push(i);
      }
      console.log(this.fibs);
      console.log(this.evenFibs);
      answer = this.evenFibs.reduce((p, c) => p + c);
    }
    return `answer ${answer}`;
  }
}

export default Fib;

/* eslint-disable no-console */
class FizzBuzz {
  constructor(threshold) {
    this.threshold = threshold;
    this.answer = 0;
  }

  solve() {
    console.log(this.threshold);
    const arr = Array(this.threshold).fill().map((_, i) => i + 1);
    for (const i of arr) {
      console.log(i);
      if ((i % 3) === 0) {
        this.answer += i;
      } else if ((i % 5) === 0) {
        this.answer += i;
      }
    }
    return `answer ${this.answer}`;
  }
}

export default FizzBuzz;

const getGCD = (num1, num2) => {
  while (num1 % num2 !== 0) {
    oldNum1 = num1;
    num1 = num2;
    num2 = oldNum1 % num2;
  }

  return num2;
};

class Fraction {
  constructor(num, den) {
    this.num = num;
    this.den = den;
  }

  add(other) {
    const newNum = this.num * other.den + this.den * other.num;
    const newDen = this.den * other.den;
    const gcd = getGCD(newNum, newDen);
    // consolelo;
    return new Fraction(newNum / gcd, newDen / gcd);
  }

  equal(other) {
    const firstNum = this.num * other.den;
    const secondNum = this.den * other.num;
    return firstNum === secondNum;
  }
}

Fraction.prototype.toString = function () {
  // console.log(this);
  return `${this.num}/${this.den}`;
};

{
  // TEST
  const f1 = new Fraction(1, 4);
  const f2 = new Fraction(1, 2);

  const sum = f1.add(f2);
  console.log(sum.toString());

  const f3 = new Fraction(2, 3);
  const f4 = new Fraction(2, 3);
  console.log(f3.equal(f4));
  console.log(f3.equal(f1));
}

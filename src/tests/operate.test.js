import operate from '../logic/operate';

const obj = {
  num1: 3,
  num2: 4,
  num3: 2,
  num4: 7,
};

describe('test calculator function', () => {
  test('operate function should return 7', () => {
    expect(Number(operate(obj.num1, obj.num2, '+'))).toBe(7);
  });
  test('operate function should return 3', () => {
    expect(Number(operate(obj.num4, obj.num2, '-'))).toBe(3);
  });
  test('operate function should return 12', () => {
    expect(Number(operate(obj.num1, obj.num2, 'x'))).toBe(12);
  });
  test('operate function should return 3', () => {
    expect(Number(operate(obj.num2, obj.num3, '÷'))).toBe(2);
  });
  test('operate function should equate 0', () => {
    expect(Number(operate(obj.num2, obj.num3, '%'))).toBe(0);
  });
});

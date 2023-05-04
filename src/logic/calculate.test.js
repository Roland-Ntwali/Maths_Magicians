import calculate from './calculate';

const object = {
  total: null,
  next: null,
  operation: null,
};

test('test if obj.total is false', () => {
  const obj = { ...object, total: '0', operation: '+' };
  expect(calculate(obj, '+')).toEqual({ ...obj });
});

it("The user hasn't typed a number yet, just save the operation", () => {
  const obj = { ...object };
  expect(calculate(obj, '+')).toEqual({ operation: '+' });
});

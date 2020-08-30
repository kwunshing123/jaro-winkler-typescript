import similarity from '../index';
test('Normal Case', () => {
  expect(similarity('Carl', 'carl')).toBe(0.8333333333333334);
});

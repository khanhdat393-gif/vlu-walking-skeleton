const login = require('./login');
test('admin login success with correct password', () => {
  expect(login('admin', '123')).toBe(true);
});
test('admin login fail with wrong password', () => {
  expect(login('admin', 'wrong')).toBe(false);
});

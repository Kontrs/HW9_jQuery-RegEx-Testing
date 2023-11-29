import verifyPassword from './verifyPassword';

describe('Password must be at least 8 characters long and include at least 1 number and 1 special character (!, @, #, $, %, ^, &, *)', () => {
  it('Should return true if Password is less than 8 characters long', () => {
    const result = verifyPassword('badpass');
    expect(result).toEqual(true);
  });

  it('Should return false if Password is at least 8 characters and include at least 1 number and 1 special character (!, @, #, $, %, ^, &, *)', () => {
    const result = verifyPassword('verygoodpassword5%');
    expect(result).toEqual(false);
  });

  it('Should return true if Password is an empty string', () => {
    const result = verifyPassword('');
    expect(result).toEqual(true);
  });

  it('Should return true if Password has a number but not a special character', () => {
    const result = verifyPassword('almostgoodpassword5');
    expect(result).toEqual(true);
  });

  it('Should return true if Password has a special character but not a number', () => {
    const result = verifyPassword('almostgoodpassword%');
    expect(result).toEqual(true);
  });

  it('Should return true if Password has any white-spaces', () => {
    const result = verifyPassword('very good password 5%');
    expect(result).toEqual(true);
  });
});

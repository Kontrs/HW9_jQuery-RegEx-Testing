import verifyUsername from './verifyUsername';

describe('Username must be 2-50 characters long and include only letters', () => {
  it('Should return true if username is less than 2 characters long', () => {
    const result = verifyUsername('b');
    expect(result).toEqual(true);
  });

  it('Should return false if username is anywhere between 2-50 characters and only letters', () => {
    const result = verifyUsername('abcdefghijkl');
    expect(result).toEqual(false);
  });

  it('Should return true if username is an empty string', () => {
    const result = verifyUsername('');
    expect(result).toEqual(true);
  });

  it('Should return true if username has a number', () => {
    const result = verifyUsername('a1b2c3d4e5fghijkl');
    expect(result).toEqual(true);
  });

  it('Should return true if username is more than 50 characters', () => {
    const result = verifyUsername('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz');
    expect(result).toEqual(true);
  });

  it('Should return true if username has any special characters', () => {
    const result = verifyUsername('abcdefgh&$%');
    expect(result).toEqual(true);
  });

  it('Should return true if username has any white-spaces', () => {
    const result = verifyUsername('ab cde fgh& $%');
    expect(result).toEqual(true);
  });
});

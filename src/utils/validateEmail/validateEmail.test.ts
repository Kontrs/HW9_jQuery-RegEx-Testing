import verifyEmail from './verifyEmail';

describe('Emails first part allows all characters excluding (extra @s, (, ), [, ], \\, ", :, ;, ,, <, >,  ), second part only allows letters, periods(.) and (-)', () => {
  it('Should return true if Email does not include @', () => {
    const result = verifyEmail('example-example.com');
    expect(result).toEqual(true);
  });

  it('Should return false if Email has a proper form', () => {
    const result = verifyEmail('example@example.com');
    expect(result).toEqual(false);
  });

  it('Should return true if Email is an empty string', () => {
    const result = verifyEmail('');
    expect(result).toEqual(true);
  });

  it('Should return true if Email has any of restricted characters', () => {
    const result = verifyEmail('ex(amp)le@example.com');
    expect(result).toEqual(true);
  });

  it('Should return true if Email has any of restricted characters', () => {
    const result = verifyEmail('example@ex#am^ple..com');
    expect(result).toEqual(true);
  });

  it('Should return true if Email has any white-spaces', () => {
    const result = verifyEmail('example @ example .com');
    expect(result).toEqual(true);
  });

  it('Should return true if Email doesnt include top-level domain', () => {
    const result = verifyEmail('example@example');
    expect(result).toEqual(true);
  });

  it('Should return true if Email has more than one @', () => {
    const result = verifyEmail('ex@mple@ex@mple.com');
    expect(result).toEqual(true);
  });
});

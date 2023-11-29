const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?!.* )/;
let invalidPassword = false;
const verifyPassword = (password: string): boolean => {
  if (password === '') {
    invalidPassword = true;
  } else if (!password.match(passwordRegex)) {
    invalidPassword = true;
  } else if (password.length < 8) {
    invalidPassword = true;
  } else {
    invalidPassword = false;
  }
  return invalidPassword;
};

export default verifyPassword;

const onlyLettersRegex = /^[A-Za-z]+$/;
let invalidUsername = false;
const verifyUsername = (username: string): boolean => {
  if (username === '') {
    invalidUsername = true;
  } else if (username.length > 50 || username.length < 2) {
    invalidUsername = true;
  } else if (!username.match(onlyLettersRegex)) {
    invalidUsername = true;
  } else {
    invalidUsername = false;
  }
  return invalidUsername;
};

export default verifyUsername;

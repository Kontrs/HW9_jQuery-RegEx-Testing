const emailRegex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let invalidEmail = false;
const verifyEmail = (email: string): boolean => {
  if (email === '') {
    invalidEmail = true;
  } else if (!email.match(emailRegex)) {
    invalidEmail = true;
  } else {
    invalidEmail = false;
  }
  return invalidEmail;
};

export default verifyEmail;

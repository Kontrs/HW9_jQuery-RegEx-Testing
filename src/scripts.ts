import $ from 'jquery';
import axios from 'axios';

$('.js-input-wrapper').append(`
  <label for='username'>Enter your Username</label>
  <input type='text' id='username' class='input js-input-username' placeholder='Username'>
  <p class='invalid-input js-username-error'>Username must contain between 2-50 letters</p>
  <label for='password'>Enter your Password</label>
  <input type='password' id='password' class='input js-input-password' placeholder='Password'>
  <p class='invalid-input js-password-error'>Password must contain at least 8 characters including one number and one of the special characters (!, @, #, $, %, ^, &, *)</p>
  <label for='email'>Enter your E-mail</label>
  <input type='text 'id='email' class='input js-input-email' placeholder='E-mail'>
  <p class='invalid-input js-email-error'>Enter a valid E-mail</p>
  <button class='button js-button'>Submit</button>
`);

const onlyLettersRegex = /^[A-Za-z]+$/;
let invalidUsername = false;
const verifyUsername = () => {
  const username = $('.js-input-username').val() as string;
  if (username === '') {
    invalidUsername = true;
    $('.js-username-error').show();
  } else if (username.length > 50 || username.length < 2) {
    invalidUsername = true;
    $('.js-username-error').show();
  } else if (!username.match(onlyLettersRegex)) {
    invalidUsername = true;
    $('.js-username-error').show();
  } else {
    invalidUsername = false;
    $('.js-username-error').hide();
  }
  return invalidUsername;
};

$('.js-username-error').hide();
$('.js-input-username').on('keyup', () => {
  verifyUsername();
});

const passwordRegex = /(?=.*\d)(?=.*[!@#$%^&*])/;
let invalidPassword = false;
const verifyPassword = () => {
  const password = $('.js-input-password').val() as string;
  if (password === '') {
    invalidPassword = true;
    $('.js-password-error').show();
  } else if (!password.match(passwordRegex)) {
    invalidPassword = true;
    $('.js-password-error').show();
  } else if (password.length < 8) {
    invalidPassword = true;
    $('.js-password-error').show();
  } else {
    invalidPassword = false;
    $('.js-password-error').hide();
  }
  return invalidPassword;
};

$('.js-password-error').hide();
$('.js-input-password').on('keyup', () => {
  verifyPassword();
});

const emailRegex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let invalidEmail = false;
const verifyEmail = () => {
  const email = $('.js-input-email').val() as string;
  if (email === '') {
    invalidEmail = true;
    $('.js-email-error').show();
  } else if (!email.match(emailRegex)) {
    invalidEmail = true;
    $('.js-email-error').show();
  } else {
    invalidEmail = false;
    $('.js-email-error').hide();
  }
  return invalidEmail;
};

$('.js-email-error').hide();
$('.js-input-email').on('keyup', () => {
  verifyEmail();
});

$('.js-button').on('click', () => {
  verifyUsername();
  verifyPassword();
  verifyEmail();
  if (!verifyUsername() && !verifyPassword() && !verifyEmail()) {
    alert('Registration sucessful');
  } else {
    alert('Please enter valid creditentals');
  }
});

export const usernameTest = verifyUsername();
export const passwordTest = verifyPassword();
export const emailTest = verifyEmail();
// mathFunctions.ts

export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

// dataProcessor.ts

export function processData(data: number[]): number {
  return data.reduce((acc, num) => acc + num, 0);
}

// apiService.ts

export async function fetchData(): Promise<string> {
  const response = await axios.get('https://api.example.com/data&#39');
  return response.data;
}

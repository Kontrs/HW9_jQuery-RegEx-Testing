import $ from 'jquery';
import verifyUsername from './utils/validateUsername/verifyUsername';
import verifyPassword from './utils/validatePassword/verifyPassword';
import verifyEmail from './utils/validateEmail/verifyEmail';

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

let username: string;

$('.js-username-error').hide();
$('.js-input-username').on('keyup', () => {
  username = $('.js-input-username').val() as string;

  if (verifyUsername(username)) {
    $('.js-username-error').show();
  } else {
    $('.js-username-error').hide();
  }

  verifyUsername(username);
});

let password: string;

$('.js-password-error').hide();
$('.js-input-password').on('keyup', () => {
  password = $('.js-input-password').val() as string;

  if (verifyPassword(password)) {
    $('.js-password-error').show();
  } else {
    $('.js-password-error').hide();
  }

  verifyPassword(password);
});

let email: string;

$('.js-email-error').hide();
$('.js-input-email').on('keyup', () => {
  email = $('.js-input-email').val() as string;

  if (verifyEmail(email)) {
    $('.js-email-error').show();
  } else {
    $('.js-email-error').hide();
  }

  verifyEmail(email);
});

$('.js-button').on('click', () => {
  verifyUsername(username);
  verifyPassword(password);
  verifyEmail(email);

  if (!verifyUsername(username) && !verifyPassword(password) && !verifyEmail(email)) {
    $('.js-input-username, .js-input-password, .js-input-email').val('');
    alert('Registration sucessful');
  } else {
    alert('Please enter valid creditentals');
  }
});

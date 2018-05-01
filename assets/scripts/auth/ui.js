'use strict'

const store = require('../store')

const authError = () => {
  clear()
  showAlert()
  error()
}

const clear = () => {
  $('form').trigger('reset')
  $('.message').removeClass('error')
  $('.message').html(' ')
}

const error = () => {
  const message = 'There was an error. Please try again.'
  $('.message').addClass('error')
  $('.message.error').append(message)
}

const showAlert = () => {
  $('.message').show()
}

const showSignIn = () => {
  clear()
  $('.sign-up').hide()
  $('.sign-in').show('slow')
}

const showSignUp = () => {
  clear()
  $('.sign-in').hide()
  $('.sign-up').show('slow')
}

const signUpSuccess = (data) => {
  store.user = data.user
  clear()
  showSignIn()
}

const signInSuccess = (data) => {
  store.user = data.user
  clear()
  $('.welcome').hide()
  $('.home').show('slow')
  $('.signed-in').removeClass('hidden')
}

const signOutSuccess = () => {
  $('.home').hide()
  $('.welcome').show()
  $('.signed-in').addClass('hidden')
  store.user = null
}

const unauthorized = () => {
  $('.home, .sign-up, .message').hide()
}

module.exports = {
  authError,
  showSignUp,
  showSignIn,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  unauthorized
}

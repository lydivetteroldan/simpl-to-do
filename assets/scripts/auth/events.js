'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.authError)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.authError)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordError)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.authError)
}

const eventHandlers = () => {
  ui.onClose()
  $('.sign-up .form-template').on('submit', '#signUp', onSignUp)
  $('.sign-in .form-template').on('submit', '#signIn', onSignIn)
  $('#password').on('submit', onChangePassword)
  $('#signInButton').on('click', ui.showSignIn)
  $('#signUpButton').on('click', ui.showSignUp)
  $('#signOut').on('click', onSignOut)
}

module.exports = {
  eventHandlers
}

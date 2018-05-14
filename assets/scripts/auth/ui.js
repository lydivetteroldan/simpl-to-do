'use strict'

const store = require('../store')
const learnMoreTemplate = require('../templates/learn.handlebars')
const passwordFormTemplate = require('../templates/password.handlebars')
const signInTemplate = require('../templates/sign-in.handlebars')
const signUpTemplate = require('../templates/sign-up.handlebars')

const authError = () => {
  clear()
  showAlert()
  error()
}

const clear = () => {
  $('form').trigger('reset')
  $('.message').hide()
  $('.message').removeClass('error')
  $('.message').html(' ')
}

const error = () => {
  const message = 'There was an error. Please try again.'
  $('.message').addClass('error')
  $('.message.error').append(message)
}

const onClose = () => {
  $('.modal').on('hidden.bs.modal', function (e) {
    clear()
  })

  $('#passwordModal').on('hidden.bs.modal', function () {
    $('#passwordTemplate').html(' ')
  })

  $('#learnModal').on('hidden.bs.modal', function () {
    $('#learnTemplate').html(' ')
  })
}

const showAlert = () => {
  $('.message').fadeIn()
}

const showPasswordForm = () => {
  $('#passwordModal').on('shown.bs.modal', function () {
    const passwordFormHtml = passwordFormTemplate()
    $('#passwordTemplate').append(passwordFormHtml)
  })
}

const showLearnMore = () => {
  $('#learnModal').on('shown.bs.modal', function () {
    const learnMoreHtml = learnMoreTemplate()
    $('#learnTemplate').append(learnMoreHtml)
  })
}

const showSignIn = () => {
  const signInHtml = signInTemplate()
  clear()
  $('#signUpSection').hide()
  $('#signInTemplate').html(' ')
  $('#signInTemplate').append(signInHtml)
  $('#signInSection').fadeIn()
}

const showSignUp = () => {
  const signUpHtml = signUpTemplate()
  clear()
  $('#signInSection').hide()
  $('.signed-up-cta').hide()
  $('.not-signed-up-cta').show()
  $('#signUpTemplate').html(' ')
  $('#signUpTemplate').append(signUpHtml)
  $('#signUpSection').fadeIn()
}

const signUpSuccess = (data) => {
  store.user = data.user
  const message = 'Your account has been created.'
  clear()
  $('.not-signed-up-cta').hide()
  $('.signed-up-cta').show()
  $('.message').append(message)
  showAlert()
}

const signInSuccess = (data) => {
  store.user = data.user
  clear()
  $('#authentication').hide()
  $('#home').show('slow')
  $('#authenticated').removeClass('hidden')
}

const changePasswordSuccess = (data) => {
  const message = 'Your new password has been saved.'
  $('form').trigger('reset')
  $('.message.password-message').show()
  $('.message.password-message').removeClass('error')
  $('.message.password-message').html(' ')
  $('.message.password-message').append(message)
}

const changePasswordError = () => {
  const message = 'There was an error. Please try again.'
  $('form').trigger('reset')
  $('.message.password-message').show()
  $('.message.password-message').addClass('error')
  $('.message.password-message').html(' ')
  $('.message.password-message').append(message)
}

const signOutSuccess = () => {
  $('#home').hide()
  $('#authentication').show('slow')
  $('#authenticated').addClass('hidden')
  store.user = null
}

const unauthorized = () => {
  $('#home, #signUpSection, .message').hide()
}

module.exports = {
  authError,
  changePasswordError,
  changePasswordSuccess,
  onClose,
  showLearnMore,
  showPasswordForm,
  showSignUp,
  showSignIn,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  unauthorized
}

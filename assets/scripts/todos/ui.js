'use strict'

const store = require('../store')

const appError = () => {
  clear()
  error()
  showAlert()
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

const onHiddenModal = () => {
  $('.modal').on('hidden.bs.modal', function (e) {
    clear()
  })
}

const showAlert = () => {
  $('.message').fadeIn()
}

module.exports = {
  appError,
  onHiddenModal
}

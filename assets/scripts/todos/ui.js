'use strict'

const store = require('../store')
const todoTemplate = require('../templates/to-do.handlebars')

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

const onShowSuccess = (data) => {
  const todoHtml = todoTemplate({ todo: data.todo })
  $('#todoTemplate').html(' ')
  $('#todoTemplate').append(todoHtml)
}

const onUpdateSuccess = () => {
  console.log('onUpdateSuccess! it works')
}

const onUpdateFailure = () => {
  console.log('onUpdateFailure! try again')
}

const showAlert = () => {
  $('.message').fadeIn()
}

module.exports = {
  appError,
  onHiddenModal,
  onShowSuccess,
  onUpdateSuccess,
  onUpdateFailure
}

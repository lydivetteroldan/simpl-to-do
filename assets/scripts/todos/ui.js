'use strict'

const store = require('../store')
const todoTemplate = require('../templates/to-do.handlebars')
const todoListTemplate = require('../templates/to-do-list.handlebars')

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

const clearList = () => {
  $('#list').html(' ')
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

const onShowAllSuccess = (data) => {
  const showTodoListHtml = todoListTemplate({ todos: data.todos })
  store.data = data
  clearList()
  $('#list').append(showTodoListHtml)
}

const onShowAllFailure = () => {
  const message = 'Your list is empty. Create a to-do.'
  clearList()
  $('#list').append(message)
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
  onShowAllSuccess,
  onShowAllFailure,
  onShowSuccess,
  onUpdateSuccess,
  onUpdateFailure
}

'use strict'

const api = require('./api')
const createTemplate = require('../templates/create.handlebars')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const ui = require('./ui')

const onCreate = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.data = data
  api.create(data)
    .then(ui.onCreateSuccess)
    .then(() => onShowAll())
    .catch(ui.appError)
}

const onDelete = (event) => {
  event.preventDefault()
  const id = event.target.dataset.id
  api.destroy(id)
    .then(() => onShowAll())
    .catch(ui.appError)
}

const onShowAll = () => {
  api.index()
    .then(ui.onShowAllSuccess)
    .catch(ui.onShowAllFailure)
}

const onShow = (event) => {
  event.preventDefault()
  const id = event.target.dataset.id
  api.show(id)
    .then(ui.onShowSuccess)
    .catch(ui.appError)
}

const onShownCreate = () => {
  $('#createModal').on('shown.bs.modal', function (event) {
    event.preventDefault()
    const createHtml = createTemplate()
    $('#createTemplate').html(' ')
    $('#createTemplate').append(createHtml)
  })
}

let id
const onShownUpdate = () => {
  $('#todoModal').on('shown.bs.modal', function (event) {
    event.preventDefault()
    id = $('.see-more').attr('data-id')
    $('.update .to-do-id').val(id)
  })
}

const onUpdate = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.update(data, id)
    .then(ui.onUpdateSuccess)
    .then(() => onShowAll())
    .catch(ui.appError)
}

const onCheckboxToggle = (event) => {
  event.target.value = event.target.checked
  const content = $(event.target).siblings('.to-do-content').val()
  const done = event.target.value
  const data = {
    todo: {
      content,
      done
    }
  }
  id = $(event.target).attr('data-id')
  api.update(data, id)
    .then(() => onShowAll())
    .catch(ui.appError)
}

const eventHandlers = () => {
  onShownCreate()
  onShownUpdate()
  $('#list').on('click', '.delete', onDelete)
  $('#list').on('click', '.see-more', onShow)
  $('#list').on('change', '.to-do-done', onCheckboxToggle)
  $('#createTemplate').on('submit', '.create', onCreate)
  $('#todoTemplate').on('submit', '.update-content', onUpdate)
}

module.exports = {
  eventHandlers
}

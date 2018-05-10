'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

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

const eventHandlers = () => {
  onShownUpdate()
  $('#list').on('click', '.see-more', onShow)
  $('#todoTemplate').on('submit', '.update-content', onUpdate)
}

module.exports = {
  eventHandlers
}

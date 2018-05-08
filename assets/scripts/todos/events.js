'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onShow = (event) => {
  event.preventDefault()
  const id = event.target.dataset.id
  api.show(id)
    .then(ui.onShowSuccess)
    .catch(ui.appError)
}

const eventHandlers = () => {
  $('#list').on('click', '.see-more', onShow)
}

module.exports = {
  eventHandlers
}

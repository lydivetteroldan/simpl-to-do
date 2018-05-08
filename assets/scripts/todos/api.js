'use strict'

const config = require('../config')
const store = require('../store')

const show = function (id) {
  return $.ajax({
    url: config.apiUrl + '/todos/' + id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  show
}

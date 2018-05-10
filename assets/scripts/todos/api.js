'use strict'

const config = require('../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/todos',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

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

const update = function (data, id) {
  return $.ajax({
    url: config.apiUrl + '/todos/' + id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  index,
  show,
  update
}

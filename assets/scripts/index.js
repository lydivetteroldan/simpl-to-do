'use strict'
const authEvents = require('./auth/events')
const authUi = require('./auth/ui')
const todosEvents = require('./todos/events')

authUi.unauthorized()
authUi.showSignIn()

$(() => {
  authEvents.eventHandlers()
  todosEvents.eventHandlers()
})

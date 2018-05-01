'use strict'
const authEvents = require('./auth/events')
const authUi = require('./auth/ui')

authUi.unauthorized()
authUi.showSignIn()

$(() => {
  authEvents.eventHandlers()
})

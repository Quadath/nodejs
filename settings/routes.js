'use strict'

module.exports = (app) => {
    const indexController = require('./../controller/IndexController')
    const usersController = require('./../controller/UsersController')

    app.route('/').get(indexController.index)
    app.route('/users').get(usersController.users)
}
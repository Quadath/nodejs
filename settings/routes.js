'use strict'

module.exports = (app) => {
    const indexController = require('./../controller/IndexController')

    app.route('/').get(indexController.index)
}
'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class StatusTask extends Model {

    task () {
        return this.belongsTo('App/Models/Task')
    }
}

module.exports = StatusTask

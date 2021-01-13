'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {

    status () {
        return this.hasOne('App/Models/StatusTask')
    }
    project () {
        return this.hasOne('App/Models/Project')
    }
}

module.exports = Task

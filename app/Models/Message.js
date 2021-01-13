'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Message extends Model {

    project (){
        this.hasOne('App/Models/Project')
    }
    user (){
        this.hasOne('App/Models/User')
    }
}

module.exports = Message

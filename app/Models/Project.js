'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {

    user(){
    return this.belongsTo('App/Models/User')
    }
    users () {
        return this
          .belongsToMany('App/Models/User')
          .pivotTable('user_projects')
          .withTimestamps()
      }
    task () {
        return this.belongsTo('App/Models/Task')
    }
    message () {
        return this.belongsTo('App/Models/Message')
    }
}

module.exports = Project

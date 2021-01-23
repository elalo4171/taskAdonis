'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserProjectSchema extends Schema {
  up () {
    this.create('user_projects', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('project_id').unsigned().references('id').inTable('projects')
      table.primary(['user_id', 'project_id']);
      table.timestamps()
    })
  }

  down () {
    this.drop('user_projects')
  }
}

module.exports = UserProjectSchema

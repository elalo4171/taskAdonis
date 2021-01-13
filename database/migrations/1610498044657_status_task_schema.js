'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatusTaskSchema extends Schema {
  up () {
    this.create('status_tasks', (table) => {
      table.increments()
      table.string('status', 15).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('status_tasks')
  }
}

module.exports = StatusTaskSchema

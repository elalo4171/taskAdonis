'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.integer('project_id').unsigned().references('id').inTable('projects')
      table.boolean('done').defaultTo(false).notNullable()
      table.string('title', 50).notNullable()
      table.string('description', 50).notNullable()
      table.string('status_task', 50).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema

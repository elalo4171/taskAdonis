'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.integer('status_task_id').unsigned().references('id').inTable('status_tasks')
      table.integer('project_id').unsigned().references('id').inTable('projects')

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

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessageSchema extends Schema {
  up () {
    this.create('messages', (table) => {
      table.increments()
      table.integer('project_id').unsigned().references('id').inTable('projects')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('message',250).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessageSchema

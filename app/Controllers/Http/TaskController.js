'use strict'

class TaskController {

  async create({ auth, request, response }) {
    try {
      await auth.check()
    } catch (error) {
      response.status(401);
      return {
        ok: false, error: {
          msj: 'Token no proveido o invalido'
        }
      }
    }
    const { title, description, project_id } = request.all();
    const Task = use('App/Models/Task')
    const task = new Task();
    task.title = title;
    task.description = description;
    task.project_id = project_id;
    try {
      await task.save();
      return { ok: true, task }
    } catch (e) {
      response.status(401);
      error = e;
      return { ok: false, error }
    }
  }

  async done({ auth, request,response }) {
    try {
      await auth.check()
    } catch (error) {
      response.status(401);
      return {
        ok: false, error: {
          msj: 'Token no proveido o invalido'
        }
      }
    }
    const { id } = request.all();

    const Task = use('App/Models/Task')
    await Task
      .query()
      .where('id', id)
      .update({ done: true })
    return { ok: true }

  }
  async delete({ auth, params,response }) {
    try {
      await auth.check()
    } catch (error) {
      response.status(401);
      return {
        ok: false, error: {
          msj: 'Token no proveido o invalido'
        }
      }
    }
    try {
      const Task = use('App/Models/Task')
      const id = params.id;

    const task = await Task.findBy('id',id);
    if(!task){
      return { ok: true,}
    }
    await task.delete();
    return {ok:true}
    } catch (error) {
      response.status(401);
      return {ok:false, error}
    }
  }
}

module.exports = TaskController

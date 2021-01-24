'use strict'

class TaskController {

    async create({auth,request}){
        try {
            await auth.check()
          } catch (error) {
            return {ok:false, error:{
                msj:'Token no proveido o invalido'
            }}
          }
        const {title, description,project_id} = request.all();
        const Task = use('App/Models/Task')
        const task = new Task();
        task.title = title;
        task.description = description;
        task.project_id = project_id;
        try{
            await task.save();
            return {ok:true, task}
        }catch(e){
           error=e;
        }
    }
}

module.exports = TaskController

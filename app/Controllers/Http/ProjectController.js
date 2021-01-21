'use strict'

class ProjectController {

    async create ({auth,request}){
        let error;
    
        const Project = use('App/Models/Project')
        const project =new Project();
        const {name, description} = request.all();
        const user =await auth.getUser();
        project.name = name;
        project.description = description;
        project.user_id = user.id;
        try{
            await project.save();
        }catch(e){
            error=e;
        }
        if(error){
            return {ok:false, error:error.detail}
        }
        return {ok:true, data:{
            project
        }}

    }
}

module.exports = ProjectController

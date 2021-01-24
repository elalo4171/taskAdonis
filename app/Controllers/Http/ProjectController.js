'use strict'

class ProjectController {

    async create({ auth, request }) {
        try {
            await auth.check()
        } catch (error) {
            return {
                ok: false, error: {
                    msj: 'Token no proveido o invalido'
                }
            }
        }
        let error;

        const Project = use('App/Models/Project')
        const project = new Project();
        const { name, description } = request.all();
        const user = await auth.getUser();
        project.name = name;
        project.description = description;
        project.user_id = user.id;
        try {
            await project.save();
        } catch (e) {
            error = e;
        }
        if (error) {
            return { ok: false, error: error.detail }
        }
        return {
            ok: true, data: {
                project
            }
        }
    }
    async getProjects({ auth, request }) {
        const user = await auth.getUser();
        const Project = use('App/Models/Project')
        const UserProject = use('App/Models/UserProject')
        const userProject = await UserProject.query().where('user_id', '=', user.id).fetch()
        return { ok: true, userProject }
    }

    async getOneProject({ auth, request,params }) {
        let error;
        try {
            await auth.check()
        } catch (error) {
            return {
                ok: false, error: {
                    msj: 'Token no proveido o invalido'
                }
            }
        }
        const project_id  = params.project;
        const Task = use('App/Models/Task')
        const task = await Task.query().where('project_id', '=', project_id).fetch()
        const Project = use('App/Models/Project')
        let project =await Project.findBy('id', project_id);
        return { ok: true, project, task }
    }

    async addUser({ auth, request }) {
        const Database = use('Database')
        let error;
        try {
            await auth.check()
        } catch (error) {
            return {
                ok: false, error: {
                    msj: 'Token no proveido o invalido'
                }
            }
        }
        const { project_id } = request.all();
        const user = await auth.getUser();
        try {
            await Database
                .table('user_projects')
                .insert({ user_id: user.id, project_id })
        } catch (e) {
            error = e;
        }
        if (error) {
            return { ok: false, error: error.detail }
        }
        return {
            ok: true, data: {
                userProject
            }
        }
    }
}

module.exports = ProjectController

'use strict'

class UserController {

    async login({ auth, request }) {

        const UserProject = use('App/Models/UserProject')
        const User = use('App/Models/User')
        const Project = use('App/Models/Project')
        const { username, password } = request.all();
        let token = await auth.attempt(username, password);
        let user = await User.findBy('username', username);
        let projects =[];
        let projectsDatabase = await UserProject.query().where('user_id', '=', user.id).fetch()
        console.log(projectsDatabase)
        await Promise.all(await projectsDatabase.rows.map(async (row) =>{
            let projectdb = await Project.findBy('id', row.project_id);
            projects.push(projectdb);
        }))
        return {
            ok: true, data: {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                },
                projects,
                token
            }
        }
    }

    async save({ request, response }) {
        const User = use('App/Models/User')
        //request.all
        //Trae los valores del body asi como del query params
        const { email, username, password } = request.all();
        const user = new User();
        let error;
        user.username = username;
        user.email = email;
        user.password = password;
        try {
            await user.save();
        } catch (e) {
            error = e;
        }
        if (error) {
            response.status(401);
            return { ok: false, error: error.detail }
        }
        return {
            ok: true, data: {
                user
            }
        }
    }
    async all({ auth }) {
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
        const User = use('App/Models/User')
        return {
            ok: true, data: {
                users: await User.all()
            }
        }
    }
    async one({ auth, params, response, }) {
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
        const { id } = params;
        const User = use('App/Models/User')

        var user = await User.findBy('id', `${id}`)
        if (user) {
            return {
                ok: true, data: {
                    user
                }
            }
        } else {
            return { ok: true, data: null }
        }
    }
}

module.exports = UserController

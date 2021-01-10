'use strict'

class UserController {
    
    async save({request,response}){
        const User = use('App/Models/User')
        //request.all
        //Trae los valores del body asi como del query params
        const {email, username, password} = request.all();
        const user =new User();
        user.username= username;
        user.email = email;
        user.password = password
        await user.save();
        return {ok:true, data:{
            user
        }}
    }
    async all({request,response}){
        const User = use('App/Models/User')
        const {email, user, password} = request.all();
        return {ok:true, data:{
            users: await User.all()
        }}
    }
}

module.exports = UserController

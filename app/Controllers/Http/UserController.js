'use strict'

class UserController {

    async login({auth,request}){

        const User = use('App/Models/User')
        const {username, password} = request.all();
        let token = await auth.attempt(username, password)
           let user =await User.findBy('username', username);
            return {ok:true, data:{
                user:{
                    username:user.username,
                    email:user.email
                }
                ,token
            }
        }
    }

    async save({request,response}){
        const User = use('App/Models/User')
        //request.all
        //Trae los valores del body asi como del query params
        const {email, username, password} = request.all();
        const user =new User();
        let error;
        user.username= username;
        user.email = email;
        user.password = password;
        try{
            await user.save();
        }catch(e){
           error=e;
        }
        if(error){
            return {ok:false, error:error.detail}
        }
        return {ok:true, data:{
            user
        }}
    }
    async all({auth}){
        try {
            await auth.check()
          } catch (error) {
            return {ok:false, error:{
                msj:'Token no proveido o invalido'
            }}
          }
        const User = use('App/Models/User')
        return {ok:true, data:{
            users: await User.all()
        }}
    }
    async one({params,response,}){
        const {id} = params;
        const User = use('App/Models/User')

        var  user=await User.findBy('id',`${id}`)

        return {ok:true, data:{
            user
        }}
    }
}

module.exports = UserController

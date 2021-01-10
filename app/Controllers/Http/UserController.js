'use strict'

class UserController {

    async save({request,response}){
        //request.all
        //Trae los valores del body asi como del query params
        const {email, data} = request.all();
        return {ok:true, data:{
            email,
            data
        }}
    }
}

module.exports = UserController

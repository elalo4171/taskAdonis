'use strict'


// /** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Database = use('Database')
Route.get('/', ()=>{
    return {ok:true}
});

Route.post('/', ()=>{
    return {ok:true}
});


Route.post('/user','UserController.save');



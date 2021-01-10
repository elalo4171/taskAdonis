'use strict'


 /** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Database = use('Database')

Route.get('/', ()=>{
    return {ok:true}
});

Route.group(()=>{
Route.get('/','UserController.all')
Route.post('/','UserController.save')
Route.get('/:id','UserController.one')
}).prefix('api/user')





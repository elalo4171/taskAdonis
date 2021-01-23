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
Route.post('/login','UserController.login')
Route.get('/:id','UserController.one')
}).prefix('api/user')

Route.group(()=>{
    Route.post('/','ProjectController.create')
    Route.get('/','ProjectController.getProjects')
    Route.post('/add','ProjectController.addUser')
    Route.get('/:project','ProjectController.getOneProject')
    }).prefix('api/project')





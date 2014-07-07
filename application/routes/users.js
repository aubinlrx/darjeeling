'use strict';

var user = module.exports = function(app, user) {

    /**
    * Index application routes
    */
    app.get('/', user.index);

    /**
    * Index User
    **/
    app.get('/users', user.index);

    /**
    * Add User
    */
    app.get('/users/new', user.new);

    /**
    * Create User
    */
    app.post('/users', user.create);

    /**
    * Show User
    */
    app.get('/users/:id', user.show);

    /**
    * Edit User
    */
    app.get('/users/:id/edit', user.edit);

    /**
    * Update User
    */
    app.put('/users/:id', user.update);
    app.post('/users/update/:id', user.update);

    /**
    * Delete User
    */ 
    app.delete('/users/:id', user.delete);
    app.get('/users/delete/:id', user.delete);

}
var io = require('socket.io')(2000);
var sequence = 1;
var clients = [];

io.on('connection', function(socket){
    //Register the client into a list of known clients
    console.info('Connection. ID: ' + socket.id);
    clients.push(socket);

    socket.on('disconnect', function(){
        var index = clients.indexOf(socket);
        if (index != -1){
            clients.splice(index, 1);
            console.info("Disconnection. ID: " + socket.id);
        }
    });


    socket.on('userSignin', function(data){
        var returnClient = clients[clients.indexOf(socket)];
        //Get the username and hashed+salted password
        //Compare it against the records in the database
        var validAuth = false;


        if (validAuth){
            var validData = {
                validAuth: validAuth,
                userID: "_1a43dv14"
            };

            //Send a message to the other servers, telling them _userID is valid and authorised
            //Return a message to the client telling them they are logged in
            returnClient.emit('authReturn', validData);
        } else {
            var invalidData = {
                validAuth: validAuth
            };

            returnClient.emit('authReturn', invalidData);
        }
    });

    //ADD user registration

    //ADD forgot password
});
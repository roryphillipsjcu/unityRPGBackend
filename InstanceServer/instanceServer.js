//Should set the port to be read from a config file
//Makes distribution of multiple servers easier
var io = require('socket.io')(3001);

//Do stuff to register server with the Instance Pooler
//server first

io.on('connection', function(socket){
    //Verify the client is connected

    socket.on('userSetValid', function(userData){
        //Adds the userID to the valid users list
    });

    socket.on('disconnect', function(){
        //Deregisters the userID
    });

    //Gameplay stuff from here down
    //
    //
    //
    //
    //
});
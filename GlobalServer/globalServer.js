var io = require('socket.io')(3000);
var servers = [];

io.on('connection', function(socket){

    //Verify the client is connected

    socket.on('userSetValid', function(userData){
        //Add the userId to valid users
    });

    socket.on('registerServer', function(serverData){
        //Register the server into the realmlist
    });

    socket.on('getServerList', function(){
        //Returns a list of all of the servers
    });

    socket.on('disconnect', function(){
       //Deregisters userID
    });

});
var io = require('socket.io')(4000);
var instances = [];

io.on('connection', function(socket){

   socket.on('userSetValid', function(userData){
       //Add the userID to valid users
   });

    socket.on('registerInstance', function(instanceData){
        //Registers the instance into the pool
    });

    socket.on('setInstanceStatus', function(statusData){
        //Sets the current status of the instance server
    });

    socket.on('getInstanceList', function(){
        //Returns all instances
    });

    socket.on('getUnusedInstance', function(){

    });

});
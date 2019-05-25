

var socket = io();
socket.on('connect', function(){
    console.log('conectado al servidor');
})
// Escuchar
socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
})
// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Juan Carlos',
    mensaje: 'HOla mundo'
}, function( resp){
    console.log('respuesta server: ', resp);
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor:', mensaje);
})


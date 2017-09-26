var socket = new WebSocket('wss://js-assignment.evolutiongaming.com/ws_api', 'ws');
socket.onopen = function(event){alert('Ok')}

var ping = {
    $type: "login",
    username: 'user12',
    password: 'password1234'
}



function kek () {
    socket.send(JSON.stringify(ping))
}
socket.onmessage = function (event) {
  console.log(event.data);
}
////////////////////////////////////////
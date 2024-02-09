let ws = null;
let timeWs = null

function wsInit(wsUrl){
  ws = new WebSocket(wsUrl);

  ws.onopen = function(event) {
    clearTimeout(timeWs);
    timeWs = setTimeout(()=>{wsSend("test")}, 1000);
    // wsSend("test"); // poner aqui autentificacion
  };
  
  ws.onmessage = function(event) {
    console.log(`[message] Datos recibidos del servidor: ${event.data}`);
  };
  
  ws.onclose = function(event) {
    if (event.wasClean) {
      console.log(`[close] Conexión cerrada limpiamente, código=${event.code} motivo=${event.reason}`);
    } else {
      console.log('[close] La conexión se cayó');
    }
  };
  
  ws.onerror = function(error) {
    console.log(`[error]`);
  };
  return ws
}

function wsSend(msg){
  ws.send(msg);
}

export{
  wsSend,
  wsInit
}
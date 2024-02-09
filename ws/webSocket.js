const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 7071 });
const clients = new Map();

wss.on('connection', (ws) => {
  setTimeout(() => {expire(ws)},5000);
  const id = uuidv4();
  let name = "";
  let metadata = { id , name};
  console.log("connection");
  clients.set(ws, metadata); 

  ws.on('message', (messageAsString) => {
    // const message = JSON.parse(messageAsString);
    const message = messageAsString.toString()
    const metadata = clients.get(ws);
    if(metadata.name === ""){
      clearTimeout(metadata.timeClient)
      metadata.name = message;
      clients.delete(ws);
      clients.set(ws, metadata);
      console.log("conection", metadata);
      return
    }
    console.log(metadata)

    const outbound = message; // messageAsString;

    [...clients.keys()].forEach((client) => {
      if(client != ws){
        client.send(`${metadata.name} > ${outbound}`);
        console.log(`${metadata.name} > ${outbound}`);
      }
    });
  });
  ws.on("close", () => {
    const metadata = clients.get(ws);
    console.log("close", metadata)
    clients.delete(ws);
  });
});
console.log("wss up");


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function expire(ws){
  const metadata = clients.get(ws);
  if(metadata.name === ""){
    ws.close();
  }
}
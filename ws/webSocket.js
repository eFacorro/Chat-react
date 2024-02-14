const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 7071 });
const clients = new Map();

wss.on('connection', (ws) => {
  const id = uuidv4();
  let name = "";
  let metadata = {id, name};
  console.log("connection");
  clients.set(ws, metadata); 

  ws.on('message', (messageAsString) => {
    try{
      let message = JSON.parse(messageAsString);
      if (message.msg !== ""){
        const metadata = clients.get(ws);
        if(metadata.name === ""){
          metadata.name = message.data.name;
          clients.delete(ws);
          clients.set(ws, metadata);
          console.log("conection", metadata);
          return
        }
        console.log(metadata);
        message.user = metadata.name;
        const outbound = JSON.stringify(message);
        
        console.log(outbound);
        [...clients.keys()].forEach((client) => {
          tempMetadata = clients.get(client);
          if(client != ws && tempMetadata.name !== ""){
            client.send(outbound);
          }
        });
      }
    }
    catch{
      console.log("error")
    }
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
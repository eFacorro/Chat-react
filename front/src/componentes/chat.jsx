import React, {useState, useEffect} from "react";
import useWebSocket, { ReadyState } from "react-use-websocket"
import Enviar from "./enviar";
import Conectarse from "./conectarse";

export default function Chat() {
  let [msg, setMsg] = useState("");
  let [keyId, setKeyId] = useState(0);
  let [chat, setChat] = useState([]);
  const WS_URL = "ws://localhost:7071"
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    WS_URL,
    {
      share: false,
      shouldReconnect: () => true,
    },
  );
  
  useEffect(() => {
    console.log("Connection state changed")
    if (readyState === ReadyState.OPEN) {
      // sendJsonMessage({
      //   event: "subscribe",
      //   data: {
      //     channel: "general-chatroom",
      //     name: "test"
      //   },
      // })
    }
  }, [readyState]);

  useEffect(() => {
    if (lastJsonMessage !== null && lastJsonMessage.hasOwnProperty('msg')){
      console.log(lastJsonMessage.msg);
      let element = ">"
      setChat([...chat, <p key={keyId}>{lastJsonMessage.user} {element} {lastJsonMessage.msg}</p>]);
      setKeyId(keyId + 1);
    }
  }, [lastJsonMessage]);

  const enviar = () => {
    if(msg !== ""){
      sendJsonMessage({msg: msg});
      setMsg("");
      let keyIdDiv = keyId;
      setChat([...chat, <div key={keyIdDiv} className="enviado"><p key={keyId}>{msg}</p></div>]);
      setKeyId(keyId + 2);
    }
  }

  return (
    <div>
      <div className="chat">
        {chat}
      </div>
      <div className="envio">
        <Enviar enviar={enviar} msg={msg} setMsg={setMsg}/>
      </div>
      <Conectarse sendJsonMessage={sendJsonMessage} />
    </div>
  )
}
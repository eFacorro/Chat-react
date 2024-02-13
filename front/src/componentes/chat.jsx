import React, {useState, useEffect} from "react";
// import Enviar from './enviar';
import useWebSocket, { ReadyState } from "react-use-websocket"

export default function Chat() {
  const WS_URL = "ws://127.0.0.1:7071"
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    WS_URL,
    {
      share: false,
      shouldReconnect: () => true,
    },
  )

  // Run when the connection state (readyState) changes
  useEffect(() => {
    console.log("Connection state changed")
    if (readyState === ReadyState.OPEN) {
      sendJsonMessage({
        event: "subscribe",
        data: {
          channel: "general-chatroom",
          name: "test"
        },
      })
    }
  }, [readyState])

  // Run when a new WebSocket message is received (lastJsonMessage)
  useEffect(() => {
    console.log(`Got a new message: ${lastJsonMessage}`)
  }, [lastJsonMessage])
  
  let [msg, setMsg] = useState("");
  const enviar = () => {
    sendJsonMessage({msg: msg});
    setMsg("");
  }

  return (
    <div>
      <div>
        {/* <p>{lastJsonMessage}</p> */}
        <input type="text" value={msg} onChange={(e) => {setMsg(e.target.value);}}/> <button onClick={enviar}>Enviar</button>
      </div>
    </div>
  )
}
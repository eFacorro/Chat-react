import React, { useState } from "react";

export default function Conectarse({sendJsonMessage}){
  let [user, setUser] = useState("");
  function enviar(){
    sendJsonMessage({
      event: "subscribe",
      data: {
        channel: "general-chatroom",
        name: user
      },
    })
  }
  
  return (
    <>
      <input type="text" value={user} onChange={(e) => {setUser(e.target.value);}} onKeyDown={(e) => e.code === "Enter" ? enviar() : ""}/> <button onClick={enviar}>Conectarse</button>
    </>
  )
}
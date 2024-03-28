import React, { useState } from "react";
import Chat from "./chat";

export default function Conectarse({sendJsonMessage}){
  let [user, setUser] = useState("");
  let [conectarse, setConectarse] = useState(false);
    
  return (
    <>
      Nombre en el chat<input type="text" value={user} onChange={(e) => {setUser(e.target.value)}} onKeyDown={(e) => e.code === "Enter" ? setConectarse(true) : ""} disabled={conectarse}/>
      {!conectarse && <button onClick={() => setConectarse(true)}>Conectarse</button>}
      {conectarse && <Chat user={user}/>}
    </>
  )
}
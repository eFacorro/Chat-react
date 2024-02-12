import React, {useState} from "react";
import { wsSend } from "../js/helpers";

export default function Enviar(){
  let [msg, setMsg] = useState("");
  const enviar = () => {
    wsSend(msg);
    setMsg("");
  }
  return (
    <div>
      <input type="text" value={msg} onChange={(e) => {setMsg(e.target.value);}}/> <button onClick={enviar}>Enviar</button>
    </div>
  )
}
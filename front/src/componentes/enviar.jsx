import React from "react";
import { wsSend } from "../js/helpers";

export default function Enviar(){
  return (
    <div>
      <input type="text" /> <button onClick={()=>{wsSend("boton")}}>Enviar</button>
    </div>
  )
}
import React from "react";

export default function Enviar({enviar, msg, setMsg}){
  return (
    <>
      <input type="text" value={msg} onChange={(e) => {setMsg(e.target.value);}} onKeyDown={(e) => e.code === "Enter" ? enviar() : ""}/> <button onClick={enviar}>Enviar</button>
    </>
  )
}
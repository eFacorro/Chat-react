import React,{useState} from "react";
import Enviar from './enviar';
import { wsInit } from "../js/helpers";

export default function Chat(){
  const [url,setUrl]=useState("ws://localhost:7071");
  const [ws,setWs] = useState(wsInit(url));
 
  return (
    <div>
      <Enviar />
    </div>
  )
} 
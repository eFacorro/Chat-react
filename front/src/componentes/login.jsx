import React from "react"

export default function FormLogin(){
  return (
    <form id="formLogin" name="Login" enctype="multipart/form-data">
      <input name="user" type="text" placeholder="Usuario o eMail" />
      {/* <span></span> */}
      <input name="pwd" type="password" placeholder="Contraseña" />
      <a href="/resetpass">¿Contraseña olvidada?</a>
      <button id="loginUsuario">Enviar</button>
    </form>
  )
}
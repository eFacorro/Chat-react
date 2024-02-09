import React from "react"

export default function FormSingUp(){
  return (
    <form id="formRexistro" name="rexistro" enctype="multipart/form-data">
      <input name="user" type="text" required placeholder="Usuario" />
      {/* <span></span> */}
      <input name="mail" type="email" required placeholder="Mail" />
      {/* <span></span> */}
      <input name="pwd" type="password" required placeholder="Contraseña" />
      {/* <span></span> */}
      <input name="usuario" type="file" />
      <input name="nombre" type="text" placeholder="Nombre" />
      <input name="primerApellido" type="text" placeholder="Primer Apellido" />
      <input name="segundoApellido" type="text" placeholder="Segundo Apellido" />
      <input name="fechaNacimiento" type="date" />
      <button id="rexistrarUsuario">Enviar</button>
    </form>
  )
}
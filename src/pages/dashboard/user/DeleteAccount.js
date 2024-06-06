import React from 'react'
import Sidebar from '../Sidebar'
import './deleteAcc.css'

const DeleteAccount = () => {
  return (
    <div>
      <div className="delete-account-container">
      <Sidebar />
      <div className="delete-account-content">
        <div className="delete-account">
          <h2>Confirme con Contraseña</h2>
          <p>Para completar la accion, ingresa tu contraseña.</p>
          <form>
            <label htmlFor="password">Ingresa tu contraseña</label>
            <input type="password" id="password" name="password" />
            <button type="submit" onClick={() => alert("Cuenta eliminada")}>Confirmar</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DeleteAccount

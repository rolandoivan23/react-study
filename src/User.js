import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function User() {
  return (
    <React.Fragment>
        <div>User Info</div>
        <p>Aquí puede ir contenido estático de la ruta</p>
        <nav>
            <Link style={{margin: '6px'}} to="profile">Profile</Link>
            <Link style={{margin: '6px'}} to="account">Account</Link>
        </nav>

        <div style={{padding: '15px', color: 'gray', 'backgroundColor': '#052401'}}>
            <Outlet />

        </div>

    </React.Fragment>
  )
}

export default User
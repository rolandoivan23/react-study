import {React} from 'react'
import {Link} from 'react-router-dom'





function Users({users}) {

    
  return (
    <div>
        <div>Users</div>
        <hr />
        <table>
            <tbody>
                {users.map(usr => (
                    <tr key={usr.id}>
                        <td>{usr.name}-</td>
                        <td>{usr.edad}</td>
                        <td>{usr.email}</td>
                        <td><a href="/users/1">Detalles</a></td>
                        <td><Link to={`/users/${usr.id}`}>Detalles con router</Link></td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default Users
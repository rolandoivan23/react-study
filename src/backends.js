import React from 'react'
import {Link, Outlet} from 'react-router-dom'


function Backs({backs}) {
  return (
    <React.Fragment>
        <div>Backs</div>
        <hr />
        <div style={{width: "450px", display: "inline-block"}}>
            <table>
                <tbody>
                    {backs.map(back => (
                        <tr key={back.id}>
                            <td>{back.name}</td>
                            <td>{back.edad}</td>
                            <td>{back.creator}</td>
                            {/*Importante mandar el id como cadena por que si no no lo agarra bien */}
                            <td><Link to={`${back.id}`}>Detalles </Link></td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
        <div style={{width: "450px", display: "inline-block"}}>
            <Outlet />
        </div>
    </React.Fragment>
  )
}

export default Backs
import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

const UserShow = (props) => {
  const [user, setUser] = useState();
  let {id} = useParams();
    
  useEffect(()=> {
    setUser(id)
  },[])

  return (
    <div> {/*Por que no funciona con un react fragment??*/}
        <div>UserShow</div>
        <hr />
        <div>
            <p><label htmlFor="">Name</label><span>{user}</span></p>
            <p><label htmlFor="">Edad</label><span></span></p>
            <p><label htmlFor="">Email</label><span></span></p>
        </div>
    </div>
    
  )
}

export default UserShow
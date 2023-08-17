import logo from './logo.svg';
import './App.css';
import Abcd from './btnReact';
import ComponentRuby from './classComponent';
import {useState, useEffect} from 'react';
import { JavaComponent } from './javaComponent';
import  SeleniumComponent  from './seleniumComponent';
import  Photos  from './photos';
import UserForm from './formulario';
import Users from './Users';
import NoteShow from './NoteShow';
import Posts from './Posts';
import UserShow from './user_show';

import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';
import RefComponent from './RefComponent';
import NotFound from './404';
import Backs from './backends';
import BackendShow from './backed_show';
import User from './User';
import Notes from './Notes';
import UserProfile from './UserProfile';
import UserAccount from './UserAccount';

import {createContext} from 'react'
import Modal from './Modal';

const notes = [
  {id: 1, text: 'uno dos tres'},
  {id: 2, text: 'cuatro cinco seis'}
];
export const NotesContext = createContext(notes);

function App() {
  let p3 = 'Param to jsx';
  const [s1, sets1] = useState(100);

  const backs = [
    {id: 1, name: 'RoR', edad: '15', creator: 'HHD'},
    {id: 2, name: 'Django', edad: '13', creator: 'Dont remember'}
  ];

  const users = [
    {id: 1, name: 'Rolando', edad: '30', email: '----@sas.xom'},
    {id: 2, name: 'Iván', edad: '20', email: '----@sas.xom'}
  ];

  const paramsSelComp = {years: 2323, start_date: '01/01/2023'};

  useEffect((s1) => {
    const timer = setTimeout(() => {
      console.log('Triki');
      sets1(s1=> s1*2);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);
  
  

  return (
    <div className="App">
      
      <Modal>{/**Se pone aquì solo de ejemplo para ver que lo monta en otro nodo del html */}
        <p>Parrafo de teletransportación</p>
      </Modal>
      <BrowserRouter >
        <ul>
          <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : undefined }>Home</NavLink></li>
          <li><NavLink to="/user" className={({isActive}) => isActive ? 'active' : undefined } end>User Profile</NavLink></li>
          <li><NavLink to="/users/new" className={({isActive}) => isActive ? 'active' : undefined } end>NUEVO USER</NavLink></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/backends">Backends</Link></li>
          <li><Link to="/photos">Fotos</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/notes">Notes</Link></li>
          <li><Link to="/statica">Estática</Link></li>
          <li><Link to="/refexample">UseRef</Link></li>
        </ul>
        <NotesContext.Provider value={notes}>
          <div id="routes-container">
            <Routes>
                <Route index path="/" element={<div></div>}/>
                <Route path="user" element={<User/>} >
                  <Route index element={<UserProfile />} />
                  <Route path="profile" element={<UserProfile/>} />
                  <Route path="account" element={<UserAccount/>} />
                  <Route path="*" element={<NotFound />} />
                </Route>
                <Route exact path="/users/new" element={<UserForm/>} />
                <Route exact path="/users/:id" element={<UserShow />} />
                <Route exact path="/users" element={<Users users={users}/>} />
                <Route exact path="/posts/*" element={<Posts/>} />
                
                {/*Example using useContext*/}
                <Route exact path="/notes" element={<Notes/>} />
                <Route exact path="/notes/:noteId" element={<NoteShow/>} />
                
                <Route path="backends" element={<Backs backs={backs}/>} >
                  <Route path=":id" element={<BackendShow/>} />
                </Route>
                <Route exact path="/photos" element={<Photos/>} />
                <Route exact path="/refexample" element={<RefComponent/>} />
                <Route path="/statica" element={(
                  <p>Así podría ser el contenido estático con el router v6</p>
                  )} />
                <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </NotesContext.Provider>
      </BrowserRouter>
      <header className="App-header">
        {logo}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          Static content 123pum!!!  
        </div>
        <div>
          Rendering a variable(no state, declared with let){p3} 
        </div>
        <div>
          Rendering a variable declared with state {s1}
        </div>
        
        <div>

          <div className="example-components">
            <Abcd p1={1} p2={2} p3={p3} s1={s1}></Abcd>        
          </div>
          <div className="example-components">
            <ComponentRuby a={1546}/>
          </div>
          <div className="example-components">
            <JavaComponent years={10} ></JavaComponent>
          </div>
          <div className="example-components">
            <SeleniumComponent {...paramsSelComp}> - </SeleniumComponent>
          </div>
        </div>
        
      </header>
     
    </div>
  );
}

export default App;

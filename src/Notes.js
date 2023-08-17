import {React, useContext} from 'react'
import { Link } from 'react-router-dom'
import {NotesContext} from './App'

function Notes() {
    const notes = useContext(NotesContext)
  return (
    <>
        <div>Notes</div>
        {notes.map(note => (
            <p key={note.id}>{note.text} <Link to={`${note.id}`}>show</Link> </p>
        ))}
    </>


  )
}

export default Notes
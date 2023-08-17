import {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { NotesContext } from './App'

function NoteShow() {
    const {noteId} = useParams()
    const notes = useContext(NotesContext)
    const [note, setNote] = useState({});
   useEffect(()=> 
    setNote(n => 
        notes.find(n => n.id === parseInt(noteId) )
    ),[])
  return (
    <>
    <div>NoteShow - {noteId} </div>
    <p>Text: {note.text}</p>
    </>
  )
}

export default NoteShow
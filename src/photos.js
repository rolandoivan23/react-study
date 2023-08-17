import React, { useEffect, useState, useReducer } from 'react'
import Photo from './photo';

const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    .then( response => response.json())
    .then( json => {
        return json;
    });
    
    return res;
}

function reducer(state, action) {
    if (action.type === 'incremented_age') {
      return {
        age: state.age + 1
      };
    }
    throw Error('Unknown action.');
  }

  const reducerFunc =  (state, action) => {
    //console.log(state);


    switch(action.type){
        case 'ultimas': {
            return { items: [...state.items, ...action.data] };
        }
        case 'primeras': {
            return [...state];
        }
        default: {
            throw Error('Unknown action: ' + action);
        }
    }  
};
function Photos() {
    
   
    const [photos, setphotos] = useState([]);
    
    
    //Nos ayuda a manejar la lógica en una sola funcion en vez de tener que tener varias funciones para poner el estado en base a la lógica
    //Utiliza el estado global y tiene un coste en el rendimiento
    const [photosReducer, dispatcher] = useReducer(reducerFunc, {items: []})


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then( response => response.json())
        .then( json => {
            console.log('jsonnn: ', json)
            setphotos((lastPho)=> [...lastPho, ...json]);
            //console.log('photos: ', photos)
        });
    },[]); 

    const [state, dispatch] = useReducer(reducer, { age: 42 });
  return (
    <div>
        {photos.slice(0,2).map(photo => <Photo key={photo.id} {...photo} />)}
        <div>
        <button onClick={() => {
            dispatch({ type: 'incremented_age' })
        }}>
            Increment age
        </button>
        <p>Hello! You are {state.age}.</p>
            <button onClick={async ()=> {
                const res = await getData();
                console.log('me cargaaaaaa: ', res)
                dispatcher({type: 'ultimas', data: res})
                }}>
                    Get Photos
            </button>{photosReducer && photosReducer.items.length}
            {photosReducer > 0 && photosReducer.map(photo => <Photo key={photo.id} {...photo} />)}
        </div>
    </div>
  ) 
}

export default Photos
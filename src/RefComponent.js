import React from 'react'
import {useRef} from 'react'


function RefComponent() {
    const inputRef = useRef('');
    const handleRefChange = () => {
        console.log(inputRef.current.value);
        console.log(inputRef);
      }
    return (
        <div>
            <input type="text" ref={inputRef} onKeyUp={handleRefChange} />
        </div>
    )
}

export default RefComponent
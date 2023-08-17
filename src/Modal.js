import ReactDOM from 'react-dom';

import React from 'react'

function Modal({children}) {
  return ReactDOM.createPortal(
    children,
    document.getElementById('loading-portal')

  )
}

export default Modal
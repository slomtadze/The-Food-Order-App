import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const BackDrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClick}/>
      )
}
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const modalOverlay = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(<BackDrop onClick={props.onClick}/>, modalOverlay)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalOverlay)}
    </Fragment>
  )
}

export default Modal
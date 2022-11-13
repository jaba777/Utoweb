import React from 'react'
import './UseForms.css';

const UseForms = (props) => {
    const classes='useForms '+props.className
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default UseForms

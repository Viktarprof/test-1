import React from 'react'
import s from './Input.module.css'

function Input({type, title_input, name, value, placeholder, styles}) {
  return (
    <div className={s.input_container} >
      <p className={s.title_input}>{title_input}</p>
      <input  
        type = {type}
        className={`${s[styles]}`}
        name={name}
        value={value}
        placeholder={placeholder}/>
    </div>
  )
}

export default Input
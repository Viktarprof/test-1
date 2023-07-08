import React from 'react'
import s from './Button.module.css'

function Button({ text, styles }) {
  return (
    <button className={`${s[styles]}`}>{text}</button>
  )
}

export default Button
import React from "react";
import s from './Select.module.css';

function Select({ 
  options, 
  styles,
  register
  }) {
  return (
    <div >
      <select 
        className={`${s[styles]}`}
        {...register}>
        {options && options.map((option, index) => (
          <option 
            key={index} 
            value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;

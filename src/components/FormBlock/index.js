import React from "react";

const FormBlock = ({ id, type, label, value, checked, onChange, options }) => {
  return (
    <div className="form_block">
      <label className="form-block_label" htmlFor={id}>
        {label}
      </label>

      {type === "select" ? (
        <select id="select-theme" onChange={onChange} value={value}>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          className="form-block_text"
          value={value}
          checked={checked}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormBlock;

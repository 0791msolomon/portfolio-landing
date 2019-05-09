import React from "react";
import classnames from "classnames";
const TextInputGroup = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input
        onChange={e => props.onChange(e)}
        value={props.value}
        name={props.name}
        type={props.type}
        className={classnames("form-control", {
          "is-invalid": props.error
        })}
        id="formGroupExampleInput"
        placeholder={props.placeholder}
      />
      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
};

TextInputGroup.defaultProps = {
  type: "string"
};

export default TextInputGroup;

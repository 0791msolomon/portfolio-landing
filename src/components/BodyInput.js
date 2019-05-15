import React from "react";
import classnames from "classnames";

const BodyInput = props => {
  return (
    <div class="form-group">
      <label class="control-label col-sm-2" for="comment">
        Message:
      </label>
      <div class="col-sm-10">
        <textarea
          rows="5"
          id="comment"
          name="body"
          value={props.value}
          name={props.name}
          onChange={e => props.onChange(e)}
          className={classnames("form-control", {
            "is-invalid": props.error
          })}
        />
        {props.error && <div className="invalid-feedback">{props.error}</div>}
      </div>
    </div>
  );
};
export default BodyInput;

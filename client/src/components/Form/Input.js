import React from "react";

export const Input = props => (
  <div className="form-group">
    <label type="input-form">{}</label>
    <input className="form-control" {...props} />
  </div>
);

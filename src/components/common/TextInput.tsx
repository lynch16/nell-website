import * as React from "react";

interface Props {
  labelText: string;
  value?: string;
  required?: boolean;
  onChange?: (value: string) => void;
  hint?: string;
}

const TextInput: React.FC<Props> = ({ labelText, hint, required, value, onChange }) => {
  const id = React.useRef(`${Date.now()}`);

  return (
    <div className="form-group">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label htmlFor={id.current} className="input-group-text">{labelText}</label>
        </div>
        <input 
          id={id.current}
          required={required}
          value={value}
          className="form-control"
          onChange={event => onChange(event.currentTarget.value)}
        />
      </div>

      {hint && (
        <small id="emailHelp" className="form-text text-muted">
          {hint}
        </small>
      )}
    </div>
  );
};

export default TextInput;

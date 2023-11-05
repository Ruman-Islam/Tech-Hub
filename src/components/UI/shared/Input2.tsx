type InputProps = {
  type?: "range" | "submit" | "file" | "text";
  name?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  defaultValue?: number;
  min?: number;
  max?: number;
  id?: string;
  placeholder?: string;
  onChange?: () => void;
};

const Input2: React.FC<InputProps> = (props) => {
  // without handler
  let input = (
    <input
      type={props.type}
      name={props.name}
      disabled={props.disabled}
      className={props.className}
      style={props.style}
      defaultValue={props.defaultValue}
      min={props.min}
      max={props.max}
      placeholder={props.placeholder}
      id={props.id}
    />
  );

  // with handler
  if (props.onChange) {
    input = (
      <input
        type={props.type}
        name={props.name}
        className={props.className}
        onChange={props.onChange}
        style={props.style}
        disabled={props.disabled}
        defaultValue={props.defaultValue}
        min={props.min}
        max={props.max}
        placeholder={props.placeholder}
        id={props.id}
      />
    );
  }
  return input;
};

export default Input2;

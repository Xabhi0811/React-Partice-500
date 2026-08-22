const Button = ({ text, color, handleClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button

const TextCell = ({ text, image, symbol, className, as, input, actions }) => {
  const As = as;
  const Input = input;
  return (
    <>
      {As && (
        <As className={className}>
          {image && <img src={image} alt="" />}
          {text && <h2>{text}</h2>}
          {symbol && <h4>({symbol})</h4>}
        </As>
      )}
      {Input && (
        <>
          <div className="quantity qnty">
            {actions.map((action) => (
              <button
                key={action.name}
                className={action.className}
                onClick={action.handler}
              >
                {action.icon}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default TextCell;

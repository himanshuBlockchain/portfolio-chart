const ActionCell = ({ actions, className, as }) => {
  const As = as;
  return (
    <As className={className}>
      {actions?.map((action) => (
        <span
          key={action.name}
          className={action.className}
          onClick={action.handler}
          style={{ cursor: "pointer" }}
        >
          {action.icon}
        </span>
      ))}
    </As>
  );
};

export default ActionCell;

const DynamicForm = ({ data }) => {
  return (
    <div className="container mt-4">
      {data.map((item, index) => (
        <div key={item.name} className="mb-3">
          <label>{item.label}</label>
          {item.type !== "select" ? (
            <input className="form-control" type={item.type} name={item.name} />
          ) : (
            <select className="form-select">
              {item.options.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}
    </div>
  );
};

export default DynamicForm;

const InputHandler = ({ height, setHeight, weight, setWeight }) => {
  return (
    <>
      <div className="input-group flex-nowrap inputField">
        <input
          className="form-control"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          type="number"
          placeholder="Height"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
        <span className="input-group-text" id="addon-wrapping">
          cm
        </span>
      </div>
      <div className="input-group flex-nowrap inputField">
        <input
          className="form-control"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          type="number"
          placeholder="Weight"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
        <span className="input-group-text kg" id="addon-wrapping">
          kg
        </span>
      </div>
    </>
  );
};

export default InputHandler;

const ButtonHandler = ({ onclick }) => {
  return (
    <>
      <button className="btn" onClick={onclick}>
        Calcute BMI
      </button>
    </>
  );
};

export default ButtonHandler;

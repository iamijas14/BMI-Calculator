const ShowResult = ({ bmi, status }) => {
  return (
    <>
      <div className="result">
        <p>Your BMI is: {bmi}</p>
        <p>You are currently: {status}</p>
      </div>
    </>
  );
};

export default ShowResult;

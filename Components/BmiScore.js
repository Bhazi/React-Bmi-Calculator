import "./BmiScore.css";
function BmiScore({ BmiNo, BmiName, changeWeight }) {
  return (
    <div className="showBmi">
      <div className="bmiScore">
        <p>Your BMI Score</p>
      </div>
      <div className="BmiValue">{BmiNo}</div>
      <div className="BmiResult">{BmiName}</div>
      {changeWeight.type === "positive" && (
        <div style={{ textAlign: "center", fontFamily: "Bahnschrift Light" }}>
          " You need to lose
          <strong style={{ fontSize: "19px" }}>
            {" "}
            {changeWeight.weight}
          </strong>{" "}
          Kg "
        </div>
      )}
      {changeWeight.type === "negative" && (
        <div style={{ textAlign: "center", fontFamily: "Bahnschrift Light" }}>
          " You need to gain
          <strong style={{ fontSize: "19px" }}>
            {" "}
            {changeWeight.weight}
          </strong>{" "}
          Kg "
        </div>
      )}
      {changeWeight.type === "normal" && (
        <div
          style={{
            marginTop: "4px",
            textAlign: "center",
            fontFamily: "Bahnschrift Light",
          }}
        >
          " Your Weight is Normal, Good for You "
        </div>
      )}
    </div>
  );
}

export default BmiScore;

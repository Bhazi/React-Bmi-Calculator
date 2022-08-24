import "./Form.css";
import { useState } from "react";

function Form({ getData }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      console.log("Not a Valid Input");
      setAlert(true);
    } else {
      getData(weight, height);
      setAlert(false);
    }
  };

  return (
    <>
      <div className="BMIForm">
        <p className="NameBMI">BMI Calculator</p>
        <form onSubmit={onSubmit}>
          <label className="Weight">Weight(kg):</label>
          <br />
          <input
            type="text"
            className="weightBox"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="eg : 80"
            required
          />
          <label className="Height">Height(m):</label>
          <br />
          <input
            type="text"
            className="heightBox"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="eg : 1.83"
            required
          />
          <input type="submit" className="submit" Value="Get BMI" required />
        </form>
        {alert && <div className="alert">Please Enter Valid Input</div>}
      </div>
    </>
  );
}

export default Form;

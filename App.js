import Form from "./Components/Form";
import BmiScore from "./Components/BmiScore";
import { useState } from "react";
import BmiList from "./Components/BmiList";

function App() {
  const [show, setShow] = useState(false);
  const [changeWeight, setChangeWeight] = useState({ weight: "", type: "" });
  const [bmi, setBmi] = useState("00");
  const [bmitype, setBmiType] = useState("Not Calculated");
  const [bmiRange, setBmiRange] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });

  const onFormSub = (w, h) => {
    console.log(w, h);
    let b = callBmi(w, h);
    setBmi(b);
    let bType = weightType(b);
    setBmiType(bType);
    const range = {
      underWeight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(40, h) },
    };
    setBmiRange(range);
    setChangeWeight(weightchange(b, w, range));
    setShow(true);
  };

  const callBmi = (w, h) => (w / (h * h)).toFixed(2);

  const calWeight = (b, h) => (b * h * h).toFixed(2);

  const weightchange = (b, w, range) => {
    let changeObj;
    if (b > 24.9) {
      changeObj = {
        weight: (w - range.normal.high).toFixed(2),
        type: "positive",
      };
      return changeObj;
    } else if (b < 18.5) {
      changeObj = {
        weight: (range.normal.low - w).toFixed(2),
        type: "negative",
      };
      return changeObj;
    } else {
      changeObj = { weight: 0, type: "normal" };
      return changeObj;
    }
  };

  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    }
  };

  return (
    <div>
      <Form getData={onFormSub} />
      {show && (
        <div>
          <BmiScore BmiNo={bmi} BmiName={bmitype} changeWeight={changeWeight} />
          <BmiList range={bmiRange} bmi={bmi} />
        </div>
      )}
    </div>
  );
}

export default App;

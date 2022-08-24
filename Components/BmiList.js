import "./BmiList.css";

function BmiList({ range, bmi }) {
  const myStyle = {
    style: {
      border: "4px solid #ff9999",
      backgroundColor: "#ffe1e1",
    },
  };

  return (
    <>
      <table className="Main">
        <thead>
          <tr>
            <th>Type</th>
            <th>BMI</th>
            <th>WEIGHT</th>
          </tr>
        </thead>
        <tbody>
          <tr {...(bmi < 18.5 && { ...myStyle })}>
            <td>Underweight</td>
            <td>&lt; 18.5</td>
            <td>&lt; {range.underWeight.low} Kg </td>
          </tr>

          <tr {...(18.5 < bmi && bmi < 24.9 ? { ...myStyle } : null)}>
            <td>Normal</td>
            <td>18.5-24.9</td>
            <td>
              {range.normal.low} Kg - {range.normal.high} Kg
            </td>
          </tr>

          <tr {...(25 < bmi && bmi < 29.9 && { ...myStyle })}>
            <td>Over Weight</td>
            <td>25-29.9</td>
            <td>
              {range.overWeight.low} Kg - {range.overWeight.high} Kg
            </td>
          </tr>

          <tr {...(30 < bmi && bmi < 34.9 && { ...myStyle })}>
            <td>Obesity Class I</td>
            <td>30-34.9</td>
            <td>
              {range.obesityOne.low} Kg - {range.obesityOne.high} Kg
            </td>
          </tr>

          <tr {...(35 < bmi && bmi < 39.9 && { ...myStyle })}>
            <td>Obesity Class II</td>
            <td>35-39.9</td>
            <td>
              {range.obesityTwo.low} Kg - {range.obesityTwo.high} Kg
            </td>
          </tr>

          <tr {...(bmi > 40 && { ...myStyle })}>
            <td>Obesity Class III</td>
            <td>&gt; 40</td>
            <td>&gt; {range.obesityThree.high} Kg </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default BmiList;

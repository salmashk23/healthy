import React, { useState } from "react";
import { Form,Label,Input,Button} from "reactstrap";
import "./bmi_calc.css";


const BmiCalc = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [bmiClass, setBmiClass] = useState();

  const handleHeightChange = (event) => setHeight(event.target.value);
  const handleWeightChange = (event) => setWeight(event.target.value);

  const computeBmi = () => {
    let bmiValue = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmiValue);
    let bmiClass = getBmi(bmiValue);
    setBmiClass(bmiClass);
    setHeight("")
    setWeight("")
  };

  const getBmi = (bmi) => {

    if (bmi < 18.5) {
      return "Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    }
    if (bmi >= 30) {
      return "Obesity";
    }
    else{
        return "NaN";
    }

  };

  return (
      <div className="justify-content-center bmi-c">
      <Form>
            <Label>Height: </Label>
            <Input
              type="number"
              placeholder="Height in cms"
              value={height}
              onChange={handleHeightChange}
            />
            <Label>Weight: </Label>
            <Input
              type="number"
              placeholder="Weight in Kgs"
              value={weight}
              onChange={handleWeightChange}
            />

        </Form>

      <div className="row">
        <Button className="btn-warning m-4" onClick={computeBmi}>
            Calculate
        </Button>
      </div>
      <div className="text-center">
        <h4 id="result-show">Your BMI : {bmi}</h4>
        <h4 id="bmi-show"> You Have : {bmiClass}</h4>
      </div>
    </div>
  );
};

export default BmiCalc;

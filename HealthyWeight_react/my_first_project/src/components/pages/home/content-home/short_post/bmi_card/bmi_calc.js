import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Input,Label, Button, Col, Row} from "reactstrap";
import "./bmi_calc.css";

class BmiCalc extends React.Component {
  state = {
    result: "",
    height: "",
    weight: "",
    bmi: "",
    checkHealth: ""
  };
  calBmi = () => {
    const { height, weight } = this.state;
    console.log(height);

    const calcBmi = (weight / (height / 100) ** 2).toFixed(2);
    this.setState({
      bmi: calcBmi
    });

    console.log(this.state.bmi);

    let status = "";
    let resultDisplay =
        (this.state.bmi < 18.5)
             ? (status = <p>UnderWeight</p>)
             : (this.state.bmi >= 18.5 && this.state.bmi < 24.9)
                    ? (status = <p>Normal Wieght</p>)
                    : (this.state.bmi >= 25 &&  this.state.bmi < 29.9)
                        ? (status = <p>OverWieght</p>)
                        : (this.state.bmi >= 30 &&  this.state.bmi < 39.9)
                            ? (status = <p>Obesity</p>)
                            :(status = <p>NaN</p>);


    this.setState({
      result: resultDisplay
    });

  };



  clearAll = () => {
    console.log("test");
    this.setState({
      height: "",
      weight: "",
      bmi: "",
      result: ""
    });
  };


  render() {
    return (
      <div className="bmi-c">
        <div className="container justify-content-center">
          {" "}
          <div>
            <div className="field">
              <div className="two fields">
                <div class="field">
                  <Label>Height: </Label>
                  <Input
                    type="number"
                    placeholder="Height in cms"
                    value={this.state.height}
                    onChange={e => this.setState({ height: e.target.value })}
                  />
                </div>
                <br />
                <div className="field">
                  <Label>Weight: </Label>

                  <Input
                    type="number"
                    placeholder="Weight in Kgs"
                    value={this.state.weight}
                    onChange={e => this.setState({ weight: e.target.value })}
                  />
                </div>
              </div>
              <Button
                className="m-3 "
                tabindex="0"
                onClick={this.calBmi}
                color="primary"
                >
                    Check (click twice)
              </Button>
              <Button
                className=" m-3"
                tabindex="1"
                onClick={this.clearAll}
                color="primary"
              >
                    Clear
              </Button>
            </div>
            <p id="bmi-show"> Your BMI Is : {this.state.bmi} </p>
            <p id="result-show"> You Are : {this.state.result} </p>
          </div>
        </div>
      </div>
        );
      }
    }

export default BmiCalc;

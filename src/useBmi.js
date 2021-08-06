import { useState } from "react";
import axios from "axios";
import { bodyWeightStatus } from "./BmiStatus";

const useBmi = (url) => {
  const [isHeight, setHeight] = useState("");
  const [isWeight, setWeight] = useState("");
  const [isBmi, setBmi] = useState("");
  const [isStatus, setStatus] = useState("");

  const calculateBMI = async () => {
    let bmiCal = (isWeight / (isHeight / 100) ** 2).toFixed(2);

    const { data, status } = await axios.post(url, {
      height: isHeight,
      weight: isWeight,
      bmiResult: bmiCal
    });

    setStatus(bodyWeightStatus(bmiCal));

    if (status === 201) {
      return setBmi(data.bmi.bmiResult);
    }
    setHeight("");
    setWeight("");
  };

  return {
    isHeight,
    setHeight,
    isWeight,
    setWeight,
    isBmi,
    setBmi,
    isStatus,
    setStatus,
    calculateBMI
  };
};

export default useBmi;

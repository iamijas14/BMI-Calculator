export const bodyWeightStatus = (bmi) => {
  if (bmi < 18.5) return "under weight";
  else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
  else if (bmi >= 25 && bmi < 29.9) return "Over weight";
  else return "Obese";
};

import "./styles.css";
import { BarChart } from "./component/chart";
import useBmi from "./useBmi";
import Header from "./component/header";
import InputHandler from "./component/inputHandler";
import ButtonHandler from "./component/buttonHandler";
import ShowResult from "./component/showResult";

export default function App() {
  const {
    isHeight,
    setHeight,
    isWeight,
    setWeight,
    isBmi,
    isStatus,
    calculateBMI
  } = useBmi("/api/bmi");

  return (
    <div className="appBody">
      <Header heading={"BMI Calculator"} />
      <InputHandler
        height={isHeight}
        setHeight={setHeight}
        weight={isWeight}
        setWeight={setWeight}
      />
      <ButtonHandler onclick={calculateBMI} />
      {isBmi && (
        <>
          <ShowResult bmi={isBmi} status={isStatus} />
          <BarChart isHeight={isHeight} isWeight={isWeight} />
        </>
      )}
    </div>
  );
}

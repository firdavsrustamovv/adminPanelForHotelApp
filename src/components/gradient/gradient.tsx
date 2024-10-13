import { useState } from "react";
import "./style.css";
type Props = {
  firstColor: number;
  secondColor: number;
  thirdColor: number;
  changeGradient: () => void;
};

const Gradient = ({
  firstColor,
  secondColor,
  thirdColor,
  changeGradient,
}: Props) => {
  const [arr, setArr] = useState<{ color1: string; color2: string }[]>([]);
  const color1 = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
  const color2 = `rgb(${thirdColor}, ${firstColor}, ${secondColor})`;
  const handleChange = () => {
    setArr((prev) => [
      ...prev,
      {
        color1: color1,
        color2: color2,
      },
    ]);
  };

  return (
    <div className="container">
      <div>
        <h1>Gradinets</h1>
        <div
          style={{
            background: `linear-gradient(to right, ${color1}, ${color2})`,
            height: "350px",
            width: "350px",
            borderRadius: "10px",
          }}
        ></div>
        <div className="btn-div">
          <button className="btn" onClick={changeGradient}>
            Next
          </button>
        </div>
        <div className="btn-div">
          <button className="btn" onClick={handleChange}>
            Save
          </button>
        </div>
        <div className="saved-gradients">
          {arr.map((val, idx) => (
            <div
              key={idx}
              style={{
                background: `linear-gradient(to right, ${val.color1}, ${val.color2})`,
                height: "50px",
                width: "50px",
                borderRadius: "10px",
                margin: "10px",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gradient;

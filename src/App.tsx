import { useState } from "react";
import Gradient from "./components/gradient/gradient";

function App() {
  const [gradient1, setGradient1] = useState(Math.floor(Math.random() * 256));
  const [gradient2, setGradient2] = useState(Math.floor(Math.random() * 256));
  const [gradient3, setGradient3] = useState(Math.floor(Math.random() * 256));

  const changeGradient = () => {
    setGradient1(Math.floor(Math.random() * 256));
    setGradient2(Math.floor(Math.random() * 256));
    setGradient3(Math.floor(Math.random() * 256));
  };

  return (
    <div>
      <Gradient
        firstColor={gradient1}
        secondColor={gradient2}
        thirdColor={gradient3}
        changeGradient={changeGradient}
      />
    </div>
  );
}

export default App;

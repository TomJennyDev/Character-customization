import { Fragment, useEffect, useState } from "react";
import "./App.css";
import AvatarComponent from "./components/Avatar/AvatarComponent";
import PartComponent from "./components/PartList/PartComponent";

const totalPart = [
  { partName: "body", value: 17 },
  { partName: "clothes(L1)", value: 5 },
  { partName: "clothes(L2)", value: 5 },
  { partName: "clothes(L3)", value: 9 },
  { partName: "eyes", value: 17 },
  { partName: "mouths", value: 24 },
  { partName: "noses", value: 1 },
  { partName: "eyebrows", value: 15 },
  { partName: "glasses", value: 17 },
  { partName: "hair", value: 73 },
  { partName: "facial_hair", value: 17 },
  { partName: "hats", value: 28 },
  { partName: "earrings", value: 28 },
  { partName: "neckwear", value: 18 },
];

function App() {
  const [arrStyle, setStyle] = useState([]);

  const randomNumber = () => {
    const arrstyleRandom = totalPart.reduce((acc, curr, index, arr) => {
      const activePart = Math.floor(Math.random() * curr.value) + 1;
      acc[index] = { ...arr[index], activePart };
      return acc;
    }, []);
    setStyle(arrstyleRandom);
  };

  const changeStyle = (partName, valueChange) => {
    const indexActive = arrStyle?.findIndex(
      (item) => item.partName === partName
    );
    arrStyle[indexActive] = {
      ...arrStyle[indexActive],
      activePart: valueChange,
    };
    setStyle([...arrStyle]);
  };

  useEffect(() => {
    randomNumber();
  }, []);

  return (
    <div className="container">
      <div className="top-wrapper">
        <h1>CHARACTER</h1>
        <h2>🛠️CUSTOMIZATION🛠️</h2>
        <hr />
      </div>
      <div className="bottom-wrapper">
        <div className="container-avatar">
          <AvatarComponent arrStyle={arrStyle} randomNumber={randomNumber} />
        </div>
        <div className="container-part">
          {arrStyle?.map((part, index) => {
            if (part.partName === "noses") return null;
            return (
              <Fragment key={index}>
                <PartComponent part={part} changeStyle={changeStyle} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

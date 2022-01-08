import { useState } from "react";
import Excuse from "./components/Excuse";
import excuses from "./data/excuses.json";

function App() {
  const [excuse, setExcuse] = useState({
    text: "Presiona el botón para ver una excusa pajua",
    emoji: "clown-face.png",
  });

  const pickrandomExcuse = async () => {
    for (let i = 0; i < 40; i++) {
      const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
      setExcuse(randomExcuse);
      await new Promise(r => setTimeout(r, 50));
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <h2 style={{ fontSize: 40 }}>Excusa-inador</h2>
        </div>
        <div>
          <button
            className="button-50"
            onClick={() => pickrandomExcuse()}
          >
            Cágame la jeta
          </button>
        </div>
        <Excuse text={excuse.text} emoji={excuse.emoji}></Excuse>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import RollDice from "./components/RollDice";
import Joyride from "react-joyride";
const steps = [
  {
    target: ".first-dice",
    content: "user one",
  },
  {
    target: ".two-dice",
    content: "user two",
  },
  {
    target: ".dice-btn",
    content: "oyuna başlamak için tıkla",
  },
];

function App() {
  return (
    <div className="App">
      <Joyride steps={steps} />
      <RollDice />
    </div>
  );
}

export default App;

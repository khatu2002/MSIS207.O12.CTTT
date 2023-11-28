import { useState } from "react";
import Drum from "./DrumKit";


function App() {
  const [sounds, setSounds] = useState([
    {
      name: "a",
      sound: require("./audio/mixkit-achievement-win-drums-555.wav"),
      key: "A",
    },
    {
      name: "s",
      sound: require("./audio/mixkit-bad-joke-drums-2893.wav"),
      key: "S",
    },
    {
      name: "w",
      sound: require("./audio/mixkit-drum-joke-accent-579.wav"),
      key: "W",
    },
    {
      name: "d",
      sound: require("./audio/mixkit-losing-drums-2023.wav"),
      key: "D",
    },
    {
      name: "j",
      sound: require("./audio/tom-1.mp3"),
      key: "J",
    },
    {
      name: "k",
      sound: require("./audio/tom-2.mp3"),
      key: "K",
    },
    {
      name: "l",
      sound: require("./audio/tom-4.mp3"),
      key: "L",
    },
  ]);

  return (
    <div className="App">
      <h1 id='title'>Drum🥁Kit</h1>

      <div className="drums">
        {sounds.map((sound, i) => (
          <Drum key={i} letter={sound.key} sound={sound.sound} className='abc' />
        ))}
      </div>
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";

function Drum(props) {
  const [playing, setPlaying] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter press here! ')
    }
  }
  const play = () => {
    setPlaying(true);

    new Audio(props.sound).play();

    setTimeout(() => {
      setPlaying(false);
    }, 100);
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === props.letter.toLowerCase()) {
        play();
      }
    });
  }, []);

  return (
    <div className={`drum ${playing ? "playing" : ""}`} onClick={play}>
      <div className={`key drum${props.letter}`} onClick={handleKeyPress}>{props.letter}</div>
    </div>
  );
}

export default Drum;
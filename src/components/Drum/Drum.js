import React, { useState } from 'react';
import './Drum.css';

function Drum() {
  const [activeClass, setActiveClass] = useState(false);
  const [text, setText] = useState('');

  const audioDetails = [
    {
      id: 'Q',
      className: 'clip',
      innerText: 'Heater-1',
      keyCode: 81,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      id: 'W',
      className: 'clip',
      innerText: 'Heater-2',
      keyCode: 87,

      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      id: 'E',
      className: 'clip',
      innerText: 'Heater-3',
      keyCode: 69,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      id: 'A',
      className: 'clip',
      innerText: 'Heater-4',
      keyCode: 65,

      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
      id: 'S',
      className: 'clip',
      innerText: 'Clap',
      keyCode: 83,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
      id: 'D',
      className: 'clip',
      innerText: 'Open-HH',
      keyCode: 68,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      id: 'Z',
      className: 'clip',
      innerText: "Kick-n'-Hat",
      keyCode: 90,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      id: 'X',
      className: 'clip',
      innerText: 'Kick',
      keyCode: 88,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      id: 'C',
      className: 'clip',
      innerText: 'Closed-HH',
      keyCode: 67,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
  ];

  const handleClicked = (src, innerText) => {
    setActiveClass(true);
    setText(innerText);
    let audio = new Audio(src);
    audio.play();
  };

  return (
    <div className="display">
      <div className="drum-pad">
        {audioDetails.map((audio, i) => {
          return (
            <button
              onKeyPress={() => handleClicked(audio.src, audio.innerText)}
              onClick={() => handleClicked(audio.src, audio.innerText)}
              key={audio.id}
              className={activeClass ? 'clip--active' : audio.className}
            >
              {audio.id}
            </button>
          );
        })}
      </div>
      <div className="inner-text__display">
        <input type="text" value={text} placeholder="Click the drum-pad!" />
      </div>
    </div>
  );
}

export default Drum;

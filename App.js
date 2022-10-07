import React, { useState } from "react";
import "./styles.css";
const music = {
  SonuNigam: [
    {
      name: "Sandeshe aate hai",
      link: "https://www.youtube.com/watch?v=HfP5ypQzogw"
    },
    {
      name: "har ek friend kamina hota hai ",
      link: "https://www.youtube.com/watch?v=PUF8xsRqKXI"
    }
  ],
  McStan: [
    {
      name: "basti ka hasti",
      link: "https://www.youtube.com/watch?v=l0AvFp0_k14"
    },
    {
      name: "Ek din pyaar",
      link: "https://www.youtube.com/watch?v=gU74mNz64VU"
    }
  ],
  Anilrawat: [
    {
      name: "radhuli",
      link: "https://www.youtube.com/watch?v=HhldWWm-tUs"
    },
    {
      name: "chori lacchima",
      link: "https://www.youtube.com/watch?v=YEhiEZFPEEQ"
    }
  ]
};
export default function App() {
  const [selectedmusic, setmusic] = useState("Anilrawat");
  function songname(song) {
    setmusic(song);
  }
  return (
    <div className="App">
      <h1> 🎵 Music </h1>
      <p style={{ fontSize: "larger" }}>
        Checkout my favorite music. Select your favourite singer.
      </p>

      <div>
        {Object.keys(music).map((song) => (
          <button className="buto" onClick={() => songname(song)}>
            {song}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {music[selectedmusic].map((mp) => (
            <li key={mp.name}>
              {" "}
              <div className="dob">
                {" "}
                {mp.name}
                <div style={{ fontSize: "larger" }}>
                  <a href={mp.link}>Play!</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

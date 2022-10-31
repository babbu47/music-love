import React, { useState } from "react";
import "./styles.css";
const music = {
  SonuNigam: [
    {
      name: "Sandeshe aate hai",
      link: "https://www.youtube.com/watch?v=HfP5ypQzogw",
      Rating: "4/5"
    },
    {
      name: "har ek friend kamina hota hai ",
      link: "https://www.youtube.com/watch?v=PUF8xsRqKXI",
      Rating: "3/5"
    },
    {
      name: "Tumse milke dil ka hai jo hall ",
      link: "https://www.youtube.com/watch?v=mXkbWKr5ovU",
      Rating: "4/5"
    }
  ],
  McStan: [
    {
      name: "Basti ka hasti",
      link: "https://www.youtube.com/watch?v=l0AvFp0_k14",
      Rating: "2/5"
    },
    {
      name: "Ek din pyaar",
      link: "https://www.youtube.com/watch?v=gU74mNz64VU",
      Rating: "1/5"
    },
    {
      name: "Insaaniyat",
      link: "https://www.youtube.com/watch?v=mucFkckNjWE",
      Rating: "5/5"
    }
  ],
  Anilrawat: [
    {
      name: "Radhuli",
      link: "https://www.youtube.com/watch?v=HhldWWm-tUs",
      Rating: "3/5"
    },
    {
      name: "Chori Lacchima",
      link: "https://www.youtube.com/watch?v=YEhiEZFPEEQ",
      Rating: "2/5"
    },
    {
      name: "Haath Do Beera",
      link: "https://www.youtube.com/watch?v=Q4t32sR5umk",
      Rating: "4/5"
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
                <div style={{ fontSize: "larger" }}>Score is {mp.Rating}</div>
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

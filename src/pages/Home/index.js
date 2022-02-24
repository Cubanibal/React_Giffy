import React from "react";
import { Link, useLocation } from "wouter";
import { useState } from "react";

const POPULAR_GIFS = ["Matrix", "Baile", "Musica", "Cuba"];
export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={keyword} />
      </form>
      <h3>Los Gifs más populares</h3>

      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}> Gifs de {popularGif} </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

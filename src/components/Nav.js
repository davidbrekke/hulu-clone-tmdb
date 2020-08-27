import React from "react";
import "./Nav.css";
import requests from "../requests";

function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>
        trending
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>
        top rated
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>
        action
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
        comedy
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
        horror
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
        romance
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchMystery)}>mystery</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchSciFi)}>sci-fi</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchWestern)}>western</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>
        animation
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTV)}>movie</h2>
    </div>
  );
}

export default Nav;

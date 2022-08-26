import React from "react";
import "./style.scss";

function Player() {
  return (
    <main className="wrapper">
      <div className="transparent-box player">
        <h1> Now Playing </h1>
      </div>
      <div className="transparent-box playlists">
        <h1> Playlists </h1>
      </div>
      <div className="transparent-box music-list">
        <h1> Music List </h1>
      </div>
    </main>
  );
}

export default Player;

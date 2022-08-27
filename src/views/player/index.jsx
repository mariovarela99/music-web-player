import React, { useState } from "react";
import "./style.scss";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { GrPlayFill } from "react-icons/gr";
import { FaInfoCircle } from "react-icons/fa";
import { RiPlayList2Fill } from "react-icons/ri";
import { BsMusicNoteList } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";

function Player() {
  const [soundValue, setSoundValue] = useState(30);
  const [musicProgress, setMusicProgress] = useState(0);

  const handleChangeSoundValue = (e) => setSoundValue(e.target.value);
  const handleChangeMusicProgress = (e) => setMusicProgress(e.target.value);

  return (
    <main className="wrapper">
      <div className="transparent-box player">
        <div className="song-wrapper">
          <div className="song-cover-container">
            <img src="../../assets/song-cover.png" alt="Song Cover" />
          </div>

          <div className="song-options">
            <input
              type="range"
              id="song-duration"
              value={musicProgress}
              onChange={handleChangeMusicProgress}
              className="input-range"
            />

            <div className="main-buttons">
              <strong>00:40</strong>
              <div>
                <button type="button">
                  <BiSkipPrevious color="#2e2a3d" size={16} />
                </button>
                <button type="button">
                  <GrPlayFill color="#2e2a3d" size={14} />
                </button>
                <button type="button">
                  <BiSkipNext color="#2e2a3d" size={16} />
                </button>
              </div>
              <strong>03:40</strong>
            </div>
          </div>
        </div>
        <div className="other-options">
          <button type="button">
            <FaInfoCircle color="#ffffff" size={18} />
          </button>
          <button type="button">
            <RiPlayList2Fill color="#ffffff" size={18} />
          </button>
          <button type="button">
            <BsMusicNoteList color="#ffffff" size={18} />
          </button>
          <button type="button">
            <AiOutlineHeart color="#ffffff" size={18} />
          </button>
          <button type="button">
            <GiSoundOn color="#ffffff" size={18} />
          </button>
          <input
            type="range"
            id="sound-volume"
            className="input-range"
            min="0"
            max="100"
            step="1"
            value={soundValue}
            defaultValue="30"
            onChange={handleChangeSoundValue}
          />
          <button type="button">
            <GiSoundOff color="#ffffff" size={18} />
          </button>
        </div>
      </div>

      <div className="transparent-box playlists">
        <h1> Playlists </h1>
      </div>

      <div className="transparent-box music-list">
        <div className="list-info">
          <div className="image-info">
            <img src="../../assets/playlist-cover.png" alt="PlayList Cover" />
          </div>
          <div className="text-info">
            <strong>PLAYLIST</strong>
            <h2> XXXTentation Best Songs </h2>
            <div>
              <p> Mário Varela</p> <span className="point" /> <p>50 songs </p>
            </div>
          </div>
        </div>
        <table className="list-of-musics">
          <thead>
            <tr>
              <caption>#</caption>
              <caption>TITLE</caption>
              <caption>ARTIST</caption>
              <caption>DURATION</caption>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Player;

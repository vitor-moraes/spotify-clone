// Imports
import React, { useState } from "react";
import "./styles.css";
import { ReactComponent as PlayIcon } from "../../svgs/PlayIcon.svg";
// import PlayListCard from "../PlayListCard";

// Exports
const PlaylistsRow = () => {
  // States
  const [showPlay, setShowPlay] = useState(null);

  //Simulanting a databank
  const dataCaterories = [
    {
      id: 1,
      name: "Tocadas Recentemente",
    },
    // {
    //   id: 2,
    //   name: "Seus podcasts mais escutados",
    // },
    // {
    //   id: 3,
    //   name: "Paradas",
    // },
    // {
    //   id: 4,
    //   name: "Para cantar junto",
    // },
  ];

  return (
    <div>
      {dataCaterories.map((category) => {
        return (
          <div className="row">
            <h3 className="text-left col-9" style={{ padding: 10 }}>
              {category.name}
            </h3>
            <p className="text-right col-3" style={{ padding: 30 }}>
              ver tudo
            </p>
            <div className="row music-row" style={{ padding: 10 }}>
              {/* Playlist One */}
              <div classname="music-col col-2">
                {/* --------------- Pass this cards to a component -------------------- */}
                <div
                  className="music-card show card"
                  id="card-1"
                  onMouseEnter={() => setShowPlay("play-1")}
                  onMouseLeave={() => setShowPlay(null)}
                >
                  <div className="card-image">
                    <img
                      className="image"
                      src="https://wallpaperplay.com/walls/full/1/e/1/284743.jpg"
                      alt="pic 1"
                    ></img>
                  </div>
                  <div className="card-content text-left">
                    Musicas Favoritas
                  </div>
                  <div className="card-content-sub text-left">
                    <p>Usuário</p>
                  </div>
                  {/* The PlayIcon */}
                  {showPlay === "play-1" && (
                    <span className="play-icon" id="play-1">
                      <PlayIcon />
                    </span>
                  )}
                </div>
                {/* ------------------------------------------------------------------- */}
              </div>
              {/* Playlist two */}
              <div classname="music-col col-2">
                {/* --------------- Pass this cards to a component -------------------- */}
                <div
                  className="music-card card"
                  id="card-2"
                  onMouseEnter={() => setShowPlay("play-2")}
                  onMouseLeave={() => setShowPlay(null)}
                >
                  <div className="card-image">
                    <img
                      className="image"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQesdaQQoqxHNWBwGMmRE9KPaB0UbOtNRe9Nw&usqp=CAU"
                      alt="pic 1"
                    ></img>
                  </div>
                  <div className="card-content text-left">Acústica</div>
                  <div className="card-content-sub text-left">
                    <p>Primo</p>
                  </div>
                  {/* The PlayIcon */}
                  {showPlay === "play-2" && (
                    <span className="play-icon" id="play-2">
                      <PlayIcon />
                    </span>
                  )}
                </div>
                {/* ------------------------------------------------------------------- */}
              </div>
              {/* Playlist three */}
              <div classname="music-col col-2">
                {/* --------------- Pass this cards to a component -------------------- */}
                <div
                  className="music-card card"
                  id="card-3"
                  onMouseEnter={() => setShowPlay("play-3")}
                  onMouseLeave={() => setShowPlay(null)}
                >
                  <div className="card-image">
                    <img
                      className="image"
                      src="https://mymodernmet.com/wp/wp-content/uploads/archive/PzCXG-YMrs2butbRX0iu_1082132503.jpeg"
                      alt="pic 1"
                    ></img>
                  </div>
                  <div className="card-content text-left">Relaxando</div>
                  <div className="card-content-sub text-left">
                    <p>Alerson Vieira</p>
                  </div>
                  {/* The PlayIcon */}
                  {showPlay === "play-3" && (
                    <span className="play-icon" id="play-3">
                      <PlayIcon />
                    </span>
                  )}
                </div>
                {/* ------------------------------------------------------------------- */}
              </div>
              {/* Playlist four */}
              <div classname="music-col col-2">
                {/* --------------- Pass this cards to a component -------------------- */}
                <div
                  className="music-card card"
                  id="card-3"
                  onMouseEnter={() => setShowPlay("play-4")}
                  onMouseLeave={() => setShowPlay(null)}
                >
                  <div className="card-image">
                    <img
                      className="image"
                      src="https://wallpaperstock.net/island-green-ocean_wallpapers_38269_2560x1600.jpg"
                      alt="pic 1"
                    ></img>
                  </div>
                  <div className="card-content text-left">Conexão</div>
                  <div className="card-content-sub text-left">
                    <p>Magda Campos</p>
                  </div>
                  {/* The PlayIcon */}
                  {showPlay === "play-4" && (
                    <span className="play-icon" id="play-4">
                      <PlayIcon />
                    </span>
                  )}
                </div>
                {/* ------------------------------------------------------------------- */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlaylistsRow;

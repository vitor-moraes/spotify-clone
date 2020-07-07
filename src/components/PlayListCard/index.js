// Component to pass the music-cards that are on tlhe PlayListRow

//Imports
import React, { useState } from "react";
import "./styles.css";
import { ReactComponent as PlayIcon } from "../../svgs/PlayIcon.svg";

// Exports
const PlayListCard = (props) => {
  // States
  const [showPlay, setShowPlay] = useState(null);

  //Simulating a databank
  const dataPlayLists = [
    {
      id: 101,
      category_id: 1,
      name: "Musicas Favoritas",
      img: "https://wallpaperplay.com/walls/full/1/e/1/284743.jpg",
      desc: "Sua criação",
    },
    {
      id: 102,
      category_id: 1,
      name: "Acústica",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQesdaQQoqxHNWBwGMmRE9KPaB0UbOtNRe9Nw&usqp=CAU",
      desc: "Joye Singer",
    },
    {
      id: 103,
      category_id: 1,
      name: "Relaxando",
      img:
        "https://mymodernmet.com/wp/wp-content/uploads/archive/PzCXG-YMrs2butbRX0iu_1082132503.jpeg",
      desc: "Alberto Campos",
    },
    {
      id: 104,
      category_id: 1,
      name: "Conexão",
      img:
        "https://wallpaperstock.net/island-green-ocean_wallpapers_38269_2560x1600.jpg",
      desc: "Alê Oyura",
    },

    {
      id: 111,
      category_id: 2,
      name: "Musicas Favoritas",
      img: "https://wallpaperplay.com/walls/full/1/e/1/284743.jpg",
      desc: "Sua criação",
    },

    {
      id: 112,
      category_id: 2,
      name: "Acústica",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQesdaQQoqxHNWBwGMmRE9KPaB0UbOtNRe9Nw&usqp=CAU",
      desc: "Joye Singer",
    },

    {
      id: 113,
      category_id: 3,
      name: "Relaxando",
      img:
        "https://mymodernmet.com/wp/wp-content/uploads/archive/PzCXG-YMrs2butbRX0iu_1082132503.jpeg",
      desc: "Alberto Campos",
    },

    {
      id: 114,
      category_id: 3,
      name: "Conexão",
      img:
        "https://wallpaperstock.net/island-green-ocean_wallpapers_38269_2560x1600.jpg",
      desc: "Alê Oyura",
    },
  ];

  // Use the databank created in this coponente to plot the playlists that have the same ID
  // present in the PlayListsRow databank ID
  const matchedPlaylists = dataPlayLists.filter(
    (playlist) => playlist.category_id === props.category_id
  );

  return (
    <>
      {matchedPlaylists.map((playlist, id) => {
        return (
          <div classname="playlist-col col-2">
            <div
              className="playlist-card show card"
              key={id}
              onMouseEnter={() => setShowPlay(id)}
              onMouseLeave={() => setShowPlay(null)}
            >
              <div className="card-image">
                <img className="image" src={playlist.img} alt="pic 1"></img>
              </div>
              <div className="card-content text-left">{playlist.name}</div>
              <div className="card-content-sub text-left">
                <p>{playlist.desc}</p>
              </div>
              {/* The PlayIcon */}
              {showPlay === id && (
                <span className="play-icon" id={id}>
                  <PlayIcon />
                </span>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PlayListCard;

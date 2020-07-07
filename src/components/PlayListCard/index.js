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
      category_id: 3,
      name: "Musicas Favoritas",
      img: "https://wallpaperplay.com/walls/full/1/e/1/284743.jpg",
      // desc: "O que é isso?",
    },
    {
      id: 102,
      category_id: 3,
      name: "Acústica",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQesdaQQoqxHNWBwGMmRE9KPaB0UbOtNRe9Nw&usqp=CAU",
      // desc: "O que é isso?",
    },
    {
      id: 103,
      category_id: 3,
      name: "Relaxando",
      img: "https://mymodernmet.com/wp/wp-content/uploads/archive/PzCXG-YMrs2butbRX0iu_1082132503.jpeg",
      // desc: "O que é isso?",
    },
    {
      id: 104,
      category_id: 3,
      name: "Conexão",
      img: "https://wallpaperstock.net/island-green-ocean_wallpapers_38269_2560x1600.jpg",
      // desc: "O que é isso?",
    },
  ]

  // 
  const matchedPlaylists = dataPlayLists.filter(
    (playlist) => playlist.category_id === props.category_id
  )

  return (
    <>
    {/* Here have just one music-card that need to be changed to "play-list-card" */}
    {matchedPlaylists.map((playlist, id) => (
      <div
                  className="music-card show card"
                  id="card-1"
                  key={playlist.id}
                  onMouseEnter={() => setShowPlay("play-1")}
                  onMouseLeave={() => setShowPlay(null)}
                >
                  <div className="card-image">
                    <img
                      className="image"
                      src={playlist.img}
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
                ))}
    </>
  );
}

export default function PlayListCard;
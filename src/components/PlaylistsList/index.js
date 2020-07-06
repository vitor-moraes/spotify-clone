// Imports
import React, { useEffect } from "react";
import $ from "jquery";
import "./styles.css";
import { ReactComponent as PlayIcon } from "../../svgs/PlayIcon.svg";

// Exports
const PlaylistsList = () => {
  const dataCaterories = [
    {
      id: 1,
      name: "Category 1",
    },
    {
      id: 2,
      name: "Category 2",
    },
    {
      id: 3,
      name: "Category 3",
    },
    {
      id: 4,
      name: "Category 4",
    },
  ];

  useEffect(() => {
    $(document).ready(function () {
      $(".music-card").mouseover(function () {
        console.log("ok");
        $(".play-icon").attr("style", "display: 'block !important'");
      });
    });
  }, []);

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
                <div className="music-card show card">
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
                  {/* The PlayIcon is not appearing */}
                  <span className="play-icon">
                    <PlayIcon />
                  </span>
                </div>
              </div>
              {/* Playlist two */}
              <div classname="music-col col-2">
                <div className="music-card card">
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
                </div>
              </div>
              {/* Playlist three */}
              <div classname="music-col col-2">
                <div className="music-card card">
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
                </div>
              </div>
              {/* Playlist four */}
              <div classname="music-col col-2">
                <div className="music-card card">
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
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlaylistsList;

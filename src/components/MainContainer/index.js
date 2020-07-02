import React from "react";
import "./styles.css";

export default function MainContainer() {
  return (
    <>
      <div
        className="main-box container text-light text-center col-12"
        style={{ padding: 10 }}
      >
        <h3 className="text-left" style={{ padding: 10 }}>
          Tocado Recentemente
        </h3>
        <div className="row music-row" style={{ padding: 10 }}>
          {/* Playlist One */}
          <div classname="music-col col-2">
            <div className="music-card card">
              <div className="card-image">
                <img
                  className="image"
                  src="https://wallpaperplay.com/walls/full/1/e/1/284743.jpg"
                  alt="pic 1"
                ></img>
              </div>
              <div className="card-content text-left">Musicas Favoritas</div>
              <div className="card-content-sub text-left">
                <p>Usuário</p>
              </div>
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
    </>
  );
}

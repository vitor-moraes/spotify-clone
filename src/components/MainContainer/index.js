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
        <div className="row music-row">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

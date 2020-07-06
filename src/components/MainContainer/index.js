import React from "react";
import "./styles.css";
import PlaylistsList from "../../components/PlaylistsList";

export default function MainContainer() {
  return (
    <>
      <div
        className="main-box container text-light text-center col-12"
        style={{ padding: 10 }}
      >
        <div className="main-content">
          <PlaylistsList />
        </div>
      </div>
    </>
  );
}

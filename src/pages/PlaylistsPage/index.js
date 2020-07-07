//
import React from "react";
import "./styles.css";

// Allows use the id to show wach individual playlist page as clicked by the user
import { useParams } from "react-router-dom";

//
const PlaylistsPage = () => {
  //
  let { id } = useParams();

  //
  return (
    <>
      <div>
        <span> This is a individual playlist n° {id} </span>
      </div>
    </>
  );
};

export default PlaylistsPage;

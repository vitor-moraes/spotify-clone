// Imports
import React from "react";
import "./styles.css";
import PlayListCard from "../PlayListCard";

// Exports
const PlaylistsRow = () => {
  //Simulanting a databank
  const dataCaterories = [
    {
      id: 1,
      name: "Tocadas Recentemente",
    },
    {
      id: 2,
      name: "Seus podcasts mais escutados",
    },
    {
      id: 3,
      name: "Paradas",
    },
    // {
    //   id: 4,
    //   name: "Para cantar junto",
    // },
  ];

  return (
    <div>
      {dataCaterories.map((category, id) => {
        return (
          <div className="row" key={id}>
            <h3 className="text-left col-9" style={{ padding: 10 }}>
              {category.name}
            </h3>
            <p className="text-right col-3" style={{ padding: 30 }}>
              ver tudo
            </p>
            <div className="row music-row" style={{ padding: 10 }}>
              {/* Playlist One */}
              <PlayListCard category_id={category.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlaylistsRow;

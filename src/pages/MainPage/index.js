import React from "react";
import SideBar from "../../components/SideBar";
import MusicController from "../../components/MusicController";
import TopBar from "../../components/TopBar";
import PlaylistsRow from "../../components/PlaylistsRow";
import "./styles.css";

import { Switch, Route } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <div>
        <div className="main-app-box">
          <div className="row h-100">
            <div className="col-3 col-lg-2 side-bar-box">
              <SideBar />
            </div>
            <div className="col-9 col-lg-10 other-box">
              <TopBar />
              {/* Main container */}
              <div className="padding-to-main">
                <div
                  className="main-box container text-light text-center col-12"
                  style={{ padding: 10 }}
                >
                  <div className="main-content">
                    <Switch>
                      <Route to="/" exact component={PlaylistsRow}></Route>
                    </Switch>
                    {/* <PlaylistsRow /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="music-controller">
            <MusicController />
          </div>
        </div>
      </div>
    </>
  );
}

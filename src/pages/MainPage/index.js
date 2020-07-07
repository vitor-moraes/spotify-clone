// Imports
import React from "react";
import "./styles.css";

// Components
import SideBar from "../../components/SideBar";
import MusicController from "../../components/MusicController";
import TopBar from "../../components/TopBar";
import HomePage from "../HomePage";
import SearchPage from "../SearchPage";
import YourLibraryPage from "../YourLibraryPage";
import PlaylistsPage from "../PlaylistsPage";

// Routes
import { Switch, Route } from "react-router-dom";

// Exports
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
                      <Route path="/" exact component={HomePage}></Route>
                      <Route path="/search" component={SearchPage}></Route>
                      <Route
                        path="/your-library"
                        component={YourLibraryPage}
                      ></Route>
                      <Route
                        path="/playlist/:id"
                        component={PlaylistsPage}
                      ></Route>
                    </Switch>
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

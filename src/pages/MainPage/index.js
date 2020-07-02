import React from "react";
import SideBar from "../../components/SideBar";
import MusicController from "../../components/MusicController";
import MainContainer from "../../components/MainContainer";
import TopBar from "../../components/TopBar";
import "./styles.css";

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
              {/* Arrumar esse padding que não deveria estar aqui, tem muitos paddings já no MainContainer */}
              <div style={{ padding: 20 }}>
                <MainContainer />
              </div>
            </div>
          </div>
          <MusicController />
        </div>
      </div>
    </>
  );
}

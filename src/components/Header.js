import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Header() {
  return (
    <div className="header">
      <div className="header-icons">
        <div className="header-icon header-icon--active">
          <HomeIcon />
          <p>home</p>
        </div>
        <div className="header-icon">
          <FlashOnIcon />
          <p>trending</p>
        </div>
        <div className="header-icon">
          <LiveTvIcon />
          <p>verified</p>
        </div>
        <div className="header-icon">
          <VideoLibraryIcon />
          <p>collections</p>
        </div>
        <div className="header-icon">
          <SearchIcon />
          <p>search</p>
        </div>
        <div className="header-icon">
          <PersonOutlineIcon />
          <p>account</p>
        </div>
      </div>
      <div className="header-logo">
        <h1>hulu</h1>
      </div>
    </div>
  );
}

export default Header;

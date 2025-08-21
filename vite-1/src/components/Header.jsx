import React from "react";
import "../styles/Header.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClockIcon from "../assets/svg/clockicon.svg";

const Header = ({
  breadcrumb,
  title,
  onBackClick,
  onClockClick,
  showBackArrow = true,
  showClockIcon = true,
}) => {
  return (
    <div className="header-section">
      {breadcrumb && (
        <div
          className="breadcrumb"
          onClick={() => onBackClick && onBackClick()}
        >
          {breadcrumb}
        </div>
      )}

      <div className="main-header">
        {showBackArrow && (
          <div className="back-arrow" onClick={onBackClick}>
            <ArrowBackIcon />
          </div>
        )}
        <h1 className="page-title">{title}</h1>
        {showClockIcon && (
          <div className="clock-icon" onClick={onClockClick}>
            <img src={ClockIcon} alt="Clock" width="24" height="24" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

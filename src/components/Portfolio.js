import kohSamui from "../images/koh-samui.png";
import wildFireTracker from "../images/wildfire-tracker.png";
import realEstate from "../images/real-estate.png";
// FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  /******************************** Koh Samui *******************************************/
  const openPopupboxKohSamui = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={kohSamui}
          alt="Koh Samui Website Project"
        />
        <p className="protfolio-text">
          Koh Samui, Thailand website showcasing HTML, CSS, and SASS.
        </p>
        <b>Demo: </b>
        <a
          className="hyper-link"
          href="https://koh-samui.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          https://koh-samui.netlify.app/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          href="https://github.com/GarrettGoodenough/Koh-Samui-Website"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/GarrettGoodenough/Koh-Samui-Website
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigKohSamui = {
    titleBar: {
      enable: true,
      text: "Koh Samui Website Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  /******************************** Real-Estate *******************************************/
  const openPopupboxRealEstate = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={realEstate}
          alt="Real-Estate Project"
        />
        <p>
          Real Estate project showcaseing my understanding of React, React
          Router, and various animations.
        </p>
        <b>Demo: </b>
        <a
          className="hyper-link"
          href="https://guarded-chamber-32196.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          https://guarded-chamber-32196.herokuapp.com/
        </a>
        <br />
        <b>GitHub: </b>
        <a
          className="hyper-link"
          href="https://github.com/GarrettGoodenough/goodenough-real-estate"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/GarrettGoodenough/goodenough-real-estate
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigRealEstate = {
    titleBar: {
      enable: true,
      text: "Real-Estate Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  /******************************** Wildfire Tracker *******************************************/
  const openPopupboxWildfire = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={wildFireTracker}
          alt="Wildfire Tracker Project"
        />
        <p>
          Application demonstarting my knowledge of using React to make API
          requests.
        </p>
        <b>Demo: </b>
        <a
          className="hyper-link"
          href="https://serene-stream-07774.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          https://serene-stream-07774.herokuapp.com/
        </a>
        <br />
        <b>GitHub: </b>
        <a
          className="hyper-link"
          href="https://github.com/GarrettGoodenough/wildfire-tracker-project"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/GarrettGoodenough/wildfire-tracker-project
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigWildfireTracker = {
    titleBar: {
      enable: true,
      text: "Wildfire Tracker Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxKohSamui}>
            <img
              className="portfolio-img"
              src={kohSamui}
              alt="Koh Samui Website"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <p className="portfolio-description">CSS & SASS</p>
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxRealEstate}>
            <img
              className="portfolio-img"
              src={realEstate}
              alt="Real Estate Website"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <p className="portfolio-description">React & React Router</p>
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxWildfire}>
            <img
              className="portfolio-img"
              src={wildFireTracker}
              alt="Wildfire Tracker Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <p className="portfolio-description">API Fetch Requests</p>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigKohSamui} />
      <PopupboxContainer {...popupboxConfigRealEstate} />
      <PopupboxContainer {...popupboxConfigWildfireTracker} />
    </div>
  );
};

export default Portfolio;

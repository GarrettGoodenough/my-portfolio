import kohSamui from '../images/koh-samui.png';
import wildFireTracker from '../images/wildfire-tracker.png';
// FONT AWESOME IMPORT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

    // KOH SAMUI
    const openPopupboxKohSamui = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={kohSamui} alt="Koh Samui Website Project"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, esse.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/GarrettGoodenough/Koh-Samui-Website")}>https://github.com/GarrettGoodenough/Koh-Samui-Website</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigKohSamui = {
        titleBar: {
            enable: true,
            text: "Koh Samui Website Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Wildfire Tracker
    const openPopupboxWildfire = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={wildFireTracker} alt="Wildfire Tracker Project"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, esse.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/GarrettGoodenough/wildfire-tracker-project")}>https://github.com/GarrettGoodenough/wildfire-tracker-project</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigWildfireTracker = {
        titleBar: {
            enable: true,
            text: "Wildfire Tracker Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxKohSamui}>
                        <img className="portfolio-img" src={kohSamui} alt="Koh Samui Website"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxWildfire}>
                        <img className="portfolio-img" src={wildFireTracker} alt="Wildfire Tracker Project"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigKohSamui} />
            <PopupboxContainer {...popupboxConfigWildfireTracker} />
        </div>
    )
}

export default Portfolio

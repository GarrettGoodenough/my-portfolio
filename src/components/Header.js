import Typed from "react-typed";
import "../App.css";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>web development and website promotions</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "React Programmer",
            "Front End Specialist",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="/" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;

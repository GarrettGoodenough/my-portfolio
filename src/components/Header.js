import Typed from "react-typed";
import "../App.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Software Programmer and Web Developer</h1>
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
        <Link
          smooth={true}
          to="contact"
          offset={-87}
          className="btn-main-offer"
          href="#"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Header;

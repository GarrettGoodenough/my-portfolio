import author from "../images/about-me-min.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile_img" src={author} alt="Me!" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            My name is Garrett Goodenough. I have a passion for programming and
            developing tools. I'm hungry for knowledge and new experiences. I
            have experience in HTML, SASS, Javascript, GSAP, jQuery, Bootstrap,
            node.js, React and much more! Please reach out for any web
            development needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

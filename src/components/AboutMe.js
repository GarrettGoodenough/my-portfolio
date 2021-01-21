import author from '../images/about-me.jpg';

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
                <img className="profile_img" src={author} alt="Me!"/>
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">About Me</h1>
              <p>I have a passion for programming and developing tools. I'm hungry for knowledge and new experiences. I have experience in HTML, CSS, Javascript, GSAP, jQuery, Bootstrap, node.js, and React. If you want beautiful websites to stun your customers, I'm your programmer.</p>
          </div>
      </div>
    </div>
  )
};

export default AboutMe;

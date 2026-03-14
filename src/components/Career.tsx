import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Starting coding journey</h4>
                <h5>Python, HTML, JavaScript</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Began learning programming in 2025 with Python as my first language. Quickly expanded into web development technologies including HTML and JavaScript to build full stack websites.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Runner Up</h4>
                <h5>Avishkar & Mumbai Hacks</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Secured runner-up positions at both Avishkar (Mumbai University hackathon) and Mumbai Hacks 2025. Participated in SIH (Smart India Hackathon) 2025-26.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Studying Advanced Technologies</h4>
                <h5>IoT, Cybersecurity & Blockchain</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently studying Internet of Things (IoT), Cybersecurity, and Blockchain technology. Built approx 4-5 websites, including my biggest project, Heritage X.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

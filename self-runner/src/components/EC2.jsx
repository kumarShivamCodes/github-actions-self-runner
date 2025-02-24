import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css"; // Corrected the CSS file path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function EC2() {
  return (
    <div className="App">
      <header className="bg-primary text-white text-center py-5">
        <h1>Self Hosted Runner using EC2</h1>
        <p className="lead">Efficient and Scalable CI/CD with GitHub Actions</p>
      </header>

      <main className="container my-5">
        <section className="about-section my-5">
          <div className="responsive-container-block big-container">
            <div className="blueBG"></div>
            <div className="responsive-container-block container">
              <div className="form-box">
                <div className="container-block form-wrapper">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <img src={require("../styles/ec2.png")} alt="EC2 Runner" className="img-fluid rounded shadow-sm styled-image" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                      <h2 className="about-header">About Us</h2>
                      <p className="lead">This is a self-hosted runner using EC2, providing a scalable and efficient solution for continuous integration and continuous deployment with GitHub Actions.</p>
                      <a href="#contact" className="btn btn-primary mt-3">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact_us_2 my-5" id="contact">
          <div className="responsive-container-block big-container">
            <div className="blueBG"></div>
            <div className="responsive-container-block container">
              <div className="form-box">
                <div className="container-block form-wrapper">
                  <p className="text-blk contactus-head">Contact Us</p>
                  <div className="responsive-container-block">
                    <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                      <p className="text-blk input-title">
                        <FontAwesomeIcon icon={faUser} className="mr-2" /> Shivam Kumar
                      </p>
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" /> 9973675298
                      </p>
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> rajput.shivamhere@gmail.com
                      </p>
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p className="text-blk input-title">
                        <FontAwesomeIcon icon={faGithub} className="mr-1" /> <a href="https://github.com/kumarShivamCodes"> GitHub</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2025 Shivam Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default EC2;

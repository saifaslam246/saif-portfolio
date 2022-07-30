import React from "react";
import "./Project.css";
import report from "./img/anylatic-report.PNG";
import bussiness from "./img/bussiness.PNG";
import crowndensity from "./img/crownn-density.PNG";
import psotcode from "./img/psotcode.PNG";
import fitness from "./img/fitness.PNG";
import marriage from "./img/marriage.PNG";
function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          You can visit all these websities Easily,
        </p>
        <p className="heading p__color">
          by just click on the View Details Button
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={report}
                    alt="anylytic-report"
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                {/* <h4 className="project__text">
                  Reach your leads & get replies
                </h4> */}
                <a
                  href="https://instantly.ai/"
                  className="project__btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={bussiness}
                    alt="bussiness"
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                {/* <h4 className="project__text">Landing page for an Agency</h4> */}
                <a
                  href="https://www.elegantthemes.com/layouts/business/agency-landing-page/live-demo"
                  target="_blank"
                  className="project__btn"
                  rel="noopener noreferrer"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={crowndensity}
                    alt="crown-density"
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                {/* <h4 className="project__text move">
                  Providing You The Best and Affordable Dentistry.
                </h4> */}
                <a
                  href="http://crowin-dentistry.herokuapp.com/"
                  target="_blank"
                  className="project__btn"
                  rel="noopener noreferrer"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={psotcode} alt="psotcode" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                {/* <h4 className="project__text">
                  This is for an Individual Organization
                </h4> */}
                <a
                  href="https://postcode-user.herokuapp.com/"
                  className="project__btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={marriage} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                {/* <h4 className="project__text move">
                  The world's largest therapy service 100% online.
                </h4> */}

                <a
                  href="https://www.betterhelp.com/"
                  target="_blank"
                  className="project__btn"
                  rel="noopener noreferrer"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={fitness}
                    alt="fitness-center"
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                {/* <h4 className="project__text">Group fitness Schedule</h4> */}
                <a
                  href="http://northridgefitness.net/"
                  target="_blank"
                  className="project__btn"
                  rel="noopener noreferrer"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

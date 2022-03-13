import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hi, I'm SAIF, full-stack developer with Two years of commercial
                web development experience, both in front and back-end.
              </p>
              <p className="about__text p__color">
                Also, I'm a co-founder of web studio Stubbs.{" "}
              </p>
              <p className="about__text p__color">
                I started my career as a junior front-end developer in one of
                the top national IT company Atech. After several years of work
                as web developer, got a position of team lead with five
                developers in a team. We'd been working on several projects with
                high attendance - mobile operator, banking, portal for real
                estate renting. And many other different and sophisticated
                projects.
              </p>
              <p className="about__text p__color">
                Besides, I have a team of strong web developers, designer,
                business analyst, project and QA. If it's necessary, we can
                cover all stages, from research, design and prototype, to
                development and final testing. Our key tasks in each project:
              </p>
              <p className="about__text p__color">
                - Develop well thought out site architecture that easy to scale
              </p>
              <p className="about__text p__color">
                - Make site fast, seo-friendly and easy to manage the content
              </p>
              <p className="about__text p__color">
                - Create design that is memorable, bright and comfortable to use
                for Customer.
              </p>

              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;

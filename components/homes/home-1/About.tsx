import HoverCursorEffect from "@/components/animation/HoverCursorEffect";
import RevealText from "@/components/animation/RevealText";
import { getImagePath } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="inner inner-grid-bottom about">
      <div className="inner__wrapper">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Inner Section Name Start */}
            <div className="col-12 col-xl-2">
              <div className="inner__name">
                {/* Content Block - Section Name Start */}
                <div className="content__block name-block">
                  <span className="section-name icon-right animate-in-up">
                    <span className="section-name-caption">About me</span>
                    <i className="ph ph-arrow-down-right" />
                  </span>
                </div>
                {/* Content Block - Section Name Start */}
              </div>
            </div>
            {/* Inner Section Name End */}
            {/* Inner Section Content Start */}
            <div className="col-12 col-xl-8">
              <div className="inner__content">
                {/* Content Block - H2 Section Title Start */}
                <div className="content__block section-grid-title">
                  <div className="block__descr">
                    <RevealText as="h2" className=" animate-in-up">
                      Take a look at
                      <br />
                     my profile !
                    </RevealText>
                  </div>
                </div>
                {/* Content Block - H2 Section Title End */}
                {/* Content Block - Image Divider Start */}
                <div className="content__block grid-block">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 grid-item">
                        {/* change the background image in the main.css file - .about-image-1 */}
                        <div className="divider divider-image about-image-1 animate-in-up" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content Block - Image Divider End */}
                {/* Content Block - About Me Data Start */}
                <div className="content__block grid-block">
                  <div className="container-fluid p-0">
                    <div className="row g-0 justify-content-between">
                      <div className="col-12 col-md-8 col-lg-7 col-xxl-9 grid-item about-descr pre-grid">
                        <p className="about-descr__text type-basic-160lh animate-in-up">
                          Don&apos;t hesitate to contact me, I&apos;m open to work, and I&apos;m curious to discover new things!
                        </p>
                        <div className="btn-group about-descr__btnholder animate-in-up">
                          <HoverCursorEffect
                            as="a"
                            className="btn btn-default hover-default"
                            href={getImagePath("/CV_CherblancN.pdf")}
                            target="_blank"
                            download
                          >
                            <span className="btn-caption"> Download CV </span>
                          </HoverCursorEffect>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 col-xxl-3 grid-item about-info pre-grid">
                        <div className="about-info__item animate-in-up">
                          <h6>Noah Cherblanc</h6>
                        </div>
                        <div className="about-info__item animate-in-up">
                          <h6>
                            <a
                              className="link-inline text-link"
                            >
                              IT Enginneer
                            </a>
                          </h6>
                        </div>
                        <div className="about-info__item animate-in-up">
                          <h6>
                            <a
                              className="link-inline text-link"
                              href="mailto:noahcherblanc@gmail.co"
                            >
                              noahcherblanc@gmail.com
                            </a>
                          </h6>
                        </div>
                        <div className="about-info__item animate-in-up">
                          <h6>
                            <a
                              className="link-inline text-link"
                              href="https://www.google.com/maps/place/Grenoble/"
                              target="_blank"
                            >
                              Grenoble, France
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content Block - About Me Data End */}
              </div>
            </div>
            {/* Inner Section Content End */}
            {/* Inner Section Aside Start */}
            <div className="col-12 col-xl-2" />
            {/* Inner Section Aside End */}
          </div>
        </div>
      </div>
    </section>
  );
}

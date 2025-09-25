import RevealText from "@/components/animation/RevealText";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import Image from "next/image";
import resume from "@/data/resume.json";
import React from "react";
import Socials from "./Socials";
import { getImagePath } from "@/lib/utils";

export default function Resume() {
  return (
    <section id="resume" className="inner inner-grid-bottom resume">
      <div className="inner__wrapper">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Inner Section Name Start */}
            <div className="col-12 col-xl-2">
              <div className="inner__name">
                {/* Content Block - Section Name Start */}
                <div className="content__block name-block">
                  <span className="section-name icon-right animate-in-up">
                    <span className="section-name-caption">Resume</span>
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
                <div className="content__block section-tagline-title">
                  <div className="block__descr">
                    <RevealText as="h2" className=" animate-in-up">
                      My digital
                      <br />
                      journey
                    </RevealText>
                  </div>
                </div>
                {/* Content Block - H2 Section Title End */}
                {/* Content Block - My Education Start */}
                <div className="content__block pre-text-items">
                  {/* Section Subtitle Start */}
                  <div className="block__subtitle">
                    <p className="tagline-chapter animate-in-up">
                      My education
                    </p>
                  </div>
                  {/* Section Subtitle End */}
                  {/* Resume Lines V1 Start */}
                  <div className="container-fluid p-0 resume-lines">
                    {(resume.education || []).map((e) => (
                      <React.Fragment key={e.id}>
                        <div className="resume-divider animate-in-up" />
                        <div className="row g-0 resume-lines__item">
                          <div className="col-12 col-md-4 col-lg-2">
                            <p className="resume-lines__date type-basic-160lh animate-in-up">
                              {e.date}
                            </p>
                          </div>
                          <div className="col-12 col-md-4 col-lg-5">
                            <h4 className="resume-lines__title animate-in-up">
                              {e.title}
                            </h4>{" "}
                            {e.source && (
                              <a
                                className="resume-lines__source link-small-underline animate-in-up"
                                href={e.sourceUrl || "#"}
                                target="_blank"
                              >
                                {e.source}
                              </a>
                            )}{" "}
                          </div>
                          <div className="col-12 col-md-4 col-lg-5">
                            <p className="resume-lines__descr type-basic-160lh animate-in-up">
                              {e.description}
                            </p>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                    <div className="resume-divider animate-in-up" />
                  </div>
                  {/* Resume Lines V1 End */}
                </div>
                {/* Content Block - My Education End */}
                {/* Content Block - Work Experience Start */}
                <div className="content__block pre-text-items">
                  {/* Section Subtitle Start */}
                  <div className="block__subtitle">
                    <p className="tagline-chapter animate-in-up">
                      Work experience
                    </p>
                  </div>
                  {/* Section Subtitle End */}
                  {/* Resume Lines V1 Start */}
                  <div className="container-fluid p-0 resume-lines">
                    <div className="resume-divider animate-in-up" />
                    {/* resume single item */}
                    {resume.experience.map((e) => (
                      <React.Fragment key={e.id}>
                        <div className="row g-0 resume-lines__item">
                          <div className="col-12 col-md-4 col-lg-2">
                            <p className="resume-lines__date type-basic-160lh animate-in-up">
                              {e.date}
                            </p>
                          </div>
                          <div className="col-12 col-md-4 col-lg-5">
                            <h4 className="resume-lines__title animate-in-up">
                              {e.title}
                            </h4>
                            <p className="resume-lines__source small animate-in-up">
                              in the{" "}
                              <a
                                className="link-small-underline"
                                href={e.sourceUrl || "#"}
                                target="_blank"
                              >
                                {e.source}
                              </a>
                            </p>
                          </div>
                          <div className="col-12 col-md-4 col-lg-5">
                            <p className="resume-lines__descr type-basic-160lh animate-in-up">
                              {e.description}
                            </p>
                          </div>
                        </div>
                        <div className="resume-divider animate-in-up" />
                      </React.Fragment>
                    ))}
                    <div className="resume-divider animate-in-up" />
                  </div>
                  {/* Resume Lines V1 End */}
                </div>
                {/* Content Block - Work Experience End */}
                {/* Content Block - Tools Cards Start */}
                <div className="content__block grid-block pre-text-items">
                  {/* Section Subtitle Start */}
                  <div className="block__subtitle grid-block-subtitle">
                    <p className="tagline-chapter animate-in-up">
                      My favourite tools
                    </p>
                  </div>
                  {/* Section Subtitle End */}
                  {/* Tools Cards Start */}
                  <div className="tools-cards d-flex justify-content-start flex-wrap">
                    {/* tools single item */}
                    {resume.tools.map((tool) => (
                      <div
                        key={tool.id}
                        className="tools-cards__item d-flex grid-item animate-in-up"
                      >
                        <div className="tools-cards__card">
                          <Image
                            className="tools-cards__icon animate-in-up"
                            alt="Tools Icon"
                            src={getImagePath(tool.src)}
                            width={120}
                            height={90}
                          />
                          <h6 className="tools-cards__caption tagline-tool animate-in-up">
                            {tool.alt}
                          </h6>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Tools Cards End */}
                </div>
                {/* Content Block - Tools Cards End */}
                {/* Content Block - Testimonials Start */}
                <div className="content__block pre-offcanvas-text-block">
                  {/* Section Subtitle Start */}
                  {/* <div className="block__subtitle">
                    <p className="tagline-chapter animate-in-up">
                      My client&apos;s stories
                    </p>
                  </div> */}
                  {/* Section Subtitle End */}
                  {/* Testimonials Slider Start */}
                  {/* <Testimonials /> */}
                  {/* Testimonials Slider End */}
                </div>
                {/* Content Block - Testimonials End */}
              </div>
            </div>
            {/* Inner Section Content End */}
            {/* Inner Section Aside Start */}
            <div className="col-12 col-xl-2" />
            {/* Inner Section Aside End */}
          </div>
        </div>
        {/* Inner Section Off-canvas Content (Fullwidth Social Media Marquee & Lines) Start */}
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12">
              {/* Content Block - Follow Me Marquee with SVG Objects Start */}
              <div className="content__block no-padding section-tagline-title">
                <VelocityMarquee className="items items--gsap">
                  {/* single item */}
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="item item-regular text">
                      <p className="item__text">Follow me</p>
                      <div className="item__image">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 92.3 93.1"
                          fill="currentColor"
                        >
                          <g>
                            <rect
                              x="45.7"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.8412 -0.5407 0.5407 0.8412 -17.8476 32.3497)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.4155 -0.9096 0.9096 0.4155 -15.3764 69.2119)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.9898 -0.1425 0.1425 0.9898 -6.1646 7.0506)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.7556 -0.655 0.655 0.7556 -19.2157 41.618)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.2812 -0.9597 0.9597 0.2812 -11.5032 77.7858)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.9595 -0.2817 0.2817 0.9595 -11.2479 14.8866)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.6549 -0.7557 0.7557 0.6549 -19.2631 50.9572)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="45.7"
                              y={0}
                              transform="matrix(0.1423 -0.9898 0.9898 0.1423 -6.4999 85.629)"
                              className="st0"
                              width={1}
                              height="93.1"
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.9097 -0.4153 0.4153 0.9097 -15.1716 23.381)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                            <rect
                              x="-0.4"
                              y="46.1"
                              transform="matrix(0.5411 -0.8409 0.8409 0.5411 -17.9774 60.1901)"
                              className="st0"
                              width="93.1"
                              height={1}
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  ))}
                </VelocityMarquee>
              </div>
              {/* Content Block - Follow Me Marquee with SVG Objects End */}
            </div>
          </div>
          <div className="row g-0 justify-content-center">
            <div className="col-12 col-xl-8">
              {/* Content Block - Socials Start */}
              <div className="content__block">
                {/* Section Subtitle Start */}
                <div className="block__subtitle">
                  <p className="tagline-chapter animate-in-up">Social media</p>
                </div>
                {/* Section Subtitle End */}
                {/* Socials Lines Start */}
                <Socials />
                {/* Socials Lines End */}
              </div>
              {/* Content Block - Socials End */}
            </div>
          </div>
        </div>
        {/* Inner Section Off-canvas Content (Fullwidth Social Media Marquee & Lines) Start */}
      </div>
    </section>
  );
}

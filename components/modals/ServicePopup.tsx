"use client";
import HoverCursorEffect from "@/components/animation/HoverCursorEffect";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useService } from "@/contexts/ServiceContext";

export default function ServicePopup() {
  const { selectedService, setSelectedService } = useService();

  const contentRef = useRef<HTMLDivElement | null>(null); // .mfp-content
  const popupRef = useRef<HTMLDivElement | null>(null); // .popup

  useEffect(() => {
    if (!selectedService) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node | null;
      const content = contentRef.current;
      const popup = popupRef.current;

      if (!target || !popup) return;

      // ✅ ignore clicks inside the popup itself
      if (popup.contains(target)) return;

      // ✅ close if click is inside .mfp-content but outside .popup
      if (content?.contains(target)) {
        setSelectedService(null);
      }

      // ✅ OR close for any other clicks outside .popup
      if (!content?.contains(target)) {
        setSelectedService(null);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [selectedService, setSelectedService]);

  if (!selectedService) return null;

  return (
    <>
      <div
        className="mfp-bg mfp-fade mfp-ready service-popup-bg"
        style={{ display: 'block', opacity: 1 }}
        onClick={() => setSelectedService(null)}
      />
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready service-popup-wrap"
        style={{ display: 'block', opacity: 1 }}
        tabIndex={-1}
      >
        <div className="mfp-container mfp-inline-holder" data-lenis-prevent>
          <div className="mfp-content" ref={contentRef}>
            <div className="popup" ref={popupRef}>
              {/* Popup Close Button Start */}
              <button
                className="mfp-close permanent-light"
                onClick={() => setSelectedService(null)}
              />
              {/* Popup Close Button End */}
              {/* Popup Content Start */}
              <div className="popup__container">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12">
                      <div className="project">
                        {/* Project Block - Title with Image Start */}
                        <div className="project__block no-padding no-margin project-image-bg">
                          {selectedService && (
                            <>
                              <Image
                                className="project-image-bg__portrait"
                                alt="Service Illustration"
                                src={selectedService?.imgM || selectedService?.imgS || ""}
                                width={600}
                                height={800}
                              />
                              <Image
                                className="project-image-bg__landscape"
                                alt="Service Illustration"
                                src={selectedService?.imgS || selectedService?.imgM || ""}
                                width={1920}
                                height={800}
                              />{" "}
                            </>
                          )}
                          <div className="project__title">
                            <h3 className="light">
                              {selectedService?.title?.replace(/\n/g, " ") || ""}
                            </h3>
                          </div>
                        </div>
                        {/* Project Block - Title with Image End */}
                        {/* Project Block - Description Start */}
                        <div className="project__block grid-block grid-items">
                          <div className="project__data">
                            <div className="container-fluid p-0">
                              <div className="row g-0">
                                <div className="col-12 col-xl-4">
                                  <div className="container-fluid p-0">
                                    <div className="row g-0">
                                      {/* project data single item */}
                                      <div className="col-12 col-md-6 grid-item pdata__item">
                                        <p className="data__title tagline-chapter small type-basic-160lh">
                                          Type
                                        </p>
                                        <p className="data__descr small type-basic-160lh">
                                          {selectedService?.type || "Service Project"}
                                        </p>
                                      </div>
                                      {/* project data single item */}
                                      <div className="col-12 col-md-6 grid-item pdata__item">
                                        <p className="data__title tagline-chapter small type-basic-160lh">
                                          Category
                                        </p>
                                        <p className="data__descr small type-basic-160lh">
                                          {selectedService?.category || selectedService?.title?.replace(/\n/g, " ") || ""}
                                        </p>
                                      </div>
                                      {/* project data single item */}
                                      <div className="col-12 col-md-6 grid-item pdata__item">
                                        <p className="data__title tagline-chapter small type-basic-160lh">
                                          Skills
                                        </p>
                                        <p className="data__descr small type-basic-160lh">
                                          {selectedService?.skills || "Design & Development"}
                                        </p>
                                      </div>
                                      {/* project data single item */}
                                      <div className="col-12 col-md-6 grid-item pdata__item">
                                        <p className="data__title tagline-chapter small type-basic-160lh">
                                          Status
                                        </p>
                                        <p className="data__descr small type-basic-160lh">
                                          {selectedService?.status || "Available"}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-xl-8 grid-item">
                                  <p className="type-basic-160lh">
                                    {selectedService?.details || selectedService?.text || "Detailed description of this service and its capabilities. This service represents one of my core competencies and areas of expertise."}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Project Block - Description End */}
                        {/* Project Block - The Approach Start */}
                        <div className="project__block pre-grid-items">
                          <div className="project__descr">
                            <div className="container-fluid p-0">
                              <div className="row g-0">
                                <div className="col-12 col-xl-4">
                                  <p className="project__subtitle tagline-chapter">
                                    The approach
                                  </p>
                                </div>
                                <div className="col-12 col-xl-8">
                                  <p className="type-basic-160lh">
                                    {selectedService?.approach || "My approach to this service combines technical expertise with creative problem-solving. I focus on understanding client needs and delivering solutions that exceed expectations while maintaining the highest standards of quality and professionalism."}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Project Block - The Approach End */}
                        {/* Project Block - My Expertise Start */}
                        <div className="project__block">
                          <div className="project__descr">
                            <div className="container-fluid p-0">
                              <div className="row g-0">
                                <div className="col-12 col-xl-4">
                                  <p className="project__subtitle tagline-chapter">
                                    My expertise
                                  </p>
                                </div>
                                <div className="col-12 col-xl-8">
                                  <p className="type-basic-160lh">
                                    {selectedService?.expertise || "With years of experience in this field, I bring a comprehensive understanding of both technical implementation and creative design. My solutions are tailored to each project's unique requirements, ensuring optimal results and client satisfaction."}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Project Block - My Expertise End */}
                        {/* Project Block - Contact CTA Start */}
                        <div className="project__block small-size">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-12 d-flex justify-content-center">
                                <HoverCursorEffect
                                  as="button"
                                  className="btn btn-circle-text hover-circle"
                                  onClick={() => {
                                    setSelectedService(null);
                                    // Scroll to contact section
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) {
                                      contactSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                  }}
                                  emZIndex="0"
                                >
                                  <span
                                    className="btn-caption"
                                    style={{ zIndex: 1 }}
                                  >
                                    Get in touch
                                  </span>
                                </HoverCursorEffect>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Project Block - Contact CTA End */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Popup Content End */}
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
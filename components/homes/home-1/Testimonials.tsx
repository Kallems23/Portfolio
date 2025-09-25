"use client";
import Image from "next/image";
import React from "react";
import testimonials from "@/data/testimonials.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Testimonials() {
  return (
    <div className="testimonials-slider">
      {/* slider main container */}
      <Swiper
        className="swiper-testimonials"
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        {/* additional required wrapper */}

        {testimonials.map((t) => (
          <SwiperSlide className="swiper-slide" key={t.id}>
            <div className="testimonials-card animate-in-up">
              <div className="container-fluid p-0 fullheight-l">
                <div className="row g-0 d-flex align-items-stretch fullheight-l">
                  <div className="col-12 col-lg-6 testimonials-card__tdata">
                    <div className="testimonials-card__tauthor d-flex">
                      <div className="tauthor__avatar animate-in-up">
                        <Image
                          alt="Review Author"
                          src={t.avatar}
                          width={400}
                          height={400}
                        />
                      </div>
                      <div className="tauthor__info d-flex flex-column justify-content-center">
                        <h4 className="tauthor__name animate-in-up">
                          {t.author}
                        </h4>
                        <p className="tauthor__position small animate-in-up">
                          {t.position} in{" "}
                          <a
                            className="link-small-underline"
                            href={t.link || "#"}
                          >
                            {t.company}
                          </a>
                        </p>
                        <div className="tauthor__rating d-flex animate-in-up">
                          <i className="ph-fill ph-star" />
                          <i className="ph-fill ph-star" />
                          <i className="ph-fill ph-star" />
                          <i className="ph-fill ph-star" />
                          <i className="ph-fill ph-star" />
                        </div>
                      </div>
                    </div>
                    <div className="testimonials-card__descr animate-in-up">
                      <p className="type-basic-160lh">{t.quote}</p>
                    </div>
                    <div className="testimonials-card__btnholder animate-in-up">
                      <a
                        className="btn btn-line icon-right slide-right"
                        href={t.link || "#"}
                      >
                        <span className="btn-caption">Project page</span>
                        <i className="ph ph-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 testimonials-card__timage fullheight-l">
                    <div className="timage__inner fullheight-l animate-in-up">
                      <Image
                        alt="Testimonials Image"
                        src={t.image}
                        width={1433}
                        height={1200}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* navigation buttons */}
        <div className="swiper-button-prev mxd-slider-btn mxd-slider-btn-square-prev animate-in-up">
          <a className="btn btn-line icon-left slide-left" href="#">
            <i className="ph ph-arrow-left" />
            <span className="btn-caption">Prev</span>
          </a>
        </div>
        <div className="swiper-button-next mxd-slider-btn mxd-slider-btn-square-next animate-in-up">
          <a className="btn btn-line icon-right slide-right" href="#">
            <span className="btn-caption">Next</span>
            <i className="ph ph-arrow-right" />
          </a>
        </div>
        {/* pagination */}
        <div className="swiper-pagination mxd-swiper-pagination-fraction" />
      </Swiper>
    </div>
  );
}

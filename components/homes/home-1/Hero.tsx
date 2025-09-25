import ParallaxItem from "@/components/animation/Parallax";
import RevealText from "@/components/animation/RevealText";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="home" className="main home">
      {/* Main Section Intro Start */}
      <div className="main__intro">
        {/* Intro Background Start */}
        <div
          className="intro__background intro-bg-01 hero-animate-in-up"
          data-duration="0.9"
          data-delay="100"
        >
          <ParallaxItem speed={0.6} className="intro-bg-01__01">
            <Image
              alt="Background Objects"
              src={getImagePath("/img/noah/1200x1200_bg01.webp")}
              width={1200}
              height={1200}
            />
            <div className="intro-bg__shadow" />
          </ParallaxItem>
          <ParallaxItem speed={0.8} className="intro-bg-01__02">
            <Image
              alt="Background Objects"
              src={getImagePath("/img/noah/1200x1200_bg02.webp")}
              width={1200}
              height={1200}
            />
            <div className="intro-bg__shadow" />
          </ParallaxItem>
        </div>
        {/* Intro Background End */}
        <div className="container-fluid p-0 fullheight-desktop">
          <div className="row g-0 fullheight-desktop align-items-xl-stretch">
            {/* Intro Data Line #1 (if needed) Start */}
            <div className="col-12 col-xl-2" />
            {/* Intro Data Line #1 (if needed) End */}
            {/* Intro Content Start */}
            <div className="col-12 col-xl-8 fullheight-desktop">
              {/* Headline Start */}
              <div
                id="headline"
                className="headline d-flex align-items-start flex-column loading-wrap"
              >
                <p
                  className="headline__subtitle space-bottom loading__item hero-animate-in-up"
                  data-duration="0.7"
                  data-delay="100"
                >
                  Hello!
                  <br />I am Noah Cherblanc
                </p>
                <h1
                  className="headline__title loading__item hero-animate-in-up"
                  data-duration="0.7"
                  data-delay="300"
                >
                  IT Engineer
                  <br />
                  Student
                </h1>
                <div
                  className="headline__btn loading__item hero-animate-in-up"
                  data-duration="0.7"
                  data-delay="600"
                >
                  <a
                    className="btn btn-line-small icon-right slide-right-down"
                    href="#about"
                  >
                    <span className="btn-caption">Scroll for more</span>
                    <i className="ph ph-arrow-down-right" />
                  </a>
                </div>
              </div>
              {/* Headline End */}
            </div>
            {/* Intro Content End */}
            {/* Intro Data Line #2 (if needed) Start */}
            <div className="col-12 col-xl-2" />
            {/* Intro Data Line #2 (if needed) End */}
          </div>
        </div>
      </div>
      {/* Main Section Intro End */}
      {/* Main Section Media Start */}
      <div className="main__media media-grid-bottom">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Media Data Line #1 (if needed) Start */}
            <div className="col-12 col-xl-2" />
            {/* Media Data Line #1 (if needed) End */}
            {/* Media Content Start */}
            <div className="col-12 col-xl-8">
              {/* Content Block - Image Divider Start */}
              <div className="content__block">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12">
                      {/* change the background image in the main.css file - .main-image-1 */}
                      <div
                        className="divider divider-image main-image-1 hero-animate-in-up"
                        data-duration="0.7"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Content Block - Image Divider End */}
              {/* Content Block - Blockquote Start */}
              <div className="content__block large-text-block">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12">
                      <RevealText
                        as="blockquote"
                        className=" hero-animate-in-up"
                        data-duration="0.7"
                      >
                        Here you will find all the information about my background, my skills, and my projects. To introduce myself, I am a young man who has just finished my studies in computer engineering and today, I am looking for a position in this field.
                      </RevealText>
                    </div>
                  </div>
                </div>
              </div>
              {/* Content Block - Blockquote End */}
            </div>
            {/* Media Content End */}
            {/* Media Data Line #2 (if needed) Start */}
            <div className="col-12 col-xl-2" />
            {/* Media Data Line #2 (if needed) End */}
            {/* Media Fullwidth Divider Start */}
            <div className="media__fullwidth">
              {/* Marquee V1 Divider Start */}
              <VelocityMarquee className="items items--gsap">
                {/* single item */}
                <div className="item icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 92.3 93.1"
                    fill="currentColor"
                  >
                    <g>
                      <rect x="45.7" className="st0" width={1} height="93.1" />
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
                {/* single item */}
                <div className="item image image-1">
                  <Image
                    alt="Image"
                    src={getImagePath("/img/noah/sprite_pc.png")}
                    width={1000}
                    height={1300}
                  />
                </div>
                {/* single item */}
                <div className="item icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 89.2 82.8"
                    fill="currentColor"
                  >
                    <g>
                      <g>
                        <rect className="st0" width="89.2" height={1} />
                        <rect
                          y="20.5"
                          className="st0"
                          width="89.2"
                          height={1}
                        />
                        <rect
                          y="40.9"
                          className="st0"
                          width="89.2"
                          height={1}
                        />
                        <rect
                          y="61.4"
                          className="st0"
                          width="89.2"
                          height={1}
                        />
                        <rect
                          y="81.8"
                          className="st0"
                          width="89.2"
                          height={1}
                        />
                      </g>
                      <rect
                        x="2.5"
                        y="10.2"
                        transform="matrix(0.9712 -0.2384 0.2384 0.9712 -1.2518 11.1229)"
                        className="st0"
                        width="85.7"
                        height={1}
                      />
                      <rect
                        x="2.5"
                        y="30.7"
                        transform="matrix(0.9712 -0.2384 0.2384 0.9712 -6.1265 11.7116)"
                        className="st0"
                        width="85.7"
                        height={1}
                      />
                      <rect
                        x="2.5"
                        y="51.2"
                        transform="matrix(0.9712 -0.2384 0.2384 0.9712 -11.0059 12.3009)"
                        className="st0"
                        width="85.7"
                        height={1}
                      />
                      <rect
                        x="2.5"
                        y="71.6"
                        transform="matrix(0.9712 -0.2384 0.2384 0.9712 -15.8827 12.8923)"
                        className="st0"
                        width="85.7"
                        height={1}
                      />
                    </g>
                  </svg>
                </div>
                {/* single item */}
                <div className="item image image-2">
                  <Image
                    alt="Image"
                    src={getImagePath("/img/noah/sprite_code.png")}
                    width={1000}
                    height={1300}
                  />
                </div>
                {/* single item */}
                <div className="item icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 84 84"
                    fill="currentColor"
                  >
                    <g>
                      <path
                        d="M42,84C18.8,84,0,65.1,0,42S18.8,0,42,0s42,18.8,42,42S65.1,84,42,84z M42,1C19.4,1,1,19.4,1,42
                      s18.4,41,41,41s41-18.4,41-41S64.6,1,42,1z"
                      />
                      <path
                        d="M42,69.8c-15.8,0-28.6-12.8-28.6-28.6h1c0,15.2,12.4,27.6,27.6,27.6s27.6-12.4,27.6-27.6h1
                      C70.6,57,57.7,69.8,42,69.8z"
                      />
                      <g>
                        <path
                          d="M31.7,31.1H17.8v-0.5c0-3.8,3.1-7,7-7s7,3.1,7,7L31.7,31.1L31.7,31.1z M18.8,30.1h11.9
                        c-0.2-3-2.8-5.5-5.9-5.5S19.1,27.1,18.8,30.1L18.8,30.1z"
                        />
                        <path
                          d="M66.2,31.1H52.2v-0.5c0-3.8,3.1-7,7-7s7,3.1,7,7L66.2,31.1L66.2,31.1z M53.3,30.1h11.9
                        c-0.2-3-2.8-5.5-5.9-5.5S53.5,27.1,53.3,30.1L53.3,30.1z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                {/* single item */}
                <div className="item image image-3">
                  <Image
                    alt="Image"
                    src={getImagePath("/img/noah/sprite_folder.png")}
                    width={1000}
                    height={1300}
                  />
                </div>
              </VelocityMarquee>
              {/* Marquee V1 Divider End */}
            </div>
            {/* Media Fullwidth Divider End */}
          </div>
        </div>
      </div>
      {/* Main Section Media End */}
    </section>
  );
}

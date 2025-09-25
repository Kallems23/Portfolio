export default function Logo() {
  return (
    <div
      className="logo loading__fade fade-in"
      data-duration="1.2"
      data-delay="300"
    >
      <a href="#home" className="logo__link">
        {/* logo icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 50 50"
          enableBackground="new 0 0 50 50"
          xmlSpace="preserve"
        >
      
          <path
            className="mxd-background"
            d="M33.4,50H16.7C7.5,50,0,42.5,0,33.3V16.7C0,7.5,7.5,0,16.7,0h16.7C42.5,0,50,7.5,50,16.7v16.7
      C50,42.5,42.5,50,33.4,50z"
          />
          <g>
            <defs>
              <path
                id="mxd-clip-path"
                d="M33.4,50H16.7C7.5,50,0,42.5,0,33.3V16.7C0,7.5,7.5,0,16.7,0h16.7C42.5,0,50,7.5,50,16.7v16.7
          C50,42.5,42.5,50,33.4,50z"
              />
            </defs>
            <clipPath id="mxd-path-id">
              <use xlinkHref="#mxd-clip-path" style={{ overflow: "visible" }} />
            </clipPath>
            <path
              className="mxd-cat"
              d="M29.2,30.8h2.5v2.5v2.5
        h-2.5v-2.5V30.8z M18.4,33.3v2.5h2.5v-2.5v-2.5h-2.5V33.3z M35,18.3v2.5h-2.5v-2.5H35z M30,23.3h2.5v-2.5H30V23.3z M25,23.3h-2.5
        H20v2.5h2.5H25h2.5H30v-2.5h-2.5H25z M17.5,20.8v2.5H20v-2.5H17.5z M15,18.3v2.5h2.5v-2.5H15z M12.5,23.3v2.5v2.5H15v-2.5v-2.5
        v-2.5h-2.5V23.3z M10,30.8v2.5H8.4H5.9v2.5h2.5v2.5H5.9v2.5h2.5v2.5v2.5v2.5v2.5h2.5v-2.5v-2.5v-2.5h2.5h2.5v-2.5h-2.5h-2.5v-2.5
        v-2.5v-2.5h1.7v-2.5v-2.5H10V30.8z M37.5,23.3v-2.5H35v2.5v2.5v2.5h2.5v-2.5V23.3z M44.2,35.8v-2.5h-2.5H40v-2.5v-2.5h-2.5v2.5v2.5
        h1.7v2.5v2.5v2.5h-2.5h-2.5v2.5h2.5h2.5v2.5v2.5v2.5h2.5v-2.5v-2.5v-2.5v-2.5h2.5v-2.5h-2.5v-2.5H44.2z"
            />
          </g>
        </svg>
        {/* logo text */}
        <span className="logo-text">Noah</span>
      </a>
    </div>
  );
}

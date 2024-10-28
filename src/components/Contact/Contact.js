import React, { useState } from "react";
import "../../GlobalStyle.css";
import "./Contact.css";

const Contact = () => {
  // Fonction pour rediriger
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  const [isCopied, setIsCopied] = useState(false);
  const email = "noahcherblanc@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div id="contact" className="contact-content">
      <h1 className="global-title">Let's talk about our project</h1>
      <div className="info-list">
        <button className="global-button" onClick={copyToClipboard}>
          Mail
        </button>
        {isCopied && (
          <div
            style={{
              position: "absolute",
              background: "#27e171",
              padding: "5px",
              borderRadius: "5px",
              transform: "translateY(-30px)",
            }}
          >
            Copied mail !
          </div>
        )}
        <button
          onClick={() => handleRedirect("https://linkedin.com/in/ncherblanc")}
          className="global-button"
        >
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Contact;

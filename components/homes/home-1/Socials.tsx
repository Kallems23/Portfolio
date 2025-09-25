import React from "react";
import socials from "@/data/socials.json";

export default function Socials() {
  return (
    <ul className="socials-lines d-flex flex-column">
      {socials.map((s, i) => (
        <li className="socials-lines__item" key={s.id}>
          <div className="socials-lines__divider animate-in-up" />
          <a
            className={`socials-lines__link d-flex align-items-center justify-content-between ${
              i === 1 ? "animate-in-up" : ""
            }`}
            href={s.href}
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="animate-in-up">{s.name}</h4>
            <div className="socials-lines__icon d-flex animate-in-up">
              <i className="ph ph-arrow-up-right" />
            </div>
          </a>
          <div className="socials-lines__divider animate-in-up" />
        </li>
      ))}
    </ul>
  );
}

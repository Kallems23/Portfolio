"use client";
const defaultMenuItems = [
  { href: "#home", caption: "Home", icon: "ph ph-house-simple" },
  //{ href: "#portfolio", caption: "Portfolio", icon: "ph ph-squares-four" },
  { href: "#about", caption: "About Me", icon: "ph ph-user" },
  { href: "#services", caption: "Projects", icon: "ph ph-sticker" },
  { href: "#resume", caption: "Resume", icon: "ph ph-article" },
  //{ href: "#contact", caption: "Contact", icon: "ph ph-envelope" },
];

import { useEffect, useState } from "react";

export default function Header1({
  menuItems = defaultMenuItems,
}: {
  menuItems?: { href: string; caption: string; icon: string }[];
}) {
  const [activeSection, setActiveSection] = useState(
    menuItems[0].href.replace("#", "")
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px" }
    );

    setTimeout(() => {
      menuItems.forEach((elm) => {
        const element = document.querySelector(elm.href);
        if (element) observer.observe(element);
      });
    });
    return () => observer.disconnect();
  }, [menuItems]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector<HTMLElement>(id);
    targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      id="header"
      className="header d-flex justify-content-center loading__fade fade-in"
      data-duration="1.2"
      data-delay="300"
    >
      {/* Navigation Menu Start */}
      <div className="header__navigation d-flex justify-content-start">
        <nav id="menu" className="menu">
          <ul className="menu__list d-flex justify-content-start">
            {menuItems.map((item) => (
              <li key={item.href} className="menu__item">
                <a
                  onClick={(e) => handleClick(e, item.href)}
                  className={
                    activeSection == item.href.replace("#", "")
                      ? "menu__link btn active"
                      : "menu__link btn"
                  }
                  href={item.href}
                >
                  <span className="menu__caption">{item.caption}</span>
                  <i className={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Navigation Menu End */}
    </header>
  );
}

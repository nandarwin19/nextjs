"use client";

import { useState } from "react";
import NavLink from "./navLink/navLink";
import { Button } from "@nextui-org/react";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (title) => {
    setActiveLink(title);
  };

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.title}
          item={link}
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
        />
      ))}
      {session ? (
        <>
          {isAdmin && (
            <NavLink
              item={{ title: "Admin", path: "/admin" }}
              activeLink={activeLink}
              handleLinkClick={handleLinkClick}
            />
          )}
          <Button className="rounded-md">Logout</Button>
        </>
      ) : (
        <NavLink
          item={{ title: "Login", path: "/login" }}
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
        />
      )}
    </>
  );
};

export default Links;

"use client";

import { Navbar } from "flowbite-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function MainNavbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <Navbar
        fluid
        className={` py-2 duration-300 bg-themegray ${
          scroll ? "shadow-md" : ""
        }`}
      >
        <div className="flex md:order-2">
          <div className="flex items-center gap-4 mr-4">
            <Link to={"/cart"}>
              {" "}
              <i className="fa-solid fa-cart-shopping text-2xl"></i>
            </Link>
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to={"/"}>
            <Navbar.Link href="/" className="navbar-link active">
              Home
            </Navbar.Link>
          </Link>
          <Navbar.Link href="#" className=" navbar-link">
            About
          </Navbar.Link>
          <Navbar.Link href="#" className=" navbar-link">
            Services
          </Navbar.Link>
          <Navbar.Link href="#" className=" navbar-link">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="#" className="navbar-link">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

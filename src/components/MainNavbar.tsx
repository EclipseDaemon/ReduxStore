"use client";

import { Navbar } from "flowbite-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function MainNavbar() {
  const [scroll, setScroll] = useState(false);
  const cart = useSelector((state: any) => state.cartReducer.cart);
  const cartCount = cart.length;
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
            <Link to={"/cart"} className="relative">
              {cartCount > 0 ? (
                <span className="absolute text-[10px] flex justify-center items-center top-0 bg-red-600 right-0 text-white p-1 rounded-full w-4 h-4">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              ) : (
                ""
              )}
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

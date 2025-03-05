"use client";
import { HEADER_LIST, SOCIAL_ICON_LIST } from "@/utils/helper";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 770) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    handleOverflow();
    window.addEventListener("resize", handleOverflow);
    return () => {
      window.removeEventListener("resize", handleOverflow);
    };
  }, [open]);

  return (
    <div className="position-relative w-100 nav-parent d-flex justify-content-between align-items-center">
      <Link href="#" className="position-absolute nav-logo">
        <Image
          src="/assets/images/webp/logo.webp"
          alt="page-logo"
          width={355}
          height={84}
        />
      </Link>
      <div className="container d-flex justify-content-md-end justify-content-center pt-md-0 pt-2 mt-md-0 mt-4 px-3">
        <div
          className={`d-flex align-items-center flex-md-row justify-content-center flex-column pt-31 end-md-0 nav-link-parent z-2 ${
            open ? "start-0" : "start-100"
          }`}
        >
          {HEADER_LIST.map((obj, i) => (
            <Link
              onClick={() => setOpen(!open)}
              key={i}
              href={obj.link}
              className="text-decoration-none text-white fw-normal nav-link"
            >
              {obj.title}
            </Link>
          ))}
          <div className="d-flex gap-18">
            {SOCIAL_ICON_LIST.map((obj, i) => (
              <Link key={i} href={obj.link} target="_blank" className="icon">
                {obj.icon}
              </Link>
            ))}
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="w-100 d-flex gap-2 flex-column d-md-none justify-content-center align-items-end w-100 z-3"
        >
          <span
            className={`toggle-button ${open ? "cross-icon-one" : "close"}`}
          ></span>
          <span
            className={`toggle-button ${open ? "cross-icon-two" : "close"}`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Header;

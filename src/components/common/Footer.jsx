import { DiscordIcon, TwitterIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="position-relative footer-parent">
      <Image
        src={"/assets/images/webp/footer-left-vector.webp"}
        alt="footer-left-vector"
        width={436}
        height={174}
        className=" position-absolute bottom-0 start-0 pointer-event-none footer-lights"
      />
      <Image
        src={"/assets/images/webp/footer-right-vector.webp"}
        alt="footer-right-vector"
        width={575}
        height={174}
        className=" position-absolute bottom-0 end-0 pointer-event-none footer-lights"
      />
      <h2 className="text-center text-white footer-heading">NEKOZUMA</h2>
      <div className="d-flex justify-content-center align-items-center mt-4 gap-4">
        <Link href={"https://discord.com/"} target="_blank" className="icon">
          <DiscordIcon />
        </Link>
        <Link href={"https://x.com/?lang=en"} target="_blank" className="icon">
          <TwitterIcon />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

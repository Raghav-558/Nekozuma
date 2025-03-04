import React from "react";
import Header from "./common/Header";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="hero-max-width mx-auto position-relative">
        <Header />
        <div className="container px-3 max-w-extra hero-padding mx-auto">
          <div className="border-custom-blue"></div>
          <h1 className="custom-blue sm-text-white font-franklin fw-bold text-lg-5xl text-3xl">
            NEKOZUMA
          </h1>
          <p className="max-w-large pt-lg-xs pt-11 fw-6 text-xs lh-sm custom-light-blue">
            The collection of 5555 NFTs on the Solana blockchain. The collection
            serves to be a rising force against the anime meta of collections
            with undoxxed teams and is therefore backed by the team at Nubbies
            NFT & Karmic Labs.
          </p>
          <button className="border-0 py-2 px-4 my-button rounded-2 text-white custom-light-sky hero-button">
            Connect Wallet
          </button>
        </div>
        <Image
          src={"/assets/images/webp/hero-image.webp"}
          alt="hero"
          width={557}
          height={557}
          className="position-absolute bottom-0 end-0 size-lg-xxl d-custom-none pe-none"
        />
        <Image
          src={"/assets/images/webp/hero-white-left.webp"}
          alt="lightning"
          width={211}
          height={350}
          className="position-absolute bottom-0 size-lg start-0 size-lg-xxl d-custom-none pe-none"
        />
      </div>
    </div>
  );
};

export default Hero;

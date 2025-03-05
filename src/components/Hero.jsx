import React from "react";
import Header from "./common/Header";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="hero-max-width mx-auto position-relative">
        <Header />
        <div className="container px-3 max-w-extra hero-padding mx-auto">
          <div className="hero-heading-border mb-1"></div>
          <h1 className="custom-blue sm-text-white font-franklin text-3xl hero-main-heading">
            NEKOZUMA
          </h1>
          <p className="max-w-large pt-lg-xs hero-heading fw-6 text-xs lh-sm custom-light-blue">
            The collection of 5555 NFTs on the Solana blockchain. The collection
            serves to be a rising force against the anime meta of collections
            with undoxxed teams and is therefore backed by the team at Nubbies
            NFT & Karmic Labs.
          </p>
          <button className="border-0 py-2 px-4 rounded-2 text-white custom-light-sky hero-button">
            Connect Wallet
          </button>
        </div>
        <Image
          src={"/assets/images/webp/hero-image.webp"}
          alt="hero"
          width={557}
          height={557}
          className="position-absolute bottom-0 end-0 hero-cat-image display-none pe-none"
        />
        <Image
          src={"/assets/images/webp/hero-white-left.webp"}
          alt="lightning"
          width={211}
          height={350}
          className="position-absolute bottom-0 hero-left-vector start-0 display-none pe-none"
        />
      </div>
    </div>
  );
};

export default Hero;

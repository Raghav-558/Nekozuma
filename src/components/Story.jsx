import React from "react";
import CustomHeading from "./common/CustomHeading";
import Description from "./common/Description";
import Image from "next/image";

const Story = () => {
  return (
    <div>
      <CustomHeading myClass={"pt-5"} text={"Story"} />
      <Description
        myClass={"text-center px-3 max-w-lg mx-auto custom-pt-23"}
        text={
          "Nekozuma which means lightning cats in Japanese (Neko = Cats // Inazuma = Lightning) is a collection of 5555 NFTs on the Solana blockchain. The story centers around 3 eras of cats living in different timelines - past, present, future. In each timeline, there are 3 deities that are all powerful and are meant to protect the world of Nekos."
        }
      />
      <Description
        myClass={
          "text-center px-3 max-w-lg mx-auto text-custom-xs custom-pt-36"
        }
        text={
          "However at every junction in time, there is always a darkness that is waiting to overthrow the good. Hence, each timeline has its own arch nemesis. This means that there will be a total of 4 godly nekos from each timeline making a total of 12 godly nekos that will be fully animated."
        }
      />
      <Image
        width={1280}
        height={357}
        src={"/assets/images/webp/story-image.webp"}
        alt="story"
        className="w-100 object-fit-cover story-image"
      />
    </div>
  );
};

export default Story;

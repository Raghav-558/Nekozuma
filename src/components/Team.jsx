import React from "react";
import { TEAM_LIST } from "@/utils/helper";
import Image from "next/image";
import Description from "./common/Description";
import { Twitter, TwitterIcon } from "@/utils/icons";
import Link from "next/link";
import CustomHeading from "./common/CustomHeading";

const Team = () => {
  return (
    <div id="team" className="dark-gray pt-5 pb-5">
      <div className="container px-3 mx-auto max-w-extra px-3 pb-3">
        <div className="team-custom-border mx-auto"></div>
        <CustomHeading text={"Team"} myClass={"pt-xl-5 mt-xl-2 pt-4"} />
        <div className="d-flex flex-wrap -mx-3 justify-content-center">
          {TEAM_LIST.map((obj, i) => (
            <div key={i} className="col-md-3 col-sm-4 px-sm pt-sm-4 pt-2 mt-3">
              <div>
                <Image
                  src={obj.image}
                  alt={obj.alt}
                  width={202}
                  height={202}
                  className=" mx-auto pe-none w-100 d-flex object-fit-cover"
                />
                <p className="fs-4 custom-blue text-center font-franklin pt-2 pt-lg-4 pb-lg-2">
                  {obj.title}
                </p>
                <Description
                  text={obj.name}
                  myClass={"text-center text-custom-xs lh-sm"}
                />
                <Description
                  text={obj.description}
                  myClass={"text-center text-custom-xs lh-sm py-2"}
                />
                <Link
                  href={obj.link}
                  className="mx-auto max-w-max d-flex pt-2"
                >
                  <TwitterIcon myClass={"twitter-icon"} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

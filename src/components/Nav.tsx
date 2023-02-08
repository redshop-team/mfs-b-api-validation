import Image from "next/image";
import React from "react";
import { DiGithubBadge } from "react-icons/di";

const Nav = () => {
  return (
    <nav className="border-b">
      <div className="flex px-2 lg:px-0 py-3 container items-center justify-between">
        <div>
          <Image
            src={"https://redshop.s3.ap-south-1.amazonaws.com/logo_icon.png"}
            height={50}
            width={50}
            alt="redshop_logo"
          />
        </div>
        <div>
          <a
            href="https://github.com/shahriarsohan/bkash-api-validation"
            target={"_blank"}
            rel="noreferrer"
          >
            <DiGithubBadge size={28} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

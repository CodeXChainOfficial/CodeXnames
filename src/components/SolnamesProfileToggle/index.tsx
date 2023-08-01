import React from "react";

import { Button } from "components";

type SolnamesProfileToggleProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "profiletext" | "subdomainstext" | "domaindetailstext"
> &
  Partial<{
    profiletext: string;
    subdomainstext: string;
    domaindetailstext: string;
  }>;

const SolnamesProfileToggle: React.FC<SolnamesProfileToggleProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button className="bg-light_blue-A700 cursor-pointer font-inter font-semibold min-w-[98px] py-[9px] rounded-md text-base text-black-900_01 text-center">
          {props?.profiletext}
        </Button>
        <Button className="cursor-pointer font-inter font-semibold min-w-[145px] py-[9px] rounded-lg text-base text-center text-gray-500">
          {props?.subdomainstext}
        </Button>
        <Button className="cursor-pointer font-inter font-semibold min-w-[165px] py-[9px] rounded-lg text-base text-center text-gray-500">
          {props?.domaindetailstext}
        </Button>
      </div>
    </>
  );
};

SolnamesProfileToggle.defaultProps = {
  profiletext: "Profile",
  subdomainstext: "Subdomains",
  domaindetailstext: "Domain Details",
};

export default SolnamesProfileToggle;

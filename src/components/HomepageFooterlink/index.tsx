import React from "react";

import { Text } from "components";

type HomepageFooterlinkProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "domainname" | "developername" | "aboutname" | "faqname"
> &
  Partial<{
    domainname: string;
    developername: string;
    aboutname: string;
    faqname: string;
  }>;

const HomepageFooterlink: React.FC<HomepageFooterlinkProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-base text-blue_gray-100_03 text-center tracking-[-0.48px] w-auto"
          size="txtRalewayRomanMedium16"
        >
          {props?.domainname}
        </Text>
        <Text
          className="text-base text-blue_gray-100_03 text-center tracking-[-0.48px] w-auto"
          size="txtRalewayRomanMedium16"
        >
          {props?.developername}
        </Text>
        <Text
          className="text-base text-blue_gray-100_03 text-center tracking-[-0.48px] w-auto"
          size="txtRalewayRomanMedium16"
        >
          {props?.aboutname}
        </Text>
        <Text
          className="text-base text-blue_gray-100_03 text-center tracking-[-0.48px] w-auto"
          size="txtRalewayRomanMedium16"
        >
          {props?.faqname}
        </Text>
      </div>
    </>
  );
};

HomepageFooterlink.defaultProps = {
  domainname: "Domains",
  developername: "Developers",
  aboutname: "About",
  faqname: "FAQ",
};

export default HomepageFooterlink;

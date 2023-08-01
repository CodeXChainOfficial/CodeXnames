import React from "react";

import { Button, Img, Text } from "components";

type SolnamesDomainDetailsOneDomaininfoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userurl" | "viewdomain"
> &
  Partial<{ userurl: string; viewdomain: string }>;

const SolnamesDomainDetailsOneDomaininfo: React.FC<
  SolnamesDomainDetailsOneDomaininfoProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[65px] h-[242px] justify-start mt-[22px] p-[15px] rounded-[13px] w-[99%] md:w-full"
          style={{
            backgroundImage: "url('images/img_frame163262_242x315.png')",
          }}
        >
          <Button className="bg-gray-800_33 flex h-7 items-center justify-center md:ml-[0] ml-[254px] mr-[3px] p-1.5 rounded-[50%] w-7">
            <Img
              className="h-4"
              src="images/img_star_white_a700.svg"
              alt="star"
            />
          </Button>
          <Text
            className="mb-[93px] md:ml-[0] ml-[51px] mr-[98px] text-white-A700 text-xl"
            size="txtInterBold20"
          >
            {props?.userurl}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
          <div className="bg-gray-900_04 flex flex-col items-center justify-center sm:px-5 px-6 py-4 rounded-[16px] w-[314px]">
            <Button className="bg-light_blue-A700 cursor-pointer font-bold font-inter py-[17px] rounded-[16px] text-[14.83px] text-center text-gray-900_03 w-[273px]">
              {props?.viewdomain}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

SolnamesDomainDetailsOneDomaininfo.defaultProps = {
  userurl: "Ahmad.codex",
  viewdomain: "View Domain",
};

export default SolnamesDomainDetailsOneDomaininfo;

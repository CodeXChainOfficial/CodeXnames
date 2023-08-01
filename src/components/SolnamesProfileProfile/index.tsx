import React from "react";

import { Img, Text } from "components";

type SolnamesProfileProfileProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "usertext" | "icon"
> &
  Partial<{ usertext: string; icon: string }>;

const SolnamesProfileProfile: React.FC<SolnamesProfileProfileProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start sm:pr-5 pr-[25px] w-[225px]">
          <div className="border border-light_blue-A700 border-solid flex flex-col items-center justify-start px-[18px] py-2.5 rounded-lg shadow-bs w-[225px]">
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                  src="images/img_rectangle2057.png"
                  alt="rectangle2057"
                />
                <Text
                  className="text-base text-blue_gray-100 w-auto"
                  size="txtInterMedium16"
                >
                  {props?.usertext}
                </Text>
              </div>
              <div className="flex flex-col h-[51px] md:h-auto items-center justify-center w-5">
                <Text
                  className="max-w-[16px] md:max-w-full text-base text-center text-light_blue-A700"
                  size="txtInterThin16"
                >
                  {props?.icon}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SolnamesProfileProfile.defaultProps = {
  usertext: "0G345Bv...8hU",
  icon: "chevron-down",
};

export default SolnamesProfileProfile;

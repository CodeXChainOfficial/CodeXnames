import React from "react";

import { Button, Text } from "components";

type HomepageExplorertopbarProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "selecteddomain"
  | "menulabel"
  | "menulabelOne"
  | "menulabelTwo"
  | "connecttext"
> &
  Partial<{
    selecteddomain: string;
    menulabel: string;
    menulabelOne: string;
    menulabelTwo: string;
    connecttext: string;
  }>;

const HomepageExplorertopbar: React.FC<HomepageExplorertopbarProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[37%]">
          <div className="flex sm:flex-col flex-row gap-2 items-center justify-end w-auto sm:w-full">
            <div className="flex flex-row gap-1 items-start justify-start w-auto">
              <Button className="bg-black-900_06 cursor-pointer font-medium font-raleway min-w-[89px] py-1.5 rounded-lg text-base text-center text-light_blue-A700 tracking-[-0.16px]">
                {props?.selecteddomain}
              </Button>
              <div className="flex flex-col items-center justify-start px-3 py-2 rounded-lg w-auto">
                <Text
                  className="text-base text-blue_gray-100_03 tracking-[-0.16px] w-auto"
                  size="txtRalewayRomanMedium16"
                >
                  {props?.menulabelTwo}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start px-3 py-2 rounded-lg w-auto">
                <Text
                  className="text-base text-blue_gray-100_03 tracking-[-0.16px] w-auto"
                  size="txtRalewayRomanMedium16"
                >
                  {props?.menulabelTwo}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start px-3 py-2 rounded-lg w-auto">
                <Text
                  className="text-base text-blue_gray-100_03 tracking-[-0.16px] w-auto"
                  size="txtRalewayRomanMedium16"
                >
                  {props?.menulabelTwo}
                </Text>
              </div>
            </div>
            <Button className="cursor-pointer font-inter font-semibold h-11 min-w-[114px] py-3 rounded-[12px] text-base text-center text-light_blue-A700">
              {props?.connecttext}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

HomepageExplorertopbar.defaultProps = {
  selecteddomain: "Domains",
  menulabel: "Developers",
  menulabelOne: "About",
  menulabelTwo: "FAQ",
  connecttext: "Connect",
};

export default HomepageExplorertopbar;

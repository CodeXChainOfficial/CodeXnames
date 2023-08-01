import React from "react";

import { Button, Img, Text } from "components";

type DOmainExploreFullOpenRowdurationProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "userduration" | "usercdxcounter" | "buynowbutton"
> &
  Partial<{
    username: string;
    userduration: string;
    usercdxcounter: string;
    buynowbutton: string;
  }>;

const DOmainExploreFullOpenRowduration: React.FC<
  DOmainExploreFullOpenRowdurationProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-1.5 items-center justify-start p-[9px] w-[28%] sm:w-full">
          <Img
            className="h-4 md:h-auto ml-1 object-cover w-4"
            src="images/img_codex12.png"
            alt="codexTwelve"
          />
          <div className="flex flex-col items-center justify-start mt-1.5 w-auto">
            <Button className="bg-transparent cursor-pointer font-roboto min-w-[86px] py-[5px] text-center text-sm text-white-A700">
              {props?.username}
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end p-4">
          <Text
            className="text-sm text-white-A700"
            size="txtPlusJakartaSansSemiBold14"
          >
            {props?.userduration}
          </Text>
        </div>
        <div className="flex flex-col items-end justify-end p-4">
          <Text
            className="mr-8 text-sm text-white-A700"
            size="txtPlusJakartaSansSemiBold14"
          >
            {props?.usercdxcounter}
          </Text>
        </div>
        <Button className="bg-light_blue-A700 cursor-pointer font-inter font-semibold min-w-[105px] py-3 rounded-[23px] text-black-900_03 text-center text-lg tracking-[-0.36px]">
          {props?.buynowbutton}
        </Button>
      </div>
    </>
  );
};

DOmainExploreFullOpenRowduration.defaultProps = {
  username: "Ahmad.codex",
  userduration: "1 Year",
  usercdxcounter: "25 CDX",
};

export default DOmainExploreFullOpenRowduration;

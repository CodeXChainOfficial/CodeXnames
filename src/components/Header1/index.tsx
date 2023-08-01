import React from "react";

import { Img, Text } from "components";

type Header1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header1: React.FC<Header1Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[65px] sm:h-auto mb-[22px] md:ml-[0] ml-[123px] md:mt-0 mt-[33px] object-cover w-[6%] md:w-full"
          src="images/img_logo.png"
          alt="logo"
        />
        <div className="md:h-[105px] h-[51px] md:ml-[0] ml-[788px] md:mt-0 my-[34px] relative w-[34%] md:w-full">
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-start m-auto w-auto">
            <div className="flex flex-row gap-[50px] items-start justify-start w-auto">
              <Text
                className="text-base text-center text-white-A700 w-auto"
                size="txtInterRegular16"
              >
                Domains
              </Text>
              <Text
                className="text-base text-center text-white-A700 w-auto"
                size="txtInterRegular16"
              >
                Resources
              </Text>
            </div>
          </div>
          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[6%] w-[44%]">
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
                      0G345Bv...8hU
                    </Text>
                  </div>
                  <div className="flex flex-col h-[51px] md:h-auto items-center justify-center w-5">
                    <Text
                      className="max-w-[16px] md:max-w-full text-base text-center text-light_blue-A700"
                      size="txtInterThin16"
                    >
                      chevron-down
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;

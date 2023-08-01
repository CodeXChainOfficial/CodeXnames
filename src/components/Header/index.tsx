import React from "react";

import { Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[65px] sm:h-auto mb-[21px] md:ml-[0] ml-[90px] md:mt-0 mt-[34px] object-cover w-[6%] md:w-full"
          src="images/img_logo.png"
          alt="logo"
        />
        <div className="flex flex-row gap-[50px] items-start justify-start md:ml-[0] ml-[821px] md:mt-0 my-12 w-auto">
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
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[62px] mr-[31px] md:mt-0 my-[34px] w-[15%] md:w-full">
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
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;

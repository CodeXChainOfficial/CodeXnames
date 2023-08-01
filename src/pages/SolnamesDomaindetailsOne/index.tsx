import React from "react";

import { Button, Img, List, Text } from "components";
import SolnamesDomainDetailsOneDomaininfo from "components/SolnamesDomainDetailsOneDomaininfo";
import SolnamesDomainDetailsToggle from "components/SolnamesDomainDetailsToggle";

const SolnamesDomaindetailsOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter items-center justify-start mx-auto pb-[132px] w-full">
        <header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full">
          <div className="flex sm:flex-1 flex-col items-center justify-start md:ml-[0] ml-[998px] md:mt-0 my-10 w-auto sm:w-full">
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
          <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[1255px] mr-[31px] md:mt-0 my-[34px] w-[15%] md:w-full">
            <div className="flex flex-col items-start justify-start sm:pr-5 pr-[25px] w-[225px]">
              <div className="border border-light_blue-600 border-solid flex flex-col items-center justify-start px-[18px] py-2.5 rounded-lg shadow-bs w-[225px]">
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
                      className="max-w-[16px] md:max-w-full text-base text-center text-light_blue-500"
                      size="txtInterThin16Lightblue500"
                    >
                      chevron-down
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-start mt-[18px] md:px-10 sm:px-5 px-[133px] w-full">
          <div className="flex flex-col items-center justify-center w-auto">
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtInterSemiBold20"
            >
              My Domain Details
            </Text>
          </div>
        </div>
        <div className="bg-gradient  border border-solid flex flex-col items-start justify-start light_blue_600_deep_purple_A400_28_01_border max-w-[1273px] mt-[45px] mx-auto p-12 md:px-5 rounded-[32px] w-full">
          <div className="flex flex-col gap-11 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-[54px] items-start justify-start w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-6 items-end justify-start w-auto md:w-full">
                <div className="flex flex-col h-[65px] items-center justify-start w-[65px]">
                  <Img
                    className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                    src="images/img_rectangle2059.png"
                    alt="rectangle2059"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start max-w-[686px] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-300 tracking-[-0.96px] w-auto"
                        size="txtInterRegular32"
                      >
                        Hardgy.CodeX
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-4 items-center justify-start rounded-[12px] w-full">
                    <Text
                      className="text-base text-gray-500 tracking-[-0.48px] w-auto"
                      size="txtInterRegular16Gray500"
                    >
                      MyAddress:
                    </Text>
                    <Text
                      className="text-base text-gray-500 tracking-[-0.48px] w-auto"
                      size="txtInterRegular16Gray500"
                    >
                      erd1u3f5d8hg3gmyhgj5c6z66s52zxxezk78jzhl03asuy68hmj3z76s3hrstc
                    </Text>
                    <div className="flex flex-col h-6 md:h-auto items-center justify-center w-6">
                      <Text
                        className="text-center text-gray-300 text-xl w-3.5"
                        size="txtInterThin20"
                      >
                        Copy
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <SolnamesDomainDetailsToggle className="bg-gray-900_02 flex sm:flex-col flex-row gap-1 items-start justify-start p-2 rounded-lg w-auto sm:w-full" />
            </div>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtInterBold20"
                >
                  My Active Domains
                </Text>
                <List
                  className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
                  orientation="horizontal"
                >
                  {new Array(3).fill({}).map((props, index) => (
                    <React.Fragment
                      key={`SolnamesDomainDetailsOneDomaininfo${index}`}
                    >
                      <SolnamesDomainDetailsOneDomaininfo
                        className="bg-gradient  border border-solid flex flex-col gap-[11px] items-center justify-end light_blue_600_deep_purple_A400_28_02_border2 p-[25px] sm:px-5 rounded-[16px] w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolnamesDomaindetailsOnePage;

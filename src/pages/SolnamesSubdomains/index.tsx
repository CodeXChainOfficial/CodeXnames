import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Header1 from "components/Header1";
import SolnamesSubdomainsToggle from "components/SolnamesSubdomainsToggle";

const SolnamesSubdomainsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter gap-11 items-center justify-start mx-auto pb-14 w-full">
        <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="bg-gradient  border border-solid flex flex-col items-start justify-start light_blue_A700_51_lime_500_28_border10 max-w-[1344px] mx-auto p-12 md:px-5 rounded-[32px] w-full">
          <div className="flex flex-col gap-11 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-[54px] items-start justify-start w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-6 items-end justify-start w-auto md:w-full">
                <Img
                  className="h-[65px] md:h-auto rounded-[50%] w-[65px]"
                  src="images/img_rectangle2059.png"
                  alt="rectangle2057_One"
                />
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
              <SolnamesSubdomainsToggle className="bg-gray-900_02 flex sm:flex-col flex-row gap-1 items-start justify-start p-2 rounded-lg w-auto sm:w-full" />
            </div>
            <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="bg-black-900 flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1248px] p-4 rounded-[24px] w-full">
                  <div className="flex flex-1 flex-col h-full items-center justify-start px-2 w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Button className="bg-gray-900_03 cursor-pointer font-semibold h-8 min-w-[123px] py-[7px] rounded-md text-blue_gray-100_03 text-center text-sm">
                        Filters
                      </Button>
                    </div>
                  </div>
                  <Input
                    name="custominput"
                    placeholder="xradu"
                    className="p-0 placeholder:text-gray-50 sm:px-5 text-base text-gray-50 text-left w-full"
                    wrapClassName="bg-black-900_06 md:flex-1 pl-6 pr-[35px] py-[13px] rounded-[12px] w-1/4 md:w-full"
                  ></Input>
                </div>
                <List
                  className="bg-black-900_04 flex flex-col gap-6 items-end max-w-[1248px] p-10 sm:px-5 rounded-[24px] w-full"
                  orientation="vertical"
                >
                  <div className="bg-black-900 flex flex-1 md:flex-col flex-row gap-4 items-center justify-start my-0 px-10 sm:px-5 py-4 rounded-[24px] w-full">
                    <div className="flex flex-col h-[69px] md:h-auto items-start justify-start w-auto">
                      <Text
                        className="bg-cover bg-no-repeat h-[66px] pl-[18px] sm:pr-5 pr-[30px] py-[29px] rounded-[3px] text-[5.45px] text-white-A700 w-auto"
                        size="txtInterBold545"
                        style={{
                          backgroundImage:
                            "url('images/img_frame163262_1.png')",
                        }}
                      >
                        Ahmad.codex
                      </Text>
                    </div>
                    <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-300 sm:text-xl tracking-[-0.72px] w-auto"
                        size="txtInterSemiBold24Gray300"
                      >
                        myproject.Ahmad
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-gray-600_01 sm:text-xl tracking-[-0.72px] w-auto"
                        size="txtInterSemiBold24Gray60001"
                      >
                        .codex
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col font-roobertpro items-center justify-end w-full">
                      <Text
                        className="text-base text-gray-500 tracking-[-0.48px] w-auto"
                        size="txtRoobertPROMedium16"
                      >
                        <span className="text-gray-500 font-inter text-left font-normal">
                          First created{" "}
                        </span>
                        <span className="text-gray-300 font-inter text-left font-normal">
                          50 days ago
                        </span>
                      </Text>
                    </div>
                    <div className="bg-gray-900_07 h-8 rounded-lg w-[5%]"></div>
                  </div>
                  <div className="bg-black-900 flex flex-1 md:flex-col flex-row gap-4 items-center justify-start my-0 px-10 sm:px-5 py-4 rounded-[24px] w-full">
                    <div className="flex flex-col h-[69px] md:h-auto items-start justify-start w-auto">
                      <Text
                        className="bg-cover bg-no-repeat h-[66px] pl-[18px] sm:pr-5 pr-[30px] py-[29px] rounded-[3px] text-[5.45px] text-white-A700 w-auto"
                        size="txtInterBold545"
                        style={{
                          backgroundImage:
                            "url('images/img_frame163262_1.png')",
                        }}
                      >
                        Ahmad.codex
                      </Text>
                    </div>
                    <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-300 sm:text-xl tracking-[-0.72px] w-auto"
                        size="txtInterSemiBold24Gray300"
                      >
                        myproject.Ahmad
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-gray-600_01 sm:text-xl tracking-[-0.72px] w-auto"
                        size="txtInterSemiBold24Gray60001"
                      >
                        .codex
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col font-roobertpro items-center justify-end w-full">
                      <Text
                        className="text-base text-gray-500 tracking-[-0.48px] w-auto"
                        size="txtRoobertPROMedium16"
                      >
                        <span className="text-gray-500 font-inter text-left font-normal">
                          First created{" "}
                        </span>
                        <span className="text-gray-300 font-inter text-left font-normal">
                          50 days ago
                        </span>
                      </Text>
                    </div>
                    <div className="bg-gray-900_07 h-8 rounded-lg w-[5%]"></div>
                  </div>
                </List>
              </div>
              <Button
                className="common-pointer bg-light_blue-A700 cursor-pointer font-bold py-[17px] rounded-[16px] text-[14.83px] text-center text-gray-900_03 w-[273px]"
                onClick={() => navigate("/solnamesaddsubdomains")}
              >
                Add Subdomain
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolnamesSubdomainsPage;
